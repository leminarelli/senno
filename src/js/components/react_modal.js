import React from 'react';

export default class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.modal = React.createRef();

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(e) {
        window.$(this.modal.current).modal('hide');
    }

    componentDidMount() {
        // Previne que ao fechar o segundo modal, o primeiro modal pare de scrollar
        window.$(this.modal.current).on('hidden.bs.modal', function (e) {
            if(window.$('.modal').hasClass('show')) {
                $('body').addClass('modal-open');
            }
        });
    }
}