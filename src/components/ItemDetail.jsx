import React from "react";

const ItemDetail = ({item}) => {
    return (
        <div className="row">
            <div className="col-md-6 offset-md-3 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>${item.precio}</b></p>
            </div>
        </div>
    )
}

export default ItemDetail;