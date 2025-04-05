import React from 'react';
import '../styles/PrivacyPolicy.scss';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <div className="privacy-policy__container">
        <h1>Politique de Confidentialité</h1>
        
        <section>
          <h2>1. Collecte des informations</h2>
          <p>
            Nous collectons les informations suivantes :
          </p>
          <ul>
            <li>Données de navigation (cookies techniques essentiels)</li>
            <li>Informations de contact si vous utilisez notre formulaire (nom, email, message)</li>
          </ul>
        </section>

        <section>
          <h2>2. Utilisation des informations</h2>
          <p>
            Les informations que nous collectons sont utilisées pour :
          </p>
          <ul>
            <li>Améliorer la navigation sur le site</li>
            <li>Répondre à vos demandes de contact</li>
            <li>Personnaliser votre expérience utilisateur</li>
          </ul>
        </section>

        <section>
          <h2>3. Durée de conservation des données</h2>
          <p>
            Nous conservons vos données pendant une durée limitée :
          </p>
          <ul>
            <li>Messages de contact : 1 an maximum après le dernier échange</li>
            <li>Cookies techniques : durée de votre session de navigation</li>
            <li>Cookies analytiques (si acceptés) : 13 mois maximum</li>
          </ul>
          <p>
            À l'issue de ces périodes, vos données sont supprimées ou anonymisées.
          </p>
        </section>

        <section>
          <h2>4. Vos droits sur vos données</h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
          </p>
          <ul>
            <li>Droit d'accès : obtenir une copie de vos données</li>
            <li>Droit de rectification : corriger des informations inexactes</li>
            <li>Droit à l'effacement : demander la suppression de vos données</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d'opposition au traitement</li>
            <li>Droit à la portabilité de vos données</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous par email à{' '}
            <a href="mailto:contact@sduviviertech.fr">contact@sduviviertech.fr</a>. 
            Nous nous engageons à répondre à votre demande dans un délai d'un mois.
          </p>
        </section>

        <section>
          <h2>5. Protection des informations</h2>
          <p>
            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données :
          </p>
          <ul>
            <li>Chiffrement des communications (HTTPS)</li>
            <li>Accès restreint aux données personnelles</li>
            <li>Hébergement sécurisé en France</li>
          </ul>
        </section>

        <section>
          <h2>6. Cookies et outils d'analyse</h2>
          <p>
            Notre site utilise différents types de cookies :
          </p>
          <ul>
            <li>Cookies techniques essentiels : nécessaires au fonctionnement du site</li>
            <li>Cookies analytiques (Google Analytics) : uniquement si vous les acceptez</li>
          </ul>
          <p>
            Les outils d'analyse ne sont activés qu'après votre consentement explicite 
            via notre bannière de cookies. Vous pouvez à tout moment modifier vos préférences 
            en supprimant les cookies de votre navigateur.
          </p>
        </section>

        <section>
          <h2>7. Modifications de la politique</h2>
          <p>
            Nous nous réservons le droit de modifier cette politique de confidentialité 
            à tout moment. Les modifications prennent effet dès leur publication sur 
            ce site. Nous vous encourageons à consulter régulièrement cette page.
          </p>
          <p>
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 