import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const ProjectCard = ({ project }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="project-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="project-image">
        <img
          className="img-prjct-crd"
          src={project.image}
          alt={project.title}
        />
        <div className="project-overlay">
          <div className="project-links">
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              <FaExternalLinkAlt />
              <span>Open</span>
            </a>
          </div>
        </div>
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {Array.isArray(project.technologies)
            ? project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))
            : project.technologies
                ?.split(',')
                .map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech.trim()}
                  </span>
                ))}
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]).isRequired,
    demo: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
