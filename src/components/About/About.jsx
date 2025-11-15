import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { FaUser, FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import img from '../../../assests/my-img.jpeg' 
import './About.css';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="about">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Let me share a short introduction about who I am
          </p>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-image-container"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="about-image">
              <img 
                src={img} 
                alt="Profile" 
              />
            </div>
          </motion.div>

          <motion.div
            className="about-text"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p variants={itemVariants}>
              Hello! I'm deeply passionate about programming, with previous experience in web development and a growing interest in networks and cybersecurity.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              Currently, I'm pursuing my studies in Electronics and Communications Engineering, where I’m also building knowledge in embedded systems. This background gives me a strong technical foundation and fuels my curiosity to explore how software, hardware, and security intersect.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              I enjoy learning new technologies, tackling challenges, and continuously improving my skills to grow as a versatile engineer ready to contribute in both development and cybersecurity fields.
            </motion.p>

            <motion.div className="about-cards" variants={containerVariants}>
              <motion.div className="about-card" variants={itemVariants}>
                <div className="card-icon">
                  <FaUser />
                </div>
                <h3>Personal</h3>
                <p>Based in 10th of Ramadan City, Sharqia, Egypt. <br/>Interested in programming and technology.</p>
              </motion.div>

              <motion.div className="about-card" variants={itemVariants}>
                <div className="card-icon">
                  <FaCode />
                </div>
                <h3>Developer</h3>
                <p>Self-study in Frontend and Database development.</p>
              </motion.div>

              <motion.div className="about-card" variants={itemVariants}>
                <div className="card-icon">
                  <FaGraduationCap />
                </div>
                <h3>Education</h3>
                <p>Studying Electronics and Communications Engineering. <br/> Planning to specialize in Cybersecurity and Embedded Systems..</p>
              </motion.div>

              <motion.div className="about-card" variants={itemVariants}>
                <div className="card-icon">
                  <FaBriefcase />
                </div>
                <h3>Experience</h3>
                <p>Building skills through self-study and personal projects.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;