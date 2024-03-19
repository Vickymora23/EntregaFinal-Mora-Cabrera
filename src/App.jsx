
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {

  return (

  <div> 
    <NavBar/>
   
    <ItemListContainer saludo = 'Bienvenido/a al e-comerce de insumos veterinarios!' saludoo = 'Tenemos gran variedad de productos, al mejor precio' />
       
  </div>
   
  )
}

export default App
