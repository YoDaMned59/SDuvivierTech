import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TypingEffect from './TypingEffect';


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
        <h1 className="hero__title">
          <TypingEffect 
            text="Développeur Web" 
            speed={100}
            delay={2000}
          />
        </h1>
        
        <h2 className="hero__subtitle">
          <TypingEffect 
            text="Créons ensemble votre présence en ligne" 
            speed={50}
            delay={1000}
          />
        </h2>
        
        <p className="hero__description">
          <TypingEffect 
            text="Je transforme vos idées en sites web modernes et performants. Spécialisé dans la création de sites vitrines et d'applications web sur mesure." 
            speed={30}
            delay={1500}
          />
        </p>
        
        <div className="hero__buttons">
          <Link to="/projets" className="contact-button">
            Voir mes projets
          </Link>
          <Link to="/contact" className="contact-button">
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero; 