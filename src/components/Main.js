import React from 'react';

import './styles/Main.css';

function Main () {
    return (
        <main id='main'>
            <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel" data-pause= 'false' data-interval='3000'>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src='https://res.cloudinary.com/joeln7/image/upload/v1605910519/platzi-bootstrap/hawaii2_sbmsww.jpg' alt="Hawai 1" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src='https://res.cloudinary.com/joeln7/image/upload/v1605910519/platzi-bootstrap/hawaii_gwwrb0.jpg' alt="Hawai 2" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src='https://res.cloudinary.com/joeln7/image/upload/v1605910517/platzi-bootstrap/hawaii3_rfjadw.jpg' alt="Hawai 3" />
                    </div>
                    <div className="overlay">
                        <div className="container">
                            <div className="row align-items-center justify-content-end">
                                <div className="col-md-6  text-center text-md-right">
                                    <h1>Taki Conf Hawai</h1>
                                    <p className='d-none d-sm-block' > Platzi Conf llega por primer vez a Hawai. Un evento para compartir con la comunidad.
                                        El conocimiento y experiencia de los expertos que están creando el futuro de internet.
                                        Ven a conocer a miembros del Team Platzi, a otros estudiantes de Platzi y a los oradores de primer nivel que tenemos para ti.
                                        ¡Te esperamos!
                                    </p>
                                    <a href="#convierte-en-orador" className="btn btn-outline-light"> Quiero ser orador</a>
                                    <button type="button" className='btn btn-platzi' data-toggle='modal' data-target='#BuyModal' >Comprar tickets</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;