import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronRight, X, CreditCard, Cpu } from 'lucide-react';

export const HireProtocol = ({ mode = 'standalone' }: { mode?: 'standalone' | 'inline' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<'brief' | 'payment'>('brief');
    const [brief, setBrief] = useState('');
    const [analysis, setAnalysis] = useState({ type: 'General', estimate: 'TBD' });

    // Dynamic Scope Analysis based on user input
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
        // Stripe Payment Link for the £100 Retainer
        window.open('https://buy.stripe.com/9B63cvcLSdeYbFs4nm0RG00', '_blank');
    };

    const buttonContent = (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleInitialClick}
            className={`group relative border border-ink-900 overflow-hidden bg-white 
                ${mode === 'inline' ? 'px-5 py-2' : 'px-8 py-3'}`}
        >
            <div className="absolute inset-0 bg-ink-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <div className={`relative flex items-center gap-2 text-ink-900 group-hover:text-white transition-colors font-mono text-xs tracking-widest uppercase`}>
                <Briefcase className="w-3 h-3" />
                <span>Request Services</span>
            </div>
        </motion.button>
    );

    return (
        <>
            {mode === 'standalone' ? (
                <div className="w-full max-w-2xl mx-auto mt-24 pb-24">
                    <div className="flex justify-center">
                        {buttonContent}
                    </div>
                </div>
            ) : (
                buttonContent
            )}

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-50/90 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            className="w-full max-w-lg bg-white border border-ink-200 shadow-2xl relative overflow-hidden"
                        >
                            {/* Header */}
                            <div className="h-10 border-b border-ink-100 flex items-center justify-between px-6 bg-ink-50/50">
                                <div className="flex items-center gap-2 text-[10px] font-mono text-ink-400 uppercase tracking-widest">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    PROTOCOL_CONTRACT_INIT
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-ink-400 hover:text-ink-900 transition-colors"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <div className="mb-8">
                                    <h2 className="text-2xl font-serif text-ink-900 mb-2">
                                        Let's Collaborate
                                    </h2>
                                    <p className="text-sm font-light text-ink-500 max-w-sm leading-relaxed">
                                        I'm currently accepting new projects. Tell me about your vision, and let's see how we can build it.
                                    </p>
                                </div>

                                {step === 'brief' ? (
                                    <div className="space-y-6">
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-baseline">
                                                <label className="text-[10px] uppercase text-ink-400 font-mono tracking-wider">
                                                    Project Brief
                                                </label>
                                                <span className="text-[10px] text-ink-300 font-mono">
                                                    {brief.length}/500
                                                </span>
                                            </div>
                                            <textarea
                                                value={brief}
                                                onChange={(e) => setBrief(e.target.value)}
                                                placeholder="Outline requirements, timeline, and core objectives..."
                                                className="w-full h-32 bg-ink-50 border border-ink-200 text-ink-900 font-mono text-xs p-4 focus:border-ink-900 focus:outline-none transition-colors resize-none placeholder:text-ink-300"
                                            />
                                        </div>
                                        <button
                                            onClick={() => setStep('payment')}
                                            disabled={!brief.trim()}
                                            className="w-full py-3 bg-ink-900 hover:bg-ink-800 disabled:opacity-50 disabled:cursor-not-allowed text-white font-mono text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                                        >
                                            Next: Scope Estimate
                                            <ChevronRight className="w-3 h-3" />
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {/* Dynamic Scope Result */}
                                        <div className="p-4 bg-ink-50 border border-ink-100 space-y-3">
                                            <div className="flex items-center gap-2 text-xs font-mono text-ink-500 uppercase tracking-wider">
                                                <Cpu className="w-3 h-3" />
                                                Project Category
                                            </div>
                                            <div className="flex justify-between items-end border-b border-ink-200 pb-2">
                                                <span className="font-serif text-ink-900 text-lg">{analysis.type}</span>
                                                <span className="font-mono text-xs text-ink-500">{analysis.estimate}</span>
                                            </div>
                                            <p className="text-[10px] text-ink-400 font-mono leading-relaxed">
                                                *This retainer secures a dedicated consultation session to roadmap your project. Final costs are determined after we define the full scope.
                                            </p>
                                        </div>

                                        {/* Cost Breakdown */}
                                        <div className="flex justify-between items-center px-2">
                                            <span className="font-mono text-xs text-ink-500 uppercase">Consultation Retainer</span>
                                            <span className="font-serif text-xl text-ink-900">£100.00</span>
                                        </div>

                                        <div className="flex gap-4 pt-2">
                                            <button
                                                onClick={() => setStep('brief')}
                                                className="flex-1 py-3 text-ink-400 hover:text-ink-900 font-mono text-xs uppercase tracking-widest transition-colors"
                                            >
                                                Edit Brief
                                            </button>
                                            <button
                                                onClick={handlePayment}
                                                className="flex-[2] py-3 bg-ink-900 hover:bg-ink-800 text-white font-mono text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
                                            >
                                                <CreditCard className="w-3 h-3" />
                                                Authorize Funds
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
