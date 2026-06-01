import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface JournalProps {
    username: string;
}

export const Journal = ({ username }: JournalProps) => {
    const [content, setContent] = useState('');
    const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleSave = async () => {
        if (!content.trim()) return;

        // Validation: Username required
        if (!username.trim()) {
            setStatus('error');
            setErrorMsg('Identity required (Top Right).');
            return;
        }

        setStatus('saving');
        setErrorMsg('');

        try {
            const response = await fetch('/api/void', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ content, username }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('saved');
                setTimeout(() => {
                    setContent(''); // Clear the journal
                    // Username is NOT cleared because it is a prop from parent
                    setStatus('idle');
                }, 1500);
            } else {
                setStatus('error');
                setErrorMsg(data.error || 'Transmission failed.');
            }
        } catch (e) {
            setStatus('error');
            setErrorMsg('Connection severed.');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && e.ctrlKey) {
            handleSave();
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto mt-8 mb-20 border border-wild-granite/30 bg-[repeating-linear-gradient(transparent,transparent_24px,#C9B89A10_24px,#C9B89A10_25px)] p-8 rounded-sm shadow-[inset_0_0_60px_rgba(201,184,154,0.15)]">
            <div className="mb-4 flex justify-between items-end">
                <div>
                    <h2 className="text-xl font-semibold text-ink-900 tracking-tight">Journal</h2>
                    <p className="text-xs text-ink-400 mt-1">
                        {username ? `Logged as: ${username}` : 'Waiting for identity...'}
                    </p>
                </div>

                <div className="text-sm text-ink-400 w-32 text-right">
                    <AnimatePresence mode="wait">
                        {status === 'idle' && <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Cmd+Enter to save</motion.span>}
                        {status === 'saving' && <motion.span key="saving" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Saving...</motion.span>}
                        {status === 'saved' && <motion.span key="saved" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-ink-900">Captured</motion.span>}
                        {status === 'error' && <motion.span key="error" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-600 font-medium text-xs">{errorMsg}</motion.span>}
                    </AnimatePresence>
                </div>
            </div>

            <div className="group relative p-4 border-2 border-dotted border-ink-200 rounded-lg hover:border-ink-300 focus-within:border-ink-900 focus-within:bg-ink-50/30 transition-all duration-300">
                <textarea
                    ref={textareaRef}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={status === 'saving'}
                    className="w-full min-h-[40vh] bg-transparent resize-none outline-none text-2xl md:text-3xl font-serif text-ink-900 placeholder:text-ink-300 leading-relaxed p-0 disabled:opacity-50"
                    placeholder="What's on your mind?"
                />
            </div>

            <div className="flex justify-between mt-8 items-center">
                <span className="text-[10px] text-ink-400 uppercase tracking-widest">
                    {content.length} chars
                </span>
                <button
                    onClick={handleSave}
                    disabled={status === 'saving' || !content.trim()}
                    className="text-sm font-medium text-ink-900 hover:opacity-70 disabled:opacity-30 transition-opacity border border-ink-900/10 px-4 py-2 rounded-sm hover:bg-ink-900/5"
                >
                    Save Entry &rarr;
                </button>
            </div>
        </div>
    );
};
