import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { supabase } from '../../dbConnection';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data, error } = await supabase
          .from('my-projects')
          .select('*');

        if (error) {
          console.error('Error fetching projects:', error.message);
          setProjects([]);
        } else {
          setProjects(data || []);
        }
      } catch (err) {
        console.error('Unexpected error:', err.message);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web' },
    // { value: 'frontend', label: 'Frontend' },
    // { value: 'fullstack', label: 'Full Stack' },
    { value: '3d', label: '3D' },
    { value: 'embedded', label: 'Embedded' },
    // { value: 'security', label: 'Security & Network' },
  ];


  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;


    if (Array.isArray(project.category))
      return project.category.includes(filter);
    else if (typeof project.category === 'string')
      return project.category.split(',').map(c => c.trim()).includes(filter);

    return false;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  if (loading) {
    return (
      <section id="projects" className="projects">
        <div className="container">
          <p>Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects">
      <div className="container" ref={ref}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Check out some of my recent work
          </p>
        </motion.div>

        <motion.div
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {filters.map((item, index) => (
            <button
              key={index}
              className={`filter-btn ${filter === item.value ? 'active' : ''}`}
              onClick={() => setFilter(item.value)}
            >
              {item.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} inView={inView} />
            ))
          ) : (
            <p>No projects found for this category.</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
