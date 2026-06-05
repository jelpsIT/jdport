import { motion } from 'framer-motion';

const PROJECTS = [
    {
        title: "Freshservice RAG Automation",
        category: "AI & Intelligent Automation",
        stack: ["Python", "Flask", "ChromaDB", "Google Gemini"],
        description: "Built a production RAG system that performs semantic search across years of historical tickets. Agents now receive context-aware suggestions, significantly reducing mean time to resolution on recurring issues.",
        impact: "Reduced repetitive L1 workload and improved first-contact resolution quality."
    },
    {
        title: "Enterprise Passwordless Migration",
        category: "Identity & Security",
        stack: ["Intune", "Entra ID", "Windows Hello for Business", "Conditional Access"],
        description: "Led organisation-wide transition from passwords to phishing-resistant authentication. Delivered over 50% of an 8-week project in under 3 weeks through focused execution and rapid problem-solving.",
        impact: "Major improvement in security posture with strong user adoption."
    },
    {
        title: "Global Antivirus Migration (ESET)",
        category: "Endpoint Security",
        stack: ["PowerShell", "Intune Win32", "Registry Engineering"],
        description: "Orchestrated a zero-downtime rip-and-replace of the global antivirus solution. Developed custom handling for 'zombie state' detection and 32-bit process edge cases.",
        impact: "Clean migration with no user disruption across hundreds of endpoints."
    }
];

export const ProjectList = () => {
    return (
        <div className="grid grid-cols-1 gap-16">
            {PROJECTS.map((project, i) => (
                <motion.div key={i} className="group">
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                        <h3 className="text-2xl font-serif tracking-tight group-hover:text-[#D97706] transition-colors">
                            {project.title}
                        </h3>
                        <span className="text-xs font-mono text-[#888] mt-1 md:mt-0">{project.category}</span>
                    </div>

                    <p className="text-[#444] leading-relaxed mb-4 max-w-3xl">
                        {project.description}
                    </p>

                    {project.impact && (
                        <p className="text-sm text-[#666] italic mb-4">→ {project.impact}</p>
                    )}

                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <span key={tech} className="text-xs px-3 py-1 bg-[#f8f8f8] text-[#555] rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};