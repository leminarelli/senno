import React, { Suspense } from 'react';
import {
    showComponentByQueryString
} from '../main';

export default class SennoPage extends React.Component {
    constructor(props) {
        super(props);
        this.refreshUser = this.refreshUser.bind(this);
        this.setTitle    = this.setTitle.bind(this);
    }

    refreshUser() {
        let that = this;
        window.$.ajax({
            url: `/api/usuario/`
        }).done(function(response) {
            that.setState({
                user: response.data.usuario
            })
        }).fail(function(response) {
            console.log(response)
        });
    }

    setTitle(string, t) {
        document.head.querySelector('title').innerText = `${ string ? string : t(document.querySelector('#headerTitle').value) } | SENNO`;
    }

    componentDidUpdate() {
        if(!this.showComponent) showComponentByQueryString(document.location.search.substring(1))
        this.showComponent = true;
    }

    componentDidMount() {
        this.refreshUser();
    }

}