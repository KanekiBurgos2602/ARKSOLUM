import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';
import LogoArksolum from '../assets/img/Logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* LOGO */}
        <div className="nav-logo">
          <Link to="/" className="nav-logo-link">
            <img src={LogoArksolum} alt="ArkSolum Logo" className="logo-img-full" />
            <span className="logo-text-full">ARKSOLUM CONSTRUCTORA</span>
          </Link>
        </div>

        {/* MENÚ PRINCIPAL */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          <Link to="/sobre-nosotros" className="nav-link" onClick={() => setIsMenuOpen(false)}>Sobre Nosotros</Link>

          {/* MENÚ DESPLEGABLE DE SERVICIOS */}
          <div className="nav-dropdown">
            <div className="dropdown-toggle nav-link" onClick={() => setIsMenuOpen(false)}>
              <span>Servicios</span>
              <span className="dropdown-arrow">▼</span>
            </div>
            <div className="dropdown-menu">
              <Link to="/servicios/asesoramiento-personalizado" className="dropdown-link">
                Consultoría y asesoramiento
              </Link>
              <Link to="/servicios/visitas-tecnicas" className="dropdown-link">
                Inspecciones y visitas técnicas
              </Link>
              <Link to="/servicios/supervision-obra" className="dropdown-link">
                Control y supervisión de obra
              </Link>
              <Link to="/servicios/revision-presupuestos" className="dropdown-link">
                Análisis y revisión de presupuestos
              </Link>
              <Link to="/servicios/orientacion-remodelaciones" className="dropdown-link">
                Guía y orientación en remodelaciones
              </Link>
            </div>
          </div>

          <Link to="/portafolio" className="nav-link" onClick={() => setIsMenuOpen(false)}>Portafolio</Link>
          <Link to="/proceso" className="nav-link" onClick={() => setIsMenuOpen(false)}>Proceso</Link>
          <Link to="/testimonios" className="nav-link" onClick={() => setIsMenuOpen(false)}>Testimonios</Link>
          <Link to="/blog" className="nav-link" onClick={() => setIsMenuOpen(false)}>Blog</Link>

          <Link to="/contacto" className="nav-link contact-btn" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <div className="nav-hamburger" onClick={toggleMenu}>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

