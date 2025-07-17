import {Menu, X} from 'lucide-react';
import { useState } from "react"
import { navItems} from '../constants/index.jsx';


const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return(
      <nav className='nav sticky top-0 z-50 py-3 backdrop-blur-lg bg-blue-background border-b border-navbar-border shadow-lg'>
        <div className='container px-4 mx-auto relative text-sm'>
          <div className='flex justify-between items-center md:px-18'>
            <div className='flex items-center flex-shrink-0  space-x-3'>
              <span className='text-2xl tracking-tight font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'>Devnest Innova</span>
            </div>
            <ul className='hidden lg:flex  space-x-6'>
              {navItems.map((item,index) => (
                <li key={index}>
                  <a href={item.href} className='text-muted-foreground hover:text-primary'>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className='hidden lg:flex  justify-center items-center bg-primary/10 hover:bg-primary/20 transition-colors'>
              <a href="#" className='py-2 px-3 border rounded-md text-primary'>Cotizar Proyecto</a>
            </div>
            <div className='lg:hidden md:flex flex-col justify-end'>
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className='fixed right-0 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden text-primary'>
              <ul>
                {navItems.map((item, index) => (
                  <li key ={index} className='py-4'>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <a href="#contact" className='text-primary-foreground bg-gradient-to-r from-primary to-secondary py-3 px-4 mx-3 rounded-md hover:opacity-90 hover:scale-105
            transition-transform duration-300 text-center'>
                Cotizar un proyecto
              </a>
            </div>
          )}
        </div>      
      </nav>
    )
}

export default Navbar;