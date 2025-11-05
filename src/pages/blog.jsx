import { useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../assets/css/blog.css";

import erroresImg from "../assets/img/Errores.png";
import materialesImg from "../assets/img/Materiales.png";
import ventaImg from "../assets/img/Venta.png";

const blogPosts = [
  {
    title: "Errores comunes al construir sin asesoría",
    date: "Septiembre 2025",
    image: erroresImg,
    snippet: "Descubre los errores más frecuentes al construir sin un respaldo técnico y cómo evitarlos.",
    link: "https://obras.expansion.mx/construccion/2022/09/14/estos-son-los-errores-mas-comunes-de-autoconstruccion-en-mexico?.com",
  },
  {
    title: "Materiales sustentables en construcción mexicana",
    date: "Agosto 2025",
    image: materialesImg,
    snippet: "Exploramos materiales que respetan el entorno y cómo integrarlos a tu proyecto con eficiencia.",
    link: "https://www.expocihachub.com/nota/diseno-e-interiorismo/materiales-y-diseno-sostenible?.com",
  },
  {
    title: "¿Cuánto cuesta realmente una obra bien hecha?",
    date: "Julio 2025",
    image: ventaImg,
    snippet: "Desglosamos los elementos clave que definen el costo real de una obra de calidad.",
    link: "https://www.iestudio.mx/post/costo-por-metro-cuadrado-2025?.com",
  },
];

function Blog() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    requestAnimationFrame(() => {
      sectionsRef.current.forEach((el) => el?.classList.add("active"));
    });
  }, []);

  return (
    <>
      <Navbar />
      <section className="blog-section">
        <div
          className="blog-header animate"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>Blog de construcción y asesoría</h1>
          <p>Ideas, consejos y experiencias reales para construir con claridad.</p>
        </div>

        <div
          className="blog-articles animate"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          {blogPosts.map((post, index) => (
            <div className="blog-spotlight" key={index}>
              <img src={post.image} alt={post.title} className="blog-image" />
              <div className="blog-content">
                <h2>
                  <a href={post.link} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h2>
                <span className="blog-date">{post.date}</span>
                <p>{post.snippet}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
