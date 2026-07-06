import { useNavigate, useSearchParams } from 'react-router-dom';
import { services } from '../../data/services';
import './ServiceList.css';

function ServiceList({ onSelect }) {
    const navigate = useNavigate();

  function handleBack() {
      navigate('/');
      return;
  }
  return (
    <section className="service-list">
                <button type="button" className="back-button" onClick={handleBack}>
            ‹
          </button>
      <h2>Nossos serviços</h2>

      <div className="service-list__box">
        {services.map((service) => (
          <button
            key={service.id}
            type="button"
            className="service-list__item"
            onClick={() => onSelect?.(service)}
          >
            <span>{service.icon}</span>
            <p>{service.name}</p>
            <strong>›</strong>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ServiceList;