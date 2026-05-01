import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, Database, Layers, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            title: 'LMS Platform Specialist',
            company: 'Course Implementation Projects',
            period: '2024 - Present',
            description: 'Architecting and implementing bespoke Learning Management Systems using specialized plugins and custom React components.',
            highlights: [
                'Custom course player integration',
                'Student progress tracking logic',
                'Plugin-based architecture planning',
            ],
            icon: LayoutGrid,
        },
        {
            title: 'Brilliant Directories Developer',
            company: 'Directory Infrastructure',
            period: 'Ongoing',
            description: 'Developing complex data post-type structures and member data synchronization for directory platforms.',
            highlights: [
                'BD Post Types structure design',
                'Member data flow optimization',
                'Custom API integration planning',
            ],
            icon: Database,
        },
    ];

    return (
        <section id="experience" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="section-title">Professional Experience</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="glass p-10 rounded-3xl border-primary/5 hover:border-primary/20 transition-all duration-500"
                        >
                            <div className="flex items-start justify-between mb-8">
                                <div className="p-4 bg-primary/10 rounded-2xl text-primary">
                                    <exp.icon size={32} />
                                </div>
                                <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold">
                                    {exp.period}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                            <p className="text-lg text-primary font-medium mb-4">{exp.company}</p>
                            <p className="text-text-secondary leading-relaxed mb-8">
                                {exp.description}
                            </p>

                            <div className="space-y-4">
                                {exp.highlights.map((highlight, hIdx) => (
                                    <div key={hIdx} className="flex items-center gap-3 text-text-secondary">
                                        <CheckCircle2 size={18} className="text-secondary shrink-0" />
                                        <span>{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
