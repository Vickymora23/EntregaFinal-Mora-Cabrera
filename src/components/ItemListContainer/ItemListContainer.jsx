import React, { useEffect, useState } from 'react'
import ItemList from './ItemList';
// import getProducts from "../../data/getProducts";
import { useParams } from "react-router-dom"
import useCargando from '../../hooks/useCargando';
import { PropagateLoader } from 'react-spinners';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";


const ItemListContainer = ({saludo}) => {
  const [products, setProducts] = useState ([]);
  const { cargando, mostrarCargando, ocultarCargando, pantallaDeCarga} = useCargando()
  
  const { idCategory } = useParams() 

   const getProducts = async() => {
    try {
      const dataDb = await getDocs(collection(db, "products"));

    const data = dataDb.docs.map( (productDb)=> {
      return { id: productDb.id, ...productDb.data() }
    });

    setProducts(data)
    } catch (error) {
      
    }
    
   };

   const getProductsByCategory = async() => {
    const q = query(collection(db, "products"), where("category", "==", idCategory));
    
    const dataDb = await getDocs(q);

    const data = dataDb.docs.map( (productDb)=> {
      return { id: productDb.id, ...productDb.data() }
    })

    setProducts(data)
  }

  useEffect (() => {

    if(idCategory){
      getProductsByCategory()
    }else{
      getProducts()
    }
    // mostrarCargando()
   
   // .then((respuesta)=> {
   //   if(idCategory){
    //    const newProducts = respuesta.filter((producto)=> producto.category === idCategory)
    //    setProducts (newProducts)
   //   }else{
    //   setProducts(respuesta)
   //   }
  //  })
   // .catch((error)=> console.log(error))
   // .finally(()=> ocultarCargando ());
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