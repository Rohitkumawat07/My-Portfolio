import React, { useEffect, useState, useRef } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import emailjs from "emailjs-com";
import "./styles.scss";

const Contact = () => {
  const [playAnimation, setPlayAnimation] = useState(false);
  const form = useRef();

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

    const section = document.getElementById("contact");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    
    const handleHashChange = () => {
      if (window.location.hash === "#contact") {
        setPlayAnimation(false); 
        setTimeout(() => setPlayAnimation(true), 50); 
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_77lg30q", // 👉 apna service ID yaha dal
        "your_template_id", // 👉 apna template ID yaha dal
        form.current,
        "your_public_key" // 👉 apna public key yaha dal
      )
      .then(
        (result) => {
          alert("Message sent successfully ✅");
          e.target.reset();
        },
        (error) => {
          alert("Something went wrong ❌");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent headerText="Contact" icon={<FaEnvelope size={40} />} />

      <div className="contact__content">
        {/* Left Box */}
        <Animate
          play={playAnimation}
          duration={1}
          delay={0}
          start={{ transform: "translateX(-200px)", opacity: 0 }}
          end={{ transform: "translateX(0)", opacity: 1 }}
        >
          <div className="contact__content__left">
            <h2 className="box-title">Let's Talk</h2>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </Animate>

        {/* Right Box */}
        <Animate
          play={playAnimation}
          duration={1}
          delay={0.3}
          start={{ transform: "translateX(200px)", opacity: 0 }}
          end={{ transform: "translateX(0)", opacity: 1 }}
        >
          <div className="contact__content__right">
            <h2 className="box-title">Contact Details</h2>
            <div className="detail-item">
              <FaMapMarkerAlt /> Jaipur, Rajasthan, India
            </div>
            <div className="detail-item">
              <FaEnvelope /> rohitkumawat7230@email.com
            </div>
            <div className="detail-item">
              <FaPhone /> +91 7230926473
            </div>
            <div className="detail-item">
              <FaGlobe /> www.rohitportfolio.com
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
