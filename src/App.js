import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from './components/NavBar';
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"Líderes en el mercado del Padel Argentino. Encontrá la mejor calidad de todas las marcas importadas y nacionales."}/> 
      <Footer />
    </div>
  );
}

export default App;
