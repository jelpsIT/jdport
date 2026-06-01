import { useState } from 'react';
import { Journal } from '@/components/void/Journal';
import { FileShelf } from '@/components/secure-drop/FileShelf';

export const VoidPage = () => {
    const [username, setUsername] = useState('');

    return (
        <div className="max-w-4xl mx-auto px-6 py-16">
            <div className="mb-16">
                <h1 className="text-5xl font-serif tracking-tight mb-4">Workspace</h1>
                <p className="text-[#666] max-w-md">Secure tools for communication and file exchange.</p>
            </div>

            {/* Identity Input */}
            <div className="mb-12 flex items-center gap-4">
                <label className="text-sm font-mono text-[#888] w-20">Identity</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="ENTER YOUR NAME..."
                    className="flex-1 bg-transparent border-b border-[#ccc] py-3 text-lg font-mono placeholder:text-[#aaa] focus:outline-none focus:border-[#171717] transition-all"
                />
            </div>

            {/* Journal */}
            <section className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xs font-bold tracking-[3px] uppercase text-[#888]">Intercepted Comms</h2>
                    <div className="flex-1 h-px bg-[#eee]" />
                </div>
                <Journal username={username} />
            </section>

            {/* File Drop */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xs font-bold tracking-[3px] uppercase text-[#888]">Secure File Drop</h2>
                    <div className="flex-1 h-px bg-[#eee]" />
                </div>
                <FileShelf username={username} />
            </section>
        </div>
    );
};