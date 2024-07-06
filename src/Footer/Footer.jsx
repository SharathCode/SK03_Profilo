import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";
import { Link as ScrollLink } from "react-scroll";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
      <a href="https://www.instagram.com/jerry_is_mine_16/">
          <FaInstagram/>
        </a>
        <a href="https://www.linkedin.com/in/asharathkumar/">
          <FaLinkedin  />
        </a>
        <a href="https://github.com/SharathCode">
          <FaGithub />
        </a>
      </div>
      <div className="footer-text">
        <ScrollLink to="navbar" smooth={true}>
        <p style={{cursor: "pointer", color:"white"}}>
          &copy; By Sharath Kumar - SK03
        </p>
      </ScrollLink>
      </div>
    </div>
  );
}

export default Footer;

