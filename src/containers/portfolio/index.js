import React from "react";
import "./styles.scss";
import { useState, useEffect, useRef } from "react";

const portfolioData = [
  {
    id: 1,
    name: "E-commerce Platform",
    description:
      "A complete e-commerce solution with shopping cart, payment gateway integration, user authentication, and admin panel. Built with modern React patterns and responsive design.",
    githubLink: "https://github.com/yourusername/ecommerce-platform",
    liveLink: "https://your-ecommerce-demo.netlify.app",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
  },
  {
    id: 2,
    name: "Todo Application",
    description:
      "Interactive todo app with drag & drop functionality, categories, deadlines, progress tracking, and collaborative features for team productivity.",
    githubLink: "https://github.com/yourusername/todo-app",
    liveLink: "https://your-todo-app.netlify.app",
    technologies: ["React", "DnD Kit", "Context API", "LocalStorage"],
  },
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (portfolioRef.current) {
      observer.observe(portfolioRef.current);
    }

    return () => {
      if (portfolioRef.current) {
        observer.unobserve(portfolioRef.current);
      }
    };
  }, []);

  return (
    <section id="portfolio" className="portfolio" ref={portfolioRef}>
      <div className={`portfolio__content ${isVisible ? "animate" : ""}`}>
        {/* Header */}
        <div className="portfolio__header">
          <h1 className="portfolio__title">My Projects</h1>
          <div className="portfolio__title-underline"></div>
        </div>

        {/* Projects Grid */}
        <div className="portfolio__content__cards">
          {portfolioData.map((item, index) => (
            <div
              className={`portfolio__content__cards__item ${isVisible ? "animate-card" : ""
                }`}
              key={`cardItem${item.name.trim()}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="portfolio__content__cards__item__content">
                <div className="project-icon">
                  <div
                    className={`icon-placeholder ${index === 0 ? "ecommerce" : "todo"
                      }`}
                  >
                    {index === 0 ? "🛒" : "✅"}
                  </div>
                </div>

                <div className="project-info">
                  <h3>{item.name}</h3>
                  <p className="project-description">{item.description}</p>
                  <div className="technologies">
                    {item.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
