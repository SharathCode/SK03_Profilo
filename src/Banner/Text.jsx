import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const messages = [
  'Namaste!',
  'Hello pals',
  'Hi there!',
  'Bonjour!',
];

const Text = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === messages.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change message every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <motion.p
        key={index}
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'red',
          fontFamily: '"Margarine", sans-serif',
        }}
      >
        {messages[index]}
      </motion.p>
    </div>
  );
};

export default Text;
