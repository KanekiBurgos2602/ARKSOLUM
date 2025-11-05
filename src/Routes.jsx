import { BrowserRouter as Router, Routes as RouterRoutes, Route } from 'react-router-dom'
import Home from './pages/home'
import SobreNosotros from './pages/about_us'
import Consultoria from './pages/consultoria'
import Inspecciones from './pages/inspecciones'
import Supervision from './pages/supervision'
import Presupuesto from './pages/presupuesto'
import Remodelaciones from './pages/remodelacion'
import Portafolio from './pages/portfolio'
import Testimonials from './pages/testimonials'
import Blog from './pages/blog'
import Contact from './pages/contact'

function Routes() {
  return (
    <Router>
      <div className="app">
        <main className="main-content">
          <RouterRoutes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/consultoria" element={<Consultoria />} />
            <Route path="/inspecciones" element={<Inspecciones />} />
            <Route path="/supervision" element={<Supervision />} />
            <Route path="/presupuesto" element={<Presupuesto />} />
            <Route path="/remodelacion" element={<Remodelaciones />} />
            <Route path="/portafolio" element={<Portafolio />} />
            <Route path="/testimonios" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
          </RouterRoutes>
        </main>
      </div>
    </Router>
  )
}

export default Routes
