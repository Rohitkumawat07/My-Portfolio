import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Footer = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setPlayAnimation(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const footerSection = document.getElementById("footer");
    if (footerSection) observer.observe(footerSection);

    return () => {
      if (footerSection) observer.unobserve(footerSection);
    };
  }, []);

  return (
    <footer id="footer" className="footer">
      <Animate
        play={playAnimation}
        duration={1}
        delay={0}
        start={{ transform: "translateY(50px)", opacity: 0 }}
        end={{ transform: "translateY(0)", opacity: 1 }}
      >
        <div className="footer__content">

          <div className="footer__section">
            <h3>About</h3>
            <p>Hi, My name is Rohit Kumar Kumawat and I am a passionate Web Developer and Video Editor!</p>
          </div>

          <div className="footer__section">
            <h3>Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#resume">Education</a></li>
              <li><a href="#portfolio">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3>Services</h3>
            <ul>
              <li>Web Design</li>
              <li>Web Development</li>
            </ul>
          </div>

          <div className="footer__section">
            <h3>Contact Info</h3>
            <p><FaMapMarkerAlt /> Jaipur, Rajasthan, India (Bharat)</p>
            <p><FaEnvelope /> rohitkumawat7230@gmail.com</p>
            <p><FaPhone /> +91 7230926473</p>
            <p><FaGlobe /> www.rohitkumawatportfolio.com</p>
          </div>

        </div>

        <div className="footer__bottom">
          <p>© 2025 All rights reserved by <a href="#home">Rohit Kumar Kumawat</a></p>
        </div>
      </Animate>
    </footer>
  );
};

export default Footer;
