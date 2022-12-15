import React, { useState } from "react";

const ItemCount = ({stockItem}) =>{

    const [counter, setCounter] = useState(1);
    const [stock, setStock] = useState(stockItem);

    const aumentarStock = () => {
        if(counter < stock){
            setCounter(counter + 1);
        }
    }

    const disminuirStock = () => {
        if(counter > 1){
            setCounter(counter -1);
        }
    }

    const onAdd = () => {
        if(counter <= stock) {
            console.log( "Agregaste: "+ counter + " Productos al Carrito");
            setStock(stock - counter)
            setCounter(1);
        }
    }

    return (

        <div className="container">
            <div className="row mb-3">
                <div className="col-md-2">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={disminuirStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{counter}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={aumentarStock}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">  
                    <button className="btn btn-outline-primary" onClick={onAdd}>Agregar al Carrito</button>
                </div>
            </div>
        </div>

    )
}

export default ItemCount;
    