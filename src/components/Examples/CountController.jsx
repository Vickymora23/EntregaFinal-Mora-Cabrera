import React from 'react'
import "./countController.css"
import { useState, useEffect  } from 'react';


const CountController = ({ handleClick, stock }) => {
const [ contador , setContador ] = useState (1)

useEffect(() => {
  console.log("1er useEffect");
}, []);

useEffect(() => {
  console.log("2do useEffect");
}, [contador]);



const sumar = () => {
  if( contador < stock){
  setContador (contador + 1);  
  }
};

const borrar = () =>{
  if(contador > 1) {
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
          <button onClick={ ()=> handleClick(contador)} className='add-to-cart'>Agregar al carrito </button>
        </div>
    </div>
  );
};

export default CountController