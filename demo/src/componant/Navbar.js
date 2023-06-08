
import './nav.css';
import { useState } from 'react'
// import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from './icons8.svg'
import { ReactComponent as Brand } from './logoi.svg'


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
            <a href="/home">Home</a>
            </li>
            <li>
            <a href="/about">About</a>
            </li>
            <li>
            <a href="/contact">Contact</a>
            </li>
            <li>
            <a href="/notes">Notes</a>
            </li>
            <li>
            <a href="/project">Projects</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;