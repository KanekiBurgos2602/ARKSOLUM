import { useEffect, useRef, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import heroImage from "../assets/img/img_2.jpg";
import "../assets/css/contact.css";
import { Facebook, Instagram } from "lucide-react";
import logo from "../assets/img/Logo.png";
import { toast } from "react-toastify";

function Contacto() {
  const sectionRef = useRef(null);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    sectionRef.current.classList.add("active");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre, correo, mensaje })
      });

      const data = await res.json();

      if (data.success) {
        toast.success('Mensaje enviado correctamente');
        setNombre('');
        setCorreo('');
        setMensaje('');
      } else {
        toast.error('Error al enviar el mensaje');
      }
    } catch (err) {
      console.error('Error al enviar:', err);
      toast.error('Hubo un problema con el servidor');
    }
  };

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
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Escribe tu mensaje aquí..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
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
