import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Junior Software Engineer',
      company: 'IBM',
      period: 'Mar 2025 - May 2025',
      description: 'Built site inspection app to automate site inspection, with AI integrated to produce reports.',
      technologies: ['AI Integration', 'Application Development', 'Automation']
    },
    {
      title: 'Platform Engineer Intern',
      company: 'IBM',
      period: 'Current',
      description: 'Working with Hybrid Cloud, containerized application deployment, and automation. Skilled in RedHat OpenShift, Kubernetes, Terraform, and Ansible. Working with Standard Bank, Nedbank, FRG, and Ethio Telecom to develop document processing dashboards, infuse AI, and develop analytics dashboards.',
      technologies: ['OpenShift', 'Kubernetes', 'Terraform', 'Ansible', 'DevOps', 'AI Integration']
    },
    {
      title: 'Software Dev Vac Work',
      company: 'Polymorph Systems',
      period: 'Dec 2022 - Jan 2023',
      description: 'Built a project management dashboard (Full-stack) for the company.',
      technologies: ['Full Stack', 'React', 'Node.js', 'Database']
    },
    {
      title: 'Mathematics Tutor',
      company: 'Freelance',
      period: 'Feb 2022 - Present',
      description: 'Helping first year engineering students with mathematics.',
      technologies: ['Mathematics', 'Teaching', 'Problem Solving']
    },
    {
      title: 'IT Trainer',
      company: 'Moshal',
      period: 'Dec 2021 - Present',
      description: 'Assisting Moshal students with basic computing and MS skills.',
      technologies: ['Training', 'Microsoft Office', 'Basic Computing']
    },
    {
      title: 'BI Learnership',
      company: 'Sanlam Investments / Umuzi.org',
      period: 'Nov 2020 – Apr 2021',
      description: 'Business Intelligence intern at Sanlam investments, through Umuzi.org as a recruit.',
      technologies: ['Business Intelligence', 'Data Analysis', 'SQL']
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="experience" className="experience" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>
        <motion.div
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <div className="timeline-company">
                    <FaBriefcase /> {exp.company}
                  </div>
                  <div className="timeline-period">
                    <FaCalendarAlt /> {exp.period}
                  </div>
                </div>
                <p className="timeline-description">{exp.description}</p>
                <div className="timeline-tech">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

