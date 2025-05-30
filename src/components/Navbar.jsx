import {Menu, X} from 'lucide-react';
import { useState } from "react"
import { navItems} from '../constants/index.jsx';


const Navbar = () => {

    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

    return(
      <nav className=''>
        <div>
          <div>
            <span>Devnest Innova</span>
          </div>
          <ul>
            {navItems.map((item,index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div>
            <a href="#">Cotizar proyecto</a>
          </div>
          <div>
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      
          
      </nav>
    )
}

export default Navbar;