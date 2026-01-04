import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="footer section">
      <div className="container">
        <div className="footer-content">
          <div className="contact-info">
            <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
            <p className="contact-desc">
              I'm always open to new opportunities and collaborations.
              Feel free to reach out to me!
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <Mail className="text-primary" size={20} />
                <a href="mailto:noureenahmed1610@gmail.com">noureenahmed1610@gmail.com</a>
              </div>
              <div className="contact-item">
                <Phone className="text-primary" size={20} />
                <a href="tel:01013229538">01013229538</a>
              </div>
              <div className="contact-item">
                <MapPin className="text-primary" size={20} />
                <span>Cairo, Egypt</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#experience">Experience</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h3>Social</h3>
              <ul>
                <li><a href="https://github.com/Noureen-Ahmed" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/noureen-ahmed-7b23a5308/" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a></li>
                <li><a href="https://vercel.com/noureens-projects-f45114cb" target="_blank" rel="noreferrer"><ExternalLink size={18} /> Vercel</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Noureen Ahmed. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--surface-color);
          padding-top: 6rem;
          padding-bottom: 3rem;
        }
        .footer-content {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }
        .contact-desc {
          color: var(--text-muted);
          margin-bottom: 2.5rem;
          max-width: 400px;
        }
        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          font-size: 1.1rem;
        }
        .contact-item a:hover {
          color: var(--primary-color);
        }
        .footer-links {
          display: flex;
          justify-content: space-between;
        }
        .link-group h3 {
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          color: var(--text-main);
        }
        .link-group ul {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }
        .link-group ul li a {
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .link-group ul li a:hover {
          color: var(--primary-color);
        }
        .footer-bottom {
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
          text-align: center;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        @media (max-width: 768px) {
          .footer-content { grid-template-columns: 1fr; gap: 3rem; }
          .footer-links { justify-content: flex-start; gap: 4rem; }
        }
        @media (max-width: 480px) {
          .footer-links { flex-direction: column; gap: 2rem; }
          .contact-item { font-size: 0.95rem; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
