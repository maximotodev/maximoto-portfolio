import { React, useEffect, useRef, useState} from "react"
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import logoImg from '../assets/company-logo.png'
// import Hamburger from 'hamburger-react'
import { Divide as Hamburger } from 'hamburger-react'

const Header = () => {

  const [isOpen, setOpen] = useState(false)

  let navbarRef = useRef();

  useEffect(()=>{
    
    let handler = (e) => {
      if(!navbarRef.current.contains(e.target)) {
        setOpen(false);
        // console.log(navbarRef.current)
        // console.log(isOpen)
      }
    };

    document.addEventListener('click', handler);

    return() => {
      document.removeEventListener('click', handler);
    }

  })

  const activeStyle = {
    fontWeight: "bold",
    color: "#ff5722",
    borderBottom: '2px solid #ff5722'
  }

  // const navbarStyle = {
  //   display: 'flex'
    
  // }

  return (
    <header
      className="header-wrapper">
      <Link
        className="logo-wrapper"
        to='/'>
        <img className="img-logo" src={logoImg} alt="logo" />
        <h1 className="company-name">maximoto</h1>
      </Link>
      <div ref={navbarRef} className="navbar-wrapper">
        <div className="hamburger">
        <Hamburger size={25} easing="ease-in" duration={0.5}color="#ff5722" toggled={isOpen} toggle={setOpen} />
        </div>
        <nav 
        className={isOpen ? "navbar" : "navbar-closed"}
        // style={isOpen ? navbarStyle : {display: 'none'} }
        >
        <NavLink
            className='navlink'
            to='/'
            style={({isActive}) => isActive ? activeStyle : null}>home
        </NavLink>
        <NavLink
            className='navlink'
            to="portfolio"
            style={({isActive}) => isActive ? activeStyle : null}>portfolio
        </NavLink>
        <NavLink
            className='navlink'
            to="blog"
            style={({isActive}) => isActive ? activeStyle : null}
            >
              blog
        </NavLink>
        <NavLink
            className='navlink'
            to="contact"
            style={({isActive}) => isActive ? activeStyle : null}>contact
        </NavLink>
      </nav>
      </div>
    </header>
  )
};

export default Header;
