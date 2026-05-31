import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSending, setIsSending] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        setIsSending(true);
    };

    const socialLinks = [
        { icon: <Mail />, label: 'Email', value: 'karthikkesavan7689@gmail.com', href: 'mailto:karthikkesavan7689@gmail.com', color: 'var(--primary)' },
        { icon: <Github />, label: 'GitHub', value: '@kesavann7689', href: 'https://github.com/kesavann7689', color: 'white' },
        { icon: <Linkedin />, label: 'LinkedIn', value: 'KARTHIK KESAVAN', href: 'https://www.linkedin.com/in/karthik-kesavan-39907a3b3?utm_source=share_via&utm_content=profile&utm_medium=member_android', color: '#0077b5' },
        { icon: <MessageSquare />, label: 'WhatsApp', value: '+91 8072915370', href: 'https://wa.me/918072915370', color: '#25d366' },
    ];

    return (
        <section id="contact" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
            {/* Background Watermark */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                zIndex: -1,
                opacity: 0.02,
                pointerEvents: 'none',
                userSelect: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20vw',
                fontWeight: 900,
                color: 'white',
                letterSpacing: '-0.02em',
                lineHeight: 1
            }}>
                CONTACT
            </div>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Connect</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 850, marginBottom: '20px', letterSpacing: '-0.02em' }}>
                            Let's <span className="gradient-text">Talk</span>
                        </h2>
                        <p className="text-dim" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                            Interested in working together or just want to say hi? I'm always open to new opportunities.
                        </p>
                    </motion.div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '25px' }}>
                    {socialLinks.map((link, idx) => (
                        <motion.a
                            key={idx}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card"
                            style={{
                                padding: '40px 30px',
                                textAlign: 'center',
                                textDecoration: 'none',
                                color: 'inherit',
                                border: '1px solid rgba(255,255,255,0.03)',
                                background: 'rgba(255,255,255,0.01)'
                            }}
                            whileHover={{ y: -10, borderColor: link.color, background: 'rgba(255,255,255,0.03)' }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '18px',
                                background: 'rgba(255,255,255,0.03)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                margin: '0 auto 25px',
                                color: link.color,
                                border: '1px solid var(--glass-border)',
                                transition: 'var(--transition-smooth)'
                            }}>
                                {React.cloneElement(link.icon, { size: 28 })}
                            </div>
                            <h4 style={{ marginBottom: '10px', color: 'white', fontSize: '1.25rem', fontWeight: 700 }}>{link.label}</h4>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', wordBreak: 'break-all', opacity: 0.8 }}>{link.value}</p>
                        </motion.a>
                    ))}
                </div>

                {/* Quick Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{
                        marginTop: '80px',
                        padding: '60px',
                        maxWidth: '900px',
                        margin: '80px auto 0',
                        border: '1px solid rgba(255,255,255,0.05)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: '200px',
                        height: '200px',
                        background: 'radial-gradient(circle at top right, var(--primary-glow), transparent 70%)',
                        opacity: 0.3,
                        pointerEvents: 'none'
                    }} />

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', position: 'relative' }}>
                        <div>
                            <h3 style={{ fontSize: '2rem', marginBottom: '20px', fontWeight: 850 }}>Have a question?</h3>
                            <p className="text-dim" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '30px' }}>
                                Fill out the form and I'll get back to you as soon as possible.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--primary)', fontWeight: 700 }}>
                                <div style={{ width: '40px', height: '2px', background: 'var(--primary)' }} />
                                GET IN TOUCH
                            </div>
                        </div>
                        <form 
                            action="https://formsubmit.co/karthikkesavan7689@gmail.com" 
                            method="POST"
                            onSubmit={handleSubmit}
                            style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
                        >
                            {/* FormSubmit Configuration */}
                            <input type="hidden" name="_next" value="https://karthikkesavan7689.github.io/karthickesavan-portfolio/" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        className="contact-input"
                                        onChange={handleInputChange}
                                        required
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        className="contact-input"
                                        onChange={handleInputChange}
                                        required
                                    />
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    rows="5"
                                    className="contact-input"
                                    style={{ resize: 'none' }}
                                    onChange={handleInputChange}
                                    required
                                />
                            </motion.div>
                             <motion.button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isSending}
                                style={{
                                    justifyContent: 'center',
                                    width: '100%',
                                    height: '60px',
                                    fontSize: '1.1rem',
                                    borderRadius: '16px',
                                    background: isSending ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                    cursor: isSending ? 'not-allowed' : 'pointer'
                                }}
                                whileHover={!isSending ? { scale: 1.02 } : {}}
                                whileTap={!isSending ? { scale: 0.98 } : {}}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                {isSending ? 'Sending Message...' : <>Send Message <Send size={20} style={{ marginLeft: '10px' }} /></>}
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
            <style>{`
                .contact-input {
                    padding: 18px 25px;
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 16px;
                    color: white;
                    outline: none;
                    font-size: 1rem;
                    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                    font-family: 'Inter', sans-serif;
                    width: 100%;
                }
                .contact-input:hover {
                    background: rgba(255, 255, 255, 0.04);
                    border-color: rgba(255, 255, 255, 0.15);
                }
                .contact-input:focus {
                    background: rgba(255, 255, 255, 0.05);
                    border-color: var(--primary);
                    box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.15), 0 0 20px rgba(99, 102, 241, 0.1);
                    transform: translateY(-2px);
                }
                .contact-input::placeholder {
                    color: rgba(255, 255, 255, 0.3);
                    transition: var(--transition-smooth);
                }
                .contact-input:focus::placeholder {
                    opacity: 0.5;
                    transform: translateX(5px);
                }
                @media (max-width: 640px) {
                    .glass-card { padding: 40px 25px !important; }
                    div[style*="gridTemplateColumns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
                }
            `}</style>
        </section>
    );
};

export default Contact;
