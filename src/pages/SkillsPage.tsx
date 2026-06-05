import { motion } from 'framer-motion';
import { MISSION_LOGS, SKILL_CLUSTERS } from '@/data/arsenal';

export const SkillsPage = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-20">
            <header className="mb-16">
                <h1 className="text-6xl font-display font-medium tracking-tighter">Technical Portfolio.</h1>
                <p className="mt-4 max-w-md text-[#555]">Deep expertise in Modern Workplace architecture, intelligent automation, and pragmatic security engineering.</p>
            </header>

            {/* Skills */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xs font-bold tracking-[3px] uppercase text-[#888]">Technical Proficiency</h2>
                    <div className="flex-1 h-px bg-[#eee]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SKILL_CLUSTERS.map((cluster, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group p-9 border border-[#eee] hover:border-[#ccc] transition-all bg-white"
                        >
                            <h3 className="font-serif text-3xl mb-8 group-hover:text-[#D97706] transition-colors">{cluster.category}</h3>
                            
                            <div className="flex flex-wrap gap-2">
                                {cluster.skills.map((skill, idx) => (
                                    <span key={idx} className="px-4 py-1.5 text-sm border border-[#ddd] rounded-full hover:bg-[#171717] hover:text-white hover:border-[#171717] transition-all cursor-default">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Professional Experience */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xs font-bold tracking-[3px] uppercase text-[#888]">Professional Experience</h2>
                    <div className="flex-1 h-px bg-[#eee]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {MISSION_LOGS.map((mission, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            className="p-9 border border-[#eee] hover:border-[#ccc] transition-all bg-white group"
                        >
                            <div className="flex justify-between items-start mb-5">
                                <span className="text-xs font-mono text-[#888]">{mission.id}</span>
                                <span className={`text-xs px-3 py-1 rounded-full border ${mission.status === 'Active' ? 'border-[#D97706] text-[#D97706]' : 'border-[#ccc] text-[#888]'}`}>
                                    {mission.status}
                                </span>
                            </div>
                            
                            <h3 className="text-2xl font-serif mb-3 group-hover:text-[#D97706] transition-colors">{mission.title}</h3>
                            <p className="text-sm text-[#666] mb-5">{mission.location} • {mission.year}</p>
                            
                            <p className="text-[#555] leading-relaxed mb-6">{mission.summary}</p>
                            
                            <div className="flex flex-wrap gap-2">
                                {mission.tags.map((tag, idx) => (
                                    <span key={idx} className="text-xs px-3 py-1 bg-[#f8f8f8] text-[#666] rounded-full">#{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};