import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useState, useEffect }   from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect( () => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filtro = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(filtro).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
            ));
        });

    }, [id]);

    return(
        <div className="container estiloLista my-4">
            <ItemList items={items}/>   
        </div>
    )
}

export default ItemListContainer;