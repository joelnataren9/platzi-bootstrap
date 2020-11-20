import React from 'react';
import './styles/Footer.css';

export default function Footer() {
    return(
        <footer id='footer' className='pb-4 pt-4'>
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 col-lg">
                        <span className='btn btn-link'>Preguntas frecuentes</span>
                    </div>
                    <div className="col-12 col-lg">
                        <span className='btn btn-link'> Contáctanos</span>
                    </div>
                    <div className="col-12 col-lg">
                        <span className='btn btn-link'> Prensa</span>
                    </div>
                    <div className="col-12 col-lg">
                        <span className='btn btn-link'> Conferencias</span>
                    </div>
                    <div className="col-12 col-lg">
                        <span className='btn btn-link'> Términos y condiciones</span>
                    </div>
                    <div className="col-12 col-lg">
                        <span className='btn btn-link'> Privacidad</span>
                    </div>
                    <div className="col-12 col-lg">
                        <span className='btn btn-link'> Estudiantes</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}