import React from 'react';
import { motion, useInView } from 'framer-motion';
import '../About/About.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5, 
  faCss3, 
  faJs, 
  faReact, 
  faNode, 
  faFigma, 
  faJava,
} from '@fortawesome/free-brands-svg-icons';
import { SiMysql } from 'react-icons/si'; 

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const sectionVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }
  };

  return (
    <motion.div
      className='skills-container'
      id='skills'
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <h1>Skills</h1>
      <Slider {...settings}>
        <motion.div className='skill-item' variants={sectionVariants} transition={{ delay: 0.2 }}>
          <FontAwesomeIcon icon={faHtml5} size='3x' style={{ color: 'orangered' }} />
        </motion.div>
        <motion.div className='skill-item' variants={sectionVariants} transition={{ delay: 0.4 }}>
          <FontAwesomeIcon icon={faCss3} size='3x' style={{ color: 'blue' }} />
        </motion.div>
        <motion.div className='skill-item' variants={sectionVariants} transition={{ delay: 0.6 }}>
          <FontAwesomeIcon icon={faJs} size='3x' style={{ color: 'yellow' }} />
        </motion.div>
        <motion.div className='skill-item' variants={sectionVariants} transition={{ delay: 0.8 }}>
          <FontAwesomeIcon icon={faReact} size='3x' style={{ color: '#61dbfb' }} />
        </motion.div>
        <motion.div className='skill-item' variants={sectionVariants} transition={{ delay: 1.0 }}>
          <SiMysql size='3em' style={{ color: '#61dbfb' }} />
        </motion.div>
        <motion.div className='skill-item' variants={sectionVariants} transition={{ delay: 1.2 }}>
          <FontAwesomeIcon icon={faNode} size='3x' style={{ color: 'green' }} />
        </motion.div>
        <motion.div className='skill-item' variants={sectionVariants} transition={{ delay: 1.4 }}>
          <FontAwesomeIcon icon={faFigma} size='3x' style={{ color: 'purple' }} />
        </motion.div>
        <motion.div className='skill-item' variants={sectionVariants} transition={{ delay: 1.6 }}>
          <FontAwesomeIcon icon={faJava} size='3x' style={{ color: '#61db' }} />
        </motion.div>
      </Slider>
    </motion.div>
  );
};

export default Skills;
