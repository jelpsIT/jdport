import { Outlet, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const MainLayout = () => {
    return (
        <div className="min-h-screen bg-white text-[#171717] font-sans">
            <nav className="fixed top-0 left-0 right-0 py-5 px-8 flex justify-between items-center z-[60] bg-white/95 backdrop-blur-md border-b border-[#eee]">
                <NavLink to="/" className="text-sm font-semibold tracking-tight hover:text-[#D97706] transition-colors">
                    JD | Portfolio
                </NavLink>

                <div className="flex gap-8 text-sm text-[#666]">
                    <NavLink to="/" className={({ isActive }) => isActive ? "text-[#171717] font-medium" : "hover:text-[#171717] transition-colors"}>Index</NavLink>
                    <NavLink to="/skills" className={({ isActive }) => isActive ? "text-[#171717] font-medium" : "hover:text-[#171717] transition-colors"}>Archives</NavLink>
                    <NavLink to="/identity" className={({ isActive }) => isActive ? "text-[#171717] font-medium" : "hover:text-[#171717] transition-colors"}>About</NavLink>
                    <NavLink to="/tools" className={({ isActive }) => isActive ? "text-[#171717] font-medium" : "hover:text-[#171717] transition-colors"}>Tools</NavLink>
                </div>
            </nav>

            <main className="pt-16"> {/* Reduced from pt-20 */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Outlet />
                </motion.div>
            </main>
        </div>
    );
};