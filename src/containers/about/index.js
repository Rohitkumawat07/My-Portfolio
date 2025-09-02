import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import { useInView } from "react-intersection-observer";
import "./styles.scss";

const jobSummary =
  `Hi, I’m <span class="highlightName">Rohit Kumar Kumawat</span>, a 19-year-old tech enthusiast and final-year Computer Science Engineering student. I specialize in web development and enjoy solving problems while creating clean, responsive, and visually engaging digital experiences. My aim is to grow as a developer and build solutions that make a real impact.`;

const personalLinks = [
  { icon: <FaUser />, link: "#", label: "Name" },
  { icon: <FaMapMarkerAlt />, link: "https://maps.google.com?q=India", label: "Address" },
  { icon: <FaEnvelope />, link: "mailto:rohitkumawat7230@gmail.com", label: "Email" },
  { icon: <FaPhone />, link: "tel:+917230926473", label: "Contact" },
  { icon: <FaYoutube />, link: "https://www.youtube.com/@PodPizza2", label: "YouTube" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rohit-kumar-kumawat/", label: "LinkedIn" },
  { icon: <FaGithub />, link: "https://github.com/Rohitkumawat07", label: "GitHub" },
];

const About = () => {

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section id="about" className="about" ref={ref}>
      <PageHeaderContent headerText="About Me" />

      <div className="about__content">
        {/* LEFT SIDE - TEXT */}
        <div className="about__content__personalWrapper">
          <Animate
            play={inView}
            duration={1.5}
            delay={0.3}
            start={{ transform: "translateY(-50px)", opacity: 0 }}
            end={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <h3 className="aboutTitle">Full Stack Development</h3>
            <p
              className="aboutSummary"
              dangerouslySetInnerHTML={{ __html: jobSummary }}
            ></p>
          </Animate>

          <Animate
            play={inView}
            duration={1.5}
            delay={0.6}
            start={{ transform: "translateY(50px)", opacity: 0 }}
            end={{ transform: "translateY(0px)", opacity: 1 }}
          >
            <div className="iconLinks">
              {personalLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="iconLink"
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </Animate>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="about__content__imageWrapper">
          <Animate
            play={inView}
            duration={1.5}
            delay={0.9}
            start={{ transform: "translateX(200px)", opacity: 0 }}
            end={{ transform: "translateX(0px)", opacity: 1 }}
          >
            <img
              src="/About.jpg"
              alt="about me"
              className="aboutImage"
            />
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
