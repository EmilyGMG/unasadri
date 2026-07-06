import { Link } from 'react-router-dom';

import BrandLogo from '../../components/BrandLogo';
import MobileFrame from '../../components/MobileFrame';

import './Home.css';

function Home() {
  return (
    <MobileFrame>
      <section className="home page">
        <header className="home__header">
          {/* <button type="button" className="home__menu">☰</button> */}
          <BrandLogo />
        </header>

        <section className="home__hero">
          <h1>Realce sua beleza até nos detalhes</h1>

          <div className="home__heart">♥</div>

          <p>Agende seu horário de forma rápida e prática</p>

          <Link to="/servicos" className="home__cta">
            <span>▣</span>
            Agendar agora
          </Link>
        </section>

        <div className="home__image" />

        <section className="home__benefits">
          <div>
            <span>♡</span>
            <p>Atendimento com carinho</p>
          </div>

          <div>
            <span>♘</span>
            <p>Produtos de qualidade</p>
          </div>

          <div>
            <span>⌂</span>
            <p>Ambiente aconchegante</p>
          </div>
        </section>
      </section>
    </MobileFrame>
  );
}

export default Home;