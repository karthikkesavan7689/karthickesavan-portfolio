import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Shield, Server, Terminal, Cloud } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: <Layout />,
            color: 'var(--primary)',
            colorRGB: '99, 102, 241',
            skills: ['React', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Modern UI/UX']
        },
        {
            title: 'Backend & Databases',
            icon: <Database />,
            color: 'var(--secondary)',
            colorRGB: '168, 85, 247',
            skills: ['Node.js', 'Express', 'MongoDB', 'SQL/MySQL', 'RESTful APIs']
        },
        {
            title: 'Security & Cloud',
            icon: <Shield />,
            color: 'var(--accent)',
            colorRGB: '16, 185, 129',
            skills: ['Ethical Hacking', 'Network Security', 'Cloud Computing', 'Git/GitHub', 'Linux Admin']
        }
    ];

    return (
        <section id="skills" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
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
                TECH
            </div>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Expertise</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 850, marginBottom: '20px', letterSpacing: '-0.02em' }}>
                            My Tech <span className="gradient-text">Stack</span>
                        </h2>
                        <p className="text-dim" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                            The tools and technologies I use to build cutting-edge digital experiences.
                        </p>
                    </motion.div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.8 }}
                            className="glass-card"
                            style={{
                                padding: '50px 40px',
                                border: '1px solid rgba(255, 255, 255, 0.03)',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)'
                            }}
                            whileHover={{ y: -10, borderColor: `rgba(${cat.colorRGB}, 0.3)` }}
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '20px',
                                background: `rgba(${cat.colorRGB}, 0.1)`,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: '30px',
                                color: cat.color,
                                border: `1px solid rgba(${cat.colorRGB}, 0.2)`,
                                boxShadow: `0 10px 30px rgba(${cat.colorRGB}, 0.1)`,
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: 'inherit',
                                    background: `rgba(${cat.colorRGB}, 0.2)`,
                                    filter: 'blur(15px)',
                                    zIndex: -1
                                }} />
                                {React.cloneElement(cat.icon, { size: 32 })}
                            </div>

                            <h3 style={{ marginBottom: '25px', fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{cat.title}</h3>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {cat.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                            color: 'var(--text-dim)',
                                            fontSize: '1rem',
                                            padding: '4px 0',
                                            transition: 'var(--transition-smooth)'
                                        }}
                                        className="skill-item"
                                    >
                                        <div style={{
                                            width: '6px',
                                            height: '6px',
                                            borderRadius: '50%',
                                            backgroundColor: cat.color,
                                            boxShadow: `0 0 10px ${cat.color}`
                                        }} />
                                        {skill}
                                    </div>
                                ))}
                            </div>

                            {/* Decorative Corner */}
                            <div style={{
                                position: 'absolute',
                                bottom: '0',
                                right: '0',
                                width: '100px',
                                height: '100px',
                                background: `radial-gradient(circle at bottom right, rgba(${cat.colorRGB}, 0.05), transparent 70%)`,
                                pointerEvents: 'none'
                            }} />
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .skill-item:hover {
                    color: white !important;
                    transform: translateX(5px);
                }
            `}</style>
        </section>
    );
};

export default Skills;
