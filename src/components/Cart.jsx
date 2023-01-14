import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, sumaTotal, cartTotal} = useContext(CartContext);

    if(cartTotal() === 0){
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12">
                        <div className="alert alert-dark" role="alert">
                            No se encuentran productos en el carrito.
                        </div>
                        <Link to={"/"} className="btn bg-light"> Volver a la Pagina Principal </Link>
                    </div>
                </div>
            </div>     
        )
    } 

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" className="text-end" colSpan={5}><Link onClick={clear} className="btn bg-dark text-light">Vaciar Carrito</Link></th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th className="text-center" scope="col">Cantidad</th>
                                <th className="text-center" scope="col">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item=> (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={36} /></td>
                                    <td className="align-middle">{item.nombre}</td>
                                    <td className="text-center align-middle" >{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.precio}</td>
                                    <td className="text-center align-middle"><Link onClick={() => {removeItem(item.id)}}><img src={"/images/trash3.svg"} alt={"Eliminar Producto"} width={20} /></Link></td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Suma Total</td>
                                <td className="text-center"><b>${sumaTotal()}</b></td>
                                <td className="text-center"><Link to={"/finalizarCompra"} className="btn bg-dark text-light">Finalizar Compra</Link></td>
                            </tr>    
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;