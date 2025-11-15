import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import SkillBar from './SkillBar';
import './Skills.css';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const skillsData = [
    { name: 'C++'},
    { name: 'HTML'},
    { name: 'CSS'},
    { name: 'JavaScript'},
    { name: 'PHP'},
    { name: 'SQL'},
    { name: 'MySQL'},
    { name: 'React JS'},
    { name: 'MUI'},
    { name: 'Bootstrap'},
    { name: 'Strapi'},
    { name: 'Firebase'},
    { name: 'Supabase'},
    { name: 'Node JS'},
    { name: 'Express JS'},
    { name: 'MongoDB'},
    { name: '3D Modeling'},
    { name: 'Blender'},
    { name: 'Microsoft Office'},
    { name: 'CCNA'},
    { name: 'Security +'},
    { name: 'Linux Basics'},
    { name: 'Electrical Circuits'},
    { name: 'Arduino Programming'},
    { name: 'PCB Design'},

  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ['HTML', 'CSS', 'JavaScript', 'React JS', 'MUI', 'Bootstrap']
    },
    {
      title: "Backend Development",
      skills: ['PHP', 'Node JS', 'Express JS', 'Strapi']
    },
    {
      title: "Databases",
      skills: ['MySQL', 'MongoDB', 'Firebase', 'Supabase']
    },
    {
      title: "Programming Languages",
      skills: ['C++', 'JavaScript', 'PHP', 'SQL']
    },
    {
      title: "Network & Cyber Security",
      skills: ['CCNA', 'Security +', 'Linux Basics']
    },
    {
      title: "Electronics",
      skills: ['Electrical Circuits', 'Arduino Programming', 'PCB Design']
    },
    {
      title: "Other Skills",
      skills: ['3D Modeling', 'Blender', 'Microsoft Office']
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle">
            Here's a comprehensive overview of my technical skills and expertise
          </p>
        </motion.div>

        <div className="skills-categories">
  {skillCategories.map((category, index) => (
    <motion.div
      key={index}
      className="skills-category"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
    >
      <motion.h3
        className="category-title"
        initial={{ opacity: 0, y: 15 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
        transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      >
        {category.title}
      </motion.h3>

      <motion.div
        className="skills-list"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skillsData
          .filter(skill => category.skills.includes(skill.name))
          .map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -15 }}
              transition={{ duration: 0.4, delay: 0.2 + idx * 0.05 }}
            >
              <SkillBar skill={skill} index={idx} inView={inView} />
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Skills;