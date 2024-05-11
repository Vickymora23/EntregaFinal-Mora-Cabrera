import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom"

const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext)

  return (
    <Link to="/cart" className='cart-widget'>
    <img className='cart-navbar' src='/img/cart1.png' />
    <p className='cart-count'> {totalQuantity() === 0 ? "" : totalQuantity()}</p>
     </Link>
  )
}

export default CartWidget