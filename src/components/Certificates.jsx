import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, ChevronRight, ChevronLeft, CheckCircle2 } from 'lucide-react';

import certImage from '../image/WhatsApp Image 2026-02-21 at 6.50.21 PM.jpeg';

const Certificates = () => {
    const scrollRef = useRef(null);

    const certs = [
        {
            title: 'GUVI Web Development',
            issuer: 'HHRC COLLEGE',
            date: '2025',
            image: certImage
        },
        { title: 'React & Modern UI Design', issuer: 'Technical Workshop', date: '2024' },
        { title: 'Cloud Computing Fundamentals', issuer: 'HHRC COLLEGE', date: '2023' },
        { title: 'Ethical Hacking Essentials', issuer: 'Cyber Security Lab', date: '2023' },
        { title: 'Database Systems & SQL', issuer: 'Industrial Training', date: '2023' },
        { title: 'JavaScript Algorithms', issuer: 'External Certification', date: '2023' },
        { title: 'Specialized Tech Achievement', issuer: 'Academic Excellence', date: '2022' },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section id="certificates" style={{ padding: '100px 0', overflow: 'hidden' }}>
            <div className="container" style={{ marginBottom: '40px', textAlign: 'center' }}>
                <span className="section-label">Gallery</span>
                <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>My <span className="gradient-text">Certifications</span></h2>
                <p className="text-dim">A horizontal showcase of my professional achievements and industrial training credentials.</p>
            </div>

            <div style={{ position: 'relative' }}>
                {/* Navigation Buttons */}
                <div style={{ display: 'none' }} className="nav-btns">
                    <button
                        onClick={() => scroll('left')}
                        className="glass-card"
                        style={{
                            position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
                            zIndex: 10, width: '50px', height: '50px', border: '1px solid var(--glass-border)',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'
                        }}
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="glass-card"
                        style={{
                            position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
                            zIndex: 10, width: '50px', height: '50px', border: '1px solid var(--glass-border)',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'
                        }}
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                <div
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        scrollbarWidth: 'none',
                        padding: '20px 40px',
                        gap: '30px',
                        scrollSnapType: 'x mandatory'
                    }}
                >
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            style={{
                                minWidth: '400px',
                                flex: '0 0 auto',
                                scrollSnapAlign: 'center',
                                position: 'relative'
                            }}
                            className="glass-card"
                        >
                            <div style={{
                                height: '280px',
                                background: '#111',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                borderBottom: '1px solid var(--glass-border)',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute', top: '15px', right: '15px',
                                    background: 'rgba(16, 185, 129, 0.9)', color: 'white',
                                    padding: '4px 12px', borderRadius: '20px', fontSize: '0.7rem',
                                    fontWeight: 800, border: '1px solid rgba(16, 185, 129, 0.2)',
                                    display: 'flex', alignItems: 'center', gap: '4px',
                                    zIndex: 10,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                                }}>
                                    <CheckCircle2 size={12} /> VERIFIED
                                </div>

                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            background: '#000'
                                        }}
                                    />
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '20px' }}>
                                        <Award size={60} style={{ opacity: 0.5, color: 'var(--primary)', marginBottom: '15px' }} />
                                        <p style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '5px' }}>{cert.title}</p>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{cert.issuer}</p>
                                    </div>
                                )}
                            </div>
                            <div style={{ padding: '15px 20px', background: 'rgba(255,255,255,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'white' }}>{cert.title}</p>
                                    <p style={{ fontSize: '0.7rem', color: 'var(--text-dim)' }}>{cert.issuer}</p>
                                </div>
                                <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700 }}>{cert.date}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
        @media (min-width: 1024px) {
          .nav-btns { display: block !important; }
        }
      `}</style>
        </section>
    );
};

export default Certificates;
