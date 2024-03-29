import React, { useState, useContext  } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { Navigate } from "react-router-dom";

const FinalizarCompra = () => {

    const {cart, clear, sumaTotal} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () =>{
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, email: email, phone: telefono},
            items: cart.map(item => ({id:item.id, title:item.nombre, price:item.precio, quantity:item.quantity, total_price:item.quantity * item.precio})),
            date: `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`,
            total: sumaTotal()
        }

        const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then((snapshop) => {
            setOrderId(snapshop.id);
            clear();
        });
    }

    return(
        <div className="container">
            <div className="row my-4">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" id="email" placeholder="Ingrese su email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Telefono</label>
                            <input type="text" className="form-control" id="telefono" placeholder="Ingrese su telefono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" onClick={generarOrden} className="btn btn-primary">Generar Orden</button>
                    </form>
                </div>
                <div className="col">
                    <table className="table">
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={36} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle" >{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                </tr>
                            ))}
                            <tr>
                                <td>&nbsp;</td>
                                <td> <b>Total a Pagar</b></td>
                                <td><b>${sumaTotal()}</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    { orderId ? <Navigate to={"/Confirmacion/"+orderId} /> : "" }
                </div>
            </div>
        </div>
    )
}

export default FinalizarCompra;