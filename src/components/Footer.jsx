import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer style={{
            padding: '80px 0 40px',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            marginTop: '80px',
            background: 'linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.02))'
        }}>
            <div className="container">
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '40px'
                }}>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{
                            width: '50px',
                            height: '50px',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            color: 'var(--primary)',
                            transition: 'var(--transition-smooth)'
                        }}
                    >
                        <ArrowUp size={24} />
                    </motion.div>

                    <div style={{ display: 'flex', gap: '30px' }}>
                        {[
                            { icon: <Github size={22} />, href: 'https://github.com/kesavann7689' },
                            { icon: <Linkedin size={22} />, href: 'https://www.linkedin.com/in/karthik-kesavan-39907a3b3?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
                            { icon: <Mail size={22} />, href: 'mailto:karthikkesavan7689@gmail.com' }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'var(--text-dim)', transition: '0.3s' }}
                                whileHover={{ color: 'white', y: -5 }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center' }}>
                        <p style={{ color: 'white', fontWeight: 800, fontSize: '1.2rem', marginBottom: '10px', letterSpacing: '0.1em' }}>
                            KARTHICKKESAVAN <span className="gradient-text">SR</span>
                        </p>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '20px' }}>
                            Designed & Built with <span style={{ color: '#ef4444' }}>❤</span>
                        </p>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem', opacity: 0.5 }}>
                            © {new Date().getFullYear()} All rights reserved.
                        </p>
                    </div>
                </div>
            </div>

            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                bottom: '-100px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '600px',
                height: '300px',
                background: 'radial-gradient(circle, var(--primary-glow), transparent 70%)',
                opacity: 0.2,
                zIndex: -1
            }} />
        </footer>
    );
};

export default Footer;
