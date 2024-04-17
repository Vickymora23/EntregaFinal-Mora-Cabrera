
import "./App.css"
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import CountController from './components/Examples/CountController.jsx'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  const addToCart = () => {
    
  };

  return (

  <BrowserRouter> 

    <NavBar/>
    
    <Routes>
      <Route path='/' element={<ItemListContainer saludo = 'Bienvenido/a al e-comerce de insumos veterinarios!' />}/>
      <Route path='/category/:idCategory' element={<ItemListContainer saludo = 'Bienvenido/a al e-comerce de insumos veterinarios!'/>}/>
      <Route path='/detail/:idProduct' element={<ItemDetailContainer /> } />
    </Routes>


    
    
       
    <CountController addToCart={addToCart} />

     </BrowserRouter>
   
  )
}

export default App
