import React from 'react'
import { Link } from "react-router-dom"
import CartWidget from './CartWidget'
import "./navbar.css"

const NavBar = () => {


  return (
    <nav className='navbar'>
      <Link to="/">
      <img className='icon-navbar' src='/img/icon3.png'/>
      </Link>

      <ul className='list-navbar'>
        <Link to="/category/antibioticos" className="list-item">Antibióticos</Link>
        <Link to="/category/analgesicos" className="list-item">Analgésicos</Link>
        <Link to="/category/antiinflamatorios" className="list-item">Antiinflamatorios</Link>
        <Link to="/category/antiparasitarios" className="list-item">Antiparasitarios</Link>
      </ul>
      <CartWidget />
      </nav>
  )
}

export default NavBar