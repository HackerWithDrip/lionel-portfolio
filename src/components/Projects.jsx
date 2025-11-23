import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Document Verification Dashboard',
      description: 'Developed document processing dashboards for Standard Bank with AI integration for automated document analysis and processing.',
      technologies: ['AI/ML', 'React', 'Node.js', 'Python', 'Dashboard Development'],
      link: '#',
      github: '#'
    },
    {
      title: 'Analytics Dashboard - Ethio Telecom',
      description: 'Currently developing analytics dashboard for Ethio Telecom company to provide insights and data visualization.',
      technologies: ['Analytics', 'Data Visualization', 'React', 'API Integration'],
      link: '#',
      github: '#'
    },
    {
      title: 'Site Inspection App',
      description: 'Built site inspection app to automate site inspection processes, with AI integrated to produce comprehensive reports.',
      technologies: ['AI Integration', 'Mobile Development', 'Automation', 'Report Generation'],
      link: '#',
      github: '#'
    },
    {
      title: 'Project Management Dashboard',
      description: 'Full-stack project management dashboard built for Polymorph Systems to streamline project workflows and team collaboration.',
      technologies: ['Full Stack', 'React', 'Node.js', 'Database', 'REST API'],
      link: '#',
      github: '#'
    },
    {
      title: 'Document Processing Dashboard',
      description: 'Developed document processing dashboards for Nedbank with AI integration for automated document analysis and processing.',
      technologies: ['AI/ML', 'React', 'Node.js', 'Python', 'Dashboard Development'],
      link: '#',
      github: '#'
    },
    {
      title: 'Credit Application Dashboard',
      description: 'Developed Credit Application dashboard for FRG with AI integration for automated document analysis and processing.',
      technologies: ['AI/ML', 'React', 'Node.js', 'Python', 'Dashboard Development'],
      link: '#',
      github: '#'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="projects" className="projects" ref={ref}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="project-header">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                  )}
                </div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

