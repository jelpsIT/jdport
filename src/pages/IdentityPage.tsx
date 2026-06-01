import { motion } from 'framer-motion';
import { MISSION_LOGS } from '@/data/arsenal';
import { HireProtocol } from '@/components/void/HireProtocol';

export const IdentityPage = () => {
    const sortedLogs = [...MISSION_LOGS].sort((a, b) => parseInt(b.year.split(' ')[0]) - parseInt(a.year.split(' ')[0]));

    return (
        <div className="max-w-3xl mx-auto px-6 py-20 text-[#171717]">
            
            {/* Header */}
            <div className="mb-16">
                <div className="flex items-center gap-5 mb-8">
                    <div className="w-24 h-24 bg-[#f8f8f8] rounded-full flex items-center justify-center text-5xl">👋</div>
                    <div>
                        <h1 className="text-7xl font-serif tracking-tighter">Josh Dobson</h1>
                        <p className="text-3xl text-[#555]">Senior Systems Engineer</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm font-mono text-[#666]">
                    <span>ROLE: SYSTEMS ARCHITECT</span>
                    <span>•</span>
                    <span>LOC: GLOBAL / REMOTE</span>
                </div>

                <div className="flex gap-4 mt-10">
                    <motion.a href="https://www.linkedin.com/in/josh-dobson-" target="_blank" className="px-7 py-3.5 border border-[#171717] hover:bg-[#171717] hover:text-white transition-all text-sm">LinkedIn</motion.a>
                    <motion.a href="mailto:dobsonj565@gmail.com" className="px-7 py-3.5 bg-[#171717] text-white hover:bg-black transition-all text-sm">Contact</motion.a>
                    <HireProtocol mode="inline" />
                </div>
            </div>

            {/* 2026 Initiatives */}
            <section className="mb-20">
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-xs font-bold tracking-[3px] uppercase text-[#D97706]">2026 Initiatives</h2>
                    <div className="flex-1 h-px bg-[#eee]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        "Device Blocking via Conditional Access",
                        "Entra ID P2 Implementation",
                        "Mobile Application Management (MAM)",
                        "Mimecast Digests & Security",
                        "Passwordless Authentication Diagrams",
                        "Windows Hello for Business Adoption",
                        "Zscaler Deployment",
                        "Automated Onboarding Workflows",
                        "2026 Scripts & Automation"
                    ].map((project, i) => (
                        <div key={i} className="p-6 border border-[#eee] hover:border-[#ccc] transition-all">
                            <div className="font-medium text-lg">{project}</div>
                            <div className="text-xs text-[#888] mt-2">2026 • Active</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Service History */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-10">
                    <h2 className="text-xs font-bold tracking-[3px] uppercase text-[#888]">Service History</h2>
                    <div className="flex-1 h-px bg-[#eee]" />
                </div>

                <div className="space-y-16">
                    {sortedLogs.slice(0, 10).map((log, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-[#eee] pl-9 relative"
                        >
                            <div className="absolute -left-[7px] top-3 w-3 h-3 bg-white border-2 border-[#171717] rounded-full" />
                            
                            <div className="flex items-baseline gap-4 mb-4">
                                <span className="font-mono text-sm text-[#888] w-28">{log.year}</span>
                                <h3 className="text-3xl font-medium tracking-tight">{log.title}</h3>
                            </div>
                            
                            <p className="text-[#555] leading-relaxed max-w-prose mb-5">{log.summary}</p>
                            
                            <div className="flex flex-wrap gap-2">
                                {log.tags.map((tag, i) => (
                                    <span key={i} className="text-xs px-3 py-1 bg-[#f8f8f8] text-[#666] rounded-full">{tag}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Professional Profile + Career Trajectory */}
            <section className="mb-24">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xs font-bold tracking-[3px] uppercase text-[#888]">Professional Profile</h2>
                    <div className="flex-1 h-px bg-[#eee]" />
                </div>
                
                <div className="prose prose-xl text-[#444] max-w-prose">
                    <p>Senior Systems Engineer with <strong>7+ years</strong> of experience building resilient infrastructure and intelligent automation systems. I specialize in bridging legacy systems with modern cloud architecture, Zero Trust security, and AI-driven support tools.</p>
                </div>
            </section>

            <section>
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xs font-bold tracking-[3px] uppercase text-[#888]">Career Trajectory</h2>
                    <div className="flex-1 h-px bg-[#eee]" />
                </div>

                <div className="border border-[#eee] divide-y">
                    {[
                        { role: "IT Support & Projects Engineer", company: "Lead Forensics", period: "Jul 2023 — Present", duration: "2 yrs 7 mos" },
                        { role: "Senior IT Systems Administrator", company: "Lead Forensics", period: "Sep 2021 — Jul 2023", duration: "1 yr 11 mos" },
                        { role: "IT Administrator", company: "Lead Forensics", period: "Feb 2020 — Sep 2021", duration: "1 yr 8 mos" },
                        { role: "Lead Generation Specialist", company: "Lead Forensics", period: "Mar 2019 — Feb 2020", duration: "1 yr" },
                    ].map((job, i) => (
                        <div key={i} className="p-9 flex justify-between items-start hover:bg-[#fafafa] transition-colors group">
                            <div>
                                <h3 className="font-medium text-xl group-hover:text-[#D97706] transition-colors">{job.role}</h3>
                                <p className="text-[#666] mt-1.5">{job.company}</p>
                            </div>
                            <div className="text-right text-sm">
                                <div className="font-mono text-[#888]">{job.period}</div>
                                <div className="text-[#999] text-xs mt-1">{job.duration}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};