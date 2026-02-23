import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    const socialLinks = [
        { icon: <Mail />, label: 'Email', value: 'karthickkesavan7689@gmail.com', href: 'mailto:karthickkesavan7689@gmail.com' },
        { icon: <Github />, label: 'GitHub', value: '@kesavann7689', href: 'https://github.com/kesavann7689' },
        { icon: <Linkedin />, label: 'LinkedIn', value: 'KARTHICKKESAVAN SR', href: 'https://www.linkedin.com/in/hariharan-s-92b566381' },
        { icon: <MessageSquare />, label: 'WhatsApp', value: '+91 8072915370', href: 'https://wa.me/918072915370' },
    ];

    return (
        <section id="contact">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="section-label">Connect</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Let's <span className="gradient-text">Talk</span></h2>
                    <p className="text-dim">Interested in working together or just want to say hi?</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {socialLinks.map((link, idx) => (
                        <motion.a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card"
                            style={{ padding: '30px', textAlign: 'center', textDecoration: 'none', color: 'inherit' }}
                            whileHover={{ y: -10, borderColor: 'var(--primary)' }}
                        >
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                background: 'rgba(255,255,255,0.03)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 auto 20px',
                                color: 'var(--primary)',
                                border: '1px solid var(--glass-border)'
                            }}>
                                {link.icon}
                            </div>
                            <h4 style={{ marginBottom: '8px', color: 'white' }}>{link.label}</h4>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', wordBreak: 'break-all' }}>{link.value}</p>
                        </motion.a>
                    ))}
                </div>

                {/* Quick Contact Form Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{ marginTop: '60px', padding: '40px', maxWidth: '800px', margin: '60px auto 0' }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div>
                            <h3 style={{ marginBottom: '15px' }}>Have a question?</h3>
                            <p className="text-dim">Fill out the form and I'll get back to you within 24 hours.</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input
                                type="text"
                                placeholder="Your Name"
                                style={{
                                    padding: '12px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)',
                                    borderRadius: '10px', color: 'white', outline: 'none'
                                }}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                style={{
                                    padding: '12px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)',
                                    borderRadius: '10px', color: 'white', outline: 'none'
                                }}
                            />
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                style={{
                                    padding: '12px 16px', background: 'rgba(255,255,255,0.02)', border: '1px solid var(--glass-border)',
                                    borderRadius: '10px', color: 'white', outline: 'none', resize: 'none'
                                }}
                            />
                            <button className="btn btn-primary" style={{ justifyContent: 'center' }}>
                                Send Message <Send size={18} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
