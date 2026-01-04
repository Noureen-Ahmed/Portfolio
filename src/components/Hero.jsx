import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MousePointer2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section container">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="hero-subtitle">Hello, I'm</h2>
          <h1 className="hero-title">
            <span className="gradient-text">Noureen Ahmed</span>
          </h1>
          <h3 className="hero-role">Frontend Developer</h3>
          <p className="hero-description">
            4th year Computer Science student at ScienceAin Shams University.
            Passionate about creating interactive, user-friendly, and responsive web experiences
            with modern technologies.
          </p>

          <div className="hero-actions">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="btn btn-primary"
            >
              Get in Touch
            </motion.a>
            <div className="hero-socials">
              <a href="https://github.com/Noureen-Ahmed" target="_blank" rel="noreferrer"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/noureen-ahmed-7b23a5308/" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
              <a href="mailto:noureenahmed1610@gmail.com"><Mail size={20} /></a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="scroll-indicator"
      >
        <MousePointer2 size={24} className="text-muted" />
      </motion.div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
        }
        .hero-subtitle {
          font-size: 1.25rem;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
          font-weight: 500;
        }
        .hero-title {
          font-size: 5rem;
          line-height: 1.1;
          margin-bottom: 1rem;
          font-weight: 800;
        }
        .hero-role {
          font-size: 2rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }
        .hero-description {
          max-width: 600px;
          font-size: 1.1rem;
          color: var(--text-muted);
          margin-bottom: 3rem;
          line-height: 1.8;
        }
        .hero-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .btn {
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-weight: 600;
          transition: var(--transition);
        }
        .btn-primary {
          background: var(--primary-color);
          color: white;
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(99, 102, 241, 0.3);
        }
        .hero-socials {
          display: flex;
          gap: 1.5rem;
          color: var(--text-muted);
        }
        .hero-socials a:hover {
          color: var(--primary-color);
        }
        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
        }
        @media (max-width: 968px) {
          .hero-title { font-size: 4rem; }
        }
        @media (max-width: 768px) {
          .hero-section { padding-top: 8rem; align-items: flex-start; }
          .hero-title { font-size: 3.5rem; }
          .hero-role { font-size: 1.5rem; }
          .hero-actions { flex-direction: column; align-items: flex-start; gap: 2rem; }
          .hero-socials { order: -1; }
        }
        @media (max-width: 480px) {
          .hero-title { font-size: 2.8rem; }
          .hero-subtitle { font-size: 1.1rem; }
          .hero-description { font-size: 1rem; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
