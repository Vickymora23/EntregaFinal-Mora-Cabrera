import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from "react-router-dom";

const Cart = () => {

const { cart, clearCart, deleteProductById, totalPrice } = useContext(CartContext)

if (cart.length === 0){
  return <div> No hay productos en el carrito</div>
}

  return (
    <div>
        {
         cart.map((product)=> (
            <div key={product.id}>
                <p>{product.title}</p>
                <img src={product.pictureUrl} style={{width:"200px", height:"200px"}} />
                <p>Total: {product.quantity * product.price}</p>
            
            <button onClick={ () => deleteProductById(product.id)}>Eliminar producto</button>
            </div>
         ))
        } 
        
        <h2>Precio total: {totalPrice()}</h2>
        <button onClick={clearCart}>Limpiar carrito</button>

        <Link to="/checkout">Continuar compra</Link>

   </div>
  )
}

export default Cart