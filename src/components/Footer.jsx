import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram, Heart, ArrowUpRight, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Github, href: 'https://github.com/dashboard', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/nitish-kumar-98n', label: 'LinkedIn' },
        { icon: Instagram, href: 'https://www.instagram.com', label: 'Instagram' },
    ];

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="relative pt-24 pb-8 overflow-hidden bg-grid">
            {/* Top Gradient Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent opacity-40" />
            
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    
                    {/* Brand & Intro */}
                    <div className="lg:col-span-2">
                        <motion.a 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            href="#home" 
                            className="text-4xl font-display font-bold tracking-tight inline-block mb-6"
                        >
                            <span className="text-primary">Nitish</span>
                            <span className="text-text-primary">.dev</span>
                        </motion.a>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-text-secondary text-lg leading-relaxed max-w-md mb-8"
                        >
                            Crafting premium, user-centric web experiences with a focus on modern aesthetics, scalable architecture, and flawless performance.
                        </motion.p>
                        
                        {/* Social Links */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex gap-4"
                        >
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary/50 transition-colors shadow-lg"
                                    aria-label={social.label}
                                >
                                    <social.icon size={22} />
                                </motion.a>
                            ))}
                        </motion.div>
                    </div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <h3 className="text-xl font-bold text-text-primary mb-6 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
                        </h3>
                        <ul className="space-y-3 mt-4">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a 
                                        href={link.href}
                                        className="text-text-secondary hover:text-primary transition-colors flex items-center gap-2 group w-fit font-medium"
                                    >
                                        <ArrowUpRight size={16} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-primary" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-xl font-bold text-text-primary mb-6 relative inline-block">
                            Contact Me
                            <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary rounded-full" />
                        </h3>
                        <ul className="space-y-4 mt-4">
                            <li>
                                <a href="mailto:kmrnitish98@gmail.com" className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors group">
                                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                        <Mail size={18} />
                                    </div>
                                    <span className="font-medium">kmrnitish98@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center gap-4 text-text-secondary group">
                                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center">
                                        <MapPin size={18} />
                                    </div>
                                    <span className="font-medium">India</span>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-text-secondary/20 text-sm text-text-secondary gap-4"
                >
                    <p className="font-medium text-base">© {currentYear} Nitish Kumar. All rights reserved.</p>
                    <p className="flex items-center gap-2 font-semibold bg-primary/10 px-5 py-2.5 rounded-full text-primary shadow-sm border border-primary/20">
                        Built with <Heart size={16} className="text-accent fill-accent animate-pulse" /> using React & Tailwind
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
