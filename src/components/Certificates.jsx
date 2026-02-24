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
        <section id="certificates" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
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
                AWARD
            </div>

            <div className="container" style={{ marginBottom: '60px', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">Gallery</span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 850, marginBottom: '20px' }}>
                        My <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="text-dim" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        A showcase of my professional achievements and industrial training credentials.
                    </p>
                </motion.div>
            </div>

            <div style={{ position: 'relative' }}>
                {/* Navigation Buttons */}
                <div style={{ display: 'none' }} className="nav-btns">
                    <button
                        onClick={() => scroll('left')}
                        className="glass-card"
                        style={{
                            position: 'absolute', left: '40px', top: '50%', transform: 'translateY(-50%)',
                            zIndex: 10, width: '60px', height: '60px', border: '1px solid var(--glass-border)',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white',
                            cursor: 'pointer', background: 'rgba(2, 6, 23, 0.5)'
                        }}
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="glass-card"
                        style={{
                            position: 'absolute', right: '40px', top: '50%', transform: 'translateY(-50%)',
                            zIndex: 10, width: '60px', height: '60px', border: '1px solid var(--glass-border)',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white',
                            cursor: 'pointer', background: 'rgba(2, 6, 23, 0.5)'
                        }}
                    >
                        <ChevronRight size={28} />
                    </button>
                </div>

                <div
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        scrollbarWidth: 'none',
                        padding: '40px',
                        gap: '30px',
                        scrollSnapType: 'x mandatory'
                    }}
                    className="cert-scroll"
                >
                    {certs.map((cert, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            style={{
                                minWidth: '420px',
                                flex: '0 0 auto',
                                scrollSnapAlign: 'center',
                                position: 'relative'
                            }}
                            className="glass-card cert-card"
                        >
                            <div style={{
                                height: '300px',
                                background: '#000',
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
                                    padding: '6px 14px', borderRadius: '20px', fontSize: '0.75rem',
                                    fontWeight: 800, border: '1px solid rgba(16, 185, 129, 0.2)',
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    zIndex: 10,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)'
                                }}>
                                    <CheckCircle2 size={14} /> VERIFIED
                                </div>

                                {cert.image ? (
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'contain',
                                            transition: 'transform 0.5s ease'
                                        }}
                                        className="cert-img"
                                    />
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '30px' }}>
                                        <Award size={70} style={{ opacity: 0.4, color: 'var(--primary)', marginBottom: '20px' }} />
                                        <p style={{ fontSize: '1.4rem', fontWeight: 800, color: 'white', marginBottom: '8px' }}>{cert.title}</p>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', fontWeight: 500 }}>{cert.issuer}</p>
                                    </div>
                                )}
                            </div>
                            <div style={{
                                padding: '25px 30px',
                                background: 'rgba(255,255,255,0.01)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'white', marginBottom: '4px' }}>{cert.title}</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 500 }}>{cert.issuer}</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--primary)',
                                        fontWeight: 800,
                                        padding: '4px 12px',
                                        background: 'rgba(99, 102, 241, 0.1)',
                                        borderRadius: '20px'
                                    }}>
                                        {cert.date}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                @media (min-width: 1024px) {
                    .nav-btns { display: block !important; }
                }
                .cert-scroll::-webkit-scrollbar { display: none; }
                .cert-card:hover .cert-img {
                    transform: scale(1.05);
                }
                @media (max-width: 640px) {
                    .cert-card { min-width: 320px !important; }
                }
            `}</style>
        </section>
    );
};

export default Certificates;
