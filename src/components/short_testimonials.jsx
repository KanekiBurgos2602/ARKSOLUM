import { useEffect, useRef } from 'react';
import '../assets/css/short_testimonials.css';

const testimonials = [
  {
    name: "María López",
    role: "Cliente residencial",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Kevin me ayudó desde el principio. Gracias a su asesoría y seguimiento, la remodelación quedó mejor de lo que imaginé. Siempre estuvo pendiente del presupuesto y la calidad.",
  },
  {
    name: "Juan Pérez",
    role: "Dueño de negocio",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "Me asesoró de forma clara para evitar costos innecesarios. Superó mis expectativas con su profesionalismo y cercanía en la obra.",
  },
  {
    name: "Ana Ramírez",
    role: "Propietaria de vivienda",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Su supervisión fue fundamental para que todo saliera bien. Cada detalle fue cuidado, y me dio tranquilidad durante todo el proceso.",
  }
];

function ShortTestimonials() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = [...cardsRef.current];
    elements.forEach(el => el && observer.observe(el));

    return () => {
      elements.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Testimonios</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div
              className="testimonial-card animate"
              key={index}
              ref={el => (cardsRef.current[index] = el)}
            >
              <div className="testimonial-image-wrapper">
                <img src={t.image} alt={`${t.name}`} className="testimonial-image" />
              </div>
              <div className="testimonial-content">
                <p className="testimonial-text">“{t.text}”</p>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShortTestimonials;

