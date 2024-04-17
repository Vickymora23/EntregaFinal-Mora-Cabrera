import React from 'react'
import { Link } from "react-router-dom"


const Item = ({ product }) => {
  return (
    
    <div key={product.id} className='card'> 
    
          <div className='card-body'>
          <div className="card-img-box">
        <img className="image-card" src={product.pictureUrl} alt={product.title} />
          </div>
            <h2  className='card-body-title'>{product.title}</h2>
            <p className='card-body-description'>{product.description}</p>
            <p className='card-body-price'>{product.price}</p>
            <div className='card-box-buttom'>
            <Link to={`/detail/${product.id}` } className='card-buttom'> 
            Ver Detalle </Link>
            </div>
          </div> 

          </div>
        
  )
};

export default Item