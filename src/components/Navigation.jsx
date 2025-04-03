import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/LogoSduvivierTech.png';

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleAboutClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      // Si on n'est pas sur la page d'accueil, on y retourne d'abord
      navigate('/', { state: { scrollToAbout: true } });
    } else {
      // Si on est déjà sur la page d'accueil, on défile directement
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="navigation__container">
        <div className="navigation__logo">
          <img src={logo} alt="SDuvivierTech" className="navigation__logo-img" />
        </div>

        <div className="navigation__links">
          <Link
            to="/"
            className={`navigation__link ${location.pathname === '/' ? 'navigation__link--active' : ''}`}
          >
            Accueil
          </Link>
          <a
            href="/#about"
            className="navigation__link"
            onClick={handleAboutClick}
          >
            À propos
          </a>
          <Link
            to="/projets"
            className={`navigation__link ${location.pathname === '/projets' ? 'navigation__link--active' : ''}`}
          >
            Projets
          </Link>
          <Link
            to="/services"
            className={`navigation__link ${location.pathname === '/services' ? 'navigation__link--active' : ''}`}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={`navigation__link ${location.pathname === '/contact' ? 'navigation__link--active' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 