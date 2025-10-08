# 🏗️ ArkSolum Constructora

**Página web oficial de ArkSolum Constructora**, desarrollada por **Ángel Eduardo Rodríguez Bermúdez**.  
El proyecto busca representar la identidad visual y profesional de una empresa constructora moderna con raíces en la arquitectura mexicana, combinando tecnología, diseño y funcionalidad.

---

## 🚀 Tecnologías utilizadas

- **React.js (Vite)** – estructura modular basada en componentes.
- **CSS personalizado** – diseño optimizado, adaptable y de estilo sobrio.
- **Lucide React** – íconos SVG dinámicos y accesibles.
- **Intersection Observer API** – animaciones suaves al hacer scroll.
- **React Router DOM** – sistema de navegación fluida entre secciones.

---

## 📦 Descripción

Sitio en desarrollo enfocado en ofrecer servicios integrales de construcción, asesoría técnica y soluciones arquitectónicas personalizadas.  
Su enfoque combina la **innovación técnica** con la **inspiración cultural mexicana**, buscando construir con identidad y profesionalismo.

---

## ⚙️ Instalación y uso

```bash
# Clonar el repositorio
git clone https://github.com/KanekiBurgos2602/ARKSOLUM-CONSTRUCTIVO.git

# Entrar en la carpeta del proyecto
cd ARKSOLUM-CONSTRUCTIVO

# Instalar dependencias
npm install

# Ejecutar entorno de desarrollo
npm run dev

# Estrutura del Proyecto

ARKSOLUM-CONSTRUCTORA/
│
├── public/                               # Archivos públicos del sitio
│   ├── Arksolum.ico                      # Ícono del sitio
│   └── manifest.json
│
├── src/
│   ├── assets/
│   │   ├── css/                          # Hojas de estilo personalizadas
│   │   │   ├── navbar.css
│   │   │   ├── introduction.css
│   │   │   ├── featured_services.css
│   │   │   ├── short_blog.css
│   │   │   ├── short_testimonials.css
│   │   │   ├── mini_portfolio.css
│   │   │   ├── cta_contact.css
│   │   │   ├── footer.css
│   │   │   └── summary_about_us.css
│   │   │
│   │   └── img/                          # Recursos gráficos y multimedia
│   │       ├── Logo.png
│   │       ├── Construccion.jpg
│   │       ├── Ingeniero.jpg
│   │       ├── Remodelacion.jpg
│   │       ├── Vector.png
│   │       ├── Tlaculio.png
│   │       ├── Sabio.png
│   │       └── Vigilancia.png
│   │
│   ├── components/                       # Componentes funcionales reutilizables
│   │   ├── navbar.jsx
│   │   ├── introduction.jsx
│   │   ├── featured_services.jsx
│   │   ├── short_blog.jsx
│   │   ├── short_testimonials.jsx
│   │   ├── mini_portfolio.jsx
│   │   ├── cta_contact.jsx
│   │   ├── summary_about_us.jsx
│   │   └── footer.jsx
│   │
│   ├── pages/                            # Vistas principales del sitio
│   │   ├── home.jsx
│   │   ├── sobre_nosotros.jsx
│   │   ├── servicios.jsx
│   │   ├── portafolio.jsx
│   │   ├── blog.jsx
│   │   └── contacto.jsx
│   │
│   ├── index.css                         # Estilos globales del proyecto
│   ├── main.jsx                          # Render principal de React
│   └── Routes.jsx                        # Definición de rutas y navegación
│
├── .gitignore                            # Archivos ignorados por Git
├── package.json                          # Dependencias y scripts
├── vite.config.js                        # Configuración de Vite
└── README.md                             # Documentación del proyecto
