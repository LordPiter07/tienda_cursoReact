import React from "react";

const Footer = ()=>{
    return(
        <div className="container-fluid estiloFooter">
            <div className="row listaContenedor py-4">
                <div className="col-md-4">
                    <img src={"images/truck.svg"} alt={"transporte"} width={60} />
                    <p>ENVIOS A TODO EL PAIS</p>
                </div>
                <div className="col-md-4">
                    <img src={"images/credit-card.svg"} alt={"tarjeta"} width={60} />
                    <p>PAGAS EN 6 Y 12 CUOTAS</p>
                </div>
                <div className="col-md-4">
                    <img src={"images/bag-check.svg"} alt={"compra asegurada"} width={60} />
                    <p>GARANTIA EN TODOS LOS PRODUCTOS</p>    
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 text-end">
                    <p>
                        <a href={"https://www.facebook.com/"} target={"_blank"} rel={"noreferrer"}>
                            <img src={"images/facelogo.png"} alt={"logo de facebook"} width={30} />
                        </a>
                    </p>
                </div>
                <div className="col-md-6">
                    <p>
                        <a href={"https://www.instagram.com/"} target={"_blank"} rel={"noreferrer"}>
                            <img src={"images/instalogo.png"} alt={"logo de instagram"}  width={30} />
                        </a>
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer;