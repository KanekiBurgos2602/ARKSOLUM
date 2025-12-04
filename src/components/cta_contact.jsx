import { useEffect, useRef } from "react";
import "../assets/css/cta_contact.css";
import builderImg from "../assets/img/Contactanos.png";

function CtaContact() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const goingDown = window.scrollY > lastScrollY;
          lastScrollY = window.scrollY;

          if (entry.isIntersecting && goingDown) {
            // 🔹 Aparece al bajar
            entry.target.classList.add("active");
          } else if (!entry.isIntersecting && !goingDown) {
            // 🔹 Desaparece solo si subes
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.3 } // se activa con ~30% visible
    );

    const elements = [textRef.current, imageRef.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => elements.forEach((el) => el && observer.unobserve(el));
  }, []);

  return (
    <section className="cta-contact-section">
      <div className="cta-contact-container">
        <div className="cta-contact-text animate" ref={textRef}>
          <h2>¿Quieres iniciar tu proyecto con el pie derecho?</h2>
          <p>
            Permítenos acompañarte desde la planeación hasta la ejecución.  
            Ofrecemos asesoría profesional adaptada a tus metas y visión.
          </p>
          <a href="/contacto" className="hero-button">Contáctanos</a>
        </div>

        <div className="cta-contact-image animate-right" ref={imageRef}>
          <img src={builderImg} alt="Asesor de construcción" />
        </div>
      </div>
    </section>
  );
}

export default CtaContact;
