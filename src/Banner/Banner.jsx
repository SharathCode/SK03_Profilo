import React from "react";
import { FaGithub, FaSms } from "react-icons/fa";
import { RiScrollToBottomFill } from "react-icons/ri";

import Text from "./Text";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Banner.css";
import { Link as ScrollLink } from "react-scroll";

import { motion } from "framer-motion";

function Banner() {
  return (
    <div className="banner-container" id="banner">
      {/* <img src={personal} alt="" className='img-personal' /> */}

      <Text />

      <motion.h2
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.5 }}
      >
        I am <span>Sharath Kumar</span>
      </motion.h2>
      <motion.p
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 2, delay: 1.4 }}
      >
        Frontend Developer
      </motion.p>
      <motion.span variants={{
          hidden:{opacity:0,y:-100},
          visible:{opacity:1,y:0},
        }}
        initial="hidden"
        animate ="visible"
        transition={{duration:1, delay:2}} style={{ paddingTop: "30px" }}>
        Visionary Frontend Developer with a passion for crafting visually{" "}
        <br></br> stunning, pixel-perfect.
      </motion.span>
      <br />
      <ScrollLink to="contact" smooth={true}>
        <motion.p variants={{
          hidden:{opacity:0,x:-100},
          visible:{opacity:1,x:0},
        }}
        initial="hidden"
        animate ="visible"
        transition={{duration:1, delay:2.2}}
          style={{
            paddingBottom: "40px",
            paddingTop: "30px",
            cursor: "pointer",
            textAlign: "center",
          }}
          className="btn"
        >
          Connect Me <FaSms />
        </motion.p>
      </ScrollLink>
      <ScrollLink to="about" smooth={true}>
        <motion.p variants={{
          hidden:{opacity:0,scale:0.1},
          visible:{opacity:1,scale:1},
        }}
        initial="hidden"
        animate ="visible"
        transition={{duration:1, delay:2.2}} style={{ paddingTop: "30px", cursor: "pointer" }}>
          <RiScrollToBottomFill /> Scroll down
        </motion.p>
      </ScrollLink>
      <div className="social-media">
        <motion.a variants={{
          hidden:{opacity:0,y:-100},
          visible:{opacity:1,y:0},
        }}
        initial="hidden"
        animate ="visible"
        transition={{duration:1, delay:1.5}} href="https://www.instagram.com/jerry_is_mine_16/">
          <FaInstagram style={{ marginBottom: "20px", color: "orangered" }} />
        </motion.a>
        <motion.a variants={{
          hidden:{opacity:0,scale:0.2},
          visible:{opacity:1,scale:1},
        }}
        initial="hidden"
        animate ="visible"
        transition={{duration:1, delay:1.7}}href="https://www.linkedin.com/in/asharathkumar/">
          <FaLinkedin style={{ marginBottom: "20px", color: "blue" }} />
        </motion.a>
        <motion.a variants={{
          hidden:{opacity:0,y:100},
          visible:{opacity:1,y:0},
        }}
        initial="hidden"
        animate ="visible"
        transition={{duration:1, delay:1.5}} href="https://github.com/SharathCode">
          <FaGithub style={{ marginBottom: "20px", color: "black" }} />
        </motion.a>
      </div>
    </div>
  );
}

export default Banner;
