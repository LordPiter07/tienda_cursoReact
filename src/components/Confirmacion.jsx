import React from "react";
import { Link, useParams } from "react-router-dom";

const Confirmacion = () => {
    const {id} =useParams();

    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-info text-center" role="alert">
                        <h1>Orden generada Exitosamente!</h1>
                        <p>El numero de tu Orden es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn bg-dark text-light"> Volver a la Pagina Principal </Link>
                </div>
            </div>
        </div>     
    )
}

export default Confirmacion;