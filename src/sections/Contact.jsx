import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const handleSubmit = (e) => {
        // FormSubmit will handle the actual redirect, but we can show a toast
        // if the user is staying on the page or before they are redirected.
        // For this implementation, we'll let the HTML form handle the POST.
        toast.success('Message sent successfully!');
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Location',
            details: 'Hyderabad, India',
        },
        {
            icon: Mail,
            title: 'Email',
            details: 'kmrnitish98@gmail.com',
            link: 'mailto:kmrnitish98@gmail.com',
        },
        {
            icon: Phone,
            title: 'Mobile',
            details: '+91 7541989350',
            link: 'tel:+917541989350',
        },
    ];

    return (
        <section id="contact" className="py-24 bg-grid">
            <ToastContainer position="bottom-right" theme="dark" />
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="section-title">Get In Touch</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-bold mb-6">Let's discuss your next project</h3>
                        <p className="text-xl text-text-secondary leading-relaxed mb-12">
                            Whether you have a question about my LMS implementation work or just want
                            to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-8">
                            {contactInfo.map((info, idx) => (
                                <div key={idx} className="flex gap-6 items-center group">
                                    <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <info.icon size={28} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold">{info.title}</h4>
                                        {info.link ? (
                                            <a href={info.link} className="text-text-secondary hover:text-primary transition-colors">
                                                {info.details}
                                            </a>
                                        ) : (
                                            <span className="text-text-secondary">{info.details}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="glass p-10 rounded-3xl"
                    >
                        <form
                            action="https://formsubmit.co/kmrnitish98@gmail.com"
                            method="POST"
                            className="space-y-6"
                            onSubmit={handleSubmit}
                        >
                            {/* FormSubmit Config */}
                            <input type="hidden" name="_next" value="https://kmrnitish98.github.io/web-Portfolio/" />
                            <input type="hidden" name="_captcha" value="false" />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold mb-2 ml-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        placeholder="Enter your name"
                                        className="w-full bg-white/5 border border-primary/20 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold mb-2 ml-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        placeholder="Enter email address"
                                        className="w-full bg-white/5 border border-primary/20 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-bold mb-2 ml-1">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    required
                                    placeholder="What is this about?"
                                    className="w-full bg-white/5 border border-primary/20 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold mb-2 ml-1">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows="5"
                                    placeholder="Your message here..."
                                    className="w-full bg-white/5 border border-primary/20 rounded-2xl px-6 py-4 outline-none focus:border-primary transition-colors resize-none"
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full btn-primary flex items-center justify-center gap-3 py-5 text-lg"
                            >
                                Send Message <Send size={22} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
