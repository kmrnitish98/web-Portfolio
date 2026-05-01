import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Github, Linkedin, Mail, Instagram, Download, ChevronRight } from 'lucide-react';
import mypic from '../assets/images/n-pass.png';
import resume from '../assets/NITISH_KUMAR-R.pdf';
import TiltCard from '../components/TiltCard';
import MagneticButton from '../components/MagneticButton';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 bg-grid opacity-20" />
            <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                        <span className="w-8 h-1 bg-primary rounded-full" />
                        Welcome to my Portfolio
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Hi, I'm <span className="text-gradient">Nitish Kumar</span>
                    </h1>
                    <div className="text-2xl md:text-3xl font-medium text-text-secondary mb-8 flex gap-2">
                        <span>I'm a</span>
                        <span className="text-secondary">
                            <Typewriter
                                options={{
                                    strings: ['Frontend Developer', 'React Enthusiast', 'MCA Student', 'UI Designer'],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </span>
                    </div>

                    <p className="text-lg text-text-secondary mb-10 max-w-lg leading-relaxed">
                        Crafting premium, user-centric web experiences with a focus on performance,
                        modern aesthetics, and scalable architecture.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-12">
                        <MagneticButton>
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-primary flex items-center gap-2 cursor-none"
                            >
                                View Projects <ChevronRight size={20} />
                            </motion.a>
                        </MagneticButton>
                        <MagneticButton>
                            <motion.a
                                href={resume}
                                download
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-outline flex items-center gap-2 cursor-none"
                            >
                                Download Resume <Download size={20} />
                            </motion.a>
                        </MagneticButton>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-6">
                        {[
                            { icon: Github, href: 'https://github.com/dashboard', label: 'GitHub' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/nitish-kumar-98n', label: 'LinkedIn' },
                            { icon: Mail, href: 'mailto:kmrnitish98@gmail.com', label: 'Email' },
                            { icon: Instagram, href: 'https://www.instagram.com', label: 'Instagram' },
                        ].map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, color: '#8b5cf6' }}
                                className="text-text-secondary transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon size={26} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center mt-10 lg:mt-0"
                >
                    <TiltCard className="relative w-64 h-[22rem] md:w-[22rem] md:h-[28rem]">
                        {/* Premium Background Glow */}
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/40 to-secondary/40 rounded-[2.5rem] blur-2xl animate-pulse" />

                        {/* Glassmorphism Frame */}
                        <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden glass p-2 shadow-2xl">
                            <div className="w-full h-full rounded-[2rem] overflow-hidden relative group bg-slate-800/20">
                                <img
                                    src={mypic}
                                    alt="Nitish Kumar"
                                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Subtle overlay gradient on hover */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>

                        {/* Floating Status Badge */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-4 md:-right-8 glass px-6 py-3.5 rounded-full flex items-center gap-3 shadow-xl border border-white/10 z-10"
                        >
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-sm font-bold text-text-primary whitespace-nowrap">Available for Work</span>
                        </motion.div>
                    </TiltCard>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
