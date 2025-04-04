import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';
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

function Projects() {
  const getProjectImage = (title) => {
    switch (title) {
      case "Repro Toutes Réparations":
        return siteArtisanImage;
      case "Home Beautician":
        return homeBeauticianImage;
      case "Nina Carducci":
        return ninaCarducciImage;
      case "Print-It":
        return printItImage;
      default:
        return null;
    }
  };

  return (
    <div className="projects-page">
      <motion.h1 
        className="projects-page__title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Mes Projets
      </motion.h1>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectsData.projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            variants={itemVariants}
          >
            <div className="project-card__image">
              <img 
                src={getProjectImage(project.title)} 
                alt={project.title} 
                loading="lazy"
                width="400"
                height="300"
              />
            </div>
            <div className="project-card__content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-card__link">
                Voir le projet
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>

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
    </div>
  );
}

export default Projects; 