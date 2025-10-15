import { useEffect, useRef, useState } from 'react';
import '../assets/css/hero.css';
import heroImage from '../assets/img/img_2.jpg';

const Hero = () => {
  const [showFade, setShowFade] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowFade(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // 🔹 Animación solo del contenido
    const content = contentRef.current;
    if (content) {
      content.classList.add('animate');
      setTimeout(() => content.classList.add('active'), 300);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-overlay"></div>

      {/* Contenido con animación */}
      <div className="hero-content animate" ref={contentRef}>
        <h1>"Construye con claridad,<br />construye con confianza"</h1>
        <p>Soluciones técnicas, eficientes y sostenibles para cada proyecto</p>
        <a href="/contacto" className="hero-button">Contáctanos</a>
      </div>

      {/* Fade dinámico */}
      <div className={`hero-fade-out ${showFade ? 'active' : ''}`}></div>
    </section>
  );
};

export default Hero;
