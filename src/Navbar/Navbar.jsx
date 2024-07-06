import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; 
import { motion } from 'framer-motion';
import './Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const logoVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  const menuVariants = {
    hidden: { opacity: 0, x: 105 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.ScrollLink
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.5 }}
          to="banner"
          smooth={true}
          className="logo"
        >
          <span style={{ color: "red" }}>*</span>
          <span style={{ color: "yellow" }}>SK</span>
          <span>03</span>
          <span style={{ color: "red" }}>*</span>
        </motion.ScrollLink>
        <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <motion.ul
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.7 }}
          className={`menu ${isOpen ? 'open' : ''}`}
        >
          <li className="menu-item">
            <ScrollLink to="about" smooth={true} className="menu-link" onClick={closeMenu}>
              About
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink to="skills" smooth={true} className="menu-link" onClick={closeMenu}>
              Skills
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink to="projects" smooth={true} className="menu-link" onClick={closeMenu}>
              Projects
            </ScrollLink>
          </li>
          <li className="menu-item">
            <ScrollLink to="contact" smooth={true} className="menu-link" onClick={closeMenu}>
              Contact
            </ScrollLink>
          </li>
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;
