import { motion } from 'framer-motion';
import profileImage from '../assets/Profile.JPG';

function About() {
  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">✨ Un site qui vous ressemble, tout simplement.</h2>
          
          <div className="about__text">
            <p>
              Votre métier est unique, et il mérite un site à la hauteur. Je crée des sites web qui mettent en valeur ce que vous faites, 
              en reflétant votre <strong className="highlight">personnalité</strong> et votre <strong className="highlight">savoir-faire</strong>. Que vous soyez artisan, entrepreneur ou dirigeant, je vous aide à 
              briller en ligne avec une présence qui vous <strong className="highlight">ressemble</strong>.
            </p>

            <p>
              Et parce que je sais que votre temps est précieux, je m'occupe de tout. Vous avez une idée ? Je la transforme en réalité. 
              Vous ne savez pas par où commencer ? Je vous guide pas à pas. Pas de stress, juste des solutions simples, efficaces et sur mesure !
            </p>

            <p className="about__highlight">
              💡 Votre métier mérite d'être vu. Ensemble, créons un site qui vous ressemble et qui donne envie de vous découvrir ! 🌟
            </p>
          </div>
        </div>
        
        <div className="about__image-container">
          <motion.div 
            className="about__image-wrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src={profileImage} 
              alt="Sébastien Duvivier" 
              className="about__image"
              width={400}
              height={400}
              loading="eager"
              decoding="async"
              fetchpriority="high"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About; 