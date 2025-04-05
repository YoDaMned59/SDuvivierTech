import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ContactForm.scss';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert('Veuillez accepter la politique de confidentialité pour envoyer le message.');
      return;
    }
    // Logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__group">
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

      <div className="contact-form__group">
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

      <div className="contact-form__group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
        />
      </div>

      <div className="contact-form__consent">
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

      <button type="submit" className="contact-form__submit">
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm; 