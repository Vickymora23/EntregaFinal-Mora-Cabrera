import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
import getProducts from "../../data/getProducts";
import { useParams } from "react-router-dom"
import useCargando from '../../hooks/useCargando';
import { PropagateLoader } from 'react-spinners';


const ItemListContainer = ({saludo}) => {
  const [products, setProducts] = useState ([]);
  const { cargando, mostrarCargando, ocultarCargando, pantallaDeCarga} = useCargando()
  const { idCategory } = useParams() 

  useEffect (() => {
    mostrarCargando()
    getProducts
    .then((respuesta)=> {
      if(idCategory){
        const newProducts = respuesta.filter((producto)=> producto.category === idCategory)
        setProducts (newProducts)
      }else{
       setProducts(respuesta)
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=> ocultarCargando ());
  }, [idCategory]);

  return (
    <div>
        <div className='title-inicio'> {saludo} </div>
       {
        cargando ? <div className='loading'> <PropagateLoader color="#000000" size={40} LengthType={60} number={1}/> </div> :  <ItemList products={products}/>
       }
     </div>
 );
}

export default ItemListContainer