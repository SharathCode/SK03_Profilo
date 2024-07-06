import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import PacmanLoader from "react-spinners/PacmanLoader";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Skills from "./Skills/Skills";
import Project from "./Project-myFile/Project";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import './index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Adjust timeout duration as needed

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  const Section = ({ children, delay }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      {loading ? (
        <div className="loading">
          <PacmanLoader
            color={"red"} // Example color, replace with your desired color
            loading={loading}
            size={25}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Section delay={0}>
            <Navbar />
          </Section>
          <Section delay={0.2}>
            <Banner />
          </Section>
          <Section delay={1.2}>
            <About />
          </Section>
          <Section delay={1.4}>
            <Skills />
          </Section>
          <Section delay={1.8}>
            <Project />
          </Section>
          <Section delay={1.0}>
            <Contact />
          </Section>
          <Section delay={1.2}>
            <Footer />
          </Section>
        </div>
      )}
    </>
  );
}

export default App;
