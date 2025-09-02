import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { data } from "./utils";
import "./styles.scss";
import { MdWork, MdSchool } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { Animate } from "react-simple-animate";

const Resume = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2,
  });

  return (
    <section id="resume" className="resume" ref={ref}>
      <Animate
        play={inView}
        duration={1}
        delay={0.3}
        start={{ transform: "translateY(50px)", opacity: 0 }}
        end={{ transform: "translateY(0px)", opacity: 1 }}
      >
        <PageHeaderContent
          headerText="Education & Experience"
          
        />
      </Animate>

      {/* ✅ Mobile extra heading */}
      <h2 className="resume__mobile-heading">Education & Experience</h2>

      <div className="timeline">
        {/* Education Section */}
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__education__vertical-timeline-element"
                contentStyle={{
                  background: " rgba(255, 255, 255, 0.05)",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                  borderRadius: "8px",
                }}
                date=""
                icon={<MdSchool />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <div className="education-year">{item.date}</div>
                  <h3 className="education-degree">{item.title}</h3>
                  <h4 className="education-institution">{item.subTitle}</h4>
                  <div className="education-grade">{item.description}</div>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Experience Section */}
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout={"1-column"}
            lineColor="var(--yellow-theme-main-color)"
          >
            {data.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: " rgba(255, 255, 255, 0.05)",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                  borderRadius: "8px",
                }}
                icon={<MdWork />}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>
                </div>
                <p className="vertical-timeline-element-title-wrapper-description">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};

export default Resume;
