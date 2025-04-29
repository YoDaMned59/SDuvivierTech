import { motion } from 'framer-motion';
import { FiCode, FiLayout, FiSettings } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import content from '../data/content.json';
import { Helmet } from 'react-helmet';

const iconMap = {
  code: <FiCode size={40} />,
  layout: <FiLayout size={40} />,
  settings: <FiSettings size={40} />
};

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

function Services() {
  return (
    <div className="services-page">
      <Helmet>
        <title>Services Web | Création de sites et applications - SDuvivierTech</title>
        <meta name="description" content="Découvrez mes services de développement web : création de sites vitrines, applications sur-mesure, intégration front-end, maintenance et support technique à Lille et dans le Nord." />
        <meta name="keywords" content="services web, création site, application web, intégration front-end, maintenance, support, Lille, Nord, freelance, développeur web, site vitrine, sur-mesure" />
      </Helmet>
      <motion.h1 
        className="services-page__title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Mes Services
      </motion.h1>

      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {content.services.map((service, index) => (
          <motion.div 
            key={index}
            className="service-card"
            variants={itemVariants}
          >
            <div className="service-card__icon">
              {iconMap[service.icon]}
            </div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            {service.subtitle && (
              <p className="service-card__subtitle">{service.subtitle}</p>
            )}
            <ul className="service-card__features">
              {service.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            {service.pricing && (
              <p className="service-card__pricing">{service.pricing}</p>
            )}
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="services-page__pricing-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="pricing-box__content">
          <h3>💰 Des services adaptés à votre budget</h3>
          <p>
            Chaque projet est unique, et son tarif aussi ! Développement web à partir de 250€.{' '}
            <em>Parlons de votre projet et trouvons la meilleure solution pour vous.</em>
          </p>
          <p className="pricing-box__note">
            ✨ Devis gratuit, sans engagement.
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="services-page__cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link to="/contact" className="contact-button">
          Contactez-moi
        </Link>
      </motion.div>
    </div>
  );
}

export default Services; 