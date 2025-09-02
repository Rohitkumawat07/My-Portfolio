import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaPython,
  FaDatabase,
  FaNodeJs
} from "react-icons/fa";
import { SiCplusplus, SiMongodb } from "react-icons/si";
import { Animate } from "react-simple-animate";
import PageHeaderContent from "../../components/pageHeaderContent";
import { skillsData } from "./utils";
import './styles.scss';

const skillIcons = {
  "HTML": <FaHtml5 />,
  "CSS": <FaCss3Alt />,
  "JAVASCRIPT": <FaJs />,
  "REACT": <FaReact />,
  "JAVA": <FaJava />,
  "PYTHON": <FaPython />,
  "C/C++": <SiCplusplus />,
  "SQL": <FaDatabase />,
  "MONGO DB": <SiMongodb />,
  "NODE.JS": <FaNodeJs />
};

const Skills = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false); // reset karne ke liye
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <Animate
        play={inView}
        duration={1}
        delay={0.3}
        start={{
          transform: "translateX(-200px)",
          opacity: 0
        }}
        end={{
          transform: "translateX(0px)",
          opacity: 1
        }}
      >
        <PageHeaderContent
          headerText="Skills"
          className="skills__heading"
        />
      </Animate>

      <div className="skills__content-wrapper">
        {skillsData.map((item, i) => (
          <div key={i} className="skills__content-wrapper__inner-content">
            <Animate
              play={inView}
              duration={1}
              delay={0.5}
              start={{
                transform: "translateY(50px)",
                opacity: 0
              }}
              end={{
                transform: "translateY(0px)",
                opacity: 1
              }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {item.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {item.data.map((skillItem, j) => (
                  <div className="progressbar-wrapper" key={j}>
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">
                          {skillIcons[skillItem.skillName]}
                        </span>
                        <p className="skill-name">{skillItem.skillName}</p>
                      </div>
                      <span className="skill-percentage">{skillItem.percentage}%</span>
                    </div>

                    <div className="progress-track">
                      <div
                        className="progress-fill"
                        style={{
                          width: `${skillItem.percentage}%`,
                          animation: inView
                            ? `fillProgress 2.5s ease-out ${0.8 + (j * 0.3)}s both`
                            : "none"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
