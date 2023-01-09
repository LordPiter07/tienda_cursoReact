import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) =>{

    const [counter, setCounter] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [venta, setVenta] = useState(false);

    const aumentarStock = () => {
        if(counter < itemStock){
            setCounter(counter + 1);
        }
    }

    const disminuirStock = () => {
        if(counter > 1){
            setCounter(counter -1);
        }
    }

    const agregarAlCarrito = (quantity) => {
        setItemStock(itemStock - quantity);
        setCounter(1);
        setVenta(true);
        onAdd(quantity);
    }

    useEffect( () => {
        setItemStock(stock);
    }, [stock])

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
                    {venta ? <Link to={"/cart"} className="btn btn-outline-primary"> Finalizar compra </Link> : <button className="btn btn-outline-primary" onClick={() => {agregarAlCarrito(counter)} }>Agregar al Carrito</button>}
                </div>
            </div>
        </div>

    )
}

export default ItemCount;
    