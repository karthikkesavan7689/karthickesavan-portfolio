import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Database, Shield, Server, Terminal, Cloud } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Development',
            icon: <Layout />,
            color: 'var(--primary)',
            skills: ['React', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Modern UI/UX', 'State Management']
        },
        {
            title: 'Backend & Databases',
            icon: <Database />,
            color: 'var(--secondary)',
            skills: ['Node.js', 'Express', 'MongoDB', 'SQL/MySQL', 'RESTful APIs']
        },
        {
            title: 'Security & Cloud',
            icon: <Shield />,
            color: 'var(--accent)',
            skills: ['Ethical Hacking', 'Network Security', 'Cloud Computing', 'Git/GitHub', 'Linux Admin']
        }
    ];

    return (
        <section id="skills" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="section-label">Expertise</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>My Tech <span className="gradient-text">Stack</span></h2>
                    <p className="text-dim">The tools and technologies I use to bring ideas to life.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
                    {skillCategories.map((cat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card"
                            style={{ padding: '40px' }}
                        >
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '16px',
                                background: `rgba(${cat.color === 'var(--primary)' ? '99, 102, 241' : cat.color === 'var(--secondary)' ? '168, 85, 247' : '236, 72, 153'}, 0.1)`,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: '25px',
                                color: cat.color,
                                border: `1px solid rgba(${cat.color === 'var(--primary)' ? '99, 102, 241' : cat.color === 'var(--secondary)' ? '168, 85, 247' : '236, 72, 153'}, 0.2)`
                            }}>
                                {React.cloneElement(cat.icon, { size: 30 })}
                            </div>
                            <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>{cat.title}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {cat.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        style={{
                                            padding: '8px 16px',
                                            background: 'rgba(255,255,255,0.03)',
                                            borderRadius: '50px',
                                            fontSize: '0.85rem',
                                            color: 'var(--text-dim)',
                                            border: '1px solid var(--glass-border)',
                                            transition: 'var(--transition-smooth)'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.color = 'white';
                                            e.target.style.borderColor = cat.color;
                                            e.target.style.background = `rgba(${cat.color === 'var(--primary)' ? '99, 102, 241' : cat.color === 'var(--secondary)' ? '168, 85, 247' : '236, 72, 153'}, 0.1)`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.color = 'var(--text-dim)';
                                            e.target.style.borderColor = 'var(--glass-border)';
                                            e.target.style.background = 'rgba(255,255,255,0.03)';
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
