import React from 'react'
import CartWidget from './CartWidget'
import "./navbar.css"

const NavBar = () => {


  return (
    <nav className='navbar'>
      <img className='icon-navbar' src='/img/icon3.png'/>
      <ul className='list-navbar'>
        <li>Antibióticos</li>
        <li>Analgésicos</li>
        <li>Antiinflamatorios</li>
        <li>Antiparasitarios</li>
      </ul>
      <CartWidget />
      </nav>
  )
}

export default NavBar