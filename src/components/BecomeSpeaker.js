import React from 'react';

// import ReactTooltip from 'react-tooltip';
import './styles/Main.css';
import './styles/BecomeSpeaker.css';

// import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import SpeakerModal from './SpeakerModal';

function BecomeSpeaker () {

    // tool = () => {
    //     ReactDOM.findDOMNode(<section>).getElementsByClassName('snap').tootltip();
    //     {/* $('[data-toggle="tooltip"]').tooltip(); */}
    // }


        return (
            <section id='convierte-en-orador'>
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
                            Anótate como orador para dar una
                            {/* <span data-tip data-for="ignite"> charla Ignite. </span> */}
                            {/* <ReactTooltip id="ignite" place="top" effect="solid">
                                Charlas de 5 minutos
                            </ReactTooltip> */}
                            {/* <abbr title="Charlas de 5 minutos" data-toggle='tooltip' >charla ignite</abbr>. */}
                            <OverlayTrigger
                                overlay={
                                    <Tooltip id={`tooltip-ign`}>
                                        Es una charla de 5 minutos
                                    </Tooltip>
                                    }
                                placement='top'
                            >
                                <span className='btn-light font-italic'> Ignite. </span>
                            </OverlayTrigger>
                            Cuéntanos de que quieres hablar!
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="col-12 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <form>
                                <div className="form-row">
                                    <div className=" form-group col-8 offset-2 col-sm-6 offset-sm-0">
                                        <input type="text" className="form-control" placeholder="Nombre" />
                                    </div>
                                    <div className=" form-group col-8 offset-2 col-sm-6 offset-sm-0">
                                        <input type="text" className="form-control" placeholder="Apellido" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-8 form-group offset-sm-0 offset-2 col-sm">
                                        <textarea name="text" className='form-control form-control-lg' placeholder='Sobre qué quieres hablar?'></textarea>
                                        <small className='form-text text-muted text-center'>
                                            Recuerda incluir un título para tu charla.
                                        </small>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12 col-8 offset-2">
                                        <button type='button' className='btn btn-platzi btn-block' data-toggle='modal' data-target='#SpeakerModal'>
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <SpeakerModal />
            </section>
        );
}

export default BecomeSpeaker;