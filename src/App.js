import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from './components/NavBar';
import Footer from "./components/Footer";
import Error404 from "./components/Error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import FinalizarCompra from "./components/FinalizarCompra";
import Confirmacion from "./components/Confirmacion";

function App() {
  return (
    <CartContextProvider>
      <div>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart/>} />
            <Route path={"/finalizarCompra"} element={<FinalizarCompra/>} />
            <Route path={"/confirmacion/:id"} element={<Confirmacion/>} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
