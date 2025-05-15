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

  const handleNavClick = (e, sectionClass) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const scrollToSection = () => {
      const section = document.querySelector(sectionClass);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (location.pathname === '/') {
      scrollToSection();
    } else {
      navigate('/');
      setTimeout(scrollToSection, 100);
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
          <a href="#services" onClick={e => handleNavClick(e, '.services-section')}>Services</a>
          <a href="#offres" onClick={e => handleNavClick(e, '.offres-section')}>Offres</a>
          <a href="#projects" onClick={e => handleNavClick(e, '.projects-section')}>Projets</a>
          <a href="#contact" onClick={e => handleNavClick(e, '.contact-section')}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation; 