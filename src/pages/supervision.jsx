import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import supervisionImage from "../assets/img/Supervision.jpg";
import "../assets/css/supervision.css";

function Supervision() {
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    contentRef.current.classList.add("visible");
  }, []);

  return (
    <>
      <Navbar />
      <section className="supervision-section">
        <div className="supervision-content" ref={contentRef}>
          <div className="supervision-text">
            <h1>Control y Supervisión de Obra</h1>
            <p>
              En <strong>ArkSolum Constructora</strong> ofrecemos un servicio
              integral de control técnico, administrativo y de calidad durante
              la ejecución de tu obra.
            </p>
            <p>
              Supervisamos cada etapa constructiva para garantizar que tu
              proyecto se desarrolle conforme a los planos, especificaciones y
              normativa vigente.
            </p>

            <div className="supervision-points">
              <div className="point">
                <span>✏️</span>
                <div>
                  <strong>Seguimiento Técnico</strong>
                  <p>Control de procesos, materiales y cumplimiento estructural.</p>
                </div>
              </div>
              <div className="point">
                <span>💼</span>
                <div>
                  <strong>Gestión Administrativa</strong>
                  <p>Revisión de avances, costos y tiempos de ejecución.</p>
                </div>
              </div>
              <div className="point">
                <span>🔍</span>
                <div>
                  <strong>Control de Calidad</strong>
                  <p>Verificación de acabados, normas y seguridad en sitio.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="supervision-img-wrapper">
            <img
              src={supervisionImage}
              alt="Supervisión de obra"
              className="supervision-img"
            />
            <div className="supervision-btn-wrapper">
              <a href="/contacto" className="supervision-btn">
                Solicitar Supervisión
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Supervision;

