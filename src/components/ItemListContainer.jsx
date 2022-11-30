import React from "react";

const ItemListContainer = ({greeting}) => {
    return(
        <div className="row contenedorBody">
            <div className="col-md-6 listaContenedor">
                <h1>TIENDA PADEL</h1>
            </div>
            <div className="col-md-6 listaContenedor">
                <p>{greeting}</p>    
            </div>
        </div>
    )
}

export default ItemListContainer;