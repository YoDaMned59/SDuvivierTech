import { FiCode, FiLayout, FiSettings } from 'react-icons/fi';
import servicesData from '../data/services.json';
import '../styles/services.scss';

const iconMap = {
  code: <FiCode size={40} />,
  layout: <FiLayout size={40} />,
  settings: <FiSettings size={40} />
};

function Services() {
  return (
    <section className="services-section">
      <h2 className="services-title">Mes Services</h2>
      <div className="services-grid">
        {servicesData.services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-card__icon">{iconMap[service.icon]}</div>
            <h3 className="service-card__title">{service.title}</h3>
            <p className="service-card__desc">{service.description}</p>
            <p className="service-card__subtitle">{service.subtitle}</p>
            <ul className="service-card__features">
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="services-budget">
        <span className="services-budget__icon">{servicesData.budget.icon}</span>
        <span className="services-budget__title">{servicesData.budget.title}</span>
        <p>{servicesData.budget.description}</p>
        <em>{servicesData.budget.note}</em>
      </div>
    </section>
  );
}

export default Services;