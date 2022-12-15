import React, { useState, useEffect }   from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import listaProductos from "./Json/ListaProductos.json";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(listaProductos);
            }, 2000)
        });

        promesa.then((data) => {
            setItems(data);
        })

    }, []);

    return(
        <div className="container">
            <ItemList items={items}/>
            <ItemCount stockItem = {10} />   
        </div>
    )
}

export default ItemListContainer;