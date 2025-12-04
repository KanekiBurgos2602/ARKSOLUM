import { useEffect, useRef } from 'react';
import '../assets/css/short_blog.css';
import construccionImg from '../assets/img/Construccion.jpg';
import ingenieroImg from '../assets/img/Ingeniero.jpg';
import remodelacionImg from '../assets/img/Remodelacion.jpg';

const posts = [
  {
    title: "5 errores comunes al construir tu casa",
    snippet: "Evita los fallos más frecuentes que pueden costarte tiempo y dinero durante tu obra.",
    image: construccionImg,
    link: "https://obras.expansion.mx/construccion/2022/09/14/estos-son-los-errores-mas-comunes-de-autoconstruccion-en-mexico?.com"
  },
  {
    title: "¿Qué hace un ingeniero civil en tu proyecto?",
    snippet: "Descubre el rol técnico y estratégico que desempeñamos para lograr obras eficientes y seguras.",
    image: ingenieroImg,
    link: "https://www.expocihachub.com/nota/diseno-e-interiorismo/materiales-y-diseno-sostenible?.com"
  },
  {
    title: "Guía básica para planear una remodelación",
    snippet: "¿Quieres renovar tu espacio? Esta guía te ayudará a comenzar con el pie derecho.",
    image: remodelacionImg,
    link: "https://www.iestudio.mx/post/costo-por-metro-cuadrado-2025?.com"
  }
];

function ShortBlog() {
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
      { threshold: 0.2 }
    );

    const elements = [...cardsRef.current];
    elements.forEach(el => el && observer.observe(el));

    return () => {
      elements.forEach(el => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section className="blog-preview-section">
      <div className="blog-preview-container">
        <h2 className="blog-title">Últimas del Blog</h2>
        <p className="blog-intro">
          Conoce tips, ideas y recomendaciones para construir con claridad.
        </p>

        <div className="blog-cards">
          {posts.map((post, index) => (
            <div className="blog-card animate" key={index} ref={el => (cardsRef.current[index] = el)}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-card-content">
                <h3 className="blog-card-title">{post.title}</h3>
                <p className="blog-card-snippet">{post.snippet}</p>
                <a href={post.link} className="blog-read-more">Leer más →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ShortBlog;

