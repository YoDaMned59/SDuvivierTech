import React from 'react';
import offersData from '../data/offers.json';
import '../styles/Offres.scss';

function Offres() {
  return (
    <section id="offres" className="offres-section">
      <h2 className="page-title">Mes Offres</h2>
      <div className="offers-grid">
        {offersData.offers.map((offre, idx) => (
          <div className="offer-card" key={idx}>
            <h3 className="card-title">{offre.title}</h3>
            <div className="amount">{offre.price}</div>
            <ul className="features">
              {offre.features.map((feature, i) => (
                <li key={i}>{feature.text}</li>
              ))}
            </ul>
            {offre.tagline && <div className="tagline">{offre.tagline}</div>}
            {offre.subscription && (
              <div className="subscription-box">
                <div className="sub-title">{offre.subscription.price}</div>
                <ul>
                  {offre.subscription.services_inclus.map((service, i) => (
                    <li key={i}><strong>{service.titre}</strong> : {service.description}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      {Array.isArray(offersData.whySubscription) && (
        <div className="why-subscription-block">
          <h2 className="why-subscription-title">Pourquoi souscrire à un abonnement&nbsp;?</h2>
          <div className="why-subscription-grid">
            {offersData.whySubscription.map((item, idx) => (
              <div className="why-subscription-item" key={idx}>
                <div className="why-subscription-item-title">{item.title}</div>
                <div className="why-subscription-item-desc">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

export default Offres; 