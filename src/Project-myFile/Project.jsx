import React from 'react';
import { motion, useInView } from 'framer-motion';
import './Project.css'; 
import project1 from '../assets/project1.png';
import project2 from '../assets/comingsoon.jpg';

// Define an array of projects
const projects = [
  {
    id: 1,
    image: project1,
    title: 'Gym Website',
    button: 'https://sharathcode.github.io/GYM-Website/',
  },
  {
    id: 2,
    image: project2,
    title: 'Another Project',
    button: 'https://example.com',
  },
];

const Project = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true , threshold: 0.5  });

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 2 } }
  };

  return (
    <motion.div
      className='project-container'
      id='projects'
      offset={300}
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      style={{paddingTop:'50px'}}
    >
      <h1>My Projects</h1>
      <div className='projects-list'>
        {projects.map((project, index) => (
          <motion.div
            className='project-item'
            key={project.id}
            variants={sectionVariants}
            transition={{ delay: index * 0.2 }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.button} target="_blank" rel="noopener noreferrer">
              <button>View Project</button>
            </a>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Project;
