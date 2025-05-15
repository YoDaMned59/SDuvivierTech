import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegalNotice from './pages/LegalNotice';
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
    <Router>
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
          <script defer src="https://cloud.umami.is/script.js" data-website-id="153b804e-6d24-43e9-990b-4f588f1b0705"></script>
        </Helmet>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
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