import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface VoidEntry {
    _id: string;
    filename: string;
    content: string;
    author?: string;
    date: string;
}

interface UploadLog {
    _id: string;
    filename: string;
    size: number;
    sender: string;
    discordStatus: string;
    date: string;
}

export const AdminPage = () => {
    const [entries, setEntries] = useState<VoidEntry[]>([]);
    const [uploads, setUploads] = useState<UploadLog[]>([]);
    const [activeTab, setActiveTab] = useState<'journal' | 'files'>('journal');

    useEffect(() => {
        fetch('/api/void').then(res => res.json()).then(setEntries);
        fetch('/api/uploads').then(res => res.json()).then(setUploads);
    }, []);

    const parseEntry = (content: string) => {
        // Simple extraction of frontmatter/body
        const authorMatch = content.match(/author: (.*)/);
        const bodyMatch = content.split('# Journal Entry')[1];
        return {
            author: authorMatch ? authorMatch[1] : 'Unknown',
            body: bodyMatch ? bodyMatch.replace(/---[\s\S]*$/, '').trim() : 'No content'
        };
    };

    return (
        <div className="w-full max-w-4xl mx-auto pb-40">
            <header className="mb-16 border-b border-ink-100 pb-8 flex justify-between items-end">
                <div>
                    <h1 className="text-3xl font-serif text-ink-900 mb-2">SECURE ARCHIVE (HYBRID CLOUD)</h1>
                    <p className="text-xs font-mono text-ink-400 uppercase tracking-widest">
                        Mongo Atlas // Discord Relay // Verified
                    </p>
                </div>
                <button
                    onClick={() => {
                        sessionStorage.removeItem('void_auth');
                        window.location.reload();
                    }}
                    className="text-[10px] font-mono text-red-500 hover:text-red-700 uppercase tracking-widest"
                >
                    Terminate Session
                </button>
            </header>

            <div className="flex gap-8 mb-12 border-b border-ink-100/50">
                <button
                    onClick={() => setActiveTab('journal')}
                    className={`pb-4 text-xs font-mono uppercase tracking-widest transition-colors ${activeTab === 'journal' ? 'text-ink-900 border-b-2 border-ink-900' : 'text-ink-400 hover:text-ink-600'}`}
                >
                    Intercepted Comms ({entries.length})
                </button>
                <button
                    onClick={() => setActiveTab('files')}
                    className={`pb-4 text-xs font-mono uppercase tracking-widest transition-colors ${activeTab === 'files' ? 'text-ink-900 border-b-2 border-ink-900' : 'text-ink-400 hover:text-ink-600'}`}
                >
                    Artifact Logs ({uploads.length})
                </button>
            </div>

            <div className="space-y-4">
                {activeTab === 'journal' ? (
                    entries.map((entry) => {
                        const parsed = parseEntry(entry.content);
                        return (
                            <motion.div
                                key={entry._id || entry.filename}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-6 border border-ink-100 bg-white hover:border-ink-300 transition-colors group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="font-mono text-xs text-ink-600 uppercase">{parsed.author || entry.author}</span>
                                    </div>
                                    <span className="font-mono text-[10px] text-ink-300">
                                        {new Date(entry.date).toLocaleDateString()} // {entry.filename}
                                    </span>
                                </div>
                                <p className="font-serif text-ink-800 leading-relaxed whitespace-pre-wrap">
                                    {parsed.body}
                                </p>
                            </motion.div>
                        );
                    })
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {uploads.map((log) => (
                            <motion.div
                                key={log._id || log.filename}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-4 border border-ink-100 bg-ink-50/50 block font-mono text-xs"
                            >
                                <div className="flex justify-between mb-2">
                                    <span className="font-bold text-ink-900 truncate max-w-[150px]" title={log.filename}>{log.filename}</span>
                                    <span className="text-green-600">{log.discordStatus}</span>
                                </div>
                                <div className="flex justify-between text-ink-400">
                                    <span>{(log.size / 1024).toFixed(1)} KB</span>
                                    <span>{new Date(log.date).toLocaleDateString()}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
