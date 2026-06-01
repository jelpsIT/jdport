import { motion } from 'framer-motion';
import { Timeline } from '@/components/portfolio/Timeline';
import { ProjectList } from '@/components/portfolio/ProjectList';

export const Home = () => {
    return (
        <div className="min-h-screen py-20 bg-white text-[#171717]">
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-32 max-w-4xl mx-auto px-6"
            >
                <div className="flex justify-between items-end mb-12">
                    <h2 className="text-xs font-bold tracking-widest uppercase text-[#666]">Recent Communications</h2>
                    <span className="text-[10px] font-mono text-[#888]">Last Sync: 2026-01-19</span>
                </div>
                <ProjectList />
            </motion.section>

            <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-16 mb-24">
                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="text-xs font-bold tracking-widest uppercase text-[#666] mb-12">Experience</h2>
                    <Timeline />
                </motion.section>

                <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                    <h2 className="text-xs font-bold tracking-widest uppercase text-[#666] mb-12">Capabilities</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-serif text-lg mb-4">Engineering</h3>
                            <div className="flex flex-wrap gap-2 text-sm text-[#555]">Python / TypeScript / PowerShell / Flask / React</div>
                        </div>
                        <div>
                            <h3 className="font-serif text-lg mb-4">Infrastructure</h3>
                            <div className="flex flex-wrap gap-2 text-sm text-[#555]">Microsoft Intune / Entra ID / Endpoint Security / Zero Trust</div>
                        </div>
                        <div>
                            <h3 className="font-serif text-lg mb-4">Automation</h3>
                            <div className="flex flex-wrap gap-2 text-sm text-[#555]">Freshservice / RAG Pipelines / Webhooks / ChromaDB</div>
                        </div>
                    </div>
                </motion.section>
            </div>

            <footer className="border-t border-[#ddd] pt-8 flex justify-between items-center text-xs text-[#888] max-w-4xl mx-auto px-6">
                <span>© 2026 Josh Dobson.</span>
                <span>Built with React &amp; Minimalism.</span>
            </footer>
        </div>
    );
};