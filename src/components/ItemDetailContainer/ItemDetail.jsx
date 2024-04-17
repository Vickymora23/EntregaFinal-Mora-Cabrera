import React from 'react'
import "./itemDetail.css"

const ItemDetail = ({ product }) => {
  return (
    <div>
      <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
        </div>
        <div className='image-card'>
        <img src={product.pictureUrl} />
      </div>
</div>
  )
}

export default ItemDetail
