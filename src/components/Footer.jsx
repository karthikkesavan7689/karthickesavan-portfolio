import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '50px 0',
            borderTop: '1px solid var(--glass-border)',
            marginTop: '50px',
            textAlign: 'center'
        }}>
            <div className="container">
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginBottom: '10px' }}>
                    © {new Date().getFullYear()} <span style={{ color: 'white', fontWeight: 700, letterSpacing: '0.05em' }}>KARTHICKKESAVAN SR</span>. All rights reserved.
                </p>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>
                    Built with <span style={{ color: '#ef4444' }}>❤</span> using React & Framer Motion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
