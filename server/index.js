import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import multer from 'multer';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import axios from 'axios';
import FormData from 'form-data';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// --- Persistence Configuration ---

// 1. MongoDB Connection (For Journal & Logs)
const MONGO_URI = process.env.MONGO_URI;
if (MONGO_URI) {
    console.log(`> [DB] Attempting connection to: ${MONGO_URI.replace(/:([^:@]{1,})@/, ':****@')}`);
    mongoose.connect(MONGO_URI)
        .then(() => console.log('> [DB] Connected to Void Cluster (MongoDB)'))
        .catch(err => {
            console.error('> [DB] CRITICAL: Connection Failed');
            console.error(err);
        });
} else {
    console.warn('> [DB] WARNING: MONGO_URI not set. Persistence is OFFLINE.');
}

// 2. Database Schemas
const journalSchema = new mongoose.Schema({
    filename: String,
    content: String,
    author: String,
    date: { type: Date, default: Date.now }
});
const JournalEntry = mongoose.model('JournalEntry', journalSchema);

// Log of files sent to Discord
const uploadLogSchema = new mongoose.Schema({
    filename: String,
    size: Number,
    sender: String,
    discordStatus: String,
    date: { type: Date, default: Date.now }
});
const UploadLog = mongoose.model('UploadLog', uploadLogSchema);

// 3. Multer (Memory Storage for Discord Relay)
// We do NOT save to disk anymore.
const upload = multer({ storage: multer.memoryStorage() });

// Serve Static Files (Production Build)
const DIST_DIR = path.join(__dirname, '../dist');
if (fs.existsSync(DIST_DIR)) {
    app.use(express.static(DIST_DIR));
}

// --- Security & Utility Functions ---

const sanitizeInput = (str) => {
    return str.replace(/[^a-zA-Z0-9 .,?!-]/g, '').trim();
};

// --- API Routes ---

// Health Check
app.get('/api/status', (req, res) => {
    res.json({
        status: 'SECURE_LINK_ESTABLISHED',
        timestamp: new Date().toISOString(),
        dbStatus: mongoose.connection.readyState === 1 ? 'ONLINE' : 'OFFLINE'
    });
});

// Secure Verification Endpoint
app.post('/api/verify', (req, res) => {
    const { code } = req.body;
    // Default fallback if env var not set is 'void'
    const validCode = process.env.ACCESS_CODE || 'void';

    if (code === validCode) {
        res.json({ success: true, token: 'session_valid_v1' });
    } else {
        res.status(401).json({ success: false, error: 'INVALID_CREDENTIALS' });
    }
});

// Feature A: Public Journal (Write to MongoDB)
app.post('/api/void', async (req, res) => {
    try {
        // Explicit DB Connection Check
        if (mongoose.connection.readyState !== 1) {
            console.error('[VOID] Database not connected');
            return res.status(503).json({ error: 'System Offline: Database connection lost.' });
        }

        const { username, content } = req.body;
        const safeUser = sanitizeInput(username).substring(0, 20) || 'Anonymous';
        const safeContent = sanitizeInput(content).substring(0, 5000);

        const timestamp = new Date().toISOString();
        const filename = `${new Date().toISOString().split('T')[0]}_${Math.random().toString(36).substr(2, 5)}.md`;

        // Construct the "File Content" for legacy compatibility
        const fileContent = `---
author: ${safeUser}
timestamp: ${timestamp}
---

# Journal Entry
${safeContent}
`;

        await JournalEntry.create({
            filename,
            content: fileContent,
            author: safeUser
        });

        console.log(`[VOID] Entry saved to DB: ${filename}`);
        res.json({ success: true, filename });

    } catch (error) {
        console.error('[VOID] Error saving entry:', error);
        res.status(500).json({ error: 'Internal System Error: Write Failed' });
    }
});

// Feature B: Secure Drop (Discord Webhook Relay)
app.post('/api/upload', upload.single('file'), async (req, res) => {
    try {
        if (!req.file) return res.status(400).json({ error: 'No file detected' });

        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
        if (!webhookUrl) {
            console.error('[UPLOAD] DISCORD_WEBHOOK_URL not set');
            return res.status(500).json({ error: 'Comms Uplink Offline (Webhook Missing)' });
        }

        const sender = sanitizeInput(req.body.username || 'Anonymous').substring(0, 20);

        console.log(`[UPLOAD] Beaming ${req.file.originalname} from ${sender} to Discord...`);

        // Create form data stream
        const form = new FormData();
        form.append('content', `**[SECURE DROP]** Incoming artifact from **${sender}**.\nFile: \`${req.file.originalname}\`\nSize: \`${(req.file.size / 1024).toFixed(2)} KB\``);
        form.append('file', req.file.buffer, req.file.originalname);

        // Send to Discord
        await axios.post(webhookUrl, form, {
            headers: form.getHeaders()
        });

        // Log to MongoDB for Admin visibility (Non-Blocking)
        // If this fails, we STILL return success because the file WAS sent.
        if (mongoose.connection.readyState === 1) {
            try {
                await UploadLog.create({
                    filename: req.file.originalname,
                    size: req.file.size,
                    sender: 'Encrypted Source',
                    discordStatus: 'Delivered'
                });
            } catch (dbErr) {
                console.error('[UPLOAD] Failed to log to DB (Non-fatal):', dbErr);
            }
        } else {
            console.warn('[UPLOAD] DB Offline. Skipping admin log.');
        }

        res.json({ success: true, filename: req.file.originalname, storage: 'offsite_relay' });

    } catch (error) {
        console.error('[UPLOAD] Error beaming file:', error.message);
        res.status(500).json({ error: 'Upload uplink failed' });
    }
});

// Feature C: Admin Read (Read from MongoDB)
app.get('/api/void', async (req, res) => {
    try {
        if (mongoose.connection.readyState !== 1) return res.json([]);
        const entries = await JournalEntry.find().sort({ date: -1 });
        res.json(entries);
    } catch (e) {
        res.status(500).json({ error: 'Failed to retrieve logs' });
    }
});

app.get('/api/uploads', async (req, res) => {
    try {
        if (mongoose.connection.readyState !== 1) return res.json([]);
        // Return logs of what was sent to Discord
        const logs = await UploadLog.find().sort({ date: -1 });
        res.json(logs);
    } catch (e) {
        res.status(500).json({ error: 'Failed to retrieve artifacts' });
    }
});

// --- SPA Fallback (Must be last) ---
app.get(/.*/, (req, res) => {
    if (fs.existsSync(path.join(DIST_DIR, 'index.html'))) {
        res.sendFile(path.join(DIST_DIR, 'index.html'));
    } else {
        res.status(404).send('VoidSec System Offline (Build Not Found)');
    }
});

app.listen(PORT, () => {
    console.log(`\n> [VOIDSEC] Hybrid Server running on port ${PORT}`);
    console.log(`> [SYSTEM]  Storage Mode: Hybrid (Mongo + Discord)`);
});
