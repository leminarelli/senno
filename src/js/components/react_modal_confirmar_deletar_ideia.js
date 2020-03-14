import React from 'react';
import SpinnerLDSRipple from './react_spinner_lds_ripple';
import ModalTitleEllipsisMenu from './react_modal_title_ellipsis_menu';
import Modal from './react_modal';
import { withTranslation } from 'react-i18next';

class _ModalConfirmarDeletarIdeia extends Modal {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        this.modal = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        super.componentDidMount();
        let that = this;
        window.$(this.modal.current).on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget) // Button that triggered the modal
            var id = button.data('id') // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this)

            that.setState({
                loading: false
                , ideia_id: id
            });
        });
    }

    componentDidUpdate() {
        
    }

    getInitialState() {
        return {
            loading: true
            , ideia_id: ''
        }
    }

    handleSubmit(e) {
        if(typeof this.props.onSubmit === 'function') {
            this.props.onSubmit(e);
        }
    }

    render() {

        const { t, i18n } = this.props;

        return (
            <div ref={this.modal} className="modal fade" id="modal_confirmar_deletar_ideia" tabIndex="-1" role="dialog" aria-labelledby="modal_confirmar_deletar_ideia_title" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal_confirmar_deletar_ideia" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">{ t('modal_confirmar_deletar_ideia.title') }</h5>
                            <ModalTitleEllipsisMenu target="modal_confirmar_deletar_ideia_menu" />
                        </div>
                        { this.state.loading ?
                            <div className="modal-body text-center">
                                <SpinnerLDSRipple/>
                            </div>
                        :
                            <form action={`/ideias/remover/${ this.state.ideia_id }`} method="POST">
                                <div className="modal-body">
                                    <div className="row text-subheader">
                                        <div className="col-12">
                                            <p>Após esta confirmação você não poderá recuperar esta ideia.</p>
                                        </div>
                                        <div className="col-12 mt-4 text-center">
                                            <h5>Deseja deletar esta ideia?</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary mr-auto" onClick={ this.handleClose }>{ t('global.close') }</button>
                                    <button type="submit" className="btn btn-primary">{ t('global.confirm') }</button>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const ModalConfirmarDeletarIdeia = withTranslation('common')(_ModalConfirmarDeletarIdeia);

// const ModalConfirmarDeletarIdeia = (props) => (
//     <Suspense fallback={<div />}>
//         <WithTranslation {...props} />
//     </Suspense>
//)

export default ModalConfirmarDeletarIdeia;