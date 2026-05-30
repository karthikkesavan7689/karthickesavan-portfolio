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
            padding: '120px 0 60px',
            overflow: 'hidden'
        }}>
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
                WELCOME
            </div>

            {/* Background Blobs */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--primary)',
                filter: 'blur(150px)',
                opacity: 0.1,
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
                opacity: 0.1,
                zIndex: -1
            }} />

            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr', textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Centered Profile Image */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '2.5rem'
                    }}>
                        <div style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            padding: '10px',
                            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                            boxShadow: '0 0 60px rgba(99, 102, 241, 0.3)',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                                opacity: 0.4,
                                filter: 'blur(20px)',
                                zIndex: -1
                            }} />
                            <div style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '6px solid var(--bg-dark)',
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

                    <motion.span
                        className="section-label outfit"
                        style={{
                            marginBottom: '2rem',
                            fontSize: '0.9rem',
                            fontWeight: 800,
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid rgba(99, 102, 241, 0.5)',
                            padding: '10px 24px',
                            borderRadius: '30px',
                            color: 'var(--primary)',
                            boxShadow: '0 0 20px rgba(99, 102, 241, 0.2)',
                            letterSpacing: '2px'
                        }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        FULL STACK DEVELOPER
                    </motion.span>

                    <h1 className="glow-text" style={{
                        fontSize: 'clamp(2.5rem, 8vw, 6.5rem)',
                        fontWeight: 950,
                        lineHeight: 0.85,
                        marginBottom: '2.5rem',
                        letterSpacing: '-0.05em',
                        textTransform: 'uppercase',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                        <span style={{
                            background: 'linear-gradient(to bottom, #fff 60%, rgba(255,255,255,0.4))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.1))'
                        }}>KARTHICKKESAVAN</span>
                        <span className="gradient-text" style={{
                            fontSize: '0.8em',
                            display: 'block',
                            marginTop: '0.1em',
                            filter: 'drop-shadow(0 0 50px rgba(99, 102, 241, 0.8))',
                            background: 'linear-gradient(135deg, #818cf8, #c084fc)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>SR</span>
                    </h1>

                    <p className="text-dim outfit" style={{
                        fontSize: '1.4rem',
                        maxWidth: '800px',
                        margin: '0 auto 3rem',
                        lineHeight: 1.6,
                        fontWeight: 400
                    }}>
                        <span style={{ color: 'white', fontWeight: 700 }}>Crafting Digital</span> <span style={{
                            color: 'white',
                            fontWeight: 900,
                            letterSpacing: '0.05em',
                            textTransform: 'uppercase',
                            background: 'linear-gradient(to bottom, #fff 40%, var(--primary))',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            filter: 'drop-shadow(0 0 10px rgba(99, 102, 241, 0.3))'
                        }}>Excellence</span>. <br />
                        <span style={{ fontSize: '1.2rem', opacity: 0.8 }}>MERN Stack Specialist • Cloud Explorer • Security Enthusiast</span>
                    </p>

                    <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#projects"
                            className="btn btn-primary"
                            style={{ padding: '16px 35px', fontSize: '1.1rem' }}
                            whileHover={{ scale: 1.05, boxShadow: '0 15px 30px rgba(99, 102, 241, 0.4)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Projects <ArrowRight size={22} />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="btn glass-card"
                            style={{ padding: '16px 35px', fontSize: '1.1rem', background: 'rgba(255,255,255,0.03)' }}
                            whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.05)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Let's Connect
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'var(--text-dim)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px'
                }}
            >
                <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '3px', opacity: 0.6 }}>SCROLL</span>
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                    style={{ color: 'var(--primary)' }}
                >
                    <ChevronDown size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
