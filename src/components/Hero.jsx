import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import heroProfile from '../image/WhatsApp Image 2026-02-23 at 10.40.46 PM.jpeg';

const Hero = () => {
    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            padding: '120px 0 60px'
        }}>
            {/* Background Blobs */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--primary)',
                filter: 'blur(150px)',
                opacity: 0.15,
                zIndex: -1
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--secondary)',
                filter: 'blur(150px)',
                opacity: 0.15,
                zIndex: -1
            }} />

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Centered Profile Image */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '2rem'
                    }}>
                        <div style={{
                            width: '180px',
                            height: '180px',
                            borderRadius: '50%',
                            padding: '8px',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            boxShadow: '0 0 40px rgba(99, 102, 241, 0.3)',
                            position: 'relative'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '4px solid var(--bg-dark)',
                                background: 'var(--bg-card)'
                            }}>
                                <img
                                    src={heroProfile}
                                    alt="KSR Hero Profile"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <span className="section-label outfit" style={{
                        marginBottom: '1.5rem',
                        fontSize: '0.9rem',
                        fontWeight: 800,
                        background: 'rgba(99, 102, 241, 0.15)',
                        border: '1px solid var(--primary)'
                    }}>
                        Full Stack Developer
                    </span>

                    <h1 className="glow-text" style={{
                        fontSize: 'clamp(2.5rem, 8vw, 6rem)',
                        fontWeight: 950,
                        lineHeight: 1,
                        marginBottom: '2rem',
                        letterSpacing: '-0.02em',
                        textTransform: 'uppercase',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <span style={{
                            background: 'linear-gradient(to bottom, #fff, #ccc)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>KARTHICKKESAVAN</span>
                        <span className="gradient-text" style={{
                            fontSize: '1.2em',
                            filter: 'drop-shadow(0 0 30px rgba(99, 102, 241, 0.4))'
                        }}>SR</span>
                    </h1>

                    <p className="text-dim outfit" style={{
                        fontSize: '1.25rem',
                        maxWidth: '750px',
                        margin: '0 auto 2.5rem',
                        lineHeight: 1.8,
                        fontWeight: 400
                    }}>
                        <span style={{ color: 'white', fontWeight: 700 }}>Hello, I am</span> <span style={{
                            color: 'white',
                            fontWeight: 900,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            background: 'linear-gradient(to bottom, #fff 40%, var(--primary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.3))'
                        }}>KARTHICKKESAVAN SR</span>. <br />
                        <span style={{ fontSize: '1.1rem' }}>I build modern, responsive web applications using the MERN stack and explore the frontiers of Cloud & Security.</span>
                    </p>

                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#projects"
                            className="btn btn-primary"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn glass-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'var(--text-dim)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px'
                }}
            >
                <span style={{ fontSize: '0.8rem', fontWeight: 500, letterSpacing: '1px' }}>SCROLL</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
