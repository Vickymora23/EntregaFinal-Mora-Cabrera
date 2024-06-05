import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";


import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
/*import CountController from "./context/CartContext.jsx";*/
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Checkout from "./components/Checkout/Checkout.jsx";

import "./App.css";

function App() {
  const addToCart = () => {};

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer />

        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer saludo="Bienvenido/a al e-comerce de insumos veterinarios!" />
            }
          />
          <Route
            path="/category/:idCategory"
            element={
              <ItemListContainer saludo="Bienvenido/a al e-comerce de insumos veterinarios!" />
            }
          />
          <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/checkout" element={<Checkout />} />
        </Routes>

          
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
