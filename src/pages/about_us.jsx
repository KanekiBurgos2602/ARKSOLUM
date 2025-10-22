import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/about_us.css";

import LogoArksolum from "../assets/img/Logo.png";
import EquipoImg from "../assets/img/Equipo.png";
import EstructuraImg from "../assets/img/Filosofia.jpg";
import VisionImg from "../assets/img/Vision.jpg";

function SobreNosotros() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // 🔹 Forzar scroll al tope al cargar
    window.scrollTo(0, 0);

    // 🔹 Activar animación en TODOS los elementos tras delay
    setTimeout(() => {
      sectionsRef.current.forEach((el) => el?.classList.add("active"));
    }, 200);
  }, []);

  return (
    <>
      <Navbar />

      <section className="about-modern">
        {/* --- HERO --- */}
        <div className="about-hero animate" ref={(el) => (sectionsRef.current[0] = el)}>
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <img src={LogoArksolum} alt="ArkSolum Constructora" className="hero-logo" />
            <h1>Construimos más que estructuras</h1>
            <p>
              En <strong>ArkSolum Constructora</strong> combinamos técnica, cultura y propósito.
              Diseñamos espacios con identidad, proyectando la fuerza del pasado hacia la innovación del futuro.
            </p>
          </div>
        </div>

        {/* --- FILOSOFÍA --- */}
        <div className="about-block animate" ref={(el) => (sectionsRef.current[1] = el)}>
          <div className="about-img">
            <img src={EstructuraImg} alt="Filosofía ArkSolum" />
          </div>
          <div className="about-text">
            <h2>Nuestra Filosofía</h2>
            <p>
              La construcción va más allá del concreto: es un arte que conecta el ingenio humano
              con la tierra. En ArkSolum diseñamos con conciencia, asegurando que cada obra
              respire funcionalidad, armonía y legado.
            </p>
            <p>
              Trabajamos bajo una visión de transparencia, calidad y respeto por el entorno.
              Cada proyecto es un reflejo de nuestra búsqueda por la excelencia y la autenticidad.
            </p>
          </div>
        </div>

        {/* --- EQUIPO --- */}
        <div className="about-block reverse animate" ref={(el) => (sectionsRef.current[2] = el)}>
          <div className="about-text">
            <h2>Nuestro Equipo</h2>
            <p>
              Unimos talento, creatividad y experiencia. Nuestro equipo está compuesto por
              profesionales apasionados por construir de manera ética, moderna y eficiente.
            </p>
            <p>
              Guiados por <strong>Ángel Eduardo Rodríguez Bermúdez</strong>, fomentamos una cultura
              donde la innovación técnica se equilibra con el respeto por la tradición constructiva mexicana.
            </p>
          </div>
          <div className="about-img">
            <img src={EquipoImg} alt="Equipo ArkSolum" />
          </div>
        </div>

        {/* --- VISIÓN --- */}
        <div className="about-block animate" ref={(el) => (sectionsRef.current[3] = el)}>
          <div className="about-img">
            <img src={VisionImg} alt="Visión ArkSolum" />
          </div>
          <div className="about-text">
            <h2>Nuestra Visión</h2>
            <p>
              Aspiramos a ser una constructora referente en innovación, sostenibilidad y diseño integral.
              Cada obra que realizamos busca trascender, generando valor para nuestros clientes y comunidades.
            </p>
            <p>
              En ArkSolum, construir es más que edificar: es preservar la herencia cultural y proyectarla hacia el futuro con ética, identidad y propósito.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default SobreNosotros;
