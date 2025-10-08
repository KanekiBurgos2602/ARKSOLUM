import Navbar from '../components/navbar'
import Hero from '../components/hero'
import IntroSection from '../components/introduction'
import FeaturedServices from '../components/featured_services'
import MiniMiniPortfolio from '../components/mini_portfolio'
import SummaryAboutUs from '../components/summary_about_us'
import ShortTestimonials from '../components/short_testimonials'
import ShortBlog from '../components/short_blog'
import CtaContact from '../components/cta_contact'
import Footer from '../components/footer'

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <IntroSection />
      <FeaturedServices />
      <MiniMiniPortfolio />
      <SummaryAboutUs />
      <ShortTestimonials />
      <ShortBlog />
      <CtaContact />
      <Footer />
    </div>
  )
}

export default Home