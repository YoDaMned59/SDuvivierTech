import React, { useState } from 'react';
import '../styles/Contact.scss';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaCopyright, FaRegCalendarAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const contactData = {
  email: 'contact@sduviviertech.fr',
  phone: '+33 6 46 14 72 82',
  location: 'Meteren, Nord (59)',
  social: {
    linkedin: 'https://www.linkedin.com/in/sebastien-duvivier/',
    facebook: 'https://www.facebook.com/sebastien.duvivier',
    calendly: 'https://calendly.com/sduviviertech',
  },
};

const SERVICE_ID = 'service_xkvzhvh';
const TEMPLATE_ID = 'template_xwuna1s';
const PUBLIC_KEY = 'BXDcz7k22yRhBmZY5';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    if (!form.consent) {
      setError('Veuillez accepter la politique de confidentialité pour envoyer le message.');
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setSuccess('Votre message a bien été envoyé. Merci pour votre prise de contact !');
      setForm({ name: '', email: '', subject: '', message: '', consent: false });
    } catch (err) {
      setError("Une erreur s'est produite lors de l'envoi. Veuillez réessayer ou me contacter directement par email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contactez-moi</h2>
      <div className="contact-card">
        <div className="contact-card__content">
          <div className="contact-info">
            <h3>Informations de contact</h3>
            <div className="contact-info__item"><FaEnvelope /> <a href={`mailto:${contactData.email}`}>{contactData.email}</a></div>
            <div className="contact-info__item"><FaPhoneAlt /> <a href={`tel:${contactData.phone}`}>{contactData.phone}</a></div>
            <div className="contact-info__item"><FaMapMarkerAlt /> {contactData.location}</div>
            <h3>Réseaux sociaux</h3>
            <div className="contact-social">
              <a href={contactData.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href={contactData.social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href={contactData.social.calendly} target="_blank" rel="noopener noreferrer"><FaRegCalendarAlt /></a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="contact-form__group">
              <label htmlFor="name">Nom</label>
              <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required disabled={loading} />
            </div>
            <div className="contact-form__group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required disabled={loading} />
            </div>
            <div className="contact-form__group">
              <label htmlFor="subject">Sujet</label>
              <input type="text" id="subject" name="subject" value={form.subject} onChange={handleChange} required disabled={loading} />
            </div>
            <div className="contact-form__group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows="5" disabled={loading} />
            </div>
            <div className="contact-form__consent">
              <label className="checkbox-container">
                <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} required disabled={loading} />
                <span className="checkmark"></span>
                <span className="consent-text">
                  J'accepte que mes données soient traitées conformément à la{' '}
                  <a href="/politique-de-confidentialite" target="_blank" rel="noopener noreferrer">politique de confidentialité</a>
                </span>
              </label>
            </div>
            {success && <div className="contact-form__success">{success}</div>}
            {error && <div className="contact-form__error">{error}</div>}
            <button type="submit" className="contact-form__submit" disabled={loading}>
              {loading ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 