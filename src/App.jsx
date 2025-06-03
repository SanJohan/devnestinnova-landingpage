import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import Methodology from './components/Methodology'
import Testimonials from './components/Testimonials'
import Contact  from './components/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUs />
      <OurServices />
      <Methodology />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
