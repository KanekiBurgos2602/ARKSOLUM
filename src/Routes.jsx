import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom'
import Home from './pages/home'
import SobreNosotros from './pages/about_us'
import Portafolio from './pages/portfolio'
import Testimonials from './pages/testimonials'

function Routes() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <RouterRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            {/* <Route path="/servicios" element={<Services />} /> */}
            {/* <Route path="/servicios/asesoria-construccion" element={<AsesoriaConstructor />} /> */}
            {/* <Route path="/servicios/consultoria-tecnica" element={<ConsultoriaTecnica />} /> */}
            {/* <Route path="/servicios/gestion-proyectos" element={<GestionProyectos />} /> */}
            {/* <Route path="/servicios/inspeccion-calidad" element={<InspeccionCalidad />} /> */}
            {/* <Route path="/servicios/presupuestos" element={<Presupuestos />} /> */}
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/testimonios" element={<Testimonials />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/contacto" element={<Contact />} /> */}
          </RouterRoutes>
        </main>
      </div>
    </Router>
  )
}

export default Routes
