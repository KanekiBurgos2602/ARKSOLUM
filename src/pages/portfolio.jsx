import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/portfolio.css";

function Portafolio() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    const elements = sectionsRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.25 }
    );

    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <Navbar />

      <section className="portfolio-section">
        {/* --- HERO --- */}
        <div
          className="portfolio-hero animate"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <div className="hero-content">
            <h1>Portafolio de Proyectos</h1>
            <p>
              Cada obra cuenta una historia. Aquí te presentamos algunos ejemplos
              de nuestra experiencia y compromiso con la calidad constructiva.
            </p>
          </div>
        </div>

        {/* --- PROYECTOS ACTIVOS --- */}
        <div
          className="portfolio-grid animate"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <div className="project-card">
            <h3 className="card-title">Casa Sombra</h3>
            <p className="card-description">
              Diseño y construcción de vivienda unifamiliar en zona urbana. Estilo
              moderno con materiales locales.
            </p>
          </div>

          <div className="project-card">
            <h3 className="card-title">Rehabilitación Centro Histórico</h3>
            <p className="card-description">
              Restauración estructural y mejora de espacios patrimoniales respetando
              identidad arquitectónica.
            </p>
          </div>

          <div className="project-card">
            <h3 className="card-title">Consultoría Técnica Edificio LUX</h3>
            <p className="card-description">
              Supervisión estructural y asesoría para torre habitacional de concreto
              reforzado en zona sísmica.
            </p>
          </div>

          {/* --- FILA DE TARJETAS "PRÓXIMAMENTE" CENTRADAS --- */}
          <div className="upcoming-wrapper">
            <div className="project-card upcoming">
              <h3 className="card-title">Próximamente</h3>
              <p className="card-description">
                Más proyectos serán añadidos a esta sección.
              </p>
            </div>

            <div className="project-card upcoming">
              <h3 className="card-title">Próximamente</h3>
              <p className="card-description">
                Estamos trabajando en nuevas obras que muy pronto compartiremos contigo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Portafolio;
