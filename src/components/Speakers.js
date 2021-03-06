import React from 'react';

import './styles/Speakers.css';

function Speakers () {
    return (
        <section id='speakers' className='mt-4'>
            <div className="container">
                <div className="row mb-2">
                    <div className="col text-center text-uppercase">
                        <small>Conoce a los</small>
                        <h2 className='h2'> Conferencistas </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3 col-sm-6 col-10 offset-1 offset-sm-0 mb-4">
                        <div className="card">
                            <img className="card-img-top" src='https://res.cloudinary.com/joeln7/image/upload/v1605910517/platzi-bootstrap/cvander_h8oeg9.jpg' alt="foto de cvander"/>
                            <div className="card-body">
                                <div className="badges text-right mb-0">
                                    <span className="badge badge-pill  badge-warning">Fullstack Developer</span>
                                    <span className="badge badge-pill  badge-success ml-2">Vue js</span>
                                </div>
                                <h5 className="card-title mb-0">Christian Vanderhens</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum sint cumque beatae, eligendi hic consequatur nobis voluptate officia eaque.
                                </p>
                                <span href="#" className="btn btn-primary">Conoce más </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6 col-10 offset-1 offset-sm-0 mb-4">
                        <div className="card">
                            <img className="card-img-top" src='https://res.cloudinary.com/joeln7/image/upload/v1605910517/platzi-bootstrap/freddy_zfgwz7.jpg' alt="foto de cvander"/>
                            <div className="card-body">
                                <div className="badges text-right mb-0">
                                    <span className="badge badge-pill badge-warning">Git</span>
                                    <span className="badge badge-pill badge-info ml-2">GitHub</span>
                                </div>
                                <h5 className="card-title mb-0">Freddy Vega</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore repudiandae impedit consequatur modi eum odit!
                                </p>
                                <span href="#" className="btn btn-primary">Conoce más</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6 col-10 offset-1 offset-sm-0 mb-4">
                        <div className="card">
                            <img className="card-img-top" src='https://res.cloudinary.com/joeln7/image/upload/v1605910519/platzi-bootstrap/leonidas_a4kiev.jpg' alt="foto de cvander"/>
                            <div className="card-body">
                                <div className="badges text-right mb-0">
                                    <span className="badge badge-pill badge-warning">JavaScript</span>
                                    <span className="badge badge-pill badge-dark ml-2">React</span>
                                </div>
                                <h5 className="card-title mb-0">Leonidas Esteban</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi, sequi doloribus suscipit quod repellat fugiat quas.
                                </p>
                                <span className="btn btn-primary">Conoce más</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-6 col-10 offset-1 offset-sm-0 mb-4">
                        <div className="card">
                            <img className="card-img-top" src='https://res.cloudinary.com/joeln7/image/upload/v1605910518/platzi-bootstrap/sacha_vqliqc.jpg' alt="foto de cvander"/>
                            <div className="card-body">
                                <div className="badges text-right mb-0">
                                    <span className="badge badge-pill badge-warning">Angular js</span>
                                    <span className="badge badge-pill badge-danger ml-2">Sass</span>
                                </div>
                                <h5 className="card-title ">Sacha Lifszyc </h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aperiam reprehenderit unde eveniet maxime!
                                </p>
                                <span className="btn btn-primary">Conoce más</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Speakers;