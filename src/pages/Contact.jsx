import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi';
import { SiCalendly } from 'react-icons/si';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import content from '../data/content.json';
import { Helmet } from 'react-helmet';

// Initialisation d'EmailJS
emailjs.init("BXDcz7k22yRhBmZY5");

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

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      setStatus({
        type: 'error',
        message: 'Veuillez accepter la politique de confidentialité pour envoyer le message.'
      });
      return;
    }
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        'service_xkvzhvh',
        'template_xwuna1s',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'BXDcz7k22yRhBmZY5'
      );

      setStatus({
        type: 'success',
        message: 'Votre message a été envoyé avec succès !'
      });
      setFormData({ name: '', email: '', subject: '', message: '', consent: false });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact | Demandez un devis ou un rendez-vous - SDuvivierTech</title>
        <meta name="description" content="Contactez Sébastien Duvivier, développeur web freelance à Lille, pour toute demande de devis, rendez-vous ou information sur la création de votre site web." />
        <meta name="keywords" content="contact, devis, rendez-vous, développeur web, freelance, Lille, Nord, création site web, site vitrine, application web" />
      </Helmet>
      <motion.h1 
        className="contact-page__title"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contactez-moi
      </motion.h1>

      <motion.div 
        className="contact-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="contact-info"
          variants={itemVariants}
        >
          <h2>Informations de contact</h2>
          <div className="contact-info__item">
            <FiMail />
            <a href={`mailto:${content.contact.email}`}>{content.contact.email}</a>
          </div>
          <div className="contact-info__item">
            <FiPhone />
            <a href={`tel:${content.contact.phone}`}>{content.contact.phone}</a>
          </div>
          <div className="contact-info__item">
            <FiMapPin />
            <span>{content.contact.location}</span>
          </div>

          <h3>Réseaux sociaux</h3>
          <div className="contact-info__social">
            <div className="social-links">
              <a href={content.contact.social.linkedin} target="_blank" rel="noopener noreferrer">
                <FiLinkedin />
              </a>
              <a href={content.contact.social.facebook} target="_blank" rel="noopener noreferrer">
                <FiFacebook />
              </a>
              <a href="https://calendly.com/sduviviertech" target="_blank" rel="noopener noreferrer">
                <SiCalendly />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form"
          variants={itemVariants}
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group consent-group">
            <label className="checkbox-container">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              />
              <span className="checkmark"></span>
              <span className="consent-text">
                J'accepte que mes données soient traitées conformément à la{' '}
                <Link to="/politique-de-confidentialite">politique de confidentialité</Link>
              </span>
            </label>
          </div>
          {status.message && (
            <div className={`form-status ${status.type}`}>
              {status.message}
            </div>
          )}
          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </motion.form>
      </motion.div>
    </div>
  );
}

export default Contact; 