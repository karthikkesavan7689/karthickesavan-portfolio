import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, MapPin, ExternalLink } from 'lucide-react';
import profileImage from '../image/WhatsApp Image 2026-02-23 at 10.28.46 PM.jpeg';

const About = () => {
    const stats = [
        { icon: <School className="text-primary" />, label: 'Institution', value: 'H.H. The Rajahs College' },
        { icon: <GraduationCap className="text-secondary" />, label: 'Degree', value: 'B.Sc Maths' },
        { icon: <MapPin className="text-accent" />, label: 'Location', value: 'Pudukkottai, India' },
    ];

    return (
        <section id="about">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>

                    {/* Profile Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        style={{ position: 'relative' }}
                    >
                        <div style={{
                            position: 'absolute',
                            inset: '-20px',
                            border: '2px dashed var(--glass-border)',
                            borderRadius: '30px',
                            zIndex: -1
                        }} />
                        <div className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '24px', aspectRatio: '4/5' }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(45deg, #111827, #1f2937)',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden'
                            }}>
                                <img
                                    src={profileImage}
                                    alt="Karthickkesavan SR"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                                        filter: 'grayscale(0.2) contrast(1.05)'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.filter = 'grayscale(0) contrast(1)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.filter = 'grayscale(0.2) contrast(1.05)';
                                    }}
                                />
                                <span style={{
                                    position: 'absolute',
                                    fontSize: '6rem',
                                    fontWeight: 950,
                                    opacity: 0.1,
                                    letterSpacing: '0.2em',
                                    color: 'white',
                                    pointerEvents: 'none'
                                }}>KSR</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Area */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="section-label">Biography</span>
                            <h2 style={{ fontSize: '3rem', marginBottom: '25px', lineHeight: 1.2 }}>
                                Passion Meets <br />
                                <span className="gradient-text">Purpose.</span>
                            </h2>
                            <p className="text-dim" style={{ fontSize: '1.1rem', marginBottom: '20px' }}>
                                I'm a dedicated Full-Stack Developer on a mission to build software that makes a difference.
                                With a solid foundation in React and JavaScript, I focus on creating seamless user experiences
                                backed by robust backend architectures.
                            </p>
                            <p className="text-dim" style={{ fontSize: '1.1rem', marginBottom: '40px' }}>
                                Currently, I'm deep-diving into Cloud Computing and Ethical Hacking to ensure the solutions I build
                                are not just powerful, but secure and scalable.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {stats.map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="glass-card"
                                        style={{ padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid rgba(255,255,255,0.05)' }}
                                    >
                                        <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)' }}>
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '2px' }}>{stat.label}</p>
                                            <p style={{ fontWeight: 600 }}>{stat.value}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <style>{`
        .text-primary { color: var(--primary); }
        .text-secondary { color: var(--secondary); }
        .text-accent { color: var(--accent); }
      `}</style>
        </section>
    );
};

export default About;
