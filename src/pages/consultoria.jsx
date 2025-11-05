import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import consultoriaImage from "../assets/img/Consultoria.jpg";
import "../assets/css/consultoria.css";

function Consultoria() {
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    contentRef.current.classList.add("visible");
  }, []);

  return (
    <>
      <Navbar />
      <section className="consultoria-container">
        <div className="consultoria-content" ref={contentRef}>
          <div className="consultoria-text">
            <h1>Consultoría y Asesoramiento</h1>
            <p>
              Nuestro equipo en <strong>ArkSolum Constructora</strong> ofrece
              un enfoque personalizado para ayudarte a tomar decisiones
              técnicas informadas desde la planificación hasta la ejecución
              de tu obra.
            </p>
            <p>
              Te guiamos paso a paso para identificar riesgos, optimizar
              recursos y lograr resultados de calidad.
            </p>
            <div className="consultoria-benefits">
              <div className="benefit">
                <span>🔍</span>
                <p>
                  Evaluación de viabilidad técnica y económica de tu proyecto.
                </p>
              </div>
              <div className="benefit">
                <span>📋</span>
                <p>
                  Asesoramiento basado en normas y mejores prácticas
                  constructivas.
                </p>
              </div>
              <div className="benefit">
                <span>🤝</span>
                <p>
                  Acompañamiento con enfoque profesional, claro y cercano.
                </p>
              </div>
            </div>
            <a className="consultoria-btn" href="/contacto">
              Contáctanos
            </a>
          </div>
          <div className="consultoria-img-wrapper">
            <img
              src={consultoriaImage}
              alt="Consultoría"
              className="consultoria-img"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Consultoria;
