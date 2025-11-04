import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaCode, FaServer, FaCloud, FaDocker, FaGitAlt,
  FaPython, FaJava, FaNode, FaReact, FaAws
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiAnsible, SiOpenshift, SiTypescript, SiAngular } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const frontendSkills = [
    { name: 'HTML/CSS', icon: <FaCode /> },
    { name: 'JavaScript', icon: <FaCode /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Angular', icon: <SiAngular /> },
    { name: 'JavaFX', icon: <FaCode /> },
  ];

  const backendSkills = [
    { name: 'Python', icon: <FaPython /> },
    { name: 'Django/Flask', icon: <FaServer /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'C#', icon: <FaCode /> },
    { name: 'SQL', icon: <FaServer /> },
  ];

  const devopsSkills = [
    { name: 'OpenShift', icon: <SiOpenshift /> },
    { name: 'Kubernetes', icon: <SiKubernetes /> },
    { name: 'Terraform', icon: <SiTerraform /> },
    { name: 'Ansible', icon: <SiAnsible /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Git/GitHub', icon: <FaGitAlt /> },
    { name: 'Linux', icon: <FaServer /> },
  ];

  const SkillCategory = ({ title, skills }) => {
    return (
      <motion.div
        className="skill-category"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <h3>{title}</h3>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-item"
              whileHover={{ scale: 1.1, rotate: 5 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="skills-content">
          <SkillCategory title="Front-End" skills={frontendSkills} />
          <SkillCategory title="Back-End" skills={backendSkills} />
          <SkillCategory title="DevOps & Cloud" skills={devopsSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;

