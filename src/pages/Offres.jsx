import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import offersData from '../data/offers.json';
import { getIcon } from '../utils/iconUtils';
import '../styles/Offres.scss';

const Offres = () => {

  const [selectedOffer, setSelectedOffer] = useState(null);

  const handleOfferClick = (offer) => {
    setSelectedOffer(offer);
  };

  return (
    <div className="offres-page">
      <div className="container">
        <h1 className="page-title">
          Mes Offres
        </h1>
        <div className="offers-grid">
          {offersData.offers.map((offer, index) => (
            <div 
              className="offer-card" 
              key={offer.title}
              style={{"--card-index": index}}
            >
              {offer.badge && (
                <div className="badge">
                  {offer.badge}
                </div>
              )}
              {offer.evolutionLabel && (
                <div className="evolution-label">
                  {offer.evolutionLabel}
                </div>
              )}
              <div className="icon-wrapper">
                {getIcon(offer.icon)}
              </div>
              <h2 className="card-title">
                {offer.title}
              </h2>
              <p className="card-description">
                {offer.description}
              </p>
              <div className="price">
                <span className="amount">{offer.price}</span>
                <span className="period">{offer.period}</span>
                {offer.priceNote && (
                  <span className="price-note">{offer.priceNote}</span>
                )}
              </div>

              <div className="features">
                {offer.features.map((feature, featureIndex) => (
                  <div 
                    className="feature-item" 
                    key={feature.text}
                    style={{"--feature-index": featureIndex}}
                  >
                    <span className="feature-icon">{getIcon(feature.icon)}</span>
                    <span className="feature-text">{feature.text}</span>
                  </div>
                ))}
              </div>

              {offer.price === "250€/site" && (
                <Link to="/projects" className="view-projects-btn">
                  Voir les modèles disponibles →
                </Link>
              )}

              {offer.tagline && (
                <div className="tagline">
                  {offer.tagline}
                </div>
              )}

              <div className="subscription-box">
                <div className="sub-title">Abonnement</div>
                <div className="sub-price">{offer.subscription.price}</div>
                <div className="sub-description">
                  {offer.subscription.description}
                </div>
              </div>

              <Link to="/contact" className="cta-button">
                Parlons de votre projet
              </Link>
            </div>
          ))}
        </div>

        <div className="subscription-section">
          <h2 className="section-title">
            Pourquoi souscrire à un abonnement ?
          </h2>
          <div className="benefits-grid">
            {offersData.subscriptionBenefits.map((benefit, index) => (
              <div 
                className="benefit-item" 
                key={benefit.title}
                style={{"--benefit-index": index}}
              >
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offres; 