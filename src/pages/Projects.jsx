import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/main.scss';
import siteArtisanImage from '../assets/site-artisan.jpg';
import homeBeauticianImage from '../assets/Home-beautician.jpg';
import ninaCarducciImage from '../assets/nina-carducci.webp';
import printItImage from '../assets/print-it.jpg';

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

  // Mapping des images
  const projectImages = {
    'repro-toutes-reparations': siteArtisanImage,
    'home-beautician': homeBeauticianImage,
    'nina-carducci': ninaCarducciImage,
    'print-it': printItImage
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Ajout d'un timestamp pour éviter le cache du navigateur
        const timestamp = new Date().getTime();
        const response = await fetch(`/data/projects.json?t=${timestamp}`);
        
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des projets');
        }

        const data = await response.json();
        setProjects(data.projects || []);
        setError(null);
      } catch (error) {
        console.error('Erreur:', error);
        setError('Impossible de charger les projets. Veuillez réessayer plus tard.');
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
    
    // Rafraîchir les données toutes les 30 secondes
    const interval = setInterval(fetchProjects, 30000);
    
    // Nettoyage à la destruction du composant
    return () => clearInterval(interval);
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
        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="project-card__image">
                <img 
                  src={projectImages[project.id]} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.onerror = null;
                    console.error(`Image non trouvée pour le projet: ${project.id}`);
                  }}
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
        </div>
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