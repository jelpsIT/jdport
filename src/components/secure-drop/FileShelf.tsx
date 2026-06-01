import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FileShelfProps {
    username: string;
}

export const FileShelf = ({ username }: FileShelfProps) => {
    const [isDragging, setIsDragging] = useState(false);
    const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setIsDragging(true);
        } else if (e.type === 'dragleave') {
            setIsDragging(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            uploadFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            uploadFile(e.target.files[0]);
        }
    };

    const uploadFile = async (file: File) => {
        // Validation at component level
        if (!username.trim()) {
            setStatus('error');
            setErrorMsg('ID Required');
            return;
        }

        setStatus('uploading');
        const formData = new FormData();

        // IMPORTANT: Append username BEFORE file so Multer can read it first if needed
        formData.append('username', username);
        formData.append('file', file);

        try {
            await new Promise(r => setTimeout(r, 800)); // Smooth animation delay
            const res = await fetch('/api/upload', { method: 'POST', body: formData });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setTimeout(() => setStatus('idle'), 2500);
            } else {
                setStatus('error');
                setErrorMsg(data.error || 'Upload failed');
            }
        } catch (err) {
            setStatus('error');
            setErrorMsg('Network error');
        }
    };

    return (
        <div
            className="w-full max-w-2xl mx-auto my-12"
            onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}
        >
            <div className="mb-4 flex justify-between items-baseline">
                <h3 className="text-sm font-medium text-ink-900">File Shelf</h3>
                {status === 'error' && <span className="text-xs text-red-600 font-medium">{errorMsg}</span>}
            </div>

            <motion.div
                animate={{
                    borderColor: isDragging || status === 'uploading' ? '#171717' : '#e5e5e5',
                    backgroundColor: isDragging ? '#f5f5f5' : '#ffffff',
                }}
                className="w-full h-48 border border-dashed rounded-lg flex items-center justify-center cursor-pointer relative overflow-hidden transition-colors duration-300"
            >
                <input
                    type="file"
                    className="absolute inset-0 opacity-0 cursor-pointer z-20"
                    onChange={handleFileSelect}
                    disabled={status === 'uploading'}
                />

                <AnimatePresence mode="wait">
                    {status === 'idle' && (
                        <motion.div
                            key="idle"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="text-center pointer-events-none"
                        >
                            <p className="text-ink-900 font-medium text-sm">Drop files here</p>
                            <p className="text-ink-400 text-xs mt-1">or click to browse</p>
                        </motion.div>
                    )}

                    {status === 'uploading' && (
                        <motion.div
                            key="uploading"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="w-48 z-10"
                        >
                            <div className="text-xs text-ink-900 mb-2 text-center">Encrypting & Uploading...</div>
                            <div className="h-0.5 bg-ink-400/20 w-full rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-ink-900"
                                    initial={{ width: 0 }}
                                    animate={{ width: '100%' }}
                                    transition={{ duration: 1.5 }}
                                />
                            </div>
                        </motion.div>
                    )}

                    {status === 'success' && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="text-center z-10"
                        >
                            <div className="text-ink-900 font-medium text-sm">Securely Shelved.</div>
                            <div className="text-ink-400 text-xs mt-1 font-mono">{username}_file</div>
                        </motion.div>
                    )}

                    {status === 'error' && (
                        <motion.div
                            key="error"
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            className="text-center z-10"
                        >
                            <div className="text-red-600 font-medium text-sm">Upload Rejected</div>
                            <div className="text-red-400 text-xs mt-1">Check Identity</div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};
