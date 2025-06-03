import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import Methodology from './components/Methodology'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto pt-20 px-6'>
        <HeroSection />
        
      </div>
      <AboutUs />
      <OurServices />
      <Methodology />
      <Testimonials />
    </>
  )
}

export default App
