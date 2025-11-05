import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import presupuestoImage from "../assets/img/Presupuesto.jpg"; // Asegúrate de tener esta imagen
import "../assets/css/presupuesto.css";

function Presupuesto() {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    sectionRef.current.classList.add("show");
  }, []);

  return (
    <>
      <Navbar />
      <section className="presupuesto-section">
        <div className="presupuesto-wrapper" ref={sectionRef}>
          <div className="presupuesto-header">
            <h1>Análisis y Revisión de Presupuestos</h1>
            <p>
              En <strong>ArkSolum Constructora</strong> te ayudamos a entender y optimizar tu presupuesto de obra
              antes de que inicies la ejecución. Analizamos cada partida, detectamos posibles errores y te orientamos
              para que tomes decisiones informadas.
            </p>
          </div>

          <div className="presupuesto-grid">
            <div className="presupuesto-text">
              <ul>
                <li>📊 Revisión detallada de presupuestos entregados por terceros.</li>
                <li>🛠 Verificación de costos unitarios y cantidades de obra.</li>
                <li>🔎 Identificación de sobrecostos o elementos faltantes.</li>
                <li>📄 Generación de reportes claros con recomendaciones.</li>
              </ul>
              <a className="presupuesto-btn" href="/contacto">
                Solicita una Revisión
              </a>
            </div>

            <div className="presupuesto-image">
              <img src={presupuestoImage} alt="Revisión de Presupuesto" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Presupuesto;
