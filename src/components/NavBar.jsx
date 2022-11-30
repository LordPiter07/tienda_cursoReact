import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><img src={"images/paletaNav.png"} alt={"Paleta de padel"} width= {70} /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link active" aria-current="page" href="/">Inicio</a>
                                    <a className="nav-link" href="/paletas">Paletas</a>
                                    <a className="nav-link" href="/indumentaria">Indumentaria</a>
                                    <a className="nav-link" href="/accesorios">Accesorios</a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col-md-6 d-flex justify-content-end align-items-center">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;