import { useEffect, useRef } from 'react';
import '../assets/css/featured_services.css';

import sabioIcon from '../assets/img/Sabio.png';
import tlaculioIcon from '../assets/img/Tlaculio.png';
import vigilanciaIcon from '../assets/img/Vigilancia.png';

function FeaturedServices() {
  const cardsRef = useRef([]);

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

    const currentCards = cardsRef.current;
    currentCards.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => {
      currentCards.forEach(card => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="services-section">
      <div className="services-container">
        <h2 className="services-title">Servicios Principales</h2>

        <div className="services-grid">
          <div className="service-card" ref={el => cardsRef.current[0] = el}>
            <img src={sabioIcon} alt="Icono Sabio" className="service-icon" />
            <h3 className="service-title">Asesoramiento personalizado</h3>
            <p className="service-description">
              Brindo orientación técnica y económica desde la etapa de planeación hasta la ejecución de tu proyecto. 
              Analizo alternativas constructivas, materiales y costos para ayudarte a tomar decisiones informadas y seguras.
            </p>
          </div>

          <div className="service-card" ref={el => cardsRef.current[1] = el}>
            <img src={tlaculioIcon} alt="Icono Tlaculio" className="service-icon" />
            <h3 className="service-title">Visitas técnicas</h3>
            <p className="service-description">
              Realizo inspecciones en sitio para evaluar condiciones reales de la obra, identificar riesgos y proponer soluciones prácticas. 
              Estas visitas permiten anticipar problemas y garantizar un desarrollo más eficiente y seguro.
            </p>
          </div>

          <div className="service-card" ref={el => cardsRef.current[2] = el}>
            <img src={vigilanciaIcon} alt="Icono Vigilancia" className="service-icon" />
            <h3 className="service-title">Supervisión de obra</h3>
            <p className="service-description">
              Supervizo la correcta ejecución de muros, pisos, acabados y otros elementos constructivos. 
              Mi objetivo es asegurar que el trabajo cumpla con la calidad pactada, las especificaciones técnicas y los tiempos establecidos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedServices;

