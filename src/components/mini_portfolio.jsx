import { useEffect, useRef } from 'react';
import '../assets/css/mini_portfolio.css';
import PortfolioIcon from '../assets/img/Vector.png';

function MiniPortfolio() {
  const cardsRef = useRef([]);
  const animatedRef = useRef([]); // para título, párrafos, etc.

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = [...cardsRef.current, ...animatedRef.current];
    elements.forEach(el => el && observer.observe(el));

    return () => {
      elements.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section className="mini-portfolio-section">
      <div className="mini-portfolio-container">
        <h2
          className="portfolio-title animate"
          ref={el => (animatedRef.current[0] = el)}
        >
          Portafolio
        </h2>

        <div className="portfolio-icon-wrapper animate" ref={el => (animatedRef.current[1] = el)}>
          <img
            src={PortfolioIcon}
            alt="Portafolio icono"
            className="portfolio-icon"
          />
        </div>

        <p
          className="portfolio-coming-soon animate"
          ref={el => (animatedRef.current[2] = el)}
        >
          Estamos preparando una muestra de nuestros proyectos recientes.
        </p>

        <div className="portfolio-cards">
          {[
            'Proyecto habitacional - Zona Centro',
            'Supervisión estructural - Vivienda unifamiliar',
            'Planeación de obra - Residencial privado',
          ].map((text, index) => (
            <div
              key={index}
              className="portfolio-card animate"
              ref={el => (cardsRef.current[index] = el)}
            >
              {text}
            </div>
          ))}
        </div>

        <p
          className="portfolio-soon animate"
          ref={el => (animatedRef.current[3] = el)}
        >
          Más proyectos disponibles próximamente...
        </p>
      </div>
    </section>
  );
}

export default MiniPortfolio;
