import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CookieBanner.scss';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    // Vérifier si le consentement existe déjà
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      setShowBanner(false);
      // Configurer Google Analytics en fonction du consentement
      if (consent === 'accepted') {
        window['ga-disable-G-71037Y3R1S'] = false;
        window.gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      } else {
        window['ga-disable-G-71037Y3R1S'] = true;
        window.gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }
    } else {
      // Si pas de consentement, désactiver Google Analytics par défaut
      window['ga-disable-G-71037Y3R1S'] = true;
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    // Activer Google Analytics
    window['ga-disable-G-71037Y3R1S'] = false;
    // Réinitialiser Google Analytics
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  };

  const handleRefuse = () => {
    localStorage.setItem('cookieConsent', 'refused');
    localStorage.setItem('cookieConsentDate', new Date().toISOString());
    setShowBanner(false);
    // Désactiver Google Analytics
    window['ga-disable-G-71037Y3R1S'] = true;
    // Mettre à jour le consentement
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
      <h2 id="cookie-title" className="visually-hidden">Paramètres des cookies</h2>
      <p id="cookie-description" className="visually-hidden">
        Nous utilisons des cookies pour analyser le trafic de notre site. Vous pouvez accepter ou refuser leur utilisation.
      </p>
      <div className="cookie-banner__content">
        <p>
          Nous utilisons des cookies pour analyser le trafic de notre site et améliorer votre expérience. 
          Conformément aux nouvelles politiques de confidentialité des navigateurs, nous limitons l'utilisation des cookies tiers.
          En acceptant, vous consentez à leur utilisation. Pour plus d'informations, consultez notre{' '}
          <Link to="/politique-de-confidentialite" onClick={(e) => e.stopPropagation()}>
            politique de confidentialité
          </Link>.
        </p>
        <div className="cookie-banner__buttons">
          <button 
            onClick={handleAccept}
            className="cookie-banner__button cookie-banner__button--accept"
            aria-label="Accepter les cookies"
          >
            Accepter
          </button>
          <button 
            onClick={handleRefuse}
            className="cookie-banner__button cookie-banner__button--refuse"
            aria-label="Refuser les cookies"
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 