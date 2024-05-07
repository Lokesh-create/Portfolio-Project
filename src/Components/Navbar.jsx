  import React,{useState} from 'react'
  import './Navbar.css';
  import {Link} from "react-router-dom";
  import { MdOutlineMenu } from "react-icons/md";
  import { RxCross2 } from "react-icons/rx";

  export default function Navbar() 
  {
    const [showNavbar, setShowNavbar] = useState(false);
   
    const toggleNavbar = () => {
      setShowNavbar(!showNavbar);
    };
   function Hidenav()
   {
    setShowNavbar(false);
   }
    return (
      <>
        <nav className='f-nav'>
          <ul>
        
         <li>
         <Link to={'/Home'} className='logo'>
              <img src="logo.png" alt="" className='logo-img' />
              <div className='name'>James Smith</div>
            </Link>
         </li>
            <li className='links'>
              <Link to={'/Home'}>Home</Link>
              <Link to={'/About'}>About</Link>
              <Link to={'/Portfolio'}>Portfolio</Link>
              <Link to={'/Contact'}>Contact</Link>
            </li>
            <button onClick={toggleNavbar} className='menubtn'><MdOutlineMenu /></button>
            <li><Link to={'/Contact'} className='hire'>Hire me</Link></li>
          </ul>
        </nav>
        
      <div className="nav-sec">
          <nav className={`sec-nav ${showNavbar ? 'visible' : ''}`}>
            <button onClick={Hidenav} className='cross'> <RxCross2/> </button>
              <ul>
                <li>
                  <Link to={'/Home'}>Home</Link>
                  <Link to={'/About'}>About</Link>
                  <Link to={'/Portfolio'}>Portfolio</Link>
                  <Link to={'/Contact'}>Contact</Link>
                </li>
              </ul>
          </nav>
      </div>
      </>
    )
  }
