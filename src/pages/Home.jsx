import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Offres from '../components/Offres';
import Projects from '../components/Projects';
import Contact from '../components/Contact';  
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
      <Helmet>
        <title>SDuvivierTech - Développeur Web Freelance | Création de Sites Web</title>
        <meta name="description" content="Développeur web freelance basé à Meteren (59), spécialisé dans la création de sites web modernes et sur-mesure pour entrepreneurs et PME." />
      </Helmet>

      <Hero />
      <About />
      <Services />
      <Offres />
      <Projects />
      <Contact />
    </>
  );
}

export default Home; 