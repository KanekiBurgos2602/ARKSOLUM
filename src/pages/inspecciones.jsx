import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import inspeccionImg from "../assets/img/Inspecciones.png";
import "../assets/css/inspecciones.css";

function Inspecciones() {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      sectionRef.current.classList.add("visible");
    }, 100);
  }, []);

  return (
    <>
      <Navbar />
      <section className="inspecciones-section">
        <div className="inspecciones-wrapper" ref={sectionRef}>
          <div className="inspecciones-image">
            <img src={inspeccionImg} alt="Inspección técnica" />
          </div>
          <div className="inspecciones-text">
            <h1>Inspecciones y Visitas Técnicas</h1>
            <p>
              En <strong>ArkSolum Constructora</strong>, realizamos inspecciones de obra
              para evaluar el estado físico, estructural y funcional de tus proyectos.
            </p>
            <p>
              Estas visitas permiten <strong>detectar errores constructivos, prevenir fallos</strong> y asegurar que todo se ejecute conforme a normas y planos.
            </p>
            <ul>
              <li>✔️ Reportes técnicos claros y personalizados.</li>
              <li>✔️ Supervisión de avances, materiales y seguridad.</li>
              <li>✔️ Diagnósticos oportunos para tomar decisiones informadas.</li>
            </ul>
            <a className="inspecciones-btn" href="/contacto">
              Solicitar Inspección
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Inspecciones;
