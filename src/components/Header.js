import React ,{useState} from 'react'
import '../Style/header.css'
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const [toggleNav,setToggleNav] = useState(false)
  return (
    <header>
         <div>
                clickit
            </div>
           <RxHamburgerMenu onClick={()=> setToggleNav(!toggleNav)}  className='hambur'/> 
          <ul className={`navbar-links ${toggleNav ? 'active' : ''}`}>
                <li>
                    Process
                </li>
                <li>
                    Benefits
                </li>
                <li>
                    Services
                </li>
                <li>
                    Portfolio
                </li>
                <li>
                    FAQ
                </li>
                <li>
                <button className='btn-get-started'>
            Get Started
        </button>
                </li>
            </ul>
        <nav>
           
            <ul>
                <li>
                    Process
                </li>
                <li>
                    Benefits
                </li>
                <li>
                    Services
                </li>
                <li>
                    Portfolio
                </li>
                <li>
                    FAQ
                </li>
                <li>
                <button className='btn-get-started'>
            Get Started
        </button>
                </li>
            </ul>
       
        </nav>
       
    </header>
  )
}

export default Header