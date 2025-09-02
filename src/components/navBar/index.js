import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import "./styles.scss";

const data = [
  { label: "HOME", to: "home" },
  { label: "ABOUT ME", to: "about" },
  { label: "SKILLS", to: "skills" },
  { label: "EDUCATION", to: "resume" },
  { label: "PROJECT", to: "portfolio" },
  { label: "CONTACT", to: "contact" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const handleToggleIcon = () => setToggleIcon(!toggleIcon);
  const closeMenu = () => setToggleIcon(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveLink(hash || "home");
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar__container">
          <h1>
            Rohit's <span>Portfolio</span>
          </h1>
        </div>

        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <a
                href={`#${item.to}`}
                className={`navbar__container__menu__item__links ${activeLink === item.to ? "active" : ""
                  }`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
