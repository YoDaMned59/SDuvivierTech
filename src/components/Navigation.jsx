import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/LogoSduvivierTech.png';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAboutClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    if (location.pathname === '/') {
      // Si on est sur la page d'accueil, on défile directement vers la section
      const aboutSection = document.querySelector('.about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si on est sur une autre page, on retourne à l'accueil puis on défile
      navigate('/');
      setTimeout(() => {
        const aboutSection = document.querySelector('.about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className={`navigation ${scrolled ? 'navigation--scrolled' : ''}`}>
      <div className="navigation__container">
        <Link to="/" className="navigation__logo">
          <img src={logo} alt="SDuvivierTech" />
        </Link>

        <button 
          className={`navigation__burger ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <div />
          <div />
          <div />
        </button>

        <div className={`navigation__links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
          <a href="#about" onClick={handleAboutClick}>À propos</a>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link>
          <Link to="/projects" onClick={() => setIsMenuOpen(false)}>Projets</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 