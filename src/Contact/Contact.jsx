import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import emailjs from 'emailjs-com';
import './Contact.css'; 
import contact from '../assets/contact.webp'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [inputColor, setInputColor] = useState('#ccc'); // Initial color for inputs

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Example: Change input color based on input value length
    if (name === 'name') {
      setInputColor(value.length > 0 ? 'green' : 'red');
    } else if (name === 'email') {
      setInputColor(value.length > 0 ? 'blue' : 'red');
    } else if (name === 'message') {
      setInputColor(value.length > 0 ? 'purple' : 'red');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r0klyit', 'template_bajs3le', e.target, '-QMQDYPmMX6_lFZ6x')
      .then((result) => {
          console.log(result.text);
          setSuccessMessage('Your message has been sent successfully!');
          setErrorMessage('');
      }, (error) => {
          console.log(error.text);
          setErrorMessage('Failed to send the message. Please try again later.');
          setSuccessMessage('');
      });

    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true ,threshold: 0.5 });

  const sectionVariants = {
    hidden: { opacity: 0, scale:0.2},
    visible: { opacity:1,scale:1, transition: { duration: 2 } }
  };

  return (
    <motion.div
    id='contact'
      className='contact-container'
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ delay: 0.2 }}
      >
        <h1>Get in Touch</h1>
        <p>Please fill out the form in this section to contact me.</p>
        <p><span>Address:</span> Hyderabad - Telangana</p>
        <p><span>Email:</span> <a href="mailto:sharathkumardeaf@gmail.com">sharathkumardeaf@gmail.com</a></p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            style={{ borderColor: inputColor }} // Dynamically set border color
          /> <br />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            style={{ borderColor: inputColor }} // Dynamically set border color
          /><br />
          <textarea
            name="message"
            id="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            style={{ borderColor: inputColor }} // Dynamically set border color
          /><br />
          <button type="submit">Send Message</button>
        </form>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </motion.div>

      <motion.div
        className='contact-img'
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={sectionVariants}
        transition={{ delay: 0.4 }}
      >
        <img src={contact} alt="Contact" />
      </motion.div>
    </motion.div>
  );
}

export default Contact;
