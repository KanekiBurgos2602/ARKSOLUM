import { useEffect, useRef } from 'react';
import '../assets/css/summary_about_us.css';

function SummaryAboutUs() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.3 }
    );

    const sectionEl = sectionRef.current;
    if (sectionEl) observer.observe(sectionEl);

    return () => {
      if (sectionEl) observer.unobserve(sectionEl);
    };
  }, []);

  return (
    <section className="summary-section">
      <div className="summary-icon-bg"></div>

      <div className="summary-wrapper animate" ref={sectionRef}>
        <h2 className="summary-title">Sobre Nosotros</h2>

        <p className="summary-text">
          <strong>ArkSolum Constructora</strong> surge con el propósito de crear obras que trascienden el tiempo, 
          combinando ingeniería moderna, planeación estratégica y un profundo respeto por la herencia constructiva de México.
        </p>

        <p className="summary-text">
          Nuestro compromiso es construir con propósito. Desde el primer trazo hasta la entrega final, 
          trabajamos con precisión, ética y profesionalismo para garantizar resultados que reflejen confianza y calidad en cada detalle.
        </p>

        <p className="summary-text">
          En ArkSolum creemos que construir es más que levantar estructuras: es dar forma a espacios que inspiren, protejan y representen a las personas. 
          Por eso, cada proyecto que realizamos es diseñado con una visión integral, 
          donde la estética, la funcionalidad y la sustentabilidad convergen en equilibrio.
        </p>

        <p className="summary-text">
          Nuestra filosofía se basa en tres pilares fundamentales: innovación técnica, 
          compromiso humano y respeto por nuestras raíces. 
          Con ellos edificamos no solo proyectos, sino confianza duradera.
        </p>
      </div>
    </section>
  );
}

export default SummaryAboutUs;
