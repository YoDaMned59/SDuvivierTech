import { Link } from 'react-router-dom';
import { FiLinkedin, FiFacebook } from 'react-icons/fi';
import content from '../data/content.json';

function Footer() {
  const { email, phone, address, social } = content.contact;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">À propos</h3>
            <p className="footer__text">
              Monsieur Sébastien Duvivier, développeur web passionné, 
              crée des solutions numériques sur mesure pour donner vie à vos projets.
            </p>
            <p className="footer__text" style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              SIRET : 941 373 623 00011
            </p>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Contact</h3>
            <ul className="footer__list">
              <li>
                <a href={`mailto:${email}`} className="footer__link" aria-label="Envoyer un email">
                  {email}
                </a>
              </li>
              <li>
                <a href={`tel:${phone}`} className="footer__link" aria-label="Appeler">
                  {phone}
                </a>
              </li>
              <li>
                <span className="footer__text">{address}</span>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Liens rapides</h3>
            <ul className="footer__list">
              <li><Link to="/" className="footer__link">Accueil</Link></li>
              <li><Link to="/services" className="footer__link">Services</Link></li>
              <li><Link to="/projets" className="footer__link">Projets</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="social-links" style={{ marginBottom: '1rem' }}>
            <a 
              href={social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__link"
              aria-label="Visiter notre page LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a 
              href={social.facebook} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer__link"
              aria-label="Visiter notre page Facebook"
            >
              <FiFacebook size={24} />
            </a>
          </div>
          <p className="footer__copyright">
            © {currentYear} SDuvivierTech. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 