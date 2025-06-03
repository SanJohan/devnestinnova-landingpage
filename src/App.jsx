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
      {/* <div className='max-w-7xl mx-auto pt-17 px-6 bg-gradient-to-br from-background via-slate-900 to-purple-900/30'>
        <HeroSection />   
      </div> */}
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
