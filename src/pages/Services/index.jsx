import { useNavigate } from 'react-router-dom';

import BrandLogo from '../../components/BrandLogo';
import MobileFrame from '../../components/MobileFrame';
import ServiceList from '../../components/ServiceList';
import { brand } from '../../data/brand';

import './Services.css';

function Services() {
  const navigate = useNavigate();

  function handleSelectService(service) {
    navigate(`/agendar?servico=${encodeURIComponent(service.name)}`);
  }

  return (
    <MobileFrame>
      <section className="services-page page">
        <header className="services-page__header">
          {/* <button type="button" className="services-page__menu">☰</button> */}
          <BrandLogo small />
        </header>

        <ServiceList onSelect={handleSelectService} />

        <section className="services-page__about">
          <h2>Sobre</h2>

          <p>
            Aqui cada detalhe é feito com amor para realçar ainda mais a sua beleza!
          </p>

          <span>♥</span>
        </section>

        <a
          href={`https://wa.me/${brand.whatsappNumber}`}
          className="services-page__whatsapp"
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <strong>Dúvidas?</strong>
            <small>Fale comigo no WhatsApp</small>
          </div>

          <span>☏</span>
        </a>

        <footer className="services-page__footer">
          © 2016 Unhas da Adri. Todos os direitos reservados.
        </footer>
      </section>
    </MobileFrame>
  );
}

export default Services;