import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/Rohit-Kumar-Kumawat.pdf"; 
    link.download = "Rohit-Kumar-Kumawat.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="home">
      <div className="home__content">
        {/* Left side text */}
        <div className="home__text-wrapper">
          <h1>
            Hello, I'm Rohit
            <br />
            Full Stack Developer
          </h1>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateY(100px)", opacity: 0 }}
            end={{ transform: "translateY(0)", opacity: 1 }}
          >
            <div className="home__contact-me">
              <button className="pulse" onClick={handleNavigateToContactMePage}>
                Contact Me
              </button>
              <button className="pulse" onClick={handleDownloadCv}>
                Download CV
              </button>
            </div>
          </Animate>
        </div>

        {/* Right side image */}
        <Animate
          play
          duration={1.5}
          delay={0.5}
          start={{ transform: "translateX(100px)", opacity: 0 }}
          end={{ transform: "translateX(0)", opacity: 1 }}
        >
          <div className="home__image-wrapper">
            <img src="/Portfolio.jpg" alt="profile" />

          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Home;
