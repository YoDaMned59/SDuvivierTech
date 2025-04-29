import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SiCalendly } from 'react-icons/si';
import content from '../data/content.json';
import TypingEffect from './TypingEffect';
import { Helmet } from 'react-helmet';


function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Ajuster la taille du canvas à la section hero
    const resizeCanvas = () => {
      const heroSection = canvas.parentElement;
      canvas.width = heroSection.offsetWidth;
      canvas.height = heroSection.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Caractères pour l'effet Matrix
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()*&^%';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    // Initialiser les positions de départ
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Fonction de dessin
    const draw = () => {
      // Fond semi-transparent pour l'effet de traînée
      ctx.fillStyle = 'rgba(10, 10, 31, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Couleur du texte
      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      // Dessiner les caractères
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Réinitialiser la position si la colonne atteint le bas
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Animation
    const interval = setInterval(draw, 33);

    // Nettoyage
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="hero-container">
      <Helmet>
        <title>Développeur Web Freelance à Meteren | Création de sites modernes</title>
        <meta name="description" content="Développeur web à Meteren (59), création de sites vitrines et applications web modernes. Solutions sur-mesure, expertise front-end, accompagnement personnalisé." />
      </Helmet>
      <canvas
        ref={canvasRef}
        className="hero__matrix"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.15
        }}
      />
      <div className="hero">
        <h1 className="hero__title" style={{position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden'}}>
          Développeur web freelance à Meteren (Nord, 59) – Création de site vitrine, application web moderne, accompagnement digital, référencement SEO, front-end, solutions sur-mesure
        </h1>
        <div aria-hidden="false" style={{fontSize: '2.8rem', fontWeight: 700, lineHeight: 1.1, margin: '1.2rem 0'}}>
          <TypingEffect 
            text={content.hero.title}
            speed={100}
            delay={2000}
          />
        </div>
        <h2 className="hero__subtitle">
          <TypingEffect 
            text="Créons ensemble votre présence en ligne" 
            speed={50}
            delay={1000}
          />
        </h2>
        <h2 style={{fontSize: '1.2rem', color: '#D4B98C', marginTop: '1.5rem', textAlign: 'center', fontWeight: 500}}>
          Mes services de développement web et accompagnement digital
        </h2>
        <p className="hero__description">
          <TypingEffect 
            text={content.hero.description}
            speed={30}
            delay={1500}
          />
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <span style={{
            background: '#D4B98C',
            color: '#1A1A3F',
            borderRadius: '20px',
            padding: '0.35rem 1.2rem',
            fontWeight: '600',
            fontSize: '0.95rem',
            boxShadow: '0 1px 6px rgba(212,185,140,0.10)',
            letterSpacing: '0.2px',
            border: '1.5px solid #D4B98C',
            marginBottom: '1.1rem',
            zIndex: 2,
            position: 'relative',
            display: 'inline-block',
            textAlign: 'center',
          }}>
            Premier rendez-vous gratuit
          </span>
          <motion.div
            className="hero__buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            style={{ display: 'flex', flexDirection: 'row', gap: '1.2rem', justifyContent: 'center', alignItems: 'center', width: '100%' }}
          >
            <Link to="/offres" className="contact-button">
              Voir mes offres
            </Link>
            <a 
              href="https://calendly.com/sduviviertech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-button"
              style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <SiCalendly size={20} />
              Prendre rendez-vous
            </a>
          </motion.div>
          <div style={{marginTop: '0.7rem', textAlign: 'center'}}>
            <Link to="/contact" style={{ color: '#D4B98C', fontSize: '1rem', textDecoration: 'underline', opacity: 0.8 }}>
              Ou envoyez-moi un message
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero; 