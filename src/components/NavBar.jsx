import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return(
        <div className="container mb-3">
            <div className="row">
                <div className="col-md-6">
                    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to={"/"}><img src={"/images/paletaNav.png"} alt={"Paleta de padel"} width= {70} /></Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <NavLink className="nav-link active text-light" aria-current="page" to={"/"}>Inicio</NavLink>
                                    <NavLink className="nav-link text-light" to={"/category/paletas"}>Paletas</NavLink>
                                    <NavLink className="nav-link text-light" to={"/category/indumentaria"}>Indumentaria</NavLink>
                                    <NavLink className="nav-link text-light" to={"/category/accesorios"}>Accesorios</NavLink>
                                    <NavLink className="nav-link text-light" to={"/category/zapatillas"}>Zapatillas</NavLink>
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