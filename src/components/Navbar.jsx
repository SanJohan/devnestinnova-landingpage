import {Menu, X} from 'lucide-react';
import { useState } from "react"
import { navItems} from '../constants/index.jsx';


const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return(
      <nav className='nav sticky top-0 z-50 py-3 backdrop-blur-lg bg-secondary-background border-b border-navbar-border shadow-lg'>
        <div className='container px-4 mx-auto relative text-sm'>
          <div className='flex justify-between items-center px-18'>
            <div className='flex items-center flex-shrink-0'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 md:h-9 md:w-9 text-nav-anchor-hover mr-2">
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                <line x1="16" x2="2" y1="8" y2="22"></line>
                <line x1="17.5" x2="9" y1="15" y2="15"></line>
              </svg>
              <span className='text-2xl tracking-tight font-bold bg-gradient-to-r from-nav-anchor-hover to-secondary bg-clip-text text-transparent'>Devnest Innova</span>
            </div>
            <ul className='hidden lg:flex ml-14 space-x-6'>
              {navItems.map((item,index) => (
                <li key={index}>
                  <a href={item.href} className='hover:text-nav-anchor-hover'>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className='hidden lg:flex  justify-center items-center bg-nav-anchor-hover/10 hover:bg-nav-anchor-hover/20 transition-colors'>
              <a href="#" className='py-2 px-3 border rounded-md text-nav-anchor-hover'>Cotizar Proyecto</a>
            </div>
            <div className='lg:hidden md:flex flex-col justify-end'>
              <button onClick={toggleNavbar}>
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          {mobileDrawerOpen && (
            <div className='fixed right-0 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
              <ul>
                {navItems.map((item, index) => (
                  <li key ={index} className='py-4'>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
              <a href="#">
                Cotizar un proyecto
              </a>
            </div>
          )}
        </div>      
      </nav>
    )
}

export default Navbar;