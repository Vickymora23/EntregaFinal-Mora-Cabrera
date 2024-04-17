import React from 'react'
import "./countController.css"
import { useState } from 'react';


const CountController = ({addToCart}) => {
const [ contador , setContador ] = useState (1)



const sumar = () => {
setContador (contador + 1)
console.log ("Clickeamos el boton de sumar", contador);

};

const borrar = () =>{
  if(contador >1) {
    setContador(contador -1)
  }
    
};

  return (
    <div className='count-controller-box'>
      <div>
      <button onClick={borrar} className='button'> - </button>
      
        <p className='contador'> {contador} </p>
           
      <button onClick={sumar} className='button'> + </button>
       
        </div>
        <div>
          <button onClick={ ()=> addToCart(contador)} className='add-to-cart'>Agregar al carrito </button>
        </div>
    </div>
  );
};

export default CountController