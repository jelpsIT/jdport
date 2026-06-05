import { motion } from 'framer-motion';
import { MISSION_LOGS } from '@/data/arsenal';
import { HireProtocol } from '@/components/void/HireProtocol';

export const IdentityPage = () => {
    const sortedLogs = [...MISSION_LOGS]
        .sort((a, b) => parseInt(b.year.split(' ')[0]) - parseInt(a.year.split(' ')[0]));

    return (
        <div className="max-w-3xl mx-auto px-6 py-20 text-[#171717]">
            
            {/* Header */}
            <div className="mb-16">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-[#f8f8f8] rounded-2xl flex items-center justify-center text-4xl font-medium">JD</div>
                    <div>
                        <h1 className="text-6xl font-serif tracking-tighter">Josh Dobson</h1>
                        <p className="text-2xl text-[#555] mt-1">Modern Workplace &amp; Automation Architect</p>
                    </div>
                </div>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-mono text-[#666] mb-8">
                    <span>8+ YEARS</span>
                    <span>•</span>
                    <span>UK • USA • ZAMBIA • REMOTE</span>
                </div>

                <div className="flex gap-4">
                    <a 
                        href="https://www.linkedin.com/in/josh-dobson-" 
                        target="_blank"
                        className="px-6 py-3 border border-[#171717] hover:bg-[#171717] hover:text-white transition-all text-sm font-medium"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="mailto:dobsonj565@gmail.com" 
                        className="px-6 py-3 bg-[#171717] text-white hover:bg-black transition-all text-sm font-medium"
                    >
                        Contact
                    </a>
                    <HireProtocol mode="inline" />
                </div>
            </div>

            {/* 2026 Initiatives - Kept cards but improved */}
            <section className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xs font-bold tracking-[3px] uppercase text-[#D97706]">2026 Focus Areas</h2>
                    <div className="flex-1 h-px bg-[#eee]" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        "Device Blocking via Conditional Access",
                        "Entra ID P2 & Identity Protection",
                        "Mobile Application Management (MAM)",
                        "Passwordless Authentication (WHfB + FIDO2)",
                        "Zscaler Zero Trust Deployment",
                        "Automated Onboarding & Offboarding",
                        "Enterprise Intune Standardisation",
                        "Intelligent Automation & RAG Systems"
                    ].map((item, i) => (
                        <div 
                            key={i} 
                            className="p-6 border border-[#eee] hover:border-[#ccc] transition-all bg-white group"
                        >
                            <div className="font-medium text-lg group-hover:text-[#D97706] transition-colors">
                                {item}
                            </div>
                            <div className="text-xs text-[#888] mt-2 font-mono">2026 • Active</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Service History - Cleaned up timeline style */}
            <section className="mb-20">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xs font-bold tracking-[3px] uppercase text-[#888]">Selected Work</h2>
                    <div className="flex-1 h-px bg-[#eee]" />
                </div>

                <div className="space-y-12">
                    {sortedLogs.slice(0, 8).map((log, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="border-l-2 border-[#eee] pl-8 relative"
                        >
                            <div className="absolute -left-[7px] top-2 w-3 h-3 bg-white border-2 border-[#171717] rounded-full" />
                            
                            <div className="flex items-baseline gap-4 mb-3">
                                <span className="font-mono text-sm text-[#888] w-24 shrink-0">{log.year}</span>
                                <h3 className="text-2xl font-medium tracking-tight">{log.title}</h3>
                            </div>
                            
                            <p className="text-[#555] leading-relaxed mb-4 max-w-prose">{log.summary}</p>
                            
                            <div className="flex flex-wrap gap-2">
                                {log.tags.map((tag, i) => (
                                    <span key={i} className="text-xs px-3 py-1 bg-[#f8f8f8] text-[#666] rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Professional Profile */}
            <section className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xs font-bold tracking-[3px] uppercase text-[#888]">Profile</h2>
                    <div className="flex-1 h-px bg-[#eee]" />
                </div>

                <div className="prose prose-lg text-[#444] max-w-prose">
                    <p>
                        I design and build systems that reduce friction, strengthen security, and scale intelligently. 
                        My work focuses on <strong>Modern Workplace architecture</strong>, intelligent automation, and pragmatic Zero Trust implementations.
                    </p>
                    <p>
                        I combine deep expertise in Microsoft Intune, Entra ID, Conditional Access, and Windows Hello for Business 
                        with strong automation capabilities. I thrive when given ownership of complex initiatives that deliver clear business outcomes.
                    </p>
                </div>
            </section>

            {/* Career Trajectory - Cleaner version */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-xs font-bold tracking-[3px] uppercase text-[#888]">Career</h2>
                    <div className="flex-1 h-px bg-[#eee]" />
                </div>

                <div className="border border-[#eee] divide-y">
                    {[
                        { role: "IT Support & Projects Engineer", company: "Lead Forensics", period: "Jul 2023 — Present" },
                        { role: "Senior IT Systems Administrator", company: "Lead Forensics", period: "Sep 2021 — Jul 2023" },
                        { role: "IT Administrator", company: "Lead Forensics", period: "Feb 2020 — Sep 2021" },
                    ].map((job, i) => (
                        <div key={i} className="p-8 flex justify-between items-start hover:bg-[#fafafa] transition-colors group">
                            <div>
                                <h3 className="font-medium text-xl group-hover:text-[#D97706] transition-colors">
                                    {job.role}
                                </h3>
                                <p className="text-[#666] mt-1.5">{job.company}</p>
                            </div>
                            <div className="text-right text-sm font-mono text-[#888]">
                                {job.period}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};