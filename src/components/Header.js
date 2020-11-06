import React from 'react';

import logo from '../images/logo.png';
import './styles/Header.css'

function Header () {
    return(
        <nav id='header' className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="Logo de Taki" className='logo' />
                    Conf Hawaii
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">La conferencia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Los oradores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">El lugar y la fecha</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Conviértete en orador</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-taki" href="#">Comprar tickets</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;