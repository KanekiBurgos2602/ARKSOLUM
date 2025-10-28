import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import heroImage from "../assets/img/img_2.jpg";
import "../assets/css/contact.css";

import { Facebook, Instagram } from "lucide-react";
import logo from "../assets/img/Logo.png";

function Contacto() {
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    sectionRef.current.classList.add("active");
  }, []);

  return (
    <>
      <Navbar />
      <section
        className="contact-section"
        ref={sectionRef}
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="contact-card">
          <img src={logo} alt="Logo ArkSolum" className="contact-logo" />
          <h1>Contáctanos</h1>
          <p>
            ¿Tienes un proyecto en mente? Escríbenos y te responderemos lo antes posible.
          </p>
          <form
            className="contact-form"
            action="mailto:contacto@arksolumconstructora.com"
            method="post"
            encType="text/plain"
          >
            <input type="text" name="name" placeholder="Tu nombre" required />
            <input type="email" name="email" placeholder="Tu correo electrónico" required />
            <textarea name="message" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
            <button type="submit">Enviar mensaje</button>
          </form>
          <div className="contact-socials">
            <p>Síguenos en redes:</p>
            <div className="icons">
              <a
                href="https://www.facebook.com/hector.burgos.9404362/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <Facebook size={24} strokeWidth={2} />
              </a>
              <a
                href="https://www.instagram.com/kaneki26020/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <Instagram size={24} strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contacto;
