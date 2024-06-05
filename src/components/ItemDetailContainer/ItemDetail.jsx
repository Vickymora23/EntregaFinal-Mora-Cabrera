import React, { useState } from 'react'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext.jsx"
import { Link } from "react-router-dom";
import CountController from "../Examples/CountController";
import "./itemDetail.css"

const ItemDetail = ({ product }) => {

  const { cart, addToCart } = useContext(CartContext)
  const [clickAdd, setClickAdd] = useState(false)
 
  const handleClick = (contador) =>{
  const productCart = { ...product, quantity: contador, total: product.price * contador }
  addToCart(productCart)
  setClickAdd(true)
}
 
 
  return (
    <div>
      <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            {
              clickAdd ? <Link to="/cart"></Link> : <CountController handleClick={handleClick} stock={product.stock}/>
            }
            
        </div>
        <div className='image-card'>
        <img src={product.pictureUrl} />
      </div>
</div>
  )
}

export default ItemDetail
