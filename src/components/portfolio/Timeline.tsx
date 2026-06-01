import { motion } from 'framer-motion';

const EXPERIENCES = [
    {
        role: "IT Support & Projects Engineer",
        company: "Lead Forensics",
        period: "2020 - Present",
        description: "Spearheading automation initiatives and enterprise infrastructure modernization. Managing endpoint security for global offices and developing custom Python/PowerShell solutions."
    },
    {
        role: "BSc Computing",
        company: "University of Portsmouth",
        period: "2016 - 2020",
        description: "Specialized in System Architecture and Software Engineering."
    }
];

export const Timeline = () => {
    return (
        <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-8 border-l border-ink-400/20"
                >
                    <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-ink-400/20" />

                    <h3 className="text-lg font-medium text-ink-900 leading-none">{exp.role}</h3>
                    <div className="flex justify-between items-center mt-1 mb-3">
                        <span className="text-sm text-ink-400">{exp.company}</span>
                        <span className="text-xs font-mono text-ink-400 bg-ink-400/5 px-2 py-0.5 rounded-full">{exp.period}</span>
                    </div>
                    <p className="text-ink-900/80 text-sm font-light leading-relaxed max-w-lg">
                        {exp.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};
