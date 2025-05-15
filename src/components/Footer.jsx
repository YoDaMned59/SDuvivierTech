import { Link } from 'react-router-dom';
import { FiLinkedin, FiFacebook } from 'react-icons/fi';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SiCalendly } from 'react-icons/si';
import content from '../data/content.json';

function Footer() {
  const { email, phone, address, social } = content.contact;
  const currentYear = new Date().getFullYear();

  const handleFooterNav = (e, sectionClass) => {
    e.preventDefault();
    const scrollToSection = () => {
      const section = document.querySelector(sectionClass);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
    if (window.location.pathname === '/') {
      scrollToSection();
    } else {
      window.location.href = '/';
      setTimeout(scrollToSection, 100);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
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
            <ul className="footer__links">
              <li><a href="#services" onClick={e => handleFooterNav(e, '.services-section')} className="footer__link">Services</a></li>
              <li><a href="#projects" onClick={e => handleFooterNav(e, '.projects-section')} className="footer__link">Projets</a></li>
              <li><a href="#contact" onClick={e => handleFooterNav(e, '.contact-section')} className="footer__link">Contact</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Informations légales</h3>
            <ul className="footer__links">
              <li><Link to="/mentions-legales" className="footer__link">Mentions légales</Link></li>
              <li><Link to="/politique-de-confidentialite" className="footer__link">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="social-links">
            {social.github && (
              <a href={social.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            )}
            {social.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            )}
            {social.twitter && (
              <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            )}
            {social.facebook && (
              <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                <FiFacebook />
              </a>
            )}
            <a href="https://calendly.com/sduviviertech" target="_blank" rel="noopener noreferrer">
              <SiCalendly />
            </a>
          </div>
          <p className="footer__text" style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>
            SIRET : 941 373 623 00011
          </p>
          <p className="footer__copyright">
            © {currentYear} SDuvivierTech. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 