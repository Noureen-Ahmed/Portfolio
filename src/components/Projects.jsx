import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
  {
    title: "FreshCart E-Commerce",
    tech: ["React.js", "Context API", "Tailwind CSS"],
    description: "A fully responsive online store featuring product filtering, cart/wishlist management, user authentication, and payment UI integration.",
    link: "https://ecommerce-gray-delta.vercel.app",
    github: "https://github.com/Noureen-Ahmed/ecommerce"
  },
  {
    title: "Game World Discovery",
    tech: ["React.js", "REST APIs", "CSS3"],
    description: "Dynamic game dashboard that fetches live data to display trending games with advanced search, sorting, and genre filtering.",
    link: "https://noureen-ahmed.github.io/GameOver/",
    github: "https://github.com/Noureen-Ahmed/GameOver"
  },
  {
    title: "Yummy Meal Finder",
    tech: ["JavaScript (ES6)", "HTML/CSS", "TheMealDB API"],
    description: "An interactive recipe application allowing users to search for meals by ingredients or area and view detailed cooking instructions.",
    link: "https://meals-five-alpha.vercel.app",
    github: "https://github.com/Noureen-Ahmed/Meals"
  },
  {
    title: "SkyWatch Weather",
    tech: ["JavaScript", "Fetch API"],
    description: "Designed a real-time weather tracker that uses Geolocation to display current conditions and 3-day forecasts with dynamic background visuals.",
    link: "https://weather-app-ochre-seven-98.vercel.app",
    github: "https://github.com/Noureen-Ahmed/WeatherApp"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <div className="section-header">
        <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="project-card glass"
          >
            <div className="project-content">
              <div className="project-icon">
                <Code2 size={40} className="text-primary" />
              </div>
              <h3>{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => <span key={t} className="tech-badge">{t}</span>)}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="icon-link"><Github size={18} /> Source</a>
                <a href={project.link} target="_blank" rel="noreferrer" className="icon-link"><ExternalLink size={18} /> Demo</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        .section-header {
          margin-bottom: 4rem;
          text-align: center;
        }
        .section-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .title-underline {
          width: 60px;
          height: 4px;
          background: var(--primary-color);
          margin: 0 auto;
          border-radius: 2px;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }
        .project-card {
          padding: 1.5rem;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        @media (max-width: 480px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .project-card {
            padding: 1.25rem;
          }
          .section-title {
            font-size: 2rem;
          }
        }
        .project-card:hover {
          transform: translateY(-10px);
          border-color: var(--primary-color);
        }
        .project-icon {
          margin-bottom: 1.5rem;
          color: var(--primary-color);
        }
        .project-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .project-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
          min-height: 80px;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }
        .tech-badge {
          background: rgba(99, 102, 241, 0.1);
          color: var(--primary-color);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }
        .project-links {
          display: flex;
          gap: 1.5rem;
        }
        .icon-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-main);
        }
        .icon-link:hover {
          color: var(--primary-color);
        }
        .text-primary { color: var(--primary-color); }
      `}</style>
    </section>
  );
};

export default Projects;
