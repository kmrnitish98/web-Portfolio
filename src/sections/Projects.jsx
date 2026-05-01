import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import todoImg from '../assets/images/todo.jpg';
import countImg from '../assets/images/big.jpg';
import marksImg from '../assets/images/marks.jpg';
import ageImg from '../assets/images/age.jpg';
import TiltCard from '../components/TiltCard';
import ProjectModal from '../components/ProjectModal';
import LMS from '../assets/images/LMS.png';
import Insta from '../assets/images/InstaPost.png';
import Ecomus from '../assets/images/Ecomus.png';
import EdgeCare from '../assets/images/EdgeCare.png';
const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const projects = [
        {
            id: 1,
            title: 'LMS Portal-SkillSphere',
            category: 'React',
            description: 'Online learning platform where users can create courses, enroll in courses, track progress, and earn certificates. Admin can manage courses, users, and view analytics.',
            tech: ['React', 'MongoDB','Express.js','Node.js','cloudinary','JWT Authentication','Tailwind'],
            link: 'https://skill-sphere-miyg.vercel.app/',
            github: 'https://github.com/kmrnitish98/SkillSphere',
            image: LMS,
        },
        {
            id: 2,
            title: 'Ecomus-Ecommerce Website',
            category: 'React',
            description: 'Ecumus is a responsive, e-commerce website with modern features like quick view, wishlist, and sticky header.',
            tech: ['React', 'Tailwind'],
            link: 'https://kmrnitish98.github.io/EcomsFashion/',
            github: 'https://github.com/kmrnitish98/EcomsFashion',
            image: Ecomus,
        },
        {
            id: 3,
            title: 'EdgeCare-Hospital Management System',
            category: 'React',
            description: 'EdgeCare is a modern hospital management system with features like doctor scheduling, patient records, and appointment management.',
            tech: ['React','Tailwind'],
            link: 'https://kmrnitish98.github.io/EdgeCare/',
            github: 'https://github.com/kmrnitish98/EdgeCare',
            image: EdgeCare,
        },
        {
            id: 4,
            title: 'Automatic-InstaPost',
            category: 'React',
            description: 'Pick image from freepik & post in instagram automatically.',
            tech: ['React', 'MongoDB','Express.js','Node.js','cloudinary','JWT Authentication','Tailwind'],
            link: '',
            github: 'https://github.com/kmrnitish98/instapost',
            image: Insta,
        },
        {
            id: 5,
            title: 'TODO Application',
            category: 'React',
            description: 'A modern task management system with full CRUD operations and persistent storage.',
            tech: ['React', 'Tailwind', 'Local Storage'],
            link: 'https://appoint-esi2.onrender.com',
            github: 'https://github.com/dashboard',
            image: todoImg,
        },
        {
            id: 6,
            title: 'Advanced CountDown',
            category: 'Frontend',
            description: 'Responsive countdown timer with customizable events and modern styling.',
            tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
            link: 'https://kmrnitish98.github.io/CountDown/',
            github: 'https://github.com/dashboard',
            image: countImg,
        },
        {
            id: 7,
            title: 'Marks Calculator',
            category: 'Frontend',
            description: 'Educational tool for calculating academic percentages and grade points.',
            tech: ['HTML', 'CSS', 'JS', 'Responsive'],
            link: 'https://kmrnitish98.github.io/MarksCalculate/',
            github: 'https://github.com/dashboard',
            image: marksImg,
        },
        {
            id: 8,
            title: 'Age Calculator Pro',
            category: 'Frontend',
            description: 'Precise age calculation tool with support for various date formats.',
            tech: ['HTML', 'CSS', 'JS', 'Bootstrap'],
            link: 'https://kmrnitish98.github.io/Alpha_AgeCal/',
            github: 'https://github.com/dashboard',
            image: ageImg,
        },
    ];

    const categories = ['All', 'React', 'Frontend'];
    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter((p) => p.category === filter);

    return (
        <section id="projects" className="py-24 bg-grid">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="section-title">Featured Projects</h2>

                {/* Filter Tabs */}
                <div className="flex justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${filter === cat
                                ? 'bg-primary text-white shadow-lg'
                                : 'glass text-text-secondary hover:text-primary'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => openModal(project)}
                                className="group cursor-none"
                            >
                                <TiltCard className="glass rounded-3xl overflow-hidden border-primary/10 h-full">
                                    <div className="relative aspect-video overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top transition-all duration-[5000ms] ease-in-out group-hover:object-bottom"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                                            <motion.div
                                                whileHover={{ scale: 1.1 }}
                                                className="p-3 bg-primary text-white rounded-full"
                                            >
                                                <Eye size={24} />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className="p-8">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tech.map((t) => (
                                                <span key={t} className="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                        <p className="text-text-secondary leading-relaxed line-clamp-2">
                                            {project.description}
                                        </p>
                                    </div>
                                </TiltCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <ProjectModal
                    project={selectedProject}
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </div>
        </section>
    );
};

export default Projects;
