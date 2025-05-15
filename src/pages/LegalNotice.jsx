import React from 'react';
import '../styles/LegalNotice.scss';

const LegalNotice = () => {
  return (
    <div className="legal-notice">
      <div className="legal-notice__container">
        <h1>Mentions Légales</h1>

        <section>
          <h2>1. Éditeur du site</h2>
          <p>
            Ce site est édité par Sébastien Duvivier, auto-entrepreneur.
          </p>
          <ul>
            <li>Siège social : Meteren, France</li>
            <li>Email : contact@sduviviertech.fr</li>
            <li>SIRET : 941 373 623 00011</li>
          </ul>
        </section>

        <section>
          <h2>2. Hébergement</h2>
          <p>
            Ce site est hébergé par :
          </p>
          <ul>
            <li>o2switch</li>
            <li>Adresse : 222-224 Boulevard Gustave Flaubert - 63000 Clermont-Ferrand</li>
            <li>Téléphone : 04 44 44 60 40</li>
          </ul>
        </section>

        <section>
          <h2>3. Propriété intellectuelle</h2>
          <p>
            L'ensemble de ce site relève de la législation française et internationale 
            sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
            reproduction sont réservés. La reproduction de tout ou partie de ce site 
            sur quelque support que ce soit est formellement interdite sauf autorisation 
            expresse de Sébastien Duvivier.
          </p>
        </section>

        <section>
          <h2>4. Protection des données personnelles</h2>
          <p>
            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée 
            et au Règlement Général sur la Protection des Données (RGPD), vous disposez 
            de droits concernant vos données personnelles. Pour en savoir plus, consultez 
            notre <a href="/politique-de-confidentialite">politique de confidentialité</a>.
          </p>
        </section>

        <section>
          <h2>5. Cookies</h2>
          <p>
            Ce site utilise des cookies pour améliorer l'expérience utilisateur. Pour plus 
            d'informations sur l'utilisation des cookies, consultez notre{' '}
            <a href="/politique-de-confidentialite">politique de confidentialité</a>.
          </p>
        </section>

        <section>
          <h2>6. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens hypertextes vers d'autres sites. SDuvivierTech 
            n'est pas responsable du contenu des sites vers lesquels ces liens pointent.
          </p>
        </section>

        <section>
          <h2>7. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont soumises au droit français. En cas de litige, 
            les tribunaux français seront seuls compétents.
          </p>
        </section>

        <section>
          <h2>8. Conditions des offres et abonnements</h2>
          <p>
            <strong>Offre Clé en Main :</strong> Site vitrine professionnel à partir de 290 €, incluant l’hébergement et la maintenance pendant 1 an. Après cette période, un abonnement mensuel de 14,90 € (sans engagement) est proposé pour la poursuite de l’hébergement, de la maintenance et du support. Le client peut résilier à tout moment sans frais. En cas de non-renouvellement, l’hébergement sera suspendu après un délai de 7 jours pour permettre la récupération des données.
          </p>
          <p>
            <strong>Offre Sur-Mesure :</strong> Site personnalisé à partir de 750 €, incluant l’hébergement et la maintenance pendant 1 an. Après cette période, un abonnement mensuel de 19,90 € (sans engagement) est proposé pour la poursuite de l’hébergement, de la maintenance, des modifications illimitées et du support prioritaire. Le client peut résilier à tout moment sans frais. En cas de non-renouvellement, l’hébergement sera suspendu après un délai de 7 jours pour permettre la récupération des données.
          </p>
          <p>
            <strong>Abonnements sans engagement :</strong> Les abonnements mensuels proposés après la première année sont sans engagement. Le client peut arrêter l’abonnement à tout moment, sans justification ni frais de résiliation.
          </p>
          <p>
            <strong>Services inclus :</strong> Hébergement sécurisé, maintenance continue, support client (5j/7 pour l’offre Clé en Main, prioritaire pour l’offre Sur-Mesure), modifications mineures ou illimitées selon l’offre, et rapports mensuels pour l’offre Sur-Mesure.
          </p>
          <p>
            <strong>Propriété du site :</strong> Le client reste propriétaire de l’ensemble des contenus et du nom de domaine. Le code source et les éléments graphiques réalisés sur-mesure lui sont cédés après paiement intégral des sommes dues.
          </p>
          <p>
            <strong>Limitation de responsabilité :</strong> SDuvivierTech ne saurait être tenu responsable d’une interruption de service indépendante de sa volonté, ou de la perte de données due à un cas de force majeure.
          </p>
        </section>
      </div>
    </div>
  );
};

export default LegalNotice; 