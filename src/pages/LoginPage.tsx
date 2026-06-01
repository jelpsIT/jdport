import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const LoginPage = () => {
    const [code, setCode] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code })
            });
            const data = await res.json();

            if (data.success) {
                sessionStorage.setItem('void_auth', 'true');
                navigate('/admin');
            } else {
                setError('ACCESS DENIED');
                setTimeout(() => setError(''), 2000);
            }
        } catch (err) {
            setError('CONNECTION ERROR');
            setTimeout(() => setError(''), 2000);
        }
    };

    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-sm"
            >
                <div className="mb-8 text-center">
                    <h1 className="text-xl font-medium font-display text-ink-900 mb-2">RESTRICTED AREA</h1>
                    <p className="text-xs font-mono text-ink-400 uppercase tracking-widest">Workspace Access Required</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="group relative">
                        <label className="text-[10px] uppercase tracking-widest text-ink-400 font-medium mb-2 block">
                            Access Code
                        </label>
                        <input
                            type="password"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="••••"
                            className="w-full bg-transparent border-2 border-dotted border-ink-300 rounded-md px-4 py-3 text-center text-lg font-mono text-ink-900 placeholder:text-ink-200 outline-none focus:border-ink-900 focus:bg-ink-50 transition-all tracking-[0.5em]"
                            autoFocus
                        />
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute -bottom-8 left-0 right-0 text-center text-xs font-bold text-red-600 font-mono"
                            >
                                {error}
                            </motion.div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={!code}
                        className="w-full py-3 bg-ink-900 text-white text-xs font-mono uppercase tracking-widest hover:bg-ink-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Authenticate
                    </button>
                </form>
            </motion.div>
        </div>
    );
};
