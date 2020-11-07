import React from 'react';

import './styles/Main.css';

function BecomeSpeaker () {
    return (
        <section id='convierte-en-orador '>
            <div className="container py-4">
                <div className="row">
                    <div className="col text-uppercase text-center">
                        <small>
                            Conviertete en un
                        </small>
                        <h2 >Orador</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        Anótate como orador para dar una charla ignite.
                        Cuéntanos de que quieres hablar!
                    </div>
                </div>
                <div className="row pt-2">
                    <div className="col-12 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <form>
                            <div class="form-row">
                                <div class=" form-group col-8 offset-2 col-sm-6 offset-sm-0">
                                    <input type="text" class="form-control" placeholder="Nombre" />
                                </div>
                                <div class=" form-group col-8 offset-2 col-sm-6 offset-sm-0">
                                    <input type="text" class="form-control" placeholder="Apellido" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col form-group">
                                    <textarea name="text" className='form-control form-control-lg' placeholder='Sobre qué quieres hablar?'></textarea>
                                    <small className='form-text text-muted text-center'>
                                        Recuerda incluir un título para tu charla.
                                    </small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type='button' className='btn btn-platzi btn-block'>
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BecomeSpeaker;