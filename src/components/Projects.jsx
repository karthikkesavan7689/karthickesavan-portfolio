import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import project1Image from '../image/WhatsApp Image 2026-02-23 at 9.46.15 PM.jpeg';
import project2Image from '../image/WhatsApp Image 2026-02-23 at 9.54.12 PM.jpeg';

const Projects = () => {
    const projects = [
        {
            title: 'College Website',
            description: 'A professional college web portal featuring campus information, resource management, and a modern user interface.',
            tags: ['#React', '#Node.js', '#API Integration', '#UI/UX'],
            github: 'https://github.com/karthikkesavan7689/hh_rajahs_college',
            demo: 'https://karthikkesavan7689.github.io/hh_rajahs_college/',
            image: project1Image
        },
        {
            title: 'To-Do List',
            description: 'A sleek and efficient task management application designed to help users organize their daily activities seamlessly.',
            tags: ['#React', '#JavaScript', '#LocalStorage', '#Productivity'],
            github: 'https://github.com/karthikkesavan7689/to_du-list',
            demo: 'https://karthikkesavan7689.github.io/to_du-list/',
            image: project2Image
        },
        {
            title: 'Spotify Cloud Clone',
            description: 'A full-featured music streaming clone with playlist management and interactive player controls.',
            tags: ['#React', '#Spotify API', '#Tailwind', '#State Management'],
            github: 'https://github.com/kesavann7689/Spotify-Clone',
            demo: 'https://kesavann7689.github.io/Spotify-Clone/'
        }
    ];

    return (
        <section id="projects" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
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
                WORK
            </div>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-label">Portfolio</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 850, marginBottom: '20px', letterSpacing: '-0.02em' }}>
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <p className="text-dim" style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
                            A selection of my recent work and personal experiments.
                        </p>
                    </motion.div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="glass-card"
                            style={{
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.03)',
                                background: 'rgba(15, 23, 42, 0.4)'
                            }}
                            whileHover={{ y: -10, borderColor: 'rgba(99, 102, 241, 0.3)' }}
                        >
                            <div style={{
                                height: '240px',
                                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                {proj.image ? (
                                    <img
                                        src={proj.image}
                                        alt={proj.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                                        }}
                                        className="project-image"
                                    />
                                ) : (
                                    <div style={{
                                        width: '85%',
                                        height: '80%',
                                        background: 'rgba(15, 23, 42, 0.8)',
                                        borderRadius: '16px',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid var(--glass-border)'
                                    }}>
                                        <span style={{ fontSize: '1rem', color: 'var(--text-dim)', fontWeight: 600 }}>
                                            {proj.title} Preview
                                        </span>
                                    </div>
                                )}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(to bottom, transparent 60%, rgba(2, 6, 23, 0.8))',
                                    pointerEvents: 'none'
                                }} />
                            </div>

                            <div style={{ padding: '35px' }}>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                                    {proj.tags.map(tag => (
                                        <span
                                            key={tag}
                                            style={{
                                                fontSize: '0.7rem',
                                                fontWeight: 800,
                                                color: 'var(--primary)',
                                                background: 'rgba(99, 102, 241, 0.1)',
                                                padding: '4px 10px',
                                                borderRadius: '20px',
                                                border: '1px solid rgba(99, 102, 241, 0.1)'
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 style={{ marginBottom: '15px', color: 'white', fontSize: '1.5rem', fontWeight: 800 }}>{proj.title}</h3>
                                <p className="text-dim" style={{ fontSize: '1rem', marginBottom: '30px', minHeight: '60px', lineHeight: 1.6 }}>
                                    {proj.description}
                                </p>

                                <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                                    <motion.a
                                        href={proj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                        style={{ color: 'white', textDecoration: 'none', gap: '10px', fontSize: '0.95rem', fontWeight: 600 }}
                                        whileHover={{ color: 'var(--primary)', x: 5 }}
                                    >
                                        <Github size={20} /> Code
                                    </motion.a>
                                    <motion.a
                                        href={proj.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                        style={{ color: 'white', textDecoration: 'none', gap: '10px', fontSize: '0.95rem', fontWeight: 600 }}
                                        whileHover={{ color: 'var(--primary)', x: 5 }}
                                    >
                                        <ExternalLink size={20} /> Preview
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .glass-card:hover .project-image {
                    transform: scale(1.1);
                }
            `}</style>
        </section>
    );
};

export default Projects;
