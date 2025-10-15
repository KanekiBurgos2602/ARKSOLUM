import { useEffect, useRef } from 'react';
import '../assets/css/introduction.css';
import LogoArksolum from '../assets/img/Logo.png';

function IntroSection() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

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

    const textElement = textRef.current;
    const imageElement = imageRef.current;

    if (textElement) observer.observe(textElement);
    if (imageElement) observer.observe(imageElement);

    return () => {
      if (textElement) observer.unobserve(textElement);
      if (imageElement) observer.unobserve(imageElement);
    };
  }, []);

  return (
    <section className="intro-section">
      <div className="intro-container">
        <div className="intro-text animate" ref={textRef}>
          <h2>Donde la tierra se convierte en legado</h2>
          <p>
            En <strong>ArkSolum Constructora</strong>, cada obra nace del equilibrio entre la fuerza del suelo y la visión humana. 
            Construimos espacios que trascienden el tiempo, inspirados por la conexión entre el origen, la técnica y la creación.
          </p>
          <p>
            No solo levantamos estructuras: moldeamos historia. 
            Fusionamos la esencia del diseño contemporáneo con la energía ancestral que define nuestra identidad.
          </p>

          <button className="intro-button">Explorar visión</button>
        </div>

        <div className="intro-image animate-right" ref={imageRef}>
          <img src={LogoArksolum} alt="Logo ArkSolum" />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
