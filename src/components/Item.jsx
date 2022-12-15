import React from "react";

const Item = ({item}) => {
    return (
        <div className="card">
            <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
            <div className="card-body text-center">
                <p className="card-text">{item.nombre}</p>
            </div>
        </div>
    );
}

export default Item;