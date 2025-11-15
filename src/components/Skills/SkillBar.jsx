import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const SkillBar = ({ skill, index, inView }) => {
  const barVariants = {
    hidden: { width: 0 },
    visible: {
      width: 10,
      transition: {
        duration: 1.2,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: index * 0.1
      }
    }
  };

  return (
    <div className="skill-bar-container">
      <div className="skill-info">
        <span className="skill-name">{skill.name}</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-progress"
          variants={barVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            background: `linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary))`
          }}
        ></motion.div>
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired,
  inView: PropTypes.bool.isRequired
};

export default SkillBar;