import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'lraseemela@gmail.com',
      link: 'mailto:lraseemela@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+27 67 088 0796',
      link: 'tel:+27670880796'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'Lionel Raseemela',
      link: 'https://www.linkedin.com/in/lionel-raseemela-46090ab9/'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'HackerWithDrip',
      link: 'https://github.com/HackerWithDrip'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Tzaneen, South Africa',
      link: '#'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={itemVariants}
            className="contact-intro"
          >
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
          </motion.p>
          <div className="contact-grid">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                className="contact-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <span className="contact-label">{info.label}</span>
                  <span className="contact-value">{info.value}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
        <motion.footer
          className="footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <p>© {new Date().getFullYear()} Created by Lionel Raseemela</p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;

