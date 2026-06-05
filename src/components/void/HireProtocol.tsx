import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronRight, X, CreditCard, Cpu } from 'lucide-react';

export const HireProtocol = ({ mode = 'standalone' }: { mode?: 'standalone' | 'inline' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<'brief' | 'payment'>('brief');
    const [brief, setBrief] = useState('');
    const [analysis, setAnalysis] = useState({ type: 'General', estimate: 'TBD' });

    useEffect(() => {
        const text = brief.toLowerCase();
        if (text.match(/security|audit|pentest|secure|encryption|hack/)) {
            setAnalysis({ type: 'Security Assurance', estimate: '£800 - £2,500/day' });
        } else if (text.match(/web|app|react|node|design|ui|ux|frontend|full stack/)) {
            setAnalysis({ type: 'Full Stack Engineering', estimate: '£600 - £1,200/day' });
        } else if (text.match(/cloud|aws|azure|deploy|ci\/cd|pipeline|infra/)) {
            setAnalysis({ type: 'Infrastructure & DevOps', estimate: '£700 - £1,500/day' });
        } else {
            setAnalysis({ type: 'Standard Project', estimate: 'Variable' });
        }
    }, [brief]);

    const handleInitialClick = () => {
        setIsOpen(true);
    };

    const handlePayment = () => {
        window.open('https://buy.stripe.com/9B63cvcLSdeYbFs4nm0RG00', '_blank');
    };

    // Improved inline button - much more visible
    const buttonContent = (
        <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.985 }}
            onClick={handleInitialClick}
            className={`group relative flex items-center gap-2 rounded-lg border border-[#171717] px-5 py-2.5 text-sm font-medium transition-all
                ${mode === 'inline' 
                    ? 'bg-[#171717] text-white hover:bg-black' 
                    : 'bg-white text-[#171717] hover:bg-[#171717] hover:text-white'
                }`}
        >
            <Briefcase className="w-4 h-4" />
            <span>Request Services</span>
        </motion.button>
    );

    return (
        <>
            {mode === 'standalone' ? (
                <div className="w-full max-w-2xl mx-auto mt-24 pb-24 flex justify-center">
                    {buttonContent}
                </div>
            ) : (
                buttonContent
            )}

            {/* Modal remains the same */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.96, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.96, opacity: 0, y: 10 }}
                            className="w-full max-w-lg bg-white border border-[#eee] shadow-2xl relative overflow-hidden"
                        >
                            {/* Header */}
                            <div className="h-11 border-b border-[#eee] flex items-center justify-between px-6 bg-[#fafafa]">
                                <div className="flex items-center gap-2 text-[10px] font-mono text-[#666] uppercase tracking-widest">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    COLLABORATION PROTOCOL
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-[#666] hover:text-[#171717] transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="p-8">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-serif text-[#171717] mb-2">Let's Work Together</h2>
                                    <p className="text-sm text-[#555] max-w-sm leading-relaxed">
                                        I'm currently open to select projects. Tell me about what you're looking to build.
                                    </p>
                                </div>

                                {step === 'brief' ? (
                                    <div className="space-y-6">
                                        <div>
                                            <div className="flex justify-between items-baseline mb-2">
                                                <label className="text-[10px] uppercase tracking-widest text-[#888] font-medium">
                                                    Project Brief
                                                </label>
                                                <span className="text-[10px] text-[#aaa] font-mono">
                                                    {brief.length}/500
                                                </span>
                                            </div>
                                            <textarea
                                                value={brief}
                                                onChange={(e) => setBrief(e.target.value)}
                                                placeholder="Describe the project, goals, and timeline..."
                                                className="w-full h-36 bg-[#fafafa] border border-[#ddd] text-[#171717] font-mono text-sm p-4 focus:border-[#171717] focus:outline-none transition-colors resize-y min-h-[120px]"
                                            />
                                        </div>

                                        <button
                                            onClick={() => setStep('payment')}
                                            disabled={!brief.trim()}
                                            className="w-full py-3.5 bg-[#171717] hover:bg-black disabled:opacity-40 disabled:cursor-not-allowed text-white font-mono text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 rounded-lg"
                                        >
                                            Continue to Scope Estimate
                                            <ChevronRight className="w-3.5 h-3.5" />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        <div className="p-5 bg-[#fafafa] border border-[#eee]">
                                            <div className="flex items-center gap-2 text-xs font-mono text-[#888] uppercase tracking-wider mb-3">
                                                <Cpu className="w-3.5 h-3.5" />
                                                PROJECT CATEGORY
                                            </div>
                                            <div className="flex justify-between items-end border-b border-[#ddd] pb-3">
                                                <span className="font-serif text-xl text-[#171717]">{analysis.type}</span>
                                                <span className="font-mono text-sm text-[#666]">{analysis.estimate}</span>
                                            </div>
                                            <p className="text-[11px] text-[#777] mt-3 leading-relaxed">
                                                This retainer secures a dedicated scoping session. Final pricing is confirmed after we define the full scope together.
                                            </p>
                                        </div>

                                        <div className="flex justify-between items-center px-1">
                                            <span className="font-mono text-xs text-[#888] uppercase">Consultation Retainer</span>
                                            <span className="font-serif text-2xl text-[#171717]">£100</span>
                                        </div>

                                        <div className="flex gap-3 pt-2">
                                            <button
                                                onClick={() => setStep('brief')}
                                                className="flex-1 py-3 text-[#666] hover:text-[#171717] font-mono text-xs uppercase tracking-widest transition-colors"
                                            >
                                                Back
                                            </button>
                                            <button
                                                onClick={handlePayment}
                                                className="flex-[2] py-3 bg-[#171717] hover:bg-black text-white font-mono text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 rounded-lg"
                                            >
                                                <CreditCard className="w-3.5 h-3.5" />
                                                Pay Retainer &amp; Continue
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};