import React from "react";
import { motion, useInView } from "framer-motion";
import "./About.css";
import personal from "../assets/personal.png";
import resume from "../assets/SharathKumar_Resume.pdf";

function About() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const sectionVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration:2 } }
  };

  return (
    <motion.div
      className="About"
      id="about"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <h1>About Me</h1>
      <div className="About-flex">
        <motion.div
          className="about-img"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ delay: 0.2 }}
        >
          <img src={personal} alt="About Me" />
        </motion.div>
        <motion.div
          className="about-text"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={sectionVariants}
          transition={{ delay: 0.4 }}
        >
          <p>
            Hi pals, I am Sharath Kumar from Hyderabad. I completed my B.Tech
            from Kalasalingam University in 2023. <br /> As a fresher in Frontend
            Development, I am passionate about creating seamless user
            experiences. With a solid foundation in HTML, CSS, and JavaScript, I
            focus on building visually appealing and easy-to-navigate websites.
            By applying my knowledge of responsive design and UI/UX principles,
            I aim to bring ideas to life, ensuring every project is both
            precise and functional.
          </p>
          <a href={resume} download="Resume">
            <button>Download resume</button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
