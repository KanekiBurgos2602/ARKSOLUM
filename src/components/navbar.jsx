import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../assets/css/navbar.css';
import LogoArksolum from '../assets/img/Logo.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const location = useLocation();

  // 🔧 Limpia el estado y scroll cuando se cambia de ruta
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    document.body.classList.remove('menu-open');
  }, [location]);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    document.body.classList.toggle('menu-open', newState);
    if (!newState) setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Cierra el menú al cambiar tamaño de pantalla (ej. rotación)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
        document.body.classList.remove('menu-open');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <Link to="/" className="nav-link" onClick={toggleMenu}>Inicio</Link>
          <Link to="/sobre-nosotros" className="nav-link" onClick={toggleMenu}>Sobre Nosotros</Link>

          {/* DESPLEGABLE SERVICIOS */}
          <div className="nav-dropdown">
            <div
              className={`dropdown-toggle nav-link ${isDropdownOpen ? 'open' : ''}`}
              onClick={toggleDropdown}
            >
              <span>Servicios</span>
              <span className="dropdown-arrow">▼</span>
            </div>
            <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
              <Link to="/consultoria" className="dropdown-link" onClick={toggleMenu}>
                Consultoría y asesoramiento
              </Link>
              <Link to="/inspecciones" className="dropdown-link" onClick={toggleMenu}>
                Inspecciones y visitas técnicas
              </Link>
              <Link to="/supervision" className="dropdown-link" onClick={toggleMenu}>
                Control y supervisión de obra
              </Link>
              <Link to="/presupuesto" className="dropdown-link" onClick={toggleMenu}>
                Análisis y revisión de presupuestos
              </Link>
              <Link to="/remodelacion" className="dropdown-link" onClick={toggleMenu}>
                Guía y orientación en remodelaciones
              </Link>
            </div>
          </div>

          <Link to="/portafolio" className="nav-link" onClick={toggleMenu}>Portafolio</Link>
          <Link to="/testimonios" className="nav-link" onClick={toggleMenu}>Testimonios</Link>
          <Link to="/blog" className="nav-link" onClick={toggleMenu}>Blog</Link>
          <Link to="/contacto" className="nav-link contact-btn" onClick={toggleMenu}>Contacto</Link>
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
