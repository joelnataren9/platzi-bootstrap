import React from 'react';


function BuyModal()  {
    return (
        <div className="">
            {/* Button trigger modal */}
            {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#BuyModal">
            Launch demo modal
            </button> */}

            {/* Modal */}
            <div className="modal fade" id="BuyModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Compra tus tickets</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form action="">
                                <div className="form-group">
                                    <label for="emailInput">Email address</label>
                                    <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">Nunca compartiremos tu correo con alguien más.</small>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col">
                                        <div className="input-group mb-2">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="basic-addon1">@</span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group form-check">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">
                                        <a href="#" > Acepto los términos y condiciones</a>
                                    </label>
                                </div>
                            </form>
                            <div className="alert alert-warning" role="alert">
                                Se harán rifas durante el evento.
                                Recibirás un correo de confirmación si sales sorteado.
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button type="submit" className="btn btn-platzi" data-dismiss='modal'>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyModal;
