import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegalNotice from './pages/LegalNotice';
import Offres from './pages/Offres';
import CookieBanner from './components/CookieBanner';
import './styles/main.scss';
import { Helmet } from 'react-helmet';

// Composant pour défiler vers le haut à chaque changement de route
function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="app">
        <ScrollToTop />
        <Helmet>
          <title>Développeur Web Freelance à Lille | Création de sites modernes</title>
          <meta
            name="description"
            content="Développeur web freelance à Lille, je crée des sites vitrines et applications web modernes, performantes et sur-mesure pour votre activité. Contactez-moi pour booster votre présence en ligne !"
          />
          <meta
            name="keywords"
            content="développeur web, freelance, Lille, création site web, site vitrine, application web, web design, front-end, React, JavaScript, site professionnel, site sur-mesure, référencement, SEO, Nord, Hauts-de-France"
          />
        </Helmet>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/offres" element={<Offres />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
            <Route path="/mentions-legales" element={<LegalNotice />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </Router>
  );
}

export default App; 