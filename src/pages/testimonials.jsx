import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/testimonials.css";

const testimonials = [
  {
    name: "Laura Gómez",
    location: "San Luis Potosí",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "El equipo de ArkSolum fue clave en la transformación de nuestra casa. Desde el primer día demostraron profesionalismo, atención al detalle y compromiso con nuestras ideas. Cada cambio fue discutido y ejecutado con precisión, logrando un resultado que superó nuestras expectativas.",
  },
  {
    name: "José Martínez",
    location: "CDMX",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "Lograron materializar una idea que parecía imposible. Cada detalle fue cuidado como si fuera su propio hogar, y se aseguraron de mantener una comunicación constante. Su ética de trabajo es admirable.",
  },
  {
    name: "Miriam Fuentes",
    location: "Querétaro",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Gracias a su asesoría, evité errores costosos y tuve claridad en cada etapa de la construcción. Me sentí segura durante todo el proceso y eso no tiene precio. Recomiendo su servicio con los ojos cerrados.",
  },
  {
    name: "Esteban Ramírez",
    location: "Veracruz",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    text: "Puntualidad, ética y gran visión. Nos sentimos acompañados en todo momento. Desde el diseño inicial hasta la entrega final, ArkSolum demostró ser una empresa seria y responsable.",
  },
  {
    name: "Gabriela Sánchez",
    location: "Guadalajara",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    text: "Teníamos muchas dudas al iniciar nuestra obra, pero el equipo fue paciente y transparente. Nos explicaron cada decisión técnica y nos ayudaron a tomar las mejores elecciones sin comprometer el presupuesto.",
  },
  {
    name: "Carlos Ortega",
    location: "Toluca",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    text: "Excelente experiencia. Su liderazgo en obra fue notorio desde el primer día. Me encantó que tomaran en cuenta nuestras necesidades familiares en el diseño y ejecución.",
  },
  {
    name: "Diana Herrera",
    location: "Puebla",
    image: "https://randomuser.me/api/portraits/women/61.jpg",
    text: "Desde la primera visita nos inspiraron confianza. El resultado final fue tal como lo soñamos: una casa funcional, luminosa y bien construida. Muy agradecida con el equipo.",
  },
];

function Testimonios() {
  const heroRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      heroRef.current?.classList.add("active");
      gridRef.current?.classList.add("active");
    });
  }, []);

  return (
    <>
      <Navbar />

      <section className="full-testimonials-section">
        <div className="full-testimonials-hero" ref={heroRef}>
          <h1>Lo que opinan nuestros clientes</h1>
          <p>
            Sus palabras reflejan la confianza y el compromiso que construimos en
            cada proyecto.
          </p>
        </div>

        <div className="full-testimonials-grid" ref={gridRef}>
          <div className="full-testimonials-row">
            {testimonials.slice(0, 4).map((t, index) => (
              <div className="testimonial-card" key={index}>
                <img src={t.image} alt={t.name} className="testimonial-img" />
                <p className="quote">"{t.text}"</p>
                <div className="client">
                  <strong>— {t.name}</strong>, {t.location}
                </div>
              </div>
            ))}
          </div>

          <div className="full-testimonials-row">
            {testimonials.slice(4).map((t, index) => (
              <div className="testimonial-card" key={index + 4}>
                <img src={t.image} alt={t.name} className="testimonial-img" />
                <p className="quote">"{t.text}"</p>
                <div className="client">
                  <strong>— {t.name}</strong>, {t.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Testimonios;
