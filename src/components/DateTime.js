import React from 'react';

import Honolulu from '../images/honolulu.jpg';
import './styles/DateTime.css';

function DateTime () {
    return(
        <section id='place-time'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-lg-6 px-0">
                        <img className='' src={Honolulu} alt="Ciudad de Honolulu"/>
                    </div>
                    <div className="col-12 col-lg-6 py-4 text-center text-lg-right align-self-center">
                        <h2>Honolulu - Octubre 2025</h2>
                        <p>
                            Honolulu es la capital y localidad más grande del estado de Hawái, en los Estados Unidos. Honolulu es la más sureña de entre las principales ciudades estadounidenses. Aunque el nombre de Honolulu se refiere al área urbana en la costa sureste de la isla de Oahu, la ciudad y el condado de Honolulu han formado una ciudad-condado consolidada que cubre toda la isla (aproximadamente 600 km² de superficie).
                        </p>
                        <a className="btn btn-outline-light" target='_blank' rel='noreferrer noopener' href='https://es.wikipedia.org/wiki/Honolulu'>Conoce más</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DateTime;