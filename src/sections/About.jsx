import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award } from 'lucide-react';
import aboutImg from '../assets/images/aboutMe.jpg';

const About = () => {
    const timeline = [
        {
            year: '2024 - 2026',
            title: 'Master of Computer Applications (MCA)',
            institution: 'Ongoing - Semester 2',
            description: 'Focusing on advanced algorithms, software engineering, and web architectures.',
            icon: GraduationCap,
        },
        {
            year: 'Milestone',
            title: 'Computer Science Graduate',
            institution: 'Foundation of Programming',
            description: 'Mastered core concepts of problem-solving and software development.',
            icon: Award,
        },
    ];

    return (
        <section id="about" className="py-24 bg-grid">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="section-title">About Me</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="glass p-4 rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src={aboutImg}
                                alt="Working on laptop"
                                className="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                        {/* Experience Card Overlay */}
                        <div className="absolute -bottom-10 -right-10 glass p-6 rounded-2xl shadow-xl hidden md:block border-primary/20">
                            <p className="text-3xl font-bold text-primary">Fresher</p>
                            <p className="text-text-secondary">Ready to Innovate</p>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-xl text-text-secondary leading-relaxed mb-12">
                            I’m Nitish Kumar, a motivated Computer Science graduate and current MCA student.
                            I specialize in building real-world software solutions with a focus on modern
                            web technologies. My journey involves bridging technical theory with professional
                            execution, specifically in the realms of LMS development and directory platforms.
                        </p>

                        {/* Timeline */}
                        <div className="space-y-8">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex gap-6 items-start group"
                                >
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <span className="text-sm font-bold text-primary mb-1 block">
                                            {item.year}
                                        </span>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <p className="text-text-secondary">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
