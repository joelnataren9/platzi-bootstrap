import React from 'react';

function SpeakerModal () {
    return (
        <div className="">
            {/* <!-- Modal --> */}
            <div class="modal fade" id="SpeakerModal" tabindex="-1" role="dialog" aria-labelledby="SpeakerModalTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="SpeakerModalTitle">¿Estás seguro que quieren convertirte en orador?</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Es una gran responsabilidad el tan solo aplicar. Piénsalo bien y cuando estés listo dale enviar.
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpeakerModal;