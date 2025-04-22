import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/main.scss';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchProjects = async () => {
      try {
        const timestamp = new Date().getTime();
        const response = await fetch(`${window.location.origin}/data/projects.json?t=${timestamp}`);
        
        if (!response.ok) {
          throw new Error(`Erreur lors du chargement des projets: ${response.status}`);
        }

        const data = await response.json();
        
        if (isMounted) {
          if (Array.isArray(data.projects)) {
            setProjects(data.projects);
            setError(null);
          } else {
            throw new Error('Format de données invalide');
          }
        }
      } catch (error) {
        if (isMounted) {
          setError('Impossible de charger les projets. Veuillez réessayer plus tard.');
          setProjects([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="projects-page">
        <div className="loading">Chargement des projets...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-page">
        <div className="error">{error}</div>
      </div>
    );
  }

  return (
    <motion.div 
      className="projects-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="projects-page__title">Mes Projets</h1>
      {projects.length === 0 ? (
        <div className="no-projects">
          Aucun projet disponible pour le moment.
        </div>
      ) : (
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
            >
              <div className="project-card__image">
                <img 
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={600}
                  loading="lazy"
                />
              </div>
              <div className="project-card__content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                  >
                    Voir le projet
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div 
        className="projects-page__cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link to="/contact" className="contact-button">
          Contactez-moi
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Projects; 