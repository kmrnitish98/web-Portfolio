import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            onAnimationComplete={onComplete}
            className="fixed inset-0 z-100 flex items-center justify-center bg-slate-900"
        >
            <div className="relative flex flex-col items-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-6xl font-display font-bold mb-8"
                >
                    <span className="text-primary">Nitish</span>
                    <span className="text-white">.dev</span>
                </motion.div>

                <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: '0%' }}
                        transition={{ duration: 2, ease: 'easeInOut' }}
                        className="w-full h-full bg-linear-to-r from-primary to-secondary"
                    />
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="mt-4 text-slate-400 font-medium tracking-widest uppercase text-xs"
                >
                    Initializing Premium Experience
                </motion.p>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
