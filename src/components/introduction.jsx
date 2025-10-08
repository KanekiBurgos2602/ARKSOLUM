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
          <h2>Construimos cimientos con propósito</h2>
          <p>
            En <strong>ArkSolum Constructora</strong>, transformamos ideas en estructuras duraderas. 
            Nuestro compromiso es ofrecer soluciones constructivas que fusionan ingeniería moderna con una visión inspirada en la fortaleza y legado de la cultura mexicana.
          </p>
          <p>
            Desde la planeación hasta la entrega final, trabajamos con precisión, ética y pasión. 
            Cada proyecto que edificamos refleja la solidez de nuestros valores: claridad, calidad y compromiso con quienes confían en nosotros.
          </p>

          <button className="intro-button">Descubrir más</button>
        </div>

        <div className="intro-image animate-right" ref={imageRef}>
          <img src={LogoArksolum} alt="Logo ArkSolum" />
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
