import React from 'react';
import { motion } from 'framer-motion';
import {
    Code2, Layout, Database, Terminal,
    Globe, Server, Cpu, Layers
} from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: Layout,
            skills: ['React', 'JavaScript (ES6+)', 'TypeScript', 'Tailwind CSS/Bootstrap', 'HTML5', 'CSS3/SASS'],
            color: 'bg-blue-500',
        },
        {
            title: 'Backend & Database',
            icon: Database,
            skills: ['PHP', 'Node.js', 'Express.js', 'MySQL', 'MongoDB'],
            color: 'bg-green-500',
        },
        {
            title: 'Tools & Platforms',
            icon: Terminal,
            skills: ['Git', 'GitHub', 'VS Code', 'Canva', 'Stitch'],
            color: 'bg-purple-500',
        },
        {
            title: 'Other Skills',
            icon: Layers,
            skills: ['REST APIs', 'Responsive Design', 'Glassmorphism UI', 'Framer Motion'],
            color: 'bg-orange-500',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="section-title">Technical Expertise</h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-3xl group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${category.color} bg-opacity-20 text-text-primary group-hover:bg-opacity-100 group-hover:text-white`}>
                                <category.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-text-secondary">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
