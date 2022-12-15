import React, { useState, useEffect }   from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import listaProductos from "./Json/ListaProductos.json";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? listaProductos.filter(item => item.categoria === id) : listaProductos);
            }, 2000)
        });

        promesa.then((data) => {
            setItems(data);
        })

    }, [id]);

    return(
        <div className="container">
            <ItemList items={items}/>   
        </div>
    )
}

export default ItemListContainer;