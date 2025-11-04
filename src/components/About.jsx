import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaChess, FaMusic, FaHeart, FaBrain } from 'react-icons/fa';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  const hobbies = [
    { icon: <FaBrain />, text: 'Learning new things daily' },
    { icon: <FaMusic />, text: 'Deejaying occasionally' },
    { icon: <FaHeart />, text: 'Helping others grow' },
    { icon: <FaChess />, text: 'Mathematics & problem solving' },
  ];

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          
          <motion.div variants={itemVariants} className="about-content">
            <div className="about-text">
              <motion.p
                variants={itemVariants}
                className="about-description"
              >
                Platform Engineer Intern at <strong>IBM</strong> with a strong foundation in Hybrid Cloud, 
                containerized application deployment, and automation. Skilled in <strong>RedHat OpenShift</strong>, 
                <strong> Kubernetes</strong>, <strong>Terraform</strong>, and <strong>Ansible</strong>, with hands-on 
                experience deploying and maintaining scalable solutions across cloud environments.
              </motion.p>
              
              <motion.p
                variants={itemVariants}
                className="about-description"
              >
                Member of the <strong>Golden Key International Honour Society</strong> and a BSc. Computer Science, 
                Mathematics & Applied Mathematics graduate with <strong>18 distinctions</strong>. Passionate about 
                driving business outcomes through DevOps and platform engineering practices. Dedicated to leveraging 
                emerging technologies to deliver impact and innovation in enterprise and client-facing environments.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="about-description"
              >
                I take ownership of my work, as it defines my identity. I am obsessed with my work and always deliver 
                quality and beyond what is required. <strong>Mathematics is my first language</strong>, and I consider 
                problem-solving to be one of my greatest strengths.
              </motion.p>
            </div>

            <motion.div
              variants={itemVariants}
              className="about-hobbies"
            >
              <h3>My Hobbies & Interests</h3>
              <div className="hobbies-grid">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="hobby-card"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="hobby-icon">{hobby.icon}</div>
                    <p>{hobby.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

