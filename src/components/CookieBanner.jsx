import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CookieBanner.scss';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Activer Google Analytics seulement après consentement
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const refuseCookies = () => {
    localStorage.setItem('cookieConsent', 'refused');
    setIsVisible(false);
    // Désactiver Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="cookie-banner" 
      role="dialog" 
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
    >
      <div className="cookie-banner__content">
        <div>
          <h2 id="cookie-title" className="visually-hidden">Consentement aux cookies</h2>
          <p id="cookie-description">
            Ce site utilise des cookies pour améliorer votre expérience. 
            En continuant à naviguer sur ce site, vous acceptez notre utilisation des cookies.
            Pour en savoir plus, consultez notre{' '}
            <Link 
              to="/politique-de-confidentialite"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.stopPropagation();
                }
              }}
            >
              politique de confidentialité
            </Link>.
          </p>
        </div>
        <div className="cookie-banner__buttons">
          <button 
            onClick={acceptCookies} 
            className="cookie-banner__accept"
            aria-label="Accepter les cookies"
          >
            Accepter
          </button>
          <button 
            onClick={refuseCookies} 
            className="cookie-banner__refuse"
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