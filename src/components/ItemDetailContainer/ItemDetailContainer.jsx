import { useState, useEffect } from "react"
// import getProducts from "../../data/getProducts"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { idProduct } = useParams()

    const getProduct = async() => {
        const docRef = doc(db, "products", idProduct);
        const dataDb = await getDoc(docRef)
    
        const data = { id: dataDb.id, ...dataDb.data() }

    setProduct(data)
    }

    useEffect (()=>{
        getProduct()
        // getProducts
        // .then((respuesta)=> {
        //   const newProduct = respuesta.find((product)=> product.id === idProduct )
        //   setProduct(newProduct)
        // })
        // .catch((error)=> console.log(error))

    }, [idProduct] )

    return (
        <ItemDetail product={product} />
    )
}

export default ItemDetailContainer