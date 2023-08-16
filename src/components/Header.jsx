import { React, useState} from "react"
import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import logoImg from '../assets/company-logo.png'
import Hamburger from 'hamburger-react'

const Header = () => {

  const [isOpen, setOpen] = useState(false)

  const activeStyle = {
    fontWeight: "bold",
    color: "#ff5722",
    borderBottom: '2px solid #ff5722'
  }

  const navbarStyle = {
    display: 'flex'
  }

  return (
    <header
      className="header-wrapper">
      <Link
        className="logo-wrapper"
        to='/'>
      <img className="img-logo" src={logoImg} alt="logo" />
      <h1 className="company-name">maximoto</h1>
      </Link>
      <Hamburger direction='right' color="#ff5722" toggled={isOpen} toggle={setOpen} />
      <nav 
        className="navbar"
        style={isOpen ? navbarStyle : null }>
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
            style={({isActive}) => isActive ? activeStyle : null}>blog
        </NavLink>
        <NavLink
            className='navlink'
            to="contact"
            style={({isActive}) => isActive ? activeStyle : null}>contact
        </NavLink>
      </nav>
    </header>
  )
};

export default Header;
