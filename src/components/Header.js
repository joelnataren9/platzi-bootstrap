import React from 'react';

import BuyModal from './BuyModal.js';

import './styles/Header.css';

function Header () {
    return(
        <React.Fragment>
            <nav id='header' className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#header">
                        <img src='https://res.cloudinary.com/joeln7/image/upload/v1605910519/platzi-bootstrap/logo_ct4vb6.png' alt="Logo de Taki" className='logo' />
                        Conf Hawaii
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbar" data-toggle='collapse' data-target='#navbar'>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item ">
                                <a className="nav-link" href="#main">La conferencia</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#speakers">Los oradores</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#place-time">El lugar y la fecha</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#convierte-en-orador">Conviértete en orador</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-taki" href="#main" data-toggle='modal' data-target='#BuyModal'>Comprar tickets</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <BuyModal /> */}
            </nav>
            <BuyModal />
        </React.Fragment>
    );
}

export default Header;