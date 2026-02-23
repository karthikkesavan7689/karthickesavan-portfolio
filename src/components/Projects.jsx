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
        <section id="projects">
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <span className="section-label">Portfolio</span>
                    <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Featured <span className="gradient-text">Projects</span></h2>
                    <p className="text-dim">A selection of my recent work and personal experiments.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card"
                            style={{ overflow: 'hidden' }}
                        >
                            <div style={{
                                height: '220px',
                                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))',
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
                                            objectFit: 'cover'
                                        }}
                                    />
                                ) : (
                                    /* Simulated Project Image Fallback */
                                    <div style={{
                                        width: '80%',
                                        height: '80%',
                                        background: 'rgba(0,0,0,0.5)',
                                        borderRadius: '10px',
                                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid var(--glass-border)'
                                    }}>
                                        <span style={{ fontSize: '0.9rem', color: 'var(--text-dim)', textAlign: 'center', padding: '10px' }}>
                                            {proj.title} Preview
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div style={{ padding: '30px' }}>
                                <h3 style={{ marginBottom: '12px', color: 'white' }}>{proj.title}</h3>
                                <p className="text-dim" style={{ fontSize: '0.95rem', marginBottom: '20px', minHeight: '60px' }}>
                                    {proj.description}
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '25px' }}>
                                    {proj.tags.map(tag => (
                                        <span key={tag} style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>{tag}</span>
                                    ))}
                                </div>

                                <div style={{ display: 'flex', gap: '20px' }}>
                                    <motion.a
                                        href={proj.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                        style={{ color: 'var(--text)', textDecoration: 'none', gap: '8px', fontSize: '0.9rem' }}
                                        whileHover={{ color: 'var(--primary)' }}
                                    >
                                        <Github size={18} /> Code
                                    </motion.a>
                                    <motion.a
                                        href={proj.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                        style={{ color: 'var(--text)', textDecoration: 'none', gap: '8px', fontSize: '0.9rem' }}
                                        whileHover={{ color: 'var(--primary)' }}
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
