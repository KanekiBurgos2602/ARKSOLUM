import { useEffect, useRef } from "react";
import "../assets/css/cta_contact.css";
import builderImg from "../assets/img/Contactanos.png";

function CtaContact() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // menos sensible
    );

    const textElement = textRef.current;
    const imageElement = imageRef.current;

    if (textElement) observer.observe(textElement);
    if (imageElement) observer.observe(imageElement);

    return () => {
      if (textElement) observer.unobserve(textElement);
      if (imageElement) observer.unobserve(imageElement);
    };
  }, []);

  return (
    <section className="cta-contact-section">
      <div className="cta-contact-container">
        <div className="cta-contact-text animate" ref={textRef}>
          <h2>¿Quieres iniciar tu proyecto con el pie derecho?</h2>
          <p>
            Permítenos acompañarte desde la planeación hasta la ejecución.
            Ofrecemos asesoría profesional adaptada a tus metas.
          </p>
          <button className="cta-contact-button">Hablar con un experto</button>
        </div>

        <div className="cta-contact-image animate-right" ref={imageRef}>
          <img src={builderImg} alt="Asesor de construcción" />
        </div>
      </div>
    </section>
  );
}

export default CtaContact;
