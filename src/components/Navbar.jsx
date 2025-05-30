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
          <div className='flex justify-between items-center'>
            <div className=''>
              <span className='text-xl tracking-tight'>Devnest Innova</span>
            </div>
            <ul className='hidden lg:flex ml-14 space-x-12'>
              {navItems.map((item,index) => (
                <li key={index}>
                  <a href={item.href} className='hover:text-nav-anchor-hover'>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className='hidden lg:flex  justify-center items-center'>
              <a href="#" className='py-2 px-3 border rounded-md'>Cotizar proyecto</a>
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