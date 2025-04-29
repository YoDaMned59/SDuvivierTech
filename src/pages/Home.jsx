import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import MatrixBackground from '../components/MatrixBackground';

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Si on arrive avec l'état scrollToAbout, on défile vers la section
    if (location.state?.scrollToAbout) {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
      // On nettoie l'état pour éviter un défilement non voulu lors des prochaines visites
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <div className="about__text" style={{maxWidth: 700, margin: '2.5rem auto 0 auto'}}>
        <p>
          Basé à Meteren dans le Nord (59), près de Bailleul et Lille, j'accompagne les entrepreneurs, commerçants et PME de la région et de toute la France dans la création de sites web modernes, performants et sur-mesure. Proximité, écoute et réactivité sont au cœur de ma démarche. Retrouvez-moi aussi sur <a href="https://www.linkedin.com/in/duviviersebastien/" target="_blank" rel="noopener noreferrer" style={{color:'#D4B98C',textDecoration:'underline'}}>LinkedIn</a> et <a href="https://www.facebook.com/profile.php?id=61573940604104" target="_blank" rel="noopener noreferrer" style={{color:'#D4B98C',textDecoration:'underline'}}>Facebook</a> pour suivre mes actualités et conseils web.
        </p>
      </div>
    </>
  );
}

export default Home; 