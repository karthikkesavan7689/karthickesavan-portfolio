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
        <section id="about" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
            {/* Background Watermark */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                zIndex: -1,
                opacity: 0.03,
                pointerEvents: 'none',
                userSelect: 'none',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '20vw',
                fontWeight: 900,
                color: 'white',
                letterSpacing: '0.05em'
            }}>
                ABOUT
            </div>

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px', alignItems: 'center' }}>

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
                            border: '1px solid rgba(99, 102, 241, 0.2)',
                            borderRadius: '40px',
                            zIndex: -1,
                            background: 'radial-gradient(circle at top left, rgba(99, 102, 241, 0.05), transparent 70%)'
                        }} />
                        <div className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '30px', aspectRatio: '4/5', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5)' }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(45deg, #0f172a, #1e293b)',
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
                                        transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
                                        filter: 'grayscale(0.1) contrast(1.1)'
                                    }}
                                    className="profile-img-about"
                                />
                                <span style={{
                                    position: 'absolute',
                                    fontSize: '8rem',
                                    fontWeight: 950,
                                    opacity: 0.07,
                                    letterSpacing: '0.1em',
                                    color: 'white',
                                    pointerEvents: 'none',
                                    userSelect: 'none'
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
                            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '30px', lineHeight: 1.1, fontWeight: 850 }}>
                                Passion Meets <br />
                                <span className="gradient-text">Purpose.</span>
                            </h2>
                            <p className="text-dim" style={{ fontSize: '1.2rem', marginBottom: '25px', lineHeight: 1.8 }}>
                                I'm a dedicated <span style={{ color: 'white', fontWeight: 600 }}>Full-Stack Developer</span> on a mission to build software that makes a difference.
                                With a solid foundation in React and JavaScript, I focus on creating seamless user experiences
                                backed by robust backend architectures.
                            </p>
                            <p className="text-dim" style={{ fontSize: '1.2rem', marginBottom: '45px', lineHeight: 1.8 }}>
                                Currently, I'm deep-diving into <span style={{ color: 'var(--primary)', fontWeight: 600 }}>Cloud Computing</span> and <span style={{ color: 'var(--secondary)', fontWeight: 600 }}>Ethical Hacking</span> to ensure the solutions I build
                                are not just powerful, but secure and scalable.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {stats.map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="glass-card"
                                        style={{
                                            padding: '20px 25px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '25px',
                                            border: '1px solid rgba(255,255,255,0.03)',
                                            background: 'rgba(255,255,255,0.01)'
                                        }}
                                        whileHover={{ x: 10, background: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.1)' }}
                                    >
                                        <div style={{
                                            padding: '12px',
                                            borderRadius: '15px',
                                            background: 'rgba(255,255,255,0.03)',
                                            border: '1px solid rgba(255,255,255,0.05)'
                                        }}>
                                            {React.cloneElement(stat.icon, { size: 24 })}
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '4px', fontWeight: 500 }}>{stat.label}</p>
                                            <p style={{ fontWeight: 700, fontSize: '1.1rem', color: 'white' }}>{stat.value}</p>
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
        .profile-img-about:hover {
            transform: scale(1.05);
            filter: grayscale(0) contrast(1.1) !important;
        }
      `}</style>
        </section>
    );
};

export default About;
