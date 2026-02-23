import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
      <Footer />

      {/* Global Background Elements */}
      <div className="bg-decorations">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <style>{`
        .bg-decorations {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -2;
          overflow: hidden;
          pointer-events: none;
        }
        .blob {
          position: absolute;
          width: 800px;
          height: 800px;
          border-radius: 50%;
          filter: blur(150px);
          opacity: 0.12;
        }
        .blob-1 {
          background: var(--primary);
          top: -300px;
          left: -200px;
        }
        .blob-2 {
          background: var(--secondary);
          bottom: -300px;
          right: -200px;
        }
        .blob-3 {
          position: absolute;
          width: 600px;
          height: 600px;
          background: var(--accent);
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(180px);
          opacity: 0.08;
          z-index: -3;
        }
        @keyframes float {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(100px, 50px) scale(1.1); }
          100% { transform: translate(-50px, 100px) scale(0.9); }
        }
      `}</style>
    </div>
  );
}

export default App;
