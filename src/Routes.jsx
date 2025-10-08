import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom'
import Home from './pages/home'

function Routes() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <RouterRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* Aquí puedes agregar más rutas cuando crees las otras páginas */}
            {/* <Route path="/sobre-nosotros" element={<About />} /> */}
            {/* <Route path="/servicios" element={<Services />} /> */}
            {/* <Route path="/servicios/asesoria-construccion" element={<AsesoriaConstructor />} /> */}
            {/* <Route path="/servicios/consultoria-tecnica" element={<ConsultoriaTecnica />} /> */}
            {/* <Route path="/servicios/gestion-proyectos" element={<GestionProyectos />} /> */}
            {/* <Route path="/servicios/inspeccion-calidad" element={<InspeccionCalidad />} /> */}
            {/* <Route path="/servicios/presupuestos" element={<Presupuestos />} /> */}
            {/* <Route path="/portafolio" element={<Portfolio />} /> */}
            {/* <Route path="/proceso" element={<Process />} /> */}
            {/* <Route path="/testimonios" element={<Testimonials />} /> */}
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/contacto" element={<Contact />} /> */}
          </RouterRoutes>
        </main>
      </div>
    </Router>
  )
}

export default Routes
