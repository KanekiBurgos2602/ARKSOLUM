import { useEffect, useState } from 'react';
import '../assets/css/hero.css';
import heroImage from '../assets/img/img_2.jpg';

const Hero = () => {
  const [showFade, setShowFade] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFade(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="hero-banner"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="hero-content">
        <h1>"Construye con claridad,<br />construye con confianza"</h1>
        <p>Soluciones técnicas, eficientes y sostenibles para cada proyecto</p>
        <a href="/contacto" className="hero-button">Contáctanos</a>
      </div>

      {/* Fade-out dinámico */}
      <div className={`hero-fade-out ${showFade ? 'active' : ''}`}></div>
    </section>
  );
};

export default Hero;
