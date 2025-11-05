import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import remodelacionImage from "../assets/img/Remodelaciones.jpg";
import "../assets/css/remodelacion.css";

function Remodelaciones() {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    sectionRef.current.classList.add("fade-in");
  }, []);

  return (
    <>
      <Navbar />
      <section className="remodel-section">
        <div className="remodel-content" ref={sectionRef}>
          <div className="remodel-text">
            <h1>Guía y Orientación en Remodelaciones</h1>
            <p>
              En <strong>ArkSolum Constructora</strong> te acompañamos desde el primer paso para que tu proyecto de remodelación tenga claridad, viabilidad y resultados óptimos.
            </p>
            <p>
              Ya sea una renovación parcial o total, te ayudamos a evitar errores comunes, optimizar tiempos y aprovechar al máximo tu presupuesto.
            </p>

            <ul className="remodel-list">
              <li>🧭 Diagnóstico inicial y definición clara de objetivos.</li>
              <li>📐 Propuestas técnicas ajustadas a tu espacio y necesidades.</li>
              <li>💡 Sugerencias de materiales, acabados y distribuciones funcionales.</li>
              <li>📅 Asesoría para planificar y priorizar según presupuesto y tiempos.</li>
            </ul>

            <div className="remodel-btn-wrapper">
              <a href="/contacto" className="remodel-btn">Solicita tu asesoría</a>
            </div>
          </div>

          <div className="remodel-image">
            <img src={remodelacionImage} alt="Remodelación de espacios" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Remodelaciones;
