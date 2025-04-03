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
    </>
  );
}

export default Home; 