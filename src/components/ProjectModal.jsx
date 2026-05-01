import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2 } from 'lucide-react';

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="glass w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative h-64 md:h-96 group">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top transition-all duration-[8000ms] ease-in-out group-hover:object-bottom"
                            />
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-white/20 transition-colors text-text-primary"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <div className="p-8 md:p-12">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-4 py-1.5 text-sm font-bold rounded-full bg-primary/10 text-primary border border-primary/20">
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <h2 className="text-4xl font-bold mb-6">{project.title}</h2>
                            <p className="text-xl text-text-secondary leading-relaxed mb-10">
                                {project.description}
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                                <div>
                                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                                        <CheckCircle2 size={24} className="text-primary" /> Key Features
                                    </h3>
                                    <ul className="space-y-3 text-text-secondary">
                                        <li>• Fully Responsive Layout</li>
                                        <li>• Performance Optimized</li>
                                        <li>• Modern Glassmorphism UI</li>
                                        <li>• Integrated Animations</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-4 justify-end">
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="btn-primary flex items-center justify-center gap-2 w-full"
                                    >
                                        View Live Demo <ExternalLink size={20} />
                                    </motion.a>
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="btn-outline flex items-center justify-center gap-2 w-full"
                                    >
                                        Source Code <Github size={20} />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;
