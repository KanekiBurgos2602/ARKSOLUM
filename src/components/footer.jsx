import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../assets/css/footer.css";
import LogoArksolum from "../assets/img/Logo.png";
import { Facebook, Instagram, Mail, MessageCircle, MapPin } from "lucide-react";

function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    const footerElement = footerRef.current;
    if (footerElement) observer.observe(footerElement);

    return () => {
      if (footerElement) observer.unobserve(footerElement);
    };
  }, []);

  return (
    <footer className="footer-section animate" ref={footerRef}>
      <div className="footer-container">
        {/* === Columna 1: Logo y descripción === */}
        <div className="footer-column footer-brand">
          <div className="footer-logo">
            <img src={LogoArksolum} alt="ArkSolum Logo" />
            <h3>ARKSOLUM CONSTRUCTORA</h3>
          </div>
          <p>
            En <strong>ArkSolum Constructora</strong> diseñamos y edificamos espacios que 
            reflejan innovación, técnica y raíces mexicanas.  
            Nuestro propósito es construir proyectos sólidos, funcionales y con identidad.
          </p>
        </div>

        {/* === Columna 2: Navegación === */}
        <div className="footer-column footer-links">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/portafolio">Portafolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* === Columna 3: Contacto === */}
        <div className="footer-column footer-contact">
          <h4>Contáctanos</h4>
          <ul>
            <li>
              <Mail size={16} /> contacto@arksolumconstructora.com
            </li>

            <li>
              <MessageCircle size={16} color="#25D366" />
              <a
                href="https://wa.me/522213457890"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +52 221 345 7890
              </a>
            </li>

            <li>
              <MessageCircle size={16} color="#25D366" />
              <a
                href="https://wa.me/522214568912"
                target="_blank"
                rel="noopener noreferrer"
              >
                Alternativo: +52 221 456 8912
              </a>
            </li>

            <li>
              <MapPin size={16} /> Puebla, México
            </li>
          </ul>

          {/* Redes sociales */}
          <div className="footer-social">
            <a
              href="https://www.facebook.com/hector.burgos.9404362/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook ArkSolum Constructora"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://www.instagram.com/kaneki26020/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram ArkSolum Constructora"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* === Línea inferior === */}
      <div className="footer-bottom">
        <p>© 2025 ArkSolum Constructora. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
