import { motion } from 'framer-motion';

const PROJECTS = [
    {
        title: "Freshservice RAG Automation",
        category: "AI & Automation",
        stack: ["Python", "Flask", "ChromaDB", "Google Gemini"],
        description: "An intelligent automation layer for ITSM. Intercepts webhooks to perform semantic search on ticket history using Vector Embeddings (RAG), providing agents with instant, context-aware resolutions. Reduced MTTR significantly."
    },
    {
        title: "ESET to Bitdefender Migration",
        category: "Infrastructure Security",
        stack: ["PowerShell", "Intune", "Win32 Apps", "Registry Hacking"],
        description: "Orchestrated a 'Rip and Replace' migration of global antivirus endpoints. Developed a robust 'Zombie State' handling script in PowerShell to manage uninstallation flags and 32-bit process tracking, ensuring zero downtime."
    },
    {
        title: "Intune Master Configuration",
        category: "Enterprise Architecture",
        stack: ["Endpoint Manager", "JSON", "ADMX", "Conditional Access"],
        description: "Architected the Zero Trust security posture for 2025. Implemented Conditional Access policies, automated OOBE compliance flows, and 'Settings Catalog' standardization across UK/USA offices."
    }
];

export const ProjectList = () => {
    return (
        <div className="grid grid-cols-1 gap-16">
            {PROJECTS.map((project, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                >
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                        <h3 className="text-xl font-serif text-ink-900 group-hover:underline decoration-1 underline-offset-4 decoration-ink-400 cursor-default">
                            {project.title}
                        </h3>
                        <span className="text-xs font-mono text-ink-400 uppercase tracking-widest mt-1 md:mt-0">{project.category}</span>
                    </div>

                    <p className="text-ink-900/80 font-light leading-relaxed max-w-2xl mb-4">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <span key={tech} className="text-[10px] font-medium text-ink-400 border border-ink-400/20 px-2 py-1 rounded-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    );
};
