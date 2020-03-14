export const RadioColorsRow1 = [
// {value:"rgb(255,255,255)", index: 1},
// {value: "rgb(253, 145, 0)", index: 4},
// {value: "rgb(55, 197, 171)", index: 8}
{ value: "rgb(232, 56, 79)", index: 1 }, { value: "rgb(238, 195, 0)", index: 2 }, { value: "rgb(253, 97, 44)", index: 3 }, { value: "rgb(164, 207, 48)", index: 4 }, { value: "rgb(98, 210, 111)", index: 5 }];

RadioColorsRow1.forEach(function (color, index) {
    color.index = index + 1;
});

export const RadioColorsRow2 = [{ value: "rgb(32, 170, 234)", index: 6 }, { value: "rgb(65, 134, 224)", index: 7 }, { value: "rgb(122, 111, 240)", index: 8 }, { value: "rgb(234, 78, 157)", index: 9 }, { value: "rgb(0, 0, 0)", index: 10 }];

RadioColorsRow2.forEach(function (color, index) {
    color.index = RadioColorsRow1.length + index + 1;
});

// Create a <style> element. You can use an existing one as well.
let style = document.createElement('style');
document.head.appendChild(style);
RadioColorsRow1.forEach(function (color, index) {
    style.sheet.insertRule(`.pretty.p-color-${color.index} .state label:before, .pretty.p-color-${color.index} input:checked~.state label:after {
        background-color: ${color.value} !important;
    }`);
    style.sheet.insertRule(`.pretty.p-color-${color.index} .icon {
        color: black;
    }`);
});
RadioColorsRow2.forEach(function (color, index) {
    style.sheet.insertRule(`.pretty.p-color-${color.index} .state label:before, .pretty.p-color-${color.index} input:checked~.state label:after {
        background-color: ${color.value} !important;
    }`);
    style.sheet.insertRule(`.pretty.p-color-${color.index} .icon {
        color: black;
    }`);
});

// console.log(style.sheet.cssRules)

export const SVG = {
    'wizard-step': '<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="50px" height="50px" viewBox="0 0 14.287499 14.2875" version="1.1" id="svg8" inkscape:version="0.92.1 r15371" sodipodi:docname="wizard-step.svg"> <defs id="defs2" /> <g inkscape:label="Camada 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-282.71248)"> <circle class="wizard-step-outer-circle" style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.2644963;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="path4485" cx="7.1437497" cy="289.85623" r="6.4823351" /> <circle class="wizard-step-inner-circle" style="opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:0.26451352;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" id="path4485-8" cx="7.2565742" cy="289.74341" r="1.8521183" /> </g> </svg>'
};
export const IconsMap = { 'credito': 'fa-gem',
  'grupo': 'fa-users',
  'ideia': 'fa-lightbulb',
  'inovacao': 'fa-fire',
  'medalha': 'fa-medal',
  'pesquisa': 'fa-flask',
  'plataforma': 'fa-rocket',
  'portfolio': 'fa-bullseye',
  'sysop': 'fa-traffic-light',
  'ajuda': 'fa-question',
  'moderador': 'fa-gavel',
  'sponsor': 'fa-suitcase',
  'timer': 'fa-stopwatch',
  'editar': 'fa-pencil-alt',
  'aprovar-agente': 'fa-user-check',
  'agente': 'fa-user',
  'localizacao': 'fa-globe-americas',
  'funcao': 'fa-sitemap',
  'conexoes': 'fa-compress-arrows-alt',
  'avaliacoes': 'fa-calendar-check'
};
import React from 'react';
import Input from './react_input';

export default class AgenteMiniCard extends Input {
    constructor(props) {
        super(props);
    }

    render() {
        let agente = this.props.agente;
        return React.createElement(
            'div',
            {
                key: `${agente._id}`,
                'data-id': agente._id,
                className: `${this.props.popover ? React.createElement('div', { className: 'arrow' }) : null} popover-card d-inline-block popover-author mr-2 mb-2 d-flex flex-column justify-content-between`, role: 'tooltip',
                'data-slide': 'true',
                clickable: '',
                onClick: this.props.onClick },
            this.props.popover ? React.createElement('div', { className: 'arrow' }) : null,
            React.createElement(
                'h3',
                { className: 'senno-popover-header pt-0 pr-0 pl-0' },
                React.createElement(
                    'div',
                    { className: 'popover-autor text-center' },
                    React.createElement(
                        'div',
                        { className: 'popover-autor-avatar', style: { position: "relative" } },
                        React.createElement('div', { style: { backgroundColor: agente.cor, height: "55px", width: "100%", borderRadius: ".3em .3em 0 0" } }),
                        React.createElement(
                            'div',
                            { style: { position: "relative", top: "-50px" } },
                            React.createElement('img', { className: 'avatar popover-autor-avatar', src: agente.image }),
                            React.createElement(
                                'div',
                                { className: 'popover-autor-info' },
                                React.createElement(
                                    'div',
                                    { className: 'popover-autor-info-name font-weight-bold' },
                                    agente.nome
                                ),
                                React.createElement(
                                    'div',
                                    {
                                        className: 'popover-autor-info-cargo text-uppercase' },
                                    agente.funcao ? agente.funcao.nome : ""
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'senno-popover-body' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-lightbulb ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        agente.ideias_count
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-bullseye ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        agente.portfolios_count
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-flask ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        agente.pesquisas_count
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-rocket ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        agente.plataformas_count
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-fire ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        agente.inovacoes_count
                    )
                )
            )
        );
    }
}
import React from 'react';
import Input from './react_input';

export class AutorMiniCard extends Input {
    constructor(props) {
        super(props);
    }

    render() {
        let autor = this.props.autor;
        return React.createElement(
            'div',
            {
                key: `${autor._id}`,
                'data-id': autor._id,
                className: `${this.props.popover ? 'popover' : null} popover-card d-inline-block popover-author mr-2 mb-2 d-flex flex-column justify-content-between`, role: 'tooltip',
                'data-slide': 'true',
                clickable: '',
                onClick: this.props.onClick },
            this.props.popover ? React.createElement('div', { className: 'arrow' }) : null,
            React.createElement(
                'h3',
                { className: 'senno-popover-header pt-0 pr-0 pl-0' },
                React.createElement(
                    'div',
                    { className: 'popover-autor text-center' },
                    React.createElement(
                        'div',
                        { className: 'popover-autor-avatar', style: { position: "relative" } },
                        React.createElement('div', { style: { backgroundColor: autor.cor, height: "55px", width: "100%", borderRadius: ".3em .3em 0 0" } }),
                        React.createElement(
                            'div',
                            { style: { position: "relative", top: "-50px" } },
                            React.createElement('img', { className: 'avatar popover-autor-avatar', src: autor.image }),
                            React.createElement(
                                'div',
                                { className: 'popover-autor-info' },
                                React.createElement(
                                    'div',
                                    { className: 'popover-autor-info-name font-weight-bold' },
                                    autor.nome
                                ),
                                React.createElement(
                                    'div',
                                    {
                                        className: 'popover-autor-info-cargo text-uppercase' },
                                    autor.funcao ? autor.funcao.nome : ""
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'senno-popover-body' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-lightbulb ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        autor.ideias_count
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-bullseye ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        autor.portfolios_count
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-flask ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        autor.pesquisas_count
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-rocket ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        autor.plataformas_count
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-fire ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        autor.inovacoes_count
                    )
                )
            )
        );
    }
}
import React from 'react';
import FaIcon from './react_faicon';
import { h } from '../main';

export default class Comentarios extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showReply: false,
            replyTo: null
        };

        this.comentario = React.createRef();
        this.comentarios = React.createRef();
        this.focusReply = this.focusReply.bind(this);
        this.comentar = this.comentar.bind(this);
        this.curtir_comentario = this.curtir_comentario.bind(this);
        this.descurtir_comentario = this.descurtir_comentario.bind(this);
    }

    curtir_comentario(e) {
        e.preventDefault();
        let id = window.$(e.currentTarget).data('comment-id');
        if (this.props.curtir_comentario) {
            this.props.curtir_comentario(id);
        }
    }

    descurtir_comentario(e) {
        e.preventDefault();
        let id = window.$(e.currentTarget).data('comment-id');
        if (this.props.descurtir_comentario) {
            this.props.descurtir_comentario(id);
        }
    }

    comentar(e) {
        e.preventDefault();
        let id = window.$(e.currentTarget).data('reply-to');
        let comentario = null;
        if (!id) {
            comentario = this.comentario.current.value;
            this.comentario.current.value = '';
            window.$(this.comentario.current).trigger('change').trigger('keyup');
        } else {
            comentario = window.$(`#reply-to-${id}`).val();
            window.$(`#reply-to-${id}`).val('').trigger('change').trigger('keyup');
        }
        if (this.props.comentar) {
            this.props.comentar(id, comentario);
        }
    }

    focusReply(e) {
        e.preventDefault();
        let id = window.$(e.currentTarget).data('reply-to');
        if (!id) {
            this.comentario.current.focus();
        } else {
            window.$(`#reply-to-${id}`).focus();
        }
    }

    componentDidUpdate() {
        if (window.autosize) {
            window.autosize(window.$(this.comentarios.current).find('textarea'));
        }
    }

    componentDidMount() {
        if (window.autosize) {
            window.autosize(window.$(this.comentarios.current).find('textarea'));
        }
    }

    render() {
        let comentarios = this.props.comentarios;
        let user = this.props.user;

        if (!comentarios) {
            return null;
        }

        let _comentarios = comentarios.map(function (comentario, i) {
            let _id = `${comentario._id}`;
            return React.createElement(
                'div',
                { key: _id },
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'article',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-md-2 col-sm-2 hidden-xs' },
                            React.createElement(
                                'div',
                                { className: 'popover-autor-avatar w-68px_i h-68px_i ml-auto' },
                                React.createElement('img', { className: 'avatar', src: comentario.autor.image })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-md-10 col-sm-10' },
                            React.createElement(
                                'div',
                                { className: 'panel panel-default arrow left' },
                                React.createElement(
                                    'div',
                                    { className: 'panel-body' },
                                    React.createElement(
                                        'header',
                                        { className: 'text-left' },
                                        React.createElement(
                                            'div',
                                            { className: 'comment-user d-inline mr-3' },
                                            React.createElement(
                                                'strong',
                                                null,
                                                comentario.autor.nome
                                            )
                                        ),
                                        React.createElement(
                                            'time',
                                            { className: 'comment-date', dateTime: comentario.createdAt },
                                            h.short_date(comentario.createdAt)
                                        )
                                    ),
                                    React.createElement('div', { className: 'comment-post', dangerouslySetInnerHTML: { "__html": comentario.conteudo } })
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'text-right' },
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'btn btn-default btn-sm black', 'data-reply-to': _id, onClick: this.focusReply },
                                        React.createElement(FaIcon, { icon: 'fa-reply' }),
                                        ' responder'
                                    ),
                                    React.createElement(
                                        'a',
                                        { href: '#', className: `btn btn-default btn-sm ${comentario.likes && lodash.findIndex(comentario.likes, { autor: user._id }) > -1 ? 'heart-red' : 'black'}`,
                                            'data-comment-id': _id,
                                            onClick: comentario.likes && lodash.findIndex(comentario.likes, { autor: user._id }) > -1 ? this.descurtir_comentario : this.curtir_comentario },
                                        React.createElement(FaIcon, { icon: 'fa-heart' }),
                                        comentario.likes ? ` ${comentario.likes.length}` : ` 0`
                                    ),
                                    React.createElement(
                                        'a',
                                        { href: '#', className: 'btn btn-default btn-sm black', 'data-id': comentario._id, 'data-objeto': 'comentario', 'data-toggle': 'modal', 'data-target': '#modal_denunciar' },
                                        React.createElement(FaIcon, { icon: 'fa-flag' }),
                                        ' ',
                                        comentario.denuncias ? ` ${comentario.denuncias.length}` : ` 0`
                                    ),
                                    comentario.autor._id == user._id ? React.createElement(
                                        'a',
                                        { href: '#', className: 'btn btn-default btn-sm black' },
                                        React.createElement(FaIcon, { icon: 'fa-ellipsis-h' })
                                    ) : null
                                )
                            )
                        )
                    ),
                    comentario.respostas ? comentario.respostas.map(function (comentario, i) {
                        let r_id = `${comentario._id}`;
                        return React.createElement(
                            'article',
                            { key: r_id, className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-md-2 col-sm-2 offset-md-1 offset-sm-0 hidden-xs' },
                                React.createElement(
                                    'div',
                                    { className: 'popover-autor-avatar w-45px_i h-45px_i ml-auto' },
                                    React.createElement('img', { className: 'avatar', src: comentario.autor.image })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-md-9 col-sm-9' },
                                React.createElement(
                                    'div',
                                    { className: 'panel panel-default arrow left' },
                                    React.createElement('div', { className: 'panel-heading right' }),
                                    React.createElement(
                                        'div',
                                        { className: 'panel-body' },
                                        React.createElement(
                                            'header',
                                            { className: 'text-left' },
                                            React.createElement(
                                                'div',
                                                { className: 'comment-user d-inline mr-3' },
                                                React.createElement(
                                                    'strong',
                                                    null,
                                                    comentario.autor.nome
                                                )
                                            ),
                                            React.createElement(
                                                'time',
                                                { className: 'comment-date', dateTime: comentario.createdAt },
                                                h.short_date(comentario.createdAt)
                                            )
                                        ),
                                        React.createElement('div', { className: 'comment-post', dangerouslySetInnerHTML: { "__html": comentario.conteudo } })
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'text-right' },
                                        React.createElement(
                                            'a',
                                            { href: '#', className: 'btn btn-default btn-sm black', 'data-reply-to': _id, onClick: this.focusReply },
                                            React.createElement(FaIcon, { icon: 'fa-reply' }),
                                            ' responder'
                                        ),
                                        React.createElement(
                                            'a',
                                            { href: '#', className: `btn btn-default btn-sm ${comentario.likes && lodash.findIndex(comentario.likes, { autor: user._id }) > -1 ? 'heart-red' : 'black'}`,
                                                'data-comment-id': r_id,
                                                onClick: comentario.likes && lodash.findIndex(comentario.likes, { autor: user._id }) > -1 ? this.descurtir_comentario : this.curtir_comentario },
                                            React.createElement(FaIcon, { icon: 'fa-heart' }),
                                            comentario.likes ? ` ${comentario.likes.length}` : ` 0`
                                        ),
                                        React.createElement(
                                            'a',
                                            { href: '#', className: 'btn btn-default btn-sm black', 'data-id': comentario._id, 'data-objeto': 'comentario', 'data-toggle': 'modal', 'data-target': '#modal_denunciar' },
                                            React.createElement(FaIcon, { icon: 'fa-flag' }),
                                            ' ',
                                            comentario.denuncias ? comentario.denuncias.length : 0
                                        ),
                                        comentario.autor._id == user._id ? React.createElement(
                                            'a',
                                            { href: '#', className: 'btn btn-default btn-sm black' },
                                            React.createElement(FaIcon, { icon: 'fa-ellipsis-h' })
                                        ) : null
                                    )
                                )
                            )
                        );
                    }, this) : null,
                    React.createElement(
                        'article',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-md-2 col-sm-2 offset-md-1 offset-sm-0 hidden-xs' },
                            React.createElement(
                                'div',
                                { className: 'popover-autor-avatar w-45px_i h-45px_i ml-auto' },
                                React.createElement('img', { className: 'avatar', src: user.image })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-md-9 col-sm-9' },
                            React.createElement(
                                'div',
                                { className: 'panel panel-default arrow left' },
                                React.createElement(
                                    'div',
                                    { className: 'panel-body' },
                                    React.createElement(
                                        'header',
                                        { className: 'text-left' },
                                        React.createElement(
                                            'div',
                                            { className: 'comment-user d-inline mr-3' },
                                            React.createElement(
                                                'strong',
                                                null,
                                                ` ${user.nome}`
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'comment-post' },
                                        React.createElement('textarea', { id: `reply-to-${_id}`, className: 'form-control' })
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-12 text-right mt-3 mb-3' },
                            React.createElement(
                                'a',
                                { href: '#', className: 'btn btn-primary', 'data-reply-to': _id, onClick: this.comentar },
                                'Responder'
                            )
                        )
                    )
                )
            );
        }, this);

        return React.createElement(
            'div',
            { ref: this.comentarios },
            _comentarios,
            React.createElement(
                'article',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-md-2 col-sm-2 hidden-xs' },
                    React.createElement(
                        'div',
                        { className: 'popover-autor-avatar w-68px_i h-68px_i ml-auto' },
                        React.createElement('img', { className: 'avatar', src: user.image })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-md-10 col-sm-10' },
                    React.createElement(
                        'div',
                        { className: 'panel panel-default arrow left' },
                        React.createElement(
                            'div',
                            { className: 'panel-body' },
                            React.createElement(
                                'header',
                                { className: 'text-left' },
                                React.createElement(
                                    'div',
                                    { className: 'comment-user d-inline mr-3' },
                                    React.createElement(
                                        'strong',
                                        null,
                                        ` ${user.nome}`
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'comment-post' },
                                React.createElement('textarea', { ref: this.comentario, id: 'new_comment', className: 'form-control' })
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-12 text-right mt-3' },
                    React.createElement(
                        'a',
                        { href: '#', className: 'btn btn-primary', onClick: this.comentar },
                        'Comentar'
                    )
                )
            )
        );
    }
}
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';
import PropTypes from 'prop-types';
// classnames
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
  'use strict';

  var hasOwn = {}.hasOwnProperty;

  function classnames() {
    var classes = [];

    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (!arg) continue;

      var argType = typeof arg;

      if (argType === 'string' || argType === 'number') {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        var inner = classnames.apply(null, arg);
        if (inner) {
          classes.push(inner);
        }
      } else if (argType === 'object') {
        for (var key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(' ');
  }

  if (typeof module !== 'undefined' && module.exports) {
    classnames.default = classnames;
    module.exports = classnames;
  } else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    // register as 'classnames', consistent with npm package name
    define('classnames', [], function () {
      return classnames;
    });
  } else {
    window.classnames = classnames;
  }
})();

let Constants = {
  MODE_DATE: "date",
  MODE_DATETIME: "datetime",
  MODE_TIME: "time",

  SIZE_SMALL: "sm",
  SIZE_MEDIUM: "md",
  SIZE_LARGE: "lg"
};

class DateTimePickerYears extends React.Component {
  constructor(props) {
    super(props);
    this.renderYears = this.renderYears.bind(this);
  }

  renderYears() {
    var classes, i, year, years;
    years = [];
    year = parseInt(this.props.viewDate.year() / 10, 10) * 10;
    year--;
    i = -1;
    while (i < 11) {
      classes = {
        year: true,
        old: i === -1 | i === 10,
        active: this.props.selectedDate.year() === year
      };
      years.push(React.createElement(
        'span',
        { className: classnames(classes), key: year, onClick: this.props.setViewYear },
        year
      ));
      year++;
      i++;
    }
    return years;
  }

  render() {
    var year;
    year = parseInt(this.props.viewDate.year() / 10, 10) * 10;
    return React.createElement(
      'div',
      { className: 'datepicker-years', style: { display: "block" } },
      React.createElement(
        'table',
        { className: 'table-condensed' },
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              { className: 'prev', onClick: this.props.subtractDecade },
              '\u2039'
            ),
            React.createElement(
              'th',
              { className: 'switch', colSpan: '5' },
              year,
              ' - ',
              year + 9
            ),
            React.createElement(
              'th',
              { className: 'next', onClick: this.props.addDecade },
              '\u203A'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              { colSpan: '7' },
              this.renderYears()
            )
          )
        )
      )
    );
  }
}
DateTimePickerYears.propTypes = {
  subtractDecade: PropTypes.func.isRequired,
  addDecade: PropTypes.func.isRequired,
  viewDate: PropTypes.object.isRequired,
  selectedDate: PropTypes.object.isRequired,
  setViewYear: PropTypes.func.isRequired
};

class DateTimePickerTime extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      minutesDisplayed: false,
      hoursDisplayed: false
    };

    this.goBack = this.goBack.bind(this);
    this.showHours = this.showHours.bind(this);
    this.showMinutes = this.showMinutes.bind(this);
    this.renderHours = this.renderHours.bind(this);
    this.renderMinutes = this.renderMinutes.bind(this);
    this.renderPicker = this.renderPicker.bind(this);
  }

  goBack() {
    return this.setState({
      minutesDisplayed: false,
      hoursDisplayed: false
    });
  }

  showMinutes() {
    return this.setState({
      minutesDisplayed: true
    });
  }

  showHours() {
    return this.setState({
      hoursDisplayed: true
    });
  }

  renderMinutes() {
    if (this.state.minutesDisplayed) {
      return React.createElement(DateTimePickerMinutes, _extends({}, this.props, { onSwitch: this.goBack }));
    } else {
      return null;
    }
  }

  renderHours() {
    if (this.state.hoursDisplayed) {
      return React.createElement(DateTimePickerHours, _extends({}, this.props, { onSwitch: this.goBack }));
    } else {
      return null;
    }
  }

  renderPicker() {
    if (!this.state.minutesDisplayed && !this.state.hoursDisplayed) {
      return React.createElement(
        'div',
        { className: 'timepicker-picker' },
        React.createElement(
          'table',
          { className: 'table-condensed' },
          React.createElement(
            'tbody',
            null,
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                React.createElement(
                  'a',
                  { className: 'btn', onClick: this.props.addHour },
                  React.createElement('span', { className: 'fa fa-chevron-up' })
                )
              ),
              React.createElement('td', { className: 'separator' }),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'a',
                  { className: 'btn', onClick: this.props.addMinute },
                  React.createElement('span', { className: 'fa fa-chevron-up' })
                )
              ),
              React.createElement('td', { className: 'separator' })
            ),
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                React.createElement(
                  'span',
                  { className: 'timepicker-hour', onClick: this.showHours },
                  this.props.selectedDate.format("h")
                )
              ),
              React.createElement(
                'td',
                { className: 'separator' },
                ':'
              ),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'span',
                  { className: 'timepicker-minute', onClick: this.showMinutes },
                  this.props.selectedDate.format("mm")
                )
              ),
              React.createElement('td', { className: 'separator' }),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'button',
                  { className: 'btn btn-primary', onClick: this.props.togglePeriod, type: 'button' },
                  this.props.selectedDate.format("A")
                )
              )
            ),
            React.createElement(
              'tr',
              null,
              React.createElement(
                'td',
                null,
                React.createElement(
                  'a',
                  { className: 'btn', onClick: this.props.subtractHour },
                  React.createElement('span', { className: 'fa fa-chevron-down' })
                )
              ),
              React.createElement('td', { className: 'separator' }),
              React.createElement(
                'td',
                null,
                React.createElement(
                  'a',
                  { className: 'btn', onClick: this.props.subtractMinute },
                  React.createElement('span', { className: 'fa fa-chevron-down' })
                )
              ),
              React.createElement('td', { className: 'separator' })
            )
          )
        )
      );
    } else {
      return "";
    }
  }

  render() {
    return React.createElement(
      'div',
      { className: 'timepicker' },
      this.renderPicker(),
      this.renderHours(),
      this.renderMinutes()
    );
  }
}

DateTimePickerTime.propTypes = {
  setSelectedHour: PropTypes.func.isRequired,
  setSelectedMinute: PropTypes.func.isRequired,
  subtractHour: PropTypes.func.isRequired,
  addHour: PropTypes.func.isRequired,
  subtractMinute: PropTypes.func.isRequired,
  addMinute: PropTypes.func.isRequired,
  viewDate: PropTypes.object.isRequired,
  selectedDate: PropTypes.object.isRequired,
  togglePeriod: PropTypes.func.isRequired,
  mode: PropTypes.oneOf([Constants.MODE_DATE, Constants.MODE_DATETIME, Constants.MODE_TIME])
};

class DateTimePickerMonths extends React.Component {
  constructor(props) {
    super(props);

    this.renderMonths = this.renderMonths.bind(this);
  }

  renderMonths() {
    var classes, i, month, months, monthsShort;
    month = this.props.selectedDate.month();
    monthsShort = moment.monthsShort();
    i = 0;
    months = [];
    while (i < 12) {
      classes = {
        month: true,
        "active": i === month && this.props.viewDate.year() === this.props.selectedDate.year()
      };
      months.push(React.createElement(
        'span',
        { className: classnames(classes), key: i, onClick: this.props.setViewMonth },
        monthsShort[i]
      ));
      i++;
    }
    return months;
  }

  render() {
    return React.createElement(
      'div',
      { className: 'datepicker-months', style: { display: "block" } },
      React.createElement(
        'table',
        { className: 'table-condensed' },
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              { className: 'prev', onClick: this.props.subtractYear },
              '\u2039'
            ),
            React.createElement(
              'th',
              { className: 'switch', colSpan: '5', onClick: this.props.showYears },
              this.props.viewDate.year()
            ),
            React.createElement(
              'th',
              { className: 'next', onClick: this.props.addYear },
              '\u203A'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              { colSpan: '7' },
              this.renderMonths()
            )
          )
        )
      )
    );
  }
}

DateTimePickerMonths.propTypes = {
  subtractYear: PropTypes.func.isRequired,
  addYear: PropTypes.func.isRequired,
  viewDate: PropTypes.object.isRequired,
  selectedDate: PropTypes.object.isRequired,
  showYears: PropTypes.func.isRequired,
  setViewMonth: PropTypes.func.isRequired
};

class DateTimePickerMinutes extends React.Component {
  constructor(props) {
    super(props);

    this.renderSwitchButton = this.renderSwitchButton.bind(this);
  }

  renderSwitchButton() {
    return this.props.mode === Constants.MODE_TIME ? React.createElement(
      'ul',
      { className: 'list-unstyled' },
      React.createElement(
        'li',
        null,
        React.createElement(
          'span',
          { className: 'btn picker-switch', onClick: this.props.onSwitch, style: { width: "100%" } },
          React.createElement('span', { className: 'fa fa-clock' })
        )
      )
    ) : null;
  }

  render() {
    return React.createElement(
      'div',
      { className: 'timepicker-minutes', 'data-action': 'selectMinute', style: { display: "block" } },
      this.renderSwitchButton(),
      React.createElement(
        'table',
        { className: 'table-condensed' },
        React.createElement(
          'tbody',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              { className: 'minute', onClick: this.props.setSelectedMinute },
              '00'
            ),
            React.createElement(
              'td',
              { className: 'minute', onClick: this.props.setSelectedMinute },
              '05'
            ),
            React.createElement(
              'td',
              { className: 'minute', onClick: this.props.setSelectedMinute },
              '10'
            ),
            React.createElement(
              'td',
              { className: 'minute', onClick: this.props.setSelectedMinute },
              '15'
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              { className: 'minute', onClick: this.props.setSelectedMinute },
              '20'
            ),
            React.createElement(
              'td',
              { className: 'minute', onClick: this.props.setSelectedMinute },
              '25'
            ),
            React.createElement(
              'td',
              { className: 'minute', onClick: this.props.setSelectedMinute },
              '30'
            ),
            React.createElement(
              'td',
              { className: 'minute', onClick: this.props.setSelectedMinute },
              '35'
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              { className: 'minute', onClick: this.props.setSelectedMinute },
              '40'
            ),
            React.createElement(
              'td',
              { className: 'minute', onClick: this.props.setSelectedMinute },
              '45'
            ),
            React.createElement(
              'td',
              { className: 'minute', onClick: this.props.setSelectedMinute },
              '50'
            ),
            React.createElement(
              'td',
              { className: 'minute', onClick: this.props.setSelectedMinute },
              '55'
            )
          )
        )
      )
    );
  }
}

DateTimePickerMinutes.propTypes = {
  setSelectedMinute: PropTypes.func.isRequired,
  onSwitch: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};

class DateTimePickerHours extends React.Component {

  constructor(props) {
    super(props);

    this.renderSwitchButton = this.renderSwitchButton.bind(this);
  }

  renderSwitchButton() {
    return this.props.mode === Constants.MODE_TIME ? React.createElement(
      'ul',
      { className: 'list-unstyled' },
      React.createElement(
        'li',
        null,
        React.createElement(
          'span',
          { className: 'btn picker-switch', onClick: this.props.onSwitch, style: { width: "100%" } },
          React.createElement('span', { className: 'fa fa-clock' })
        )
      )
    ) : null;
  }

  render() {
    return React.createElement(
      'div',
      { className: 'timepicker-hours', 'data-action': 'selectHour', style: { display: "block" } },
      this.renderSwitchButton(),
      React.createElement(
        'table',
        { className: 'table-condensed' },
        React.createElement(
          'tbody',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '01'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '02'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '03'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '04'
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '05'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '06'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '07'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '08'
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '09'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '10'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '11'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '12'
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '13'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '14'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '15'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '16'
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '17'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '18'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '19'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '20'
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '21'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '22'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '23'
            ),
            React.createElement(
              'td',
              { className: 'hour', onClick: this.props.setSelectedHour },
              '24'
            )
          )
        )
      )
    );
  }
}

DateTimePickerHours.propTypes = {
  setSelectedHour: PropTypes.func.isRequired,
  onSwitch: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired
};

class DateTimePickerDays extends React.Component {
  constructor(props) {
    super(props);

    this.renderDays = this.renderDays.bind(this);
  }

  renderDays() {
    var cells, classes, days, html, month, nextMonth, prevMonth, minDate, maxDate, row, year;
    year = this.props.viewDate.year();
    month = this.props.viewDate.month();
    prevMonth = this.props.viewDate.clone().subtract(1, "months");
    days = prevMonth.daysInMonth();
    prevMonth.date(days).startOf("week");
    nextMonth = moment(prevMonth).clone().add(42, "d");
    minDate = this.props.minDate ? this.props.minDate.clone().subtract(1, "days") : this.props.minDate;
    maxDate = this.props.maxDate ? this.props.maxDate.clone() : this.props.maxDate;
    html = [];
    cells = [];
    while (prevMonth.isBefore(nextMonth)) {
      classes = {
        day: true
      };
      if (prevMonth.year() < year || prevMonth.year() === year && prevMonth.month() < month) {
        classes.old = true;
      } else if (prevMonth.year() > year || prevMonth.year() === year && prevMonth.month() > month) {
        classes.new = true;
      }
      if (prevMonth.isSame(moment({
        y: this.props.selectedDate.year(),
        M: this.props.selectedDate.month(),
        d: this.props.selectedDate.date()
      }))) {
        classes.active = true;
      }
      if (this.props.showToday) {
        if (prevMonth.isSame(moment(), "day")) {
          classes.today = true;
        }
      }
      if (minDate && prevMonth.isBefore(minDate) || maxDate && prevMonth.isAfter(maxDate)) {
        classes.disabled = true;
      }
      if (this.props.daysOfWeekDisabled.length > 0) classes.disabled = this.props.daysOfWeekDisabled.indexOf(prevMonth.day()) !== -1;
      cells.push(React.createElement(
        'td',
        { className: classnames(classes), key: prevMonth.month() + "-" + prevMonth.date(), onClick: this.props.setSelectedDate },
        prevMonth.date()
      ));
      if (prevMonth.weekday() === moment().endOf("week").weekday()) {
        row = React.createElement(
          'tr',
          { key: prevMonth.month() + "-" + prevMonth.date() },
          cells
        );
        html.push(row);
        cells = [];
      }
      prevMonth.add(1, "d");
    }
    return html;
  }

  render() {
    return React.createElement(
      'div',
      { className: 'datepicker-days', style: { display: "block" } },
      React.createElement(
        'table',
        { className: 'table-condensed' },
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              { className: 'prev', onClick: this.props.subtractMonth },
              React.createElement('span', { className: 'fa fa-chevron-left' })
            ),
            React.createElement(
              'th',
              { className: 'switch', colSpan: '5', onClick: this.props.showMonths },
              moment.months()[this.props.viewDate.month()],
              ' ',
              this.props.viewDate.year()
            ),
            React.createElement(
              'th',
              { className: 'next', onClick: this.props.addMonth },
              React.createElement('span', { className: 'fa fa-chevron-right' })
            )
          ),
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              { className: 'dow' },
              'Su'
            ),
            React.createElement(
              'th',
              { className: 'dow' },
              'Mo'
            ),
            React.createElement(
              'th',
              { className: 'dow' },
              'Tu'
            ),
            React.createElement(
              'th',
              { className: 'dow' },
              'We'
            ),
            React.createElement(
              'th',
              { className: 'dow' },
              'Th'
            ),
            React.createElement(
              'th',
              { className: 'dow' },
              'Fr'
            ),
            React.createElement(
              'th',
              { className: 'dow' },
              'Sa'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          this.renderDays()
        )
      )
    );
  }
}

DateTimePickerDays.propTypes = {
  subtractMonth: PropTypes.func.isRequired,
  addMonth: PropTypes.func.isRequired,
  viewDate: PropTypes.object.isRequired,
  selectedDate: PropTypes.object.isRequired,
  showToday: PropTypes.bool,
  daysOfWeekDisabled: PropTypes.array,
  setSelectedDate: PropTypes.func.isRequired,
  showMonths: PropTypes.func.isRequired,
  minDate: PropTypes.object,
  maxDate: PropTypes.object
};

DateTimePickerDays.defaultProps = {
  showToday: true
};

class DateTimePickerDate extends React.Component {

  constructor(props) {
    super(props);

    const viewModes = {
      "days": {
        daysDisplayed: true,
        monthsDisplayed: false,
        yearsDisplayed: false
      },
      "months": {
        daysDisplayed: false,
        monthsDisplayed: true,
        yearsDisplayed: false
      },
      "years": {
        daysDisplayed: false,
        monthsDisplayed: false,
        yearsDisplayed: true
      }
    };
    this.state = viewModes[this.props.viewMode] || viewModes[Object.keys(viewModes)[this.props.viewMode]] || viewModes.days;

    this.showMonths = this.showMonths.bind(this);
    this.showYears = this.showYears.bind(this);
    this.setViewMonth = this.setViewMonth.bind(this);
    this.setViewYear = this.setViewYear.bind(this);
    this.renderDays = this.renderDays.bind(this);
    this.renderMonths = this.renderMonths.bind(this);
    this.renderYears = this.renderYears.bind(this);
  }

  showMonths() {
    return this.setState({
      daysDisplayed: false,
      monthsDisplayed: true
    });
  }

  showYears() {
    return this.setState({
      monthsDisplayed: false,
      yearsDisplayed: true
    });
  }

  setViewYear(e) {
    this.props.setViewYear(e.target.innerHTML);
    return this.setState({
      yearsDisplayed: false,
      monthsDisplayed: true
    });
  }

  setViewMonth(e) {
    this.props.setViewMonth(e.target.innerHTML);
    return this.setState({
      monthsDisplayed: false,
      daysDisplayed: true
    });
  }

  renderDays() {
    if (this.state.daysDisplayed) {
      return React.createElement(DateTimePickerDays, {
        addMonth: this.props.addMonth,
        daysOfWeekDisabled: this.props.daysOfWeekDisabled,
        maxDate: this.props.maxDate,
        minDate: this.props.minDate,
        selectedDate: this.props.selectedDate,
        setSelectedDate: this.props.setSelectedDate,
        showMonths: this.showMonths,
        showToday: this.props.showToday,
        subtractMonth: this.props.subtractMonth,
        viewDate: this.props.viewDate
      });
    } else {
      return null;
    }
  }

  renderMonths() {
    if (this.state.monthsDisplayed) {
      return React.createElement(DateTimePickerMonths, {
        addYear: this.props.addYear,
        selectedDate: this.props.selectedDate,
        setViewMonth: this.setViewMonth,
        showYears: this.showYears,
        subtractYear: this.props.subtractYear,
        viewDate: this.props.viewDate
      });
    } else {
      return null;
    }
  }

  renderYears() {
    if (this.state.yearsDisplayed) {
      return React.createElement(DateTimePickerYears, {
        addDecade: this.props.addDecade,
        selectedDate: this.props.selectedDate,
        setViewYear: this.setViewYear,
        subtractDecade: this.props.subtractDecade,
        viewDate: this.props.viewDate
      });
    } else {
      return null;
    }
  }

  render() {
    return React.createElement(
      'div',
      { className: 'datepicker' },
      this.renderDays(),
      this.renderMonths(),
      this.renderYears()
    );
  }
}

DateTimePickerDate.propTypes = {
  subtractMonth: PropTypes.func.isRequired,
  addMonth: PropTypes.func.isRequired,
  viewDate: PropTypes.object.isRequired,
  selectedDate: PropTypes.object.isRequired,
  showToday: PropTypes.bool,
  viewMode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  daysOfWeekDisabled: PropTypes.array,
  setSelectedDate: PropTypes.func.isRequired,
  subtractYear: PropTypes.func.isRequired,
  addYear: PropTypes.func.isRequired,
  setViewMonth: PropTypes.func.isRequired,
  setViewYear: PropTypes.func.isRequired,
  addDecade: PropTypes.func.isRequired,
  subtractDecade: PropTypes.func.isRequired,
  minDate: PropTypes.object,
  maxDate: PropTypes.object
};

class DateTimePicker extends React.Component {
  constructor(props) {
    super(props);

    this.renderDatePicker = this.renderDatePicker.bind(this);
    this.renderSwitchButton = this.renderSwitchButton.bind(this);
    this.renderTimePicker = this.renderTimePicker.bind(this);
  }

  renderDatePicker() {
    if (this.props.showDatePicker) {
      return React.createElement(
        'li',
        null,
        React.createElement(DateTimePickerDate, {
          addDecade: this.props.addDecade,
          addMonth: this.props.addMonth,
          addYear: this.props.addYear,
          daysOfWeekDisabled: this.props.daysOfWeekDisabled,
          maxDate: this.props.maxDate,
          minDate: this.props.minDate,
          selectedDate: this.props.selectedDate,
          setSelectedDate: this.props.setSelectedDate,
          setViewMonth: this.props.setViewMonth,
          setViewYear: this.props.setViewYear,
          showToday: this.props.showToday,
          subtractDecade: this.props.subtractDecade,
          subtractMonth: this.props.subtractMonth,
          subtractYear: this.props.subtractYear,
          viewDate: this.props.viewDate,
          viewMode: this.props.viewMode
        })
      );
    }
  }

  renderTimePicker() {
    if (this.props.showTimePicker) {
      return React.createElement(
        'li',
        null,
        React.createElement(DateTimePickerTime, {
          addHour: this.props.addHour,
          addMinute: this.props.addMinute,
          mode: this.props.mode,
          selectedDate: this.props.selectedDate,
          setSelectedHour: this.props.setSelectedHour,
          setSelectedMinute: this.props.setSelectedMinute,
          subtractHour: this.props.subtractHour,
          subtractMinute: this.props.subtractMinute,
          togglePeriod: this.props.togglePeriod,
          viewDate: this.props.viewDate
        })
      );
    }
  }

  renderSwitchButton() {
    return this.props.mode === Constants.MODE_DATETIME ? React.createElement(
      'li',
      null,
      React.createElement(
        'span',
        { className: 'btn picker-switch', onClick: this.props.togglePicker, style: { width: "100%" } },
        React.createElement('span', { className: classnames("fa", this.props.showTimePicker ? "fa-calendar" : "fa-clock") })
      )
    ) : null;
  }

  render() {
    return React.createElement(
      'div',
      { className: classnames(this.props.widgetClasses), style: this.props.widgetStyle },
      React.createElement(
        'ul',
        { className: 'list-unstyled' },
        this.renderDatePicker(),
        this.renderSwitchButton(),
        this.renderTimePicker()
      )
    );
  }
}

DateTimePicker.propTypes = {
  showDatePicker: PropTypes.bool,
  showTimePicker: PropTypes.bool,
  subtractMonth: PropTypes.func.isRequired,
  addMonth: PropTypes.func.isRequired,
  viewDate: PropTypes.object.isRequired,
  selectedDate: PropTypes.object.isRequired,
  showToday: PropTypes.bool,
  viewMode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mode: PropTypes.oneOf([Constants.MODE_DATE, Constants.MODE_DATETIME, Constants.MODE_TIME]),
  daysOfWeekDisabled: PropTypes.array,
  setSelectedDate: PropTypes.func.isRequired,
  subtractYear: PropTypes.func.isRequired,
  addYear: PropTypes.func.isRequired,
  setViewMonth: PropTypes.func.isRequired,
  setViewYear: PropTypes.func.isRequired,
  subtractHour: PropTypes.func.isRequired,
  addHour: PropTypes.func.isRequired,
  subtractMinute: PropTypes.func.isRequired,
  addMinute: PropTypes.func.isRequired,
  addDecade: PropTypes.func.isRequired,
  subtractDecade: PropTypes.func.isRequired,
  togglePeriod: PropTypes.func.isRequired,
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  widgetClasses: PropTypes.object,
  // widgetStyle: PropTypes.object,
  togglePicker: PropTypes.func,
  setSelectedHour: PropTypes.func,
  setSelectedMinute: PropTypes.func
};

export class DateTimeField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showDatePicker: this.props.mode !== Constants.MODE_TIME,
      showTimePicker: this.props.mode === Constants.MODE_TIME,
      inputFormat: this.resolvePropsInputFormat(),
      buttonIcon: this.props.mode === Constants.MODE_TIME ? "fa-clock" : "fa-calendar",
      widgetStyle: {
        display: "block",
        position: "absolute",
        left: -9999,
        zIndex: "9999 !important"
      },
      viewDate: moment(this.props.dateTime, this.props.format, true).startOf("month"),
      selectedDate: moment(this.props.dateTime, this.props.format, true),
      inputValue: typeof this.props.defaultText !== "undefined" ? this.props.defaultText : moment(this.props.dateTime, this.props.format, true).format(this.resolvePropsInputFormat())
    };

    this.resolvePropsInputFormat = this.resolvePropsInputFormat.bind(this);
    this.onChange = this.onChange.bind(this);
    this.getValue = this.getValue.bind(this);
    this.setSelectedDate = this.setSelectedDate.bind(this);
    this.setSelectedHour = this.setSelectedHour.bind(this);
    this.setSelectedMinute = this.setSelectedMinute.bind(this);
    this.setViewMonth = this.setViewMonth.bind(this);
    this.setViewYear = this.setViewYear.bind(this);
    this.addMinute = this.addMinute.bind(this);
    this.addHour = this.addHour.bind(this);
    this.addMonth = this.addMonth.bind(this);
    this.addYear = this.addYear.bind(this);
    this.addDecade = this.addDecade.bind(this);
    this.subtractMinute = this.subtractMinute.bind(this);
    this.subtractHour = this.subtractHour.bind(this);
    this.subtractMonth = this.subtractMonth.bind(this);
    this.subtractYear = this.subtractYear.bind(this);
    this.subtractDecade = this.subtractDecade.bind(this);
    this.togglePeriod = this.togglePeriod.bind(this);
    this.togglePicker = this.togglePicker.bind(this);
    this.onClick = this.onClick.bind(this);
    this.closePicker = this.closePicker.bind(this);
    this.size = this.size.bind(this);
    this.renderOverlay = this.renderOverlay.bind(this);
  }

  resolvePropsInputFormat() {
    if (this.props.inputFormat) {
      return this.props.inputFormat;
    }
    switch (this.props.mode) {
      case Constants.MODE_TIME:
        return "h:mm A";
      case Constants.MODE_DATE:
        return "MM/DD/YY";
      default:
        return "MM/DD/YY h:mm A";
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    let state = {};
    if (nextProps.inputFormat !== this.props.inputFormat) {
      state.inputFormat = nextProps.inputFormat;
      state.inputValue = moment(nextProps.dateTime, nextProps.format, true).format(nextProps.inputFormat);
    }

    if (nextProps.dateTime !== this.props.dateTime && moment(nextProps.dateTime, nextProps.format, true).isValid()) {
      state.viewDate = moment(nextProps.dateTime, nextProps.format, true).startOf("month");
      state.selectedDate = moment(nextProps.dateTime, nextProps.format, true);
      state.inputValue = moment(nextProps.dateTime, nextProps.format, true).format(nextProps.inputFormat ? nextProps.inputFormat : this.state.inputFormat);
    }
    return this.setState(state);
  }

  onChange(event) {
    const value = event.target == null ? event : event.target.value;
    if (moment(value, this.state.inputFormat, true).isValid()) {
      this.setState({
        selectedDate: moment(value, this.state.inputFormat, true),
        viewDate: moment(value, this.state.inputFormat, true).startOf("month")
      });
    }

    return this.setState({
      inputValue: value
    }, function () {
      return this.props.onChange(event, moment(this.state.inputValue, this.state.inputFormat, true).format(this.props.format), value);
    });
  }

  getValue() {
    return moment(this.state.inputValue, this.props.inputFormat, true).format(this.props.format);
  }

  setSelectedDate(e) {
    const { target } = e;
    if (target.className && !target.className.match(/disabled/g)) {
      let month;
      if (target.className.indexOf("new") >= 0) month = this.state.viewDate.month() + 1;else if (target.className.indexOf("old") >= 0) month = this.state.viewDate.month() - 1;else month = this.state.viewDate.month();
      return this.setState({
        selectedDate: this.state.viewDate.clone().month(month).date(parseInt(e.target.innerHTML)).hour(this.state.selectedDate.hours()).minute(this.state.selectedDate.minutes())
      }, function () {
        this.closePicker();
        this.props.onChange(e, this.state.selectedDate.format(this.props.format));
        return this.setState({
          inputValue: this.state.selectedDate.format(this.state.inputFormat)
        });
      });
    }
  }

  setSelectedHour(e) {
    return this.setState({
      selectedDate: this.state.selectedDate.clone().hour(parseInt(e.target.innerHTML)).minute(this.state.selectedDate.minutes())
    }, function () {
      this.closePicker();
      this.props.onChange(e, this.state.selectedDate.format(this.props.format));
      return this.setState({
        inputValue: this.state.selectedDate.format(this.state.inputFormat)
      });
    });
  }

  setSelectedMinute(e) {
    return this.setState({
      selectedDate: this.state.selectedDate.clone().hour(this.state.selectedDate.hours()).minute(parseInt(e.target.innerHTML))
    }, function () {
      this.closePicker();
      this.props.onChange(e, this.state.selectedDate.format(this.props.format));
      return this.setState({
        inputValue: this.state.selectedDate.format(this.state.inputFormat)
      });
    });
  }

  setViewMonth(month) {
    return this.setState({
      viewDate: this.state.viewDate.clone().month(month)
    });
  }

  setViewYear(year) {
    return this.setState({
      viewDate: this.state.viewDate.clone().year(year)
    });
  }

  addMinute(e) {
    return this.setState({
      selectedDate: this.state.selectedDate.clone().add(1, "minutes")
    }, function () {
      this.props.onChange(e, this.state.selectedDate.format(this.props.format));
      return this.setState({
        inputValue: this.state.selectedDate.format(this.resolvePropsInputFormat())
      });
    });
  }

  addHour(e) {
    return this.setState({
      selectedDate: this.state.selectedDate.clone().add(1, "hours")
    }, function () {
      this.props.onChange(e, this.state.selectedDate.format(this.props.format));
      return this.setState({
        inputValue: this.state.selectedDate.format(this.resolvePropsInputFormat())
      });
    });
  }

  addMonth() {
    return this.setState({
      viewDate: this.state.viewDate.add(1, "months")
    });
  }

  addYear() {
    return this.setState({
      viewDate: this.state.viewDate.add(1, "years")
    });
  }

  addDecade() {
    return this.setState({
      viewDate: this.state.viewDate.add(10, "years")
    });
  }

  subtractMinute(e) {
    return this.setState({
      selectedDate: this.state.selectedDate.clone().subtract(1, "minutes")
    }, () => {
      this.props.onChange(e, this.state.selectedDate.format(this.props.format));
      return this.setState({
        inputValue: this.state.selectedDate.format(this.resolvePropsInputFormat())
      });
    });
  }

  subtractHour(e) {
    return this.setState({
      selectedDate: this.state.selectedDate.clone().subtract(1, "hours")
    }, () => {
      this.props.onChange(e, this.state.selectedDate.format(this.props.format));
      return this.setState({
        inputValue: this.state.selectedDate.format(this.resolvePropsInputFormat())
      });
    });
  }

  subtractMonth() {
    return this.setState({
      viewDate: this.state.viewDate.subtract(1, "months")
    });
  }

  subtractYear() {
    return this.setState({
      viewDate: this.state.viewDate.subtract(1, "years")
    });
  }

  subtractDecade() {
    return this.setState({
      viewDate: this.state.viewDate.subtract(10, "years")
    });
  }

  togglePeriod() {
    if (this.state.selectedDate.hour() > 12) {
      return this.onChange(this.state.selectedDate.clone().subtract(12, "hours").format(this.state.inputFormat));
    } else {
      return this.onChange(this.state.selectedDate.clone().add(12, "hours").format(this.state.inputFormat));
    }
  }

  togglePicker() {
    return this.setState({
      showDatePicker: !this.state.showDatePicker,
      showTimePicker: !this.state.showTimePicker
    });
  }

  onClick() {
    let classes, gBCR, offset, placePosition, scrollTop, styles;
    if (this.state.showPicker) {
      return this.closePicker();
    } else {
      this.setState({
        showPicker: true
      });
      gBCR = this.refs.dtpbutton.getBoundingClientRect();
      classes = {
        "bootstrap-datetimepicker-widget": true,
        "dropdown-menu": true
      };
      offset = {
        top: gBCR.top + window.pageYOffset - document.documentElement.clientTop,
        left: gBCR.left + window.pageXOffset - document.documentElement.clientLeft
      };
      offset.top = offset.top + this.refs.datetimepicker.offsetHeight;
      scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      placePosition = this.props.direction === "up" ? "top" : this.props.direction === "bottom" ? "bottom" : this.props.direction === "auto" ? offset.top + this.refs.widget.offsetHeight > window.offsetHeight + scrollTop && this.refs.widget.offsetHeight + this.refs.datetimepicker.offsetHeight > offset.top ? "top" : "bottom" : void 0;
      if (placePosition === "top") {
        offset.top = -this.refs.widget.offsetHeight - this.clientHeight - 2;
        classes.top = true;
        classes.bottom = false;
        classes["pull-right"] = true;
      } else {
        offset.top = 40;
        classes.top = false;
        classes.bottom = true;
        classes["pull-right"] = true;
      }
      styles = {
        display: "block",
        position: "absolute",
        top: offset.top,
        left: "auto",
        right: 40
      };
      return this.setState({
        widgetStyle: styles,
        widgetClasses: classes
      });
    }
  }

  closePicker() {
    let _widgetStyle = lodash.cloneDeep(this.state.widgetStyle);
    _widgetStyle.left = -9999;
    _widgetStyle.display = "none";
    return this.setState({
      showPicker: false,
      widgetStyle: _widgetStyle
    });
  }

  size() {
    switch (this.props.size) {
      case Constants.SIZE_SMALL:
        return "form-group-sm";
      case Constants.SIZE_LARGE:
        return "form-group-lg";
    }

    return "";
  }

  renderOverlay() {
    const styles = {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: `${this.props.zIndex}`
    };
    if (this.state.showPicker) {
      return React.createElement('div', { className: 'bootstrap-datetimepicker-overlay', onClick: this.closePicker, style: styles });
    } else {
      return React.createElement('span', null);
    }
  }

  render() {
    return React.createElement(
      'div',
      null,
      this.renderOverlay(),
      React.createElement(DateTimePicker, {
        addDecade: this.addDecade,
        addHour: this.addHour,
        addMinute: this.addMinute,
        addMonth: this.addMonth,
        addYear: this.addYear,
        daysOfWeekDisabled: this.props.daysOfWeekDisabled,
        maxDate: this.props.maxDate,
        minDate: this.props.minDate,
        mode: this.props.mode,
        ref: 'widget',
        selectedDate: this.state.selectedDate,
        setSelectedDate: this.setSelectedDate,
        setSelectedHour: this.setSelectedHour,
        setSelectedMinute: this.setSelectedMinute,
        setViewMonth: this.setViewMonth,
        setViewYear: this.setViewYear,
        showDatePicker: this.state.showDatePicker,
        showTimePicker: this.state.showTimePicker,
        showToday: this.props.showToday,
        subtractDecade: this.subtractDecade,
        subtractHour: this.subtractHour,
        subtractMinute: this.subtractMinute,
        subtractMonth: this.subtractMonth,
        subtractYear: this.subtractYear,
        togglePeriod: this.togglePeriod,
        togglePicker: this.togglePicker,
        viewDate: this.state.viewDate,
        viewMode: this.props.viewMode,
        widgetClasses: this.state.widgetClasses,
        widgetStyle: this.state.widgetStyle
      }),
      React.createElement(
        'div',
        { className: "input-group date " + this.size(), ref: 'datetimepicker' },
        React.createElement('input', _extends({ className: 'form-control', onChange: this.onChange, type: 'text', value: this.state.inputValue, name: this.props.name }, this.props.inputProps)),
        React.createElement(
          'span',
          { className: 'input-group-addon', onBlur: this.onBlur, onClick: this.onClick, ref: 'dtpbutton' },
          React.createElement('span', { className: classnames("fa", this.state.buttonIcon) })
        )
      )
    );
  }
}

DateTimeField.propTypes = {
  dateTime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  format: PropTypes.string,
  inputProps: PropTypes.object,
  inputFormat: PropTypes.string,
  defaultText: PropTypes.string,
  mode: PropTypes.oneOf([Constants.MODE_DATE, Constants.MODE_DATETIME, Constants.MODE_TIME]),
  minDate: PropTypes.object,
  maxDate: PropTypes.object,
  direction: PropTypes.string,
  showToday: PropTypes.bool,
  viewMode: PropTypes.string,
  zIndex: PropTypes.number,
  size: PropTypes.oneOf([Constants.SIZE_SMALL, Constants.SIZE_MEDIUM, Constants.SIZE_LARGE]),
  daysOfWeekDisabled: PropTypes.arrayOf(PropTypes.number)
};

DateTimeField.defaultProps = {
  dateTime: moment().format("x"),
  format: "x",
  showToday: true,
  viewMode: "days",
  daysOfWeekDisabled: [],
  size: Constants.SIZE_MEDIUM,
  mode: Constants.MODE_DATETIME,
  zIndex: 999,
  onChange: x => {
    console.log(x);
  }
};
import Input from './react_input';
import React from 'react';
import { setModuleDropdownFilter, setModuleInputClear } from '../utils/ModulesUtils';
import InputHidden from './react_input_hidden';
import FaIcon from './react_faicon';

export default class DropdownFilterable extends Input {
    constructor(props) {
        super(props);

        // Methods
        this.getInitialState = this.getInitialState.bind(this);
        this.handleSelect = this.handleSelect.bind(this);

        // Initial State
        this.state.objects = props.objects ? props.objects : [];
        this.state._objSelected = props.value || null;

        // State from props

        // Refs
        this.dropdownFilter = React.createRef();
        this.inputClear = React.createRef();
        this.dropDownCustom = React.createRef();
    }

    getInitialState() {
        return {
            objects: []
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.changed) {
            return {
                objects: nextProps.objects,
                icon: nextProps.icon,
                className: nextProps.className
            };
        }

        return {
            objects: nextProps.objects,
            _objSelected: nextProps.value,
            icon: nextProps.icon,
            className: nextProps.className
        };
    }

    componentDidUpdate() {
        // setModuleDropdownCustom(this.dropDownCustom.current)
        setModuleDropdownFilter(this.dropdownFilter.current);
        setModuleInputClear(this.inputClear.current);
    }

    handleSelect(e) {
        let $e = window.$(e.currentTarget);
        let _id = $e.data('value');
        let _objSelected = this.state.objects.filter(_obj => _obj._id == _id)[0];
        this.setState({
            _objSelected: _objSelected,
            changed: true
        });
        let that = this;
        window.$(that.dropDownCustom.current).find('input[type=hidden]').trigger('change').trigger('keyup');
    }

    render() {
        let that = this;
        var _objects = this.state.objects.map(function (object) {
            return React.createElement(
                'a',
                {
                    key: object._id,
                    className: 'dropdown-item',
                    'data-value': object._id,
                    href: '#',
                    onClick: that.handleSelect },
                object.nome
            );
        });

        return React.createElement(
            'div',
            {
                ref: this.dropDownCustom,
                id: `dropdown-${this.state.id}`,
                className: 'dropdown',
                'data-module': 'dropdown-custom',
                'data-target': `#dropdown-selected-${this.state.id}`,
                'data-target-label': `#dropdown-selected-label-${this.state.id}` },
            React.createElement(InputHidden, {
                ref: this.input,
                id: `dropdown-selected-${this.state.id}`,
                name: this.state.name || "object_id",
                value: this.state._objSelected ? this.state._objSelected._id : "",
                onChange: this.onChange }),
            React.createElement(
                'button',
                {
                    className: `btn dropdown-toggle btn-dropdown-navbar-action ${this.state.className}`,
                    type: 'button',
                    id: `dropdown-objects-${this.state.id}`,
                    'data-toggle': 'dropdown',
                    'aria-haspopup': 'true',
                    'aria-expanded': 'false' },
                React.createElement(FaIcon, { icon: this.state.icon }),
                React.createElement(
                    'div',
                    {
                        id: `dropdown-selected-label-${this.state.id}`,
                        className: `d-inline ${this.state._objSelected ? 'selected-object' : ''}` },
                    this.state._objSelected ? this.state._objSelected.nome : ""
                )
            ),
            React.createElement(
                'div',
                {
                    className: 'dropdown-menu',
                    'aria-labelledby': `dropdown-objects-${this.state.id}`,
                    id: `dropdown-${this.state.id}` },
                React.createElement(
                    'div',
                    {
                        className: 'input-group mb-3 dropdown-item bmd-form-group' },
                    React.createElement('input', {
                        ref: this.dropdownFilter,
                        type: 'text',
                        className: 'form-control',
                        id: `dropdown-search-input-${this.state.id}`,
                        placeholder: 'Procurar',
                        'aria-label': 'Procurar',
                        'aria-describedby': 'basic-addon2',
                        'data-module': 'dropdown-filter',
                        'data-filter-container-selector': `#dropdown-${this.state.id}`,
                        'data-filter-item-selector': '.dropdown-item' }),
                    React.createElement(
                        'div',
                        { className: 'input-group-append' },
                        React.createElement(
                            'button',
                            {
                                ref: this.inputClear,
                                type: 'button',
                                className: 'close',
                                'aria-label': 'Close',
                                'data-module': 'input-clear',
                                'data-input-selector': `#dropdown-search-input-${this.state.id}` },
                            React.createElement(
                                'span',
                                { 'aria-hidden': 'true' },
                                '\xD7'
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'dropdown-content scrollable-dropdown' },
                    _objects
                )
            )
        );
    }
}
import React from 'react';
import DropdownFilterable from './react_dropdown_filterable';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class DropdownFilterablePlataformas extends DropdownFilterable {
    constructor(props) {
        super(props);

        // Initial State
        this.state.plataformas = props.plataformas ? props.plataformas : [];
        this.state._plataformaSelected = props.value || null;

        // State from props

        // Refs

        this.socket = io.connect(WS_NAMESPACES.PLATAFORMAS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketPlataformas client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                log(WS_EVENTS.GET_OK);

                that.setState({
                    plataformas: data.data,
                    _plataformaSelected: data.data.filter(_plat => _plat._id == that.state.value)
                });
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);
                // console.log(data);
                // let $modal = $(that.modal.current);
                // $modal.modal('hide').find('.redactor_editor').html('');
                // that.setState(that.getInitialState());
            });

            this.on(WS_EVENTS.POST_ERROR, function (data) {
                log(WS_EVENTS.POST_ERROR);
                alert(data);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    getInitialState() {
        return {
            plataformas: []
        };
    }

    componentDidMount() {
        this.socket.emit(WS_EVENTS.GET, { type: 'plataformas', filter: 'a-z' });
    }

    render() {

        return React.createElement(DropdownFilterable, {
            id: 'dropdown_plataformas',
            value: this.state._plataformaSelected,
            objects: this.state.plataformas,
            className: 'btn-plataforma',
            icon: 'plataforma',
            name: 'plataforma_id',
            onChange: this.onChange });
    }
}
import React from 'react';
import DropdownFilterable from './react_dropdown_filterable';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class DropdownFilterablePortfolios extends DropdownFilterable {
    constructor(props) {
        super(props);
        // Initial State
        this.state.portfolios = props.portfolios ? props.portfolios : [];
        this.state._portfolioSelected = props.value || null;

        // State from props

        // Refs

        this.socket = io.connect(WS_NAMESPACES.PORTFOLIOS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketPortfolios client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                log(WS_EVENTS.GET_OK);

                that.setState({
                    portfolios: data.data,
                    _portfolioSelected: data.data.filter(_port => _port._id == that.state.value)
                });
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);
                // console.log(data);
                // let $modal = $(that.modal.current);
                // $modal.modal('hide').find('.redactor_editor').html('');
                // that.setState(that.getInitialState());
            });

            this.on(WS_EVENTS.POST_ERROR, function (data) {
                log(WS_EVENTS.POST_ERROR);
                alert(data);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    getInitialState() {
        return {
            portfolios: []
        };
    }

    componentDidMount() {
        this.socket.emit(WS_EVENTS.GET, { filter: 'a-z' });
    }

    render() {

        return React.createElement(DropdownFilterable, {
            id: 'dropdown_portfolios',
            value: this.state._portfolioSelected,
            objects: this.state.portfolios,
            className: 'btn-portfolio',
            icon: 'portfolio',
            name: 'portfolio_id',
            onChange: this.onChange
        });
    }
}
import React from 'react';
import InputHidden from './react_input_hidden';

export default class DualList extends React.Component {
    constructor(props) {
        super(props);

        this.rightList = React.createRef();
        this.leftList = React.createRef();

        this.state = {};

        this.state.rightList = props.rightList;
        this.state.leftList = props.leftList;
        this.state.propToCompare = props.propToCompare || "name";
        this.state.name = props.name || "groups";
        this.state.nameCapitalized = this.state.name.capitalizeFirstLetter();
        this.state.template = props.template;

        this.moveToLeft = this.moveToLeft.bind(this);
        this.moveToRight = this.moveToRight.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
        this.moveElements = this.moveElements.bind(this);
        this.search = this.search.bind(this);
    }

    moveElements(source, target, moveCheck) {
        for (var i = 0; i < source.length; i++) {
            var element = source[i];
            if (moveCheck(element)) {
                source.splice(i, 1);
                target.push(element);
                i--;
            }
        }
    }

    toggleActive(e) {
        window.$(e.currentTarget).toggleClass('active');
        this.moveToLeft(e);
        this.moveToRight(e);
    }

    moveToLeft(e) {
        e.preventDefault();
        let checked = window.$(this.rightList.current).find('.active').map(function (i, e) {
            return $(e).data('key');
        }).get();
        let leftList = this.state.leftList;
        let rightList = this.state.rightList;

        this.moveElements(rightList, leftList, function (el) {
            return checked.indexOf(el._id) > -1;
        });

        this.setState({
            leftList: leftList,
            rightList: rightList
        });
    }

    moveToRight(e) {
        e.preventDefault();
        let checked = window.$(this.leftList.current).find('.active').map(function (i, e) {
            return $(e).data('key');
        }).get();
        let leftList = this.state.leftList;
        let rightList = this.state.rightList;

        this.moveElements(leftList, rightList, function (el) {
            return checked.indexOf(el._id) > -1;
        });

        this.setState({
            leftList: leftList,
            rightList: rightList
        });
    }

    search(e) {
        var code = e.keyCode || e.which;
        var $this = window.$(e.currentTarget);
        if (code == '9') return;
        if (code == '27') $this.val(null);
        var $rows = $this.closest('.dual-list').find('.list-group li');
        var val = window.$.trim($this.val()).replace(/ +/g, ' ').toLowerCase();
        $rows.show().filter(function () {
            var text = window.$(this).text().replace(/\s+/g, ' ').toLowerCase();
            return !~text.indexOf(val);
        }).hide();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            leftList: nextProps.leftList,
            rightList: nextProps.rightList,
            propToCompare: nextProps.propToCompare
        };
    }

    render() {

        let this_toggleActive = this.toggleActive;
        let _template = this.state.template;
        let that = this;

        var _left_groups = this.state.leftList.sort(function (a, b) {
            return a[that.state.propToCompare].localeCompare(b[that.state.propToCompare]);
        }).map(function (obj) {
            let _inline = function () {
                return React.createElement(
                    'div',
                    null,
                    obj[that.state.propToCompare]
                );
            }();

            if (_template && typeof _template === 'function') {
                _inline = function () {
                    return React.createElement(
                        'div',
                        null,
                        _template(obj)
                    );
                }();
            }

            return React.createElement(
                'li',
                { key: obj._id, 'data-key': obj._id, onClick: this_toggleActive, className: 'list-group-item' },
                _inline
            );
        });

        var _right_groups = this.state.rightList.sort(function (a, b) {
            return a[that.state.propToCompare].localeCompare(b[that.state.propToCompare]);
        }).map(function (obj) {
            let _inline = function () {
                return React.createElement(
                    'div',
                    null,
                    React.createElement(InputHidden, { name: that.state.name, value: obj._id }),
                    obj[that.state.propToCompare]
                );
            }();

            if (_template && typeof _template === 'function') {
                _inline = function () {
                    return React.createElement(
                        'div',
                        null,
                        React.createElement(InputHidden, { name: that.state.name, value: obj._id }),
                        _template(obj)
                    );
                }();
            }

            return React.createElement(
                'li',
                { key: obj._id, 'data-key': obj._id, onClick: this_toggleActive, className: 'list-group-item' },
                _inline
            );
        });

        return React.createElement(
            'div',
            { 'data-module': 'dual-list', className: 'row' },
            React.createElement(
                'div',
                {
                    ref: this.leftList,
                    className: 'dual-list list-left col-md-6' },
                React.createElement(
                    'span',
                    { className: 'd-block' },
                    React.createElement(
                        'strong',
                        null,
                        this.state.nameCapitalized,
                        ' Dispon\xEDveis'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'well' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement('div', { className: 'col-md-1' }),
                        React.createElement(
                            'div',
                            { className: 'col-md-10' },
                            React.createElement(
                                'div',
                                { className: 'input-group' },
                                React.createElement('span', { className: 'input-group-addon fa fa-search' }),
                                React.createElement('input', { type: 'text', name: 'SearchDualList', className: 'form-control', placeholder: 'search', onChange: this.search })
                            )
                        )
                    ),
                    React.createElement(
                        'ul',
                        { className: 'list-group', 'scrollable-lg': '' },
                        _left_groups
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'list-arrows col-md-2 text-center d-none' },
                React.createElement(
                    'button',
                    { className: 'btn btn-raised btn-danger btn-sm move-left',
                        onClick: this.moveToLeft },
                    React.createElement('i', { className: 'fa fa-arrow-left' })
                ),
                React.createElement(
                    'button',
                    { className: 'btn btn-raised btn-info btn-sm move-right',
                        onClick: this.moveToRight },
                    React.createElement('i', { className: 'fa fa-arrow-right' })
                )
            ),
            React.createElement(
                'div',
                { ref: this.rightList, className: 'dual-list list-right col-md-6' },
                React.createElement(
                    'span',
                    null,
                    React.createElement(
                        'strong',
                        null,
                        this.state.nameCapitalized,
                        ' Convidados'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'well' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement('div', { className: 'col-md-1' }),
                        React.createElement(
                            'div',
                            { className: 'col-md-10' },
                            React.createElement(
                                'div',
                                { className: 'input-group' },
                                React.createElement('input', { type: 'text', name: 'SearchDualList', className: 'form-control', placeholder: 'search', onChange: this.search }),
                                React.createElement('span', { className: 'input-group-addon fa fa-search' })
                            )
                        )
                    ),
                    React.createElement(
                        'ul',
                        { className: 'list-group', 'scrollable-lg': '' },
                        _right_groups
                    )
                )
            )
        );
    }
}
import React from 'react';
import { IconsMap } from './iconsmap';

export default class FaIcon extends React.Component {

    static getMappedIcon(icon) {
        return IconsMap[icon] || icon;
    }

    constructor(props) {
        super(props);
        this.state = {
            icon: props.icon,
            className: props.className || ''
        };
    }
    render() {
        return React.createElement('i', { className: `fa ${FaIcon.getMappedIcon(this.state.icon)} ${this.state.className}` });
    }
}
import React from 'react';
import DropdownFilterablePlataformas from './react_dropdown_filterable_plataformas';
import DropdownFilterablePortfolios from './react_dropdown_filterable_portfolios';

export default class FiltersNavbar extends React.Component {
    constructor(props) {
        super(props);

        // Methods

        // Initial State
        this.state = {
            _selectedPortfolio: null,
            _selectedPlataforma: null,
            _text_meus_objetos: "",
            _with_dropdown_portfolios: false,
            _with_dropdown_plataformas: false,
            _with_btn_new_group: false

            // State from props
        };this.state._text_meus_objetos = props.text_meus_objetos || null;
        this.state._with_dropdown_portfolios = props.with_dropdown_portfolios;
        this.state._with_dropdown_plataformas = props.with_dropdown_plataformas;
        this.state._with_btn_new_group = props.with_btn_new_group;
    }

    render() {
        return React.createElement(
            'nav',
            {
                id: 'filterNavbar',
                className: 'navbar navbar-expand-lg navbar-light bg-custom second-navbar' },
            React.createElement(
                'button',
                {
                    className: 'navbar-toggler navbar-toggler-fullwidth',
                    type: 'button',
                    'data-toggle': 'collapse',
                    'data-target': '#listFilters',
                    'aria-controls': 'listFilters',
                    'aria-expanded': 'false',
                    'aria-label': 'Toggle navigation' },
                React.createElement('span', { className: 'navbar-toggler-icon' }),
                'Filtros'
            ),
            React.createElement(
                'div',
                { className: 'collapse navbar-collapse', id: 'listFilters' },
                React.createElement(
                    'ul',
                    { className: 'navbar-nav list-filters' },
                    React.createElement(
                        'li',
                        { className: 'nav-item bottom_border active',
                            'data-filter': 'highlights' },
                        React.createElement(
                            'a',
                            { className: 'nav-link', href: '#' },
                            'Highlights'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'nav-item bottom_border',
                            'data-filter': 'a-z' },
                        React.createElement(
                            'a',
                            { className: 'nav-link', href: '#' },
                            'A-Z'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'nav-item bottom_border',
                            'data-filter': 'recentes' },
                        React.createElement(
                            'a',
                            { className: 'nav-link', href: '#' },
                            'Recentes'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'nav-item bottom_border',
                            'data-filter': 'finalizadas' },
                        React.createElement(
                            'a',
                            { className: 'nav-link', href: '#' },
                            'Finalizadas'
                        )
                    ),
                    React.createElement(
                        'li',
                        { className: 'nav-item bottom_border',
                            'data-filter': 'minhas' },
                        React.createElement(
                            'a',
                            { className: 'nav-link', href: '#' },
                            this.state._text_meus_objetos ? this.state._text_meus_objetos : `Meus`
                        )
                    )
                ),
                React.createElement(
                    'ul',
                    { className: 'navbar-nav dropdown-filters' },
                    this.state._with_dropdown_plataformas ? React.createElement(
                        'li',
                        { className: 'nav-item ' },
                        React.createElement(DropdownFilterablePlataformas, { value: this.state._selectedPlataforma })
                    ) : null,
                    this.state._with_dropdown_portfolios ? React.createElement(
                        'li',
                        { className: 'nav-item ' },
                        React.createElement(DropdownFilterablePortfolios, { value: this.state._selectedPortfolio })
                    ) : null,
                    this.state._with_btn_new_group ? React.createElement(
                        'li',
                        { className: 'nav-item', 'data-toggle': 'modal', 'data-target': '#modal_editar_grupo' },
                        React.createElement(
                            'a',
                            { className: 'btn btn-primary btn-navbar-action' },
                            'Novo Grupo'
                        )
                    ) : null
                )
            )
        );
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import LoadingTiles from './react_loading_tiles';
import { showSocketError } from '../main';
import FiltersNavbar from './react_filters_navbar';
import { setModuleTooltip, setModuleButton, setModulePopoverHover } from '../utils/ModulesUtils';
import TransparentTiles from './react_transparent_tiles';
import GrupoCard from './react_grupo_card';
import ModalEditarGrupo from './react_modal_novo_grupo';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class GruposList extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.grupos = props.grupos || this.state.grupos;
        this.state._loading = function () {
            return React.createElement(LoadingTiles, null);
        }();

        this.list = React.createRef();

        this.updateList = this.updateList.bind(this);
        this.loadMore = this.loadMore.bind(this);

        this.socket = io.connect(WS_NAMESPACES.GRUPOS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketGrupos client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (data.error) {
                    showSocketError(data.message);
                    return;
                }
                that.state.grupos.push(...data.data);
                that.setState({
                    loading: false,
                    grupos: that.state.grupos,
                    noMore: data.data.length < 1
                });
            });

            this.on(WS_EVENTS.GET_ERROR, function (data) {
                if (data.error) {
                    showSocketError(data.message);
                    return;
                }
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                if (!data.type) return;

                switch (data.type) {

                    case 'novo_grupo':
                        that.state.grupos.unshift(data.data);
                        that.setState({
                            loading: false,
                            grupos: that.state.grupos,
                            noMore: data.data.length < 1
                        });
                        break;

                    default:
                        break;
                }
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    updateList(filter) {
        // Reinicia carregamento com novo filtro
        this.setState({
            loading: true,
            grupos: []
        });
        let data = {
            type: 'grupos',
            filter: filter ? filter : window.$('#filterNavbar #listFilters .list-filters .nav-item.active').data('filter')
        };
        this.socket.emit(WS_EVENTS.GET, data);
    }

    loadMore(e) {
        // Adiciona na lista mais itens do mesmo filtro
        e.preventDefault();
        let that = this;
        let _ids = this.state.grupos.map(_obj => _obj._id);
        this.socket.emit(WS_EVENTS.GET, {
            type: 'grupos',
            filter: that.state.filter ? that.state.filter : window.$('#filterNavbar #listFilters .list-filters .nav-item.active').data('filter'),
            _ids: _ids
        });
    }

    componentDidMount() {
        let that = this;
        this.updateList();
        let _doc;
        _doc = document.querySelector('#template_second_navbar');
        let _template_second_navbar = _doc ? ReactDOM.render(React.createElement(FiltersNavbar, { text_meus_objetos: "Meus Grupos", with_dropdown_portfolios: false, with_btn_new_group: true }), _doc) : {};
    }

    componentDidUpdate() {
        let that = this;
        window.$('#filterNavbar #listFilters .list-filters .nav-item').unbind('click').bind('click', function () {
            let $this = window.$(this);
            $this.closest('ul').find('li').removeClass('active');
            $this.addClass('active');
            that.state.filter = $this.data('filter');
            that.updateList(that.state.filter);
        });
        let tooltips = window.$(this.list.current).find('[data-toggle="tooltip"]').toArray();
        let buttons = window.$(this.list.current).find('[data-module="button"]').toArray();
        let popoverHover = window.$(this.list.current).find('[data-module="popover-hover"]').toArray();
        setModuleTooltip(tooltips.length > 0 ? tooltips : undefined);
        setModuleButton(buttons.length > 0 ? buttons : undefined);
        setModulePopoverHover(popoverHover.length > 0 ? popoverHover : undefined);
    }

    getInitialState() {
        return {
            grupos: [],
            noMore: false
        };
    }

    render() {

        var _transparents = React.createElement(TransparentTiles, { length: this.state.grupos.length });

        var _grupos = this.state.grupos.length < 1 ? function () {
            return React.createElement(
                'p',
                null,
                'Nenhum grupo!'
            );
        }() : this.state.grupos.map(function (grupo) {
            return React.createElement(GrupoCard, { key: grupo._id, grupo: grupo });
        });

        return React.createElement(
            'div',
            { ref: this.list },
            React.createElement(
                'div',
                { id: 'grupos', className: 'tile-grid' },
                this.state.loading ? this.state._loading : _grupos,
                this.state.loading ? void 0 : _transparents
            ),
            React.createElement(
                'div',
                { className: 'd-flex justify-content-center align-items-center flex-wrap' },
                this.state.noMore && this.state.grupos && this.state.grupos.length > 0 ? React.createElement(
                    'p',
                    null,
                    'Por enquanto, todas os grupos foram carregadas'
                ) : React.createElement(
                    'p',
                    null,
                    '\xA0'
                )
            ),
            React.createElement(
                'div',
                { className: 'd-flex justify-content-center align-items-center flex-wrap mb-5' },
                React.createElement(
                    'button',
                    { className: 'btn btn-outline-info', onClick: this.loadMore },
                    'Carregar mais'
                )
            ),
            React.createElement(ModalEditarGrupo, null)
        );
    }
}
import React from 'react';
import GrupoMiniCard from './react_grupo_minicard';
import { comparaPorNome } from '../main';
import Slider from './react_slider';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class GrupoBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: props.object_id ? props.object_id : "",
            grupos: props.grupos ? props.grupos : []
        };

        this.getInitialState = this.getInitialState.bind(this);

        this.socket = io.connect(WS_NAMESPACES.GRUPOS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketGrupos client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);
                that.state.grupos = data.data;
                that.setState({
                    grupos: that.state.grupos
                });
            });

            this.on(WS_EVENTS.POST_ERROR, function (data) {
                log(WS_EVENTS.POST_ERROR);
                alert(data);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    getInitialState() {
        return [];
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            _id: nextProps.object_id,
            grupos: nextProps.grupos
        };
    }

    render() {

        var _boxes = this.state.grupos.sort(comparaPorNome).map(function (grupo) {
            return React.createElement(GrupoMiniCard, { grupo: grupo });
        }, this);

        _boxes.push(function () {
            return React.createElement(
                'div',
                {
                    key: _boxes.length + 1,
                    'data-slide': 'true',
                    className: 'popover-card d-inline-block popover-author mr-2 mb-2 d-flex justify-content-around align-items-center align-content-center flex-column',
                    'data-toggle': 'modal',
                    'data-target': '#modal_convidar_grupo',
                    clickable: '' },
                React.createElement(
                    'h3',
                    { className: 'senno-popover-header', style: { "borderBottom": "none" } },
                    React.createElement(
                        'div',
                        { className: 'circle-border circle-border-black w-5em_i h-5em_i' },
                        React.createElement('i', { className: 'fa fa-plus' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'senno-popover-body text-center' },
                    'CONVIDAR',
                    React.createElement('br', null),
                    'GRUPO'
                )
            );
        }());

        return React.createElement(
            'div',
            null,
            React.createElement(Slider, { boxes: _boxes, goToLastSlideOnUpdate: 'true' })
        );
    }
}
import React from 'react';
import Slider from './react_slider';
import ModalShowGrupo from './react_modal_show_grupo';
import GrupoMiniCard from './react_grupo_minicard';

export default class GrupoBoxShow extends React.Component {
    constructor(props) {
        super(props);

        this.modal = React.createRef();
        this.showModal = this.showModal.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
        this.renderBoxes = this.renderBoxes.bind(this);

        this.state = {
            plataforma_id: props.plataforma_id ? props.plataforma_id : "",
            grupos: props.grupos ? props.grupos : [],
            selected_id: null
        };
    }

    getInitialState() {
        return [];
    }

    showModal(e) {
        let $this = window.$(e.currentTarget);
        this.setState({
            selected_id: $this.data('id')
        });
    }

    componentDidUpdate() {
        if (!this.modal.current || !this.state.selected_id) {
            return;
        }
        let that = this;
        let $modal = window.$(this.modal.current.modal.current);
        $modal.unbind('hidden.bs.modal').on('hidden.bs.modal', function () {
            console.log('modal hidden');
            that.setState({
                selected_id: null
            });
        });
        console.log('modal show');
        $modal.modal('show');
    }

    renderBoxes() {
        return this.props.grupos.map(function (_grupo) {
            return React.createElement(GrupoMiniCard, {
                key: _grupo._id,
                grupo: _grupo,
                'data-id': _grupo._id,
                'data-slide': 'true',
                clickable: '',
                onClick: this.showModal });
        }, this);
    }

    render() {

        return React.createElement(
            'div',
            null,
            React.createElement(Slider, { boxes: this.renderBoxes() }),
            React.createElement(ModalShowGrupo, { ref: this.modal, selected_id: this.state.selected_id, plataforma_id: this.state.plataforma_id })
        );
    }
}
import React from 'react';
import FaIcon from './react_faicon';
import TileBoxAutor from './react_tile_box_autor';
import { h } from '../main';

export default class GrupoCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.grupo = props.grupo;
    }

    render() {
        let grupo = this.state.grupo;

        return React.createElement(
            'a',
            {
                key: grupo._id,
                clickable: '',
                className: 'tile tile-grupo',
                href: `/grupos/${grupo._id}`,
                'data-slide': 'true' },
            React.createElement(
                'div',
                { className: 'tile-photo-container hovereffect' },
                React.createElement(
                    'div',
                    { className: 'd-inline text-center tile-photo d-flex align-items-center align-content-center grupo-tile-photo', style: { "backgroundColor": this.state.grupo.cor } },
                    React.createElement(
                        'div',
                        { className: 'm-auto circle-avatar-text' },
                        this.state.grupo.nome.getInitials()
                    )
                ),
                React.createElement('div', { className: 'overlay' })
            ),
            React.createElement(
                'div',
                { className: 'tile-info' },
                React.createElement(
                    'div',
                    { className: 'tile-title text-subheader' },
                    React.createElement(FaIcon, { icon: 'grupo' }),
                    ` ${grupo.nome}`
                ),
                React.createElement(
                    'div',
                    { className: 'tile-author-date d-flex mt-20px' },
                    React.createElement(TileBoxAutor, { autor: grupo.criadoPor }),
                    React.createElement(
                        'div',
                        { className: 'tile-date ml-auto' },
                        h.short_date(grupo.data)
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'd-flex mt-20px align-items-end', style: { "flex": "1" } },
                    React.createElement(
                        'div',
                        { className: 'grupo-info-agentes border-black mr-2' },
                        React.createElement(FaIcon, { icon: 'agente' }),
                        ' ',
                        React.createElement(
                            'span',
                            { className: 'info-value' },
                            grupo.agentes.length
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'grupo-info-moderadores border-black mr-2' },
                        React.createElement(FaIcon, { icon: 'moderador' }),
                        ' ',
                        React.createElement(
                            'span',
                            { className: 'info-value' },
                            grupo.moderadores.length
                        )
                    ),
                    React.createElement('div', { className: 'tile-permission ml-auto' })
                )
            )
        );
    }
}
import React from 'react';
import FaIcon from './react_faicon';

export default class GrupoCover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grupo: null,
            withLink: null
        };
        this.state.grupo = props.grupo;
        this.state.withLink = props.withLink;
    }

    render() {

        let grupo = this.state.grupo;

        return React.createElement(
            'div',
            { className: 'cover', style: { "backgroundColor": grupo.cor } },
            React.createElement(
                'a',
                { href: this.state.withLink ? `/grupos/${grupo._id}` : 'javascript:void(0);' },
                React.createElement('div', { className: 'grupo-cover-overlay' }),
                React.createElement(
                    'div',
                    { className: 'cover-content d-flex align-items-center align-content-center word-ellipsis flex-column justify-content-center' },
                    React.createElement(
                        'div',
                        { className: 'circle-avatar-text grupo-cover' },
                        grupo.nome
                    ),
                    React.createElement(
                        'div',
                        { className: '' },
                        React.createElement(
                            'div',
                            { className: 'grupo-info-moderadores mr-2 text-subheader-bold' },
                            React.createElement(FaIcon, { icon: 'moderador' }),
                            ' ',
                            React.createElement(
                                'span',
                                { className: 'info-value' },
                                grupo.moderadores.length
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'grupo-info-agentes mr-2 text-subheader-bold' },
                            React.createElement(FaIcon, { icon: 'agente' }),
                            ' ',
                            React.createElement(
                                'span',
                                { className: 'info-value' },
                                grupo.agentes.length
                            )
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import Input from './react_input';

export default class GrupoMiniCard extends Input {
    constructor(props) {
        super(props);
    }

    render() {
        let grupo = this.props.grupo;
        return React.createElement(
            'div',
            {
                key: `${grupo._id}`,
                'data-id': grupo._id,
                className: `${this.props.popover ? 'popover' : null} popover-card d-inline-block popover-author mr-2 mb-2 d-flex flex-column justify-content-between`, role: 'tooltip',
                'data-slide': 'true',
                clickable: '',
                onClick: this.props.onClick },
            this.props.popover ? React.createElement('div', { className: 'arrow' }) : null,
            React.createElement(
                'h3',
                { className: 'senno-popover-header' },
                React.createElement(
                    'div',
                    { className: 'popover-autor text-center' },
                    React.createElement(
                        'div',
                        { className: 'popover-autor-avatar' },
                        React.createElement(
                            'div',
                            { className: 'circle-avatar m-auto', style: { "backgroundColor": grupo.cor } },
                            React.createElement(
                                'div',
                                { className: 'circle-avatar-text' },
                                grupo.nome.getInitials()
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'popover-autor-info p-2' },
                        React.createElement(
                            'div',
                            { className: 'popover-autor-info-name p-1 text-subheader', style: { "borderBottom": "1px solid black" } },
                            grupo.nome
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'senno-popover-body' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-12 text-center' },
                        React.createElement('i', { className: 'fa fa-users ' }),
                        ' ',
                        grupo.membros.length
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-12 text-center text-uppercase' },
                        'Membros'
                    )
                )
            )
        );
    }
}
import React from 'react';
import { initModules } from '../utils/ModulesUtils';
import ModeradorMiniCard from './react_moderador_minicard';
import AgenteMiniCard from './react_agente_minicard';
import PlataformaMiniCard from './react_plataforma_minicard';
import FaIcon from './react_faicon';
import Slider from './react_slider';
import GrupoCover from './react_grupo_cover';
import Comentarios from './react_comentarios';
import ModalEditarGrupo from './react_modal_novo_grupo';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';
import { comparaPorNome } from '../main';

export default class GrupoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            grupo: null,
            user: null,
            user_id: null,
            grupo_id: null,
            plataformas: []
        };

        this.state.user_id = this.props.user_id;
        this.state.user = this.props.user;
        this.state.grupo_id = this.props.grupo_id;

        this.participar = this.participar.bind(this);
        this.comentar = this.comentar.bind(this);
        this.curtir_comentario = this.curtir_comentario.bind(this);
        this.descurtir_comentario = this.descurtir_comentario.bind(this);

        this.socket = io.connect(WS_NAMESPACES.GRUPOS);

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (!data.type) return;

                switch (data.type) {
                    case "grupo":
                        that.state.grupo = data.data;
                        that.setState({
                            grupo: that.state.grupo
                        });
                        break;
                    case "plataformas":
                        that.state.plataformas = data.data;
                        that.setState({
                            plataformas: that.state.plataformas
                        });
                        break;
                    default:
                        break;
                }
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                if (!data.type) return;

                switch (data.type) {
                    case "participar":
                        this.emit(WS_EVENTS.GET, {
                            type: 'grupo',
                            _id: that.state.grupo_id
                        });
                        break;
                    case "comentar":
                        this.emit(WS_EVENTS.GET, {
                            type: 'grupo',
                            _id: that.state.grupo_id
                        });
                        break;
                    case "curtir_comentario":
                        this.emit(WS_EVENTS.GET, {
                            type: 'grupo',
                            _id: that.state.grupo_id
                        });
                        break;
                    case "descurtir_comentario":
                        this.emit(WS_EVENTS.GET, {
                            type: 'grupo',
                            _id: that.state.grupo_id
                        });
                        break;
                    default:
                        break;
                }
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    participar(e) {
        e.preventDefault();
        this.socket.emit(WS_EVENTS.POST, {
            type: 'participar',
            _id: this.state.grupo_id
        });
    }

    comentar(id = null, comentario = "") {
        this.socket.emit(WS_EVENTS.POST, {
            type: 'comentar',
            _id: this.state.grupo_id,
            comentario: comentario,
            comentario_id: id
        });
    }

    curtir_comentario(comentario_id = null) {
        this.socket.emit(WS_EVENTS.POST, {
            type: 'curtir_comentario',
            _id: this.state.grupo_id,
            user_id: this.state.user_id,
            comentario_id: comentario_id
        });
    }

    descurtir_comentario(comentario_id = null) {
        this.socket.emit(WS_EVENTS.POST, {
            type: 'descurtir_comentario',
            _id: this.state.grupo_id,
            user_id: this.state.user_id,
            comentario_id: comentario_id
        });
    }

    componentDidMount() {
        this.socket.emit(WS_EVENTS.GET, {
            type: 'grupo',
            _id: this.state.grupo_id
        });
        this.socket.emit(WS_EVENTS.GET, {
            type: 'plataformas',
            _id: this.state.grupo_id
        });
    }

    componentDidUpdate() {
        initModules();
    }

    render() {
        let grupo = this.state.grupo;
        let user_id = this.state.user_id;
        let user = this.state.user;
        let plataformas = this.state.plataformas;

        if (!grupo) {
            return React.createElement('div', null);
        }

        let _tags = grupo.tags ? grupo.tags.map(function (tag) {
            return React.createElement(
                'p',
                {
                    key: tag,
                    className: 'chip' },
                tag
            );
        }) : null;

        let _moderadores = grupo.moderadores ? grupo.moderadores.sort(comparaPorNome).map(function (moderador) {
            return React.createElement(ModeradorMiniCard, { moderador: moderador });
        }) : null;

        let _agentes = grupo.agentes ? grupo.agentes.sort(comparaPorNome).map(function (agente) {
            return React.createElement(AgenteMiniCard, { agente: agente });
        }) : null;

        let _plataformas = plataformas ? plataformas.sort(comparaPorNome).map(function (plataforma) {
            return React.createElement(PlataformaMiniCard, { plataforma: plataforma });
        }) : null;

        let _plataformas_collapse = plataformas ? plataformas.sort(comparaPorNome).map(function (plataforma) {
            let _moderadores = plataforma.membros.moderadores ? plataforma.membros.moderadores.map(function (moderador) {
                return React.createElement(ModeradorMiniCard, { moderador: moderador });
            }) : null;

            let _agentes = plataforma.membros.participantes ? plataforma.membros.participantes.map(function (agente) {
                return React.createElement(AgenteMiniCard, { agente: agente });
            }) : null;

            return React.createElement(
                'div',
                { className: 'panel panel-default mb-5' },
                React.createElement(
                    'div',
                    { className: 'panel-heading', role: 'tab', id: `heading-${plataforma._id}` },
                    React.createElement(
                        'h4',
                        { className: 'panel-title' },
                        React.createElement(
                            'a',
                            { role: 'button', 'data-toggle': 'collapse', 'data-parent': '#accordion', href: `#collapseOne-${plataforma._id}`, 'aria-expanded': 'true', 'aria-controls': `collapseOne-${plataforma._id}` },
                            React.createElement(FaIcon, { icon: 'fa-chevron-right' }),
                            ' ',
                            React.createElement('img', { 'class': 'avatar popover-autor-avatar d-inline', src: plataforma.cover, style: { "width": "35px", "height": "35px" } }),
                            ' ',
                            React.createElement(
                                'h4',
                                { className: 'd-inline' },
                                plataforma.nome
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { id: `collapseOne-${plataforma._id}`, className: 'panel-collapse collapse show', role: 'tabpanel', 'aria-labelledby': `heading-${plataforma._id}` },
                    React.createElement(
                        'div',
                        { className: 'panel-body pl-4' },
                        React.createElement(
                            'div',
                            { className: 'subheader form-group text-subheader' },
                            React.createElement(
                                'p',
                                { className: 'p-subheader' },
                                React.createElement(FaIcon, { icon: 'moderador', className: 'icon-subheader' }),
                                ' ',
                                React.createElement(
                                    'strong',
                                    null,
                                    'Moderadores'
                                )
                            )
                        ),
                        React.createElement(Slider, { boxes: _moderadores }),
                        React.createElement(
                            'div',
                            { className: 'subheader form-group text-subheader' },
                            React.createElement(
                                'p',
                                { className: 'p-subheader' },
                                React.createElement(FaIcon, { icon: 'agente', className: 'icon-subheader' }),
                                ' ',
                                React.createElement(
                                    'strong',
                                    null,
                                    'Agentes'
                                )
                            )
                        ),
                        React.createElement(Slider, { boxes: _agentes })
                    )
                )
            );
        }) : null;

        return React.createElement(
            'div',
            null,
            React.createElement(GrupoCover, { grupo: this.state.grupo }),
            React.createElement(
                'div',
                { className: 'grupo-summary m-auto' },
                React.createElement(
                    'div',
                    { style: {
                            "textAlign": "center",
                            "width": "100%",
                            "color": "black",
                            "fontWeight": "bold"
                        } },
                    'Resumo'
                ),
                React.createElement(
                    'div',
                    { className: 'grupo-resumo' },
                    React.createElement('p', { dangerouslySetInnerHTML: { "__html": grupo.resumo } })
                ),
                React.createElement(
                    'div',
                    { className: 'grupo-tags' },
                    _tags
                ),
                React.createElement(
                    'div',
                    { className: 'plataforma-actions ml-auto' },
                    grupo.criadoPor._id == user_id ? React.createElement(
                        'div',
                        { className: 'plataforma-action' },
                        React.createElement(
                            'button',
                            { className: 'btn btn-danger btn-block', 'data-toggle': 'modal', 'data-target': '#modal_editar_grupo' },
                            'Editar'
                        )
                    ) : null
                )
            ),
            React.createElement(
                'nav',
                { id: '', className: 'navbar navbar-expand-lg navbar-light bg-white second-navbar' },
                React.createElement(
                    'button',
                    { className: 'navbar-toggler navbar-toggler-fullwidth', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNavDropdownGrupoDetails', 'aria-controls': 'navbarNavDropdownGrupoDetails', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
                    React.createElement('span', { className: 'navbar-toggler-icon' })
                ),
                React.createElement(
                    'div',
                    { className: 'collapse navbar-collapse', id: 'navbarNavDropdownGrupoDetails' },
                    React.createElement(
                        'ul',
                        { className: 'navbar-nav nav nav-tabs d-flex', id: 'plataforma-tabs' },
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border active', id: 'nav-resumo-tab', 'data-toggle': 'tab', href: '#nav-resumo', role: 'tab', 'aria-controls': 'nav-resumo', 'aria-selected': 'true' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Resumo'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-plataformas-tab', 'data-toggle': 'tab', href: '#nav-plataformas', role: 'tab', 'aria-controls': 'nav-plataformas', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Plataformas'
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { id: 'content', className: `m-auto ${!grupo.usuarioParticipa ? 'blura' : ''}` },
                React.createElement(
                    'div',
                    { className: 'grupo-page' },
                    React.createElement(
                        'div',
                        { className: 'tab-content', id: 'nav-tabContent' },
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade show active', id: 'nav-resumo', role: 'tabpanel', 'aria-labelledby': 'nav-resumo-tab' },
                            React.createElement(
                                'div',
                                { className: 'subheader form-group text-subheader' },
                                React.createElement(
                                    'p',
                                    { className: 'p-subheader' },
                                    React.createElement(FaIcon, { icon: 'plataforma', className: 'icon-subheader' }),
                                    ' ',
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Plataformas'
                                    )
                                )
                            ),
                            React.createElement(Slider, { boxes: _plataformas }),
                            React.createElement(
                                'div',
                                { className: 'subheader form-group text-subheader' },
                                React.createElement(
                                    'p',
                                    { className: 'p-subheader' },
                                    React.createElement(FaIcon, { icon: 'moderador', className: 'icon-subheader' }),
                                    ' ',
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Moderadores'
                                    )
                                )
                            ),
                            React.createElement(Slider, { boxes: _moderadores }),
                            React.createElement(
                                'div',
                                { className: 'subheader form-group text-subheader' },
                                React.createElement(
                                    'p',
                                    { className: 'p-subheader' },
                                    React.createElement(FaIcon, { icon: 'agente', className: 'icon-subheader' }),
                                    ' ',
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Agentes'
                                    )
                                )
                            ),
                            React.createElement(Slider, { boxes: _agentes })
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-plataformas', role: 'tabpanel', 'aria-labelledby': 'nav-plataformas-tab' },
                            React.createElement(
                                'div',
                                { className: 'col-12' },
                                React.createElement(
                                    'div',
                                    { className: 'panel-group', id: 'accordion', role: 'tablist', 'aria-multiselectable': 'true' },
                                    _plataformas_collapse
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'nav',
                { id: '', className: 'navbar navbar-expand-lg navbar-light bg-white second-navbar' },
                React.createElement(
                    'button',
                    { className: 'navbar-toggler navbar-toggler-fullwidth', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNavDropdownGrupoRelated', 'aria-controls': 'navbarNavDropdownPlataformaRelated', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
                    React.createElement('span', { className: 'navbar-toggler-icon' })
                ),
                React.createElement(
                    'div',
                    { className: 'collapse navbar-collapse', id: 'navbarNavDropdownGrupoRelated' },
                    React.createElement(
                        'ul',
                        { className: 'navbar-nav nav nav-tabs d-flex', id: 'plataforma-tabs' },
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border active', id: 'nav-comentarios-tab', 'data-toggle': 'tab', href: '#nav-comentarios', role: 'tab', 'aria-controls': 'nav-comentarios', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Coment\xE1rios'
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: `content m-auto` },
                React.createElement(
                    'div',
                    { className: 'grupo-page-lower' },
                    React.createElement(
                        'div',
                        { className: 'tab-content', id: 'nav-tabContent' },
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade show active', id: 'nav-comentarios', role: 'tabpanel', 'aria-labelledby': 'nav-comentarios-tab' },
                            React.createElement(
                                'div',
                                { className: 'grupo-page' },
                                React.createElement(
                                    'div',
                                    { className: 'container' },
                                    React.createElement(
                                        'div',
                                        { className: 'row' },
                                        React.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            React.createElement(
                                                'section',
                                                { className: 'comment-list' },
                                                React.createElement(Comentarios, { comentarios: grupo.comentarios, user: user, comentar: this.comentar, curtir_comentario: this.curtir_comentario, descurtir_comentario: this.descurtir_comentario })
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            grupo.criadoPor._id == user_id ? React.createElement(ModalEditarGrupo, { _id: grupo._id }) : null
        );
    }
}
import React from 'react';
import LoadingTiles from './react_loading_tiles';
import Slider from './react_slider';
import ModalModeradores from './react_modal_moderadores';
import ModalGrupos from './react_modal_grupos';
import ModalCoautores from './react_modal_coautores';
import { setModuleTooltip, setModuleButton, setModulePopoverHover } from '../utils/ModulesUtils';
import PlataformaBox from './react_plataforma_box';
import PlataformaCover from './react_plataforma_cover';
import IdeiaBox from './react_ideia_box';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class Home extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            plataformas_destaque: [],
            plataformas: [],
            noMorePlats: false,
            ideias: [],
            noMoreIdeias: false
        };
        this.state._loading = function () {
            return React.createElement(LoadingTiles, null);
        }();

        this.list = React.createRef();

        this.loadMoreIdeias = this.loadMoreIdeias.bind(this);
        this.loadMorePlataformas = this.loadMorePlataformas.bind(this);

        this.socketPlataformas = io.connect(WS_NAMESPACES.PLATAFORMAS);
        this.socketIdeias = io.connect(WS_NAMESPACES.IDEIAS);

        let that = this;
        this.socketPlataformas.on('connect', function (data) {
            // this = socket
            // that = this do React
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (!data.type) return;

                switch (data.type) {
                    case "plataformas_destaque":
                        that.state.plataformas_destaque = data.data;
                        that.setState({
                            plataformas_destaque: that.state.plataformas_destaque
                        });
                        break;

                    case "plataformas":
                        that.state.plataformas.push(...data.data);
                        that.setState({
                            loadingPlataformas: false,
                            plataformas: that.state.plataformas,
                            noMorePlats: data.data.length < 1
                        });
                        break;

                    default:
                        break;
                }
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });

        this.socketIdeias.on('connect', function (data) {
            // this = socket
            // that = this do React
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                that.state.ideias.push(...data.data);
                that.setState({
                    loadingIdeias: false,
                    ideias: that.state.ideias,
                    noMoreIdeias: data.data.length < 1
                });
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    loadMorePlataformas(e) {
        e.preventDefault();
        let _ids = this.state.plataformas.map(_plat => _plat._id);
        this.socketPlataformas.emit(WS_EVENTS.GET, {
            type: 'plataformas',
            filter: 'page-home-vitrine',
            _ids: _ids
        });
    }

    loadMoreIdeias(e) {
        e.preventDefault();
        let _ids = this.state.ideias.map(_ideia => _ideia._id);
        this.socketIdeias.emit(WS_EVENTS.GET, {
            type: 'ideias',
            filter: 'page-home-vitrine',
            _ids: _ids
        });
    }

    componentDidMount() {
        this.setState({
            loadingIdeias: true,
            loadingPlataformas: true
        });
        this.socketIdeias.emit(WS_EVENTS.GET, {
            type: 'ideias',
            filter: 'page-home-vitrine'
        });
        this.socketPlataformas.emit(WS_EVENTS.GET, {
            type: 'plataformas',
            filter: 'page-home-vitrine'
        });
        this.socketPlataformas.emit(WS_EVENTS.GET, {
            type: 'plataformas_destaque'
        });
        // this.socketPlataformas.emit(WS_EVENTS.GET, {
        //     type: 'plataformas'
        //     , filter: 'minhas'
        // });
    }

    componentDidUpdate() {
        let that = this;
        let tooltips = window.$(this.list.current).find('[data-toggle="tooltip"]').toArray();
        let buttons = window.$(this.list.current).find('[data-module="button"]').toArray();
        let popoverHover = window.$(this.list.current).find('[data-module="popover-hover"]').toArray();
        setModuleTooltip(tooltips.length > 0 ? tooltips : undefined);
        setModuleButton(buttons.length > 0 ? buttons : undefined);
        setModulePopoverHover(popoverHover.length > 0 ? popoverHover : undefined);
    }

    render() {
        var _plataformas_destaque = this.state.plataformas_destaque.length < 1 ? function () {
            return null;
        }() : this.state.plataformas_destaque.map(function (plataforma, index) {
            return React.createElement(
                'div',
                { key: plataforma._id, className: `carousel-item ${index == 0 ? "active" : ""}` },
                React.createElement(PlataformaCover, { plataforma: plataforma, withLink: true })
            );
        });
        var _plataformas = this.state.plataformas.length < 1 ? [1].map(function () {
            return React.createElement(
                'p',
                { key: 1 },
                'Nenhuma plataforma!'
            );
        }) : this.state.plataformas.map(function (plataforma) {
            return React.createElement(PlataformaBox, { key: plataforma._id, plataforma: plataforma });
        });

        var _ideias = this.state.ideias.length < 1 ? [1].map(function () {
            return React.createElement(
                'p',
                { key: 1 },
                'Nenhuma ideia!'
            );
        }) : this.state.ideias.map(function (ideia) {
            return React.createElement(IdeiaBox, { key: ideia._id, ideia: ideia });
        });

        return React.createElement(
            'div',
            { ref: this.list },
            this.state.plataformas_destaque.length < 1 ? null : React.createElement(
                'div',
                { id: 'carouselExampleControls', className: 'carousel slide', 'data-ride': 'carousel' },
                React.createElement(
                    'div',
                    { className: 'carousel-inner' },
                    _plataformas_destaque
                ),
                this.state.plataformas_destaque.length > 1 ? React.createElement(
                    'a',
                    { className: 'carousel-control-prev', href: '#carouselExampleControls', role: 'button', 'data-slide': 'prev' },
                    React.createElement('span', { className: 'carousel-control-prev-icon', 'aria-hidden': 'true' }),
                    React.createElement(
                        'span',
                        { className: 'sr-only' },
                        'Previous'
                    )
                ) : null,
                this.state.plataformas_destaque.length > 1 ? React.createElement(
                    'a',
                    { className: 'carousel-control-next', href: '#carouselExampleControls', role: 'button', 'data-slide': 'next' },
                    React.createElement('span', { className: 'carousel-control-next-icon', 'aria-hidden': 'true' }),
                    React.createElement(
                        'span',
                        { className: 'sr-only' },
                        'Next'
                    )
                ) : null
            ),
            React.createElement(
                'div',
                { id: 'content', className: 'm-auto' },
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        { className: 'text-subheader mb-60px' },
                        React.createElement(
                            'span',
                            { className: 'text-title-bold mr-2' },
                            ` Plataformas em destaque `
                        ),
                        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, soluta est. Alias perferendis quo similique deserunt. Laboriosam veritatis dolorem et ab error dolor est eum, velit, eius, deleniti placeat. Aliquid!'
                    )
                ),
                this.state.loadingPlataformas ? React.createElement(
                    'div',
                    { id: 'plataformas', className: 'tile-grid' },
                    this.state._loading
                ) : React.createElement(Slider, { boxes: _plataformas }),
                React.createElement(
                    'div',
                    { className: 'd-flex justify-content-center align-items-center flex-wrap' },
                    this.state.noMorePlats ? React.createElement(
                        'p',
                        null,
                        'Por enquanto, todas as plataformas foram carregadas'
                    ) : React.createElement(
                        'p',
                        null,
                        '\xA0'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'd-flex justify-content-center align-items-center flex-wrap mb-5' },
                    React.createElement(
                        'button',
                        { className: 'btn btn-outline-info', onClick: this.loadMorePlataformas },
                        'Carregar mais'
                    )
                ),
                React.createElement(
                    'p',
                    { className: 'text-subheader mb-60px' },
                    React.createElement(
                        'span',
                        { className: 'text-title-bold mr-2' },
                        ` Ideias em destaque `
                    ),
                    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, soluta est. Alias perferendis quo similique deserunt. Laboriosam veritatis dolorem et ab error dolor est eum, velit, eius, deleniti placeat. Aliquid!'
                ),
                this.state.loadingIdeias ? React.createElement(
                    'div',
                    { id: 'ideias', className: 'tile-grid' },
                    this.state._loading
                ) : React.createElement(Slider, { boxes: _ideias }),
                React.createElement(
                    'div',
                    { className: 'd-flex justify-content-center align-items-center flex-wrap' },
                    this.state.noMoreIdeias ? React.createElement(
                        'p',
                        null,
                        'Por enquanto, todas as ideias foram carregadas'
                    ) : React.createElement(
                        'p',
                        null,
                        '\xA0'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'd-flex justify-content-center align-items-center flex-wrap mb-5' },
                    React.createElement(
                        'button',
                        { className: 'btn btn-outline-info', onClick: this.loadMoreIdeias },
                        'Carregar mais'
                    )
                ),
                React.createElement(
                    'p',
                    { className: 'text-subheader mb-60px' },
                    React.createElement(
                        'span',
                        { className: 'text-title-bold mr-2' },
                        ` Inovacoes em destaque `
                    ),
                    ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, soluta est. Alias perferendis quo similique deserunt. Laboriosam veritatis dolorem et ab error dolor est eum, velit, eius, deleniti placeat. Aliquid!'
                )
            ),
            React.createElement(ModalModeradores, null),
            React.createElement(ModalGrupos, null),
            React.createElement(ModalCoautores, null)
        );
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import LoadingTiles from './react_loading_tiles';
import FiltersNavbar from './react_filters_navbar';
import { setModuleTooltip, setModuleButton, setModulePopoverHover } from '../utils/ModulesUtils';
import TransparentTiles from './react_transparent_tiles';
import IdeiaBox from './react_ideia_box';
import ModalCoautores from './react_modal_coautores';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class IdeiasList extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.ideias = props.ideias || this.state.ideias;
        this.state._loading = function () {
            return React.createElement(LoadingTiles, null);
        }();

        this.list = React.createRef();

        this.updateList = this.updateList.bind(this);
        this.loadMore = this.loadMore.bind(this);

        this.socket = io.connect(WS_NAMESPACES.IDEIAS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketIdeias client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (data.error) {
                    alert(data.message);
                    return;
                }
                that.state.ideias.push(...data.data);
                that.setState({
                    loading: false,
                    ideias: that.state.ideias,
                    noMore: data.data.length < 1
                });
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    updateList(filter) {
        // Reinicia carregamento com novo filtro
        this.setState({
            loading: true,
            ideias: []
        });
        let data = {
            type: 'ideias',
            filter: filter ? filter : window.$('#filterNavbar #listFilters .list-filters .nav-item.active').data('filter')
        };
        this.socket.emit(WS_EVENTS.GET, data);
    }

    loadMore(e) {
        // Adiciona na lista mais itens do mesmo filtro
        e.preventDefault();
        let that = this;
        let _ids = this.state.ideias.map(_obj => _obj._id);
        this.socket.emit(WS_EVENTS.GET, {
            type: 'ideias',
            filter: that.state.filter ? that.state.filter : window.$('#filterNavbar #listFilters .list-filters .nav-item.active').data('filter'),
            _ids: _ids
        });
    }

    componentDidMount() {
        let that = this;
        this.updateList();
        let _doc = document.querySelector('#template_second_navbar');
        let _template_second_navbar = _doc ? ReactDOM.render(React.createElement(FiltersNavbar, { text_meus_objetos: "Minhas Ideias", with_dropdown_portfolios: false, with_dropdown_plataformas: true }), _doc) : {};
    }

    componentDidUpdate() {
        let that = this;
        window.$('#filterNavbar #listFilters .list-filters .nav-item').unbind('click').bind('click', function () {
            let $this = window.$(this);
            $this.closest('ul').find('li').removeClass('active');
            $this.addClass('active');
            that.state.filter = $this.data('filter');
            that.updateList(that.state.filter);
        });
        let tooltips = window.$(this.list.current).find('[data-toggle="tooltip"]').toArray();
        let buttons = window.$(this.list.current).find('[data-module="button"]').toArray();
        let popoverHover = window.$(this.list.current).find('[data-module="popover-hover"]').toArray();
        setModuleTooltip(tooltips.length > 0 ? tooltips : undefined);
        setModuleButton(buttons.length > 0 ? buttons : undefined);
        setModulePopoverHover(popoverHover.length > 0 ? popoverHover : undefined);
    }

    getInitialState() {
        return {
            ideias: [],
            noMore: false
        };
    }

    render() {

        var _transparents = React.createElement(TransparentTiles, { length: this.state.ideias.length });

        var _ideias = this.state.ideias.length < 1 ? function () {
            return React.createElement(
                'p',
                null,
                'Nenhuma ideia!'
            );
        }() : this.state.ideias.map(function (ideia) {
            return React.createElement(IdeiaBox, { key: ideia._id, ideia: ideia });
        });

        return React.createElement(
            'div',
            { ref: this.list },
            React.createElement(
                'div',
                { className: 'tile-grid' },
                this.state.loading ? this.state._loading : _ideias,
                this.state.loading ? void 0 : _transparents
            ),
            React.createElement(
                'div',
                { className: 'd-flex justify-content-center align-items-center flex-wrap' },
                this.state.noMore && this.state.ideias && this.state.ideias.length > 0 ? React.createElement(
                    'p',
                    null,
                    'Por enquanto, todas as ideias foram carregadas'
                ) : React.createElement(
                    'p',
                    null,
                    '\xA0'
                )
            ),
            React.createElement(
                'div',
                { className: 'd-flex justify-content-center align-items-center flex-wrap mb-5' },
                React.createElement(
                    'button',
                    { className: 'btn btn-outline-info', onClick: this.loadMore },
                    'Carregar mais'
                )
            ),
            React.createElement(ModalCoautores, null)
        );
    }
}
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PlataformaMiniCard from './react_plataforma_minicard';
import FaIcon from './react_faicon';
import { h } from '../main';
import TileBoxAutor from './react_tile_box_autor';
import TileBoxCoautores from './react_tile_box_coautores';
import IdeiaIconStatus from './react_ideia_icon_status';
import SponsorRibbon from './react_sponsor_ribbon';

export default class IdeiaBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.ideia = props.ideia;
    }

    render() {
        let ideia = this.state.ideia;

        let _template_popover_plataforma = ideia && ideia.plataforma ? React.createElement(PlataformaMiniCard, { plataforma: ideia.plataforma, popover: true }) : null;

        let progress = parseInt(Math.floor(Math.random() * 100));

        return React.createElement(
            'a',
            {
                key: ideia._id,
                clickable: '',
                className: 'tile tile-ideia',
                href: `/ideias/${ideia._id}`,
                'data-slide': 'true' },
            React.createElement(
                'div',
                { className: 'tile-photo-container hovereffect' },
                this.state.ideia.sponsors && this.state.ideia.sponsors.length > 0 ? null : null,
                React.createElement('img', { className: 'tile-photo', src: ideia.cover }),
                React.createElement(
                    'div',
                    { className: `overlay ${ideia.status}` },
                    React.createElement(
                        'a',
                        { className: 'tile-ideia-progressbar', href: 'javascript:void(0)' },
                        React.createElement(
                            'div',
                            { className: 'progress', style: { "height": "4px" } },
                            React.createElement('div', { className: `progress-bar ${progress > 75 ? 'bg-success' : progress > 25 ? 'bg-warning' : 'bg-danger'}`, role: 'progressbar', style: { "width": `${progress}%` }, 'aria-valuenow': progress, 'aria-valuemin': '0', 'aria-valuemax': '100' })
                        ),
                        React.createElement(
                            'span',
                            { className: 'white', style: { "marginTop": "4px" } },
                            progress,
                            '/100'
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'tile-ideia-alvo', href: 'javascript:void(0)',
                            'data-toggle': 'popover-hover',
                            'data-placement': 'bottom',
                            'data-template': ReactDOMServer.renderToString(_template_popover_plataforma),
                            'data-content': ' ' },
                        React.createElement(
                            'div',
                            { className: 'circle-border' },
                            React.createElement(FaIcon, { icon: 'plataforma' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'info' },
                        React.createElement(
                            'a',
                            { className: 'info tile-ideia-smiles', href: 'javascript:void(0)', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Votos' },
                            React.createElement('i', { className: 'fa fa-smile' }),
                            React.createElement(
                                'div',
                                null,
                                h.getRandomInt(100, 1000)
                            )
                        ),
                        React.createElement(
                            'a',
                            { className: 'info tile-ideia-gem', href: 'javascript:void(0)', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Cr\xE9ditos' },
                            React.createElement(FaIcon, { icon: 'credito' }),
                            React.createElement(
                                'div',
                                null,
                                h.getRandomInt(100, 1000)
                            )
                        ),
                        React.createElement(
                            'a',
                            { className: 'info tile-ideia-medalhas', href: 'javascript:void(0)', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Medalhas' },
                            React.createElement(FaIcon, { icon: 'medalha' }),
                            React.createElement(
                                'div',
                                null,
                                h.getRandomInt(100, 1000)
                            )
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'tile-ideia-flag', href: 'javascript:void(0)', 'data-id': ideia._id, 'data-objeto': 'ideia', 'data-toggle': 'modal', 'data-target': '#modal_denunciar' },
                        React.createElement(
                            'div',
                            { className: 'circle-border', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Denunciar' },
                            React.createElement(FaIcon, { icon: 'fa-flag', className: 'pt-1' })
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'tile-ideia-pin', href: 'javascript:void(0)', 'data-toggle': 'modal', 'data-target': '#modal_salvar_favorito' },
                        React.createElement(
                            'div',
                            { className: 'circle-border', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Salvar' },
                            React.createElement(FaIcon, { icon: 'fa-thumbtack', className: 'pt-1' })
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'tile-ideia-share', href: 'javascript:void(0)', 'data-toggle': 'modal', 'data-target': '#modal_compartilhar' },
                        React.createElement(
                            'div',
                            { className: 'circle-border', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Compartilhar' },
                            React.createElement(FaIcon, { icon: 'fa-share-alt', className: 'pt-1' })
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'tile-info' },
                React.createElement(
                    'div',
                    { className: 'tile-body' },
                    React.createElement(
                        'div',
                        { className: 'tile-title text-subheader' },
                        React.createElement(FaIcon, { icon: 'ideia' }),
                        ` ${ideia.nome}`
                    ),
                    React.createElement(
                        'div',
                        { className: 'tile-author-date d-flex align-items-center mt-20px' },
                        React.createElement(TileBoxAutor, { autor: ideia.autor }),
                        React.createElement(
                            'div',
                            { className: 'tile-date ml-auto' },
                            h.short_date(ideia.createdAt)
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'd-flex align-items-center mt-20px' },
                        React.createElement(TileBoxCoautores, { coautores: ideia.coautores, _id: ideia._id }),
                        React.createElement(
                            'div',
                            { className: 'tile-status ml-auto' },
                            React.createElement(IdeiaIconStatus, { status: ideia.status })
                        )
                    )
                )
            ),
            React.createElement('div', { className: 'tile-footer mt-2' }),
            ideia.sponsors && ideia.sponsors.length > 0 ? React.createElement(SponsorRibbon, null) : null
        );
    }
}
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PlataformaMiniCard from './react_plataforma_minicard';
import SponsorRibbon from './react_sponsor_ribbon';
import TileBoxAutor from './react_tile_box_autor';
import { h } from '../main';
import FaIcon from './react_faicon';
import TileBoxCoautores from './react_tile_box_coautores';

export default class IdeiaCover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ideia: null,
            withLink: null
        };
        this.state.ideia = props.ideia;
        this.state.withLink = props.withLink;
    }

    render() {

        let ideia = this.state.ideia;

        let _template_popover_plataforma = ideia && ideia.plataforma ? React.createElement(PlataformaMiniCard, { plataforma: ideia.plataforma, popover: true }) : null;

        return React.createElement(
            'div',
            { className: 'cover', style: { "backgroundImage": `url('${ideia.cover}')` } },
            ideia.sponsors && ideia.sponsors.length > 0 ? React.createElement(SponsorRibbon, null) : null,
            React.createElement(
                'a',
                { href: this.state.withLink ? `/ideias/${ideia._id}` : 'javascript:void(0);' },
                React.createElement('div', { className: 'cover-overlay' }),
                React.createElement(
                    'div',
                    { className: 'cover-content' },
                    React.createElement(
                        'a',
                        { className: 'cover-ideia-author', href: '#' },
                        React.createElement(TileBoxAutor, { autor: ideia.autor }),
                        React.createElement(
                            'div',
                            { className: 'tile-date ml-4 pl-2' },
                            'in ',
                            h.short_date(ideia.data)
                        )
                    ),
                    ideia.plataforma ? React.createElement(
                        'a',
                        { className: 'cover-ideia-plataforma', href: '#', 'data-toggle': 'popover-hover', 'data-placement': 'bottom', 'data-template': ReactDOMServer.renderToString(_template_popover_plataforma), 'data-content': ' ' },
                        React.createElement(FaIcon, { icon: 'plataforma' }),
                        ` ${ideia.plataforma.nome}`
                    ) : null,
                    React.createElement(
                        'div',
                        { className: 'cover-info' },
                        React.createElement(
                            'div',
                            { className: 'cover-title' },
                            ideia.nome
                        ),
                        React.createElement(
                            'a',
                            { className: 'info cover-ideia-smiles', href: '#' },
                            React.createElement(FaIcon, { icon: 'fa-smile' }),
                            React.createElement(
                                'div',
                                null,
                                h.getRandomInt(100, 1000)
                            )
                        ),
                        React.createElement(
                            'a',
                            { className: 'info cover-ideia-gem', href: '#' },
                            React.createElement(FaIcon, { icon: 'credito' }),
                            React.createElement(
                                'div',
                                null,
                                h.getRandomInt(100, 1000)
                            )
                        ),
                        React.createElement(
                            'a',
                            { className: 'info cover-ideia-medalhas', href: '#' },
                            React.createElement(FaIcon, { icon: 'medalha' }),
                            React.createElement(
                                'div',
                                null,
                                h.getRandomInt(100, 1000)
                            )
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'cover-ideia-coautores', href: '#' },
                        React.createElement(TileBoxCoautores, { coautores: ideia.coautores, _id: ideia._id })
                    ),
                    React.createElement(
                        'a',
                        { className: 'cover-ideia-flag', href: '#', 'data-id': ideia._id, 'data-objeto': 'ideia', 'data-toggle': 'modal', 'data-target': '#modal_denunciar' },
                        React.createElement(
                            'div',
                            { className: 'circle-border' },
                            React.createElement(FaIcon, { icon: 'fa-flag', className: 'pt-1' })
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'cover-ideia-pin', href: '#', 'data-toggle': 'modal', 'data-target': '#modal_salvar_favorito' },
                        React.createElement(
                            'div',
                            { className: 'circle-border' },
                            React.createElement(FaIcon, { icon: 'fa-thumbtack', className: 'pt-1' })
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'cover-ideia-share', href: '#', 'data-toggle': 'modal', 'data-target': '#modal_compartilhar' },
                        React.createElement(
                            'div',
                            { className: 'circle-border' },
                            React.createElement(FaIcon, { icon: 'fa-share-alt', className: 'pt-1' })
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import { debounce, serializeDataContainer, h } from '../main';
import { setModuleFormWizard } from '../utils/ModulesUtils';
import FaIcon from './react_faicon';
import InputHidden from './react_input_hidden';
import InputIdeiaTitulo from './react_input_ideia_titulo';
import DropdownFilterablePlataformas from './react_dropdown_filterable_plataformas';
import InputPlataformaResumo from './react_input_plataforma_resumo';
import { InputPlataformaTags } from './react_input_plataforma_tags';
import InputPlataformaDescricao from './react_input_plataforma_descricao';
import InputPlataformaValueProposition from './react_input_plataforma_value_proposition';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class IdeiaEdit extends React.Component {
    constructor(props) {
        super(props);

        // Methods
        this.getInitialState = this.getInitialState.bind(this);
        this.updateIdeia = this.updateIdeia.bind(this);
        this.coverOnChangeHandler = this.coverOnChangeHandler.bind(this);
        this.coverOnChange = this.coverOnChange.bind(this);
        this.readBLOB = this.readBLOB.bind(this);

        this.sendSocket = debounce(function () {
            console.log(that.state.ideia);
            that.socket.emit(WS_EVENTS.POST, that.state.ideia);
            console.log('socket emited');
        }, 1000);

        // Initial State
        this.state = this.getInitialState();

        // State from props
        this.state.ideia_id = props.ideia_id;

        // Refs
        this.form = React.createRef();
        this.inputCover = React.createRef();

        this.socket = io.connect(WS_NAMESPACES.IDEIAS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketIdeias client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (!data.data) return;

                if (data.type === 'ideia') {
                    that.state.ideia = data.data;
                    that.setState({
                        ideia: that.state.ideia
                    });
                }
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);

                if (!data.data) return;

                if (data.type === 'end upload') {
                    that.state.ideia.cover = data.data.cover;
                    that.setState({
                        ideia: that.state.ideia
                    });
                    window.$('[name="cover"][type="hidden"]').val(that.state.ideia.cover).trigger('change').trigger('keyup');
                }

                if (data.type === 'request slice upload') {
                    that.currentSlice = data.data.currentSlice;
                    that.fileName = data.data.fileName;
                    var place = data.data.currentSlice * 100000,
                        slice = that.file.slice(place, place + Math.min(100000, that.file.size - place));

                    that.fileReader.readAsArrayBuffer(slice);
                }

                if (data.type === 'grupos') {
                    that.state.ideia.grupos = data.data;
                    that.setState({
                        ideia: that.state.ideia
                    });
                }

                if (data.type === 'moderadores') {
                    that.state.ideia.moderadores = data.data;
                    that.setState({
                        ideia: that.state.ideia
                    });
                }

                if (data.type === 'sponsors') {
                    that.state.ideia.sponsors = data.data;
                    that.setState({
                        ideia: that.state.ideia
                    });
                }
            });

            this.on(WS_EVENTS.POST_ERROR, function (data) {
                log(WS_EVENTS.POST_ERROR);
                alert(data);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    getInitialState() {
        return {
            ideia: null,
            ideia_id: null
        };
    }

    componentDidUpdate() {
        this.coverOnChange();
        // new_medal.init();
        // setModuleRedactor();
        setModuleFormWizard();
        // setModuleDatetimePicker();
        // setModuleChips();
    }

    componentDidMount() {
        this.socket.emit(WS_EVENTS.GET, {
            type: 'ideia',
            _id: this.state.ideia_id
        });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.ideia) {
            return {
                ideia: null,
                ideia_id: nextProps.ideia_id
            };
        }

        return {
            ideia: prevState.ideia
        };
    }

    coverOnChangeHandler(e) {
        this.readBLOB(this.inputCover.current);
        var fileName = '';
        if (this.files && this.files.length > 1) fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);else fileName = e.target.value.split('\\').pop();

        if (fileName) {
            // label.querySelector( 'span' ) ? label.querySelector( 'span' ).innerHTML = fileName : void 0;
        } else {
                // label.innerHTML = labelVal;
            }
    }

    coverOnChange() {
        let that = this;
        if (!this.inputCover.current) {
            return;
        }
        this.inputCover.current.removeEventListener('change', this.coverOnChangeHandler);
        this.inputCover.current.addEventListener('change', this.coverOnChangeHandler);
    }

    readBLOB(input) {
        let that = this;
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            that.fileReader = new FileReader();
            that.file = input.files[0];
            let slice = that.file.slice(0, 100000);

            that.fileReader.onload = function (evt) {
                var arrayBuffer = that.fileReader.result;
                that.currentSlice = that.currentSlice || 0;
                that.fileName = that.fileName;
                that.socket.emit(WS_EVENTS.POST, {
                    _id: that.state.ideia._id,
                    type: 'slice upload',
                    data: {
                        name: that.file.name,
                        type: that.file.type,
                        size: that.file.size,
                        data: arrayBuffer,
                        currentSlice: that.currentSlice,
                        fileName: that.fileName
                    }
                });
            };
            that.fileReader.readAsArrayBuffer(slice);

            reader.onload = function (e) {
                $('.select-cover').css({ 'background-size': 'cover', 'background-position': 'center', 'background-image': `url(${e.target.result})` });
            };
            reader.readAsDataURL(that.file);
        }
    }

    updateIdeia(e) {
        console.log('updateIdeia');
        let newIdeia = serializeDataContainer(this.form.current);

        this.state.ideia = newIdeia;
        this.setState({
            ideia: this.state.ideia
        });

        let that = this;
        this.sendSocket();
    }

    withPreviousButton() {
        return React.createElement('input', { type: 'button', name: 'previous', className: 'previous action-button', value: 'Anterior' });
    }

    withNextButton() {
        return React.createElement('input', { type: 'button', name: 'next', className: 'next action-button', value: 'Pr\xF3ximo' });
    }

    withSubmitButton() {
        return React.createElement('input', { type: 'submit', name: 'submit', className: 'submit action-button', value: 'Publicar' });
    }

    formWizardFooter(withPreviousButton = true, withNextButton = true, withSubmitButton = false) {
        return React.createElement(
            'div',
            { className: 'form-group d-flex flex-flow-row align-content-center align-items-center' },
            withPreviousButton ? this.withPreviousButton() : void 0,
            React.createElement(
                'div',
                { className: 'sysop-container m-auto' },
                React.createElement(
                    'div',
                    { className: 'circle-border circle-border-black ml-1' },
                    React.createElement(
                        'a',
                        { href: '' },
                        React.createElement(FaIcon, { icon: 'ajuda' })
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'buttons-container float-right' },
                withNextButton ? this.withNextButton() : void 0,
                withSubmitButton ? this.withSubmitButton() : void 0
            )
        );
    }

    render() {
        let that = this;
        if (!this.state.ideia) {
            return React.createElement('div', null);
        }
        return React.createElement(
            'div',
            { className: '' },
            React.createElement(
                'form',
                { id: 'msform', ref: this.form },
                React.createElement(
                    'ul',
                    { className: 'progressbar' },
                    React.createElement(
                        'li',
                        { className: 'active current' },
                        React.createElement(
                            'a',
                            { href: '#', className: 'progressbar-link', onClick: this.updateIdeia },
                            'Descri\xE7\xE3o'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#', className: 'progressbar-link', onClick: this.updateIdeia },
                            'Anexos'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#', className: 'progressbar-link', onClick: this.updateIdeia },
                            'Proposta de Valor'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#', className: 'progressbar-link', onClick: this.updateIdeia },
                            'Publicar'
                        )
                    )
                ),
                React.createElement(
                    'ul',
                    { id: 'progressbar' },
                    React.createElement(
                        'li',
                        { className: 'active current' },
                        React.createElement('a', { href: '#', className: 'progressbar-link', onClick: this.updateIdeia, dangerouslySetInnerHTML: { "__html": h.svg('wizard-step') } })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement('a', { href: '#', className: 'progressbar-link', onClick: this.updateIdeia, dangerouslySetInnerHTML: { "__html": h.svg('wizard-step') } })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement('a', { href: '#', className: 'progressbar-link', onClick: this.updateIdeia, dangerouslySetInnerHTML: { "__html": h.svg('wizard-step') } })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement('a', { href: '#', className: 'progressbar-link', onClick: this.updateIdeia, dangerouslySetInnerHTML: { "__html": h.svg('wizard-step') } })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'wizard-fieldset' },
                    React.createElement(InputHidden, { name: '_id', id: '_id', value: this.state.ideia._id }),
                    React.createElement(
                        'div',
                        { className: 'form-group row', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Foto' },
                        React.createElement(InputHidden, { name: 'cover', id: 'cover', value: this.state.ideia.cover, onChange: this.updateIdeia }),
                        React.createElement('input', { ref: this.inputCover, type: 'file', name: 'coverFile', className: 'form-control-file inputfile', id: 'inputCover', 'data-multiple-caption': '{count} files selected' }),
                        React.createElement(
                            'div',
                            { className: 'col-12' },
                            React.createElement(
                                'label',
                                { className: 'select-cover', htmlFor: 'inputCover', style: { "backgroundImage": `url('${this.state.ideia.cover}')` } },
                                React.createElement('div', { className: 'cover-overlay' })
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'form-group d-flex justify-content-end align-items-baseline row' },
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-8' },
                            React.createElement(InputIdeiaTitulo, { value: this.state.ideia.nome, className: 'form-control-lg', onChange: this.updateIdeia })
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-4 text-center' },
                            React.createElement(DropdownFilterablePlataformas, { value: this.state.ideia.plataforma, onChange: this.updateIdeia })
                        )
                    )
                ),
                React.createElement(
                    'fieldset',
                    { className: 'active' },
                    React.createElement(InputPlataformaResumo, { id: 'resumo', value: this.state.ideia.resumo, onChange: this.updateIdeia }),
                    React.createElement(InputPlataformaTags, { value: this.state.ideia.tags, onChange: this.updateIdeia }),
                    React.createElement(InputPlataformaDescricao, { id: 'descricao', value: this.state.ideia.descricao, onChange: this.updateIdeia }),
                    this.formWizardFooter(false, true, false)
                ),
                React.createElement(
                    'fieldset',
                    null,
                    this.formWizardFooter(true, true, false)
                ),
                React.createElement(
                    'fieldset',
                    null,
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-8' },
                            React.createElement(
                                'div',
                                { className: 'card value-proposition value-proposition-customer-jobs' },
                                React.createElement(
                                    'div',
                                    { className: 'value-proposition-content' },
                                    React.createElement(InputPlataformaValueProposition, {
                                        id: 'value_proposition_customer_jobs',
                                        name: 'value_proposition_customer_jobs',
                                        value: this.state.ideia.value_proposition_customer_jobs,
                                        onChange: this.updateIdeia })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-4' },
                            React.createElement(
                                'div',
                                { className: 'tip-box' },
                                React.createElement(
                                    'div',
                                    { className: 'header' },
                                    'Tip'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'body' },
                                    React.createElement(
                                        'p',
                                        null,
                                        'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-8' },
                            React.createElement(
                                'div',
                                { className: 'card value-proposition value-proposition-pains' },
                                React.createElement(
                                    'div',
                                    { className: 'value-proposition-content' },
                                    React.createElement(InputPlataformaValueProposition, {
                                        id: 'value_proposition_pains',
                                        name: 'value_proposition_pains',
                                        value: this.state.ideia.value_proposition_pains,
                                        onChange: this.updateIdeia })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-4' },
                            React.createElement(
                                'div',
                                { className: 'tip-box' },
                                React.createElement(
                                    'div',
                                    { className: 'header' },
                                    'Tip'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'body' },
                                    React.createElement(
                                        'p',
                                        null,
                                        'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-8' },
                            React.createElement(
                                'div',
                                { className: 'card value-proposition value-proposition-gains' },
                                React.createElement(
                                    'div',
                                    { className: 'value-proposition-content' },
                                    React.createElement(InputPlataformaValueProposition, {
                                        id: 'value_proposition_gains',
                                        name: 'value_proposition_gains',
                                        value: this.state.ideia.value_proposition_gains,
                                        onChange: this.updateIdeia })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-4' },
                            React.createElement(
                                'div',
                                { className: 'tip-box' },
                                React.createElement(
                                    'div',
                                    { className: 'header' },
                                    'Tip'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'body' },
                                    React.createElement(
                                        'p',
                                        null,
                                        'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-8' },
                            React.createElement(
                                'div',
                                { className: 'card value-proposition value-proposition-products-and-services' },
                                React.createElement(
                                    'div',
                                    { className: 'value-proposition-content' },
                                    React.createElement(InputPlataformaValueProposition, {
                                        id: 'value_proposition_products_and_services',
                                        name: 'value_proposition_products_and_services',
                                        value: this.state.ideia.value_proposition_products_and_services,
                                        onChange: this.updateIdeia })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-4' },
                            React.createElement(
                                'div',
                                { className: 'tip-box' },
                                React.createElement(
                                    'div',
                                    { className: 'header' },
                                    'Tip'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'body' },
                                    React.createElement(
                                        'p',
                                        null,
                                        'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-8' },
                            React.createElement(
                                'div',
                                { className: 'card value-proposition value-proposition-pains-relievers' },
                                React.createElement(
                                    'div',
                                    { className: 'value-proposition-content' },
                                    React.createElement(InputPlataformaValueProposition, {
                                        id: 'value_proposition_pains_relievers',
                                        name: 'value_proposition_pains_relievers',
                                        value: this.state.ideia.value_proposition_pains_relievers,
                                        onChange: this.updateIdeia })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-4' },
                            React.createElement(
                                'div',
                                { className: 'tip-box' },
                                React.createElement(
                                    'div',
                                    { className: 'header' },
                                    'Tip'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'body' },
                                    React.createElement(
                                        'p',
                                        null,
                                        'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-8' },
                            React.createElement(
                                'div',
                                { className: 'card value-proposition value-proposition-gains-creators' },
                                React.createElement(
                                    'div',
                                    { className: 'value-proposition-content' },
                                    React.createElement(InputPlataformaValueProposition, {
                                        id: 'value_proposition_gains_creators',
                                        name: 'value_proposition_gains_creators',
                                        value: this.state.ideia.value_proposition_gains_creators,
                                        onChange: this.updateIdeia })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-4' },
                            React.createElement(
                                'div',
                                { className: 'tip-box' },
                                React.createElement(
                                    'div',
                                    { className: 'header' },
                                    'Tip'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'body' },
                                    React.createElement(
                                        'p',
                                        null,
                                        'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                    )
                                )
                            )
                        )
                    ),
                    this.formWizardFooter(true, true, false)
                ),
                React.createElement(
                    'fieldset',
                    null,
                    '4',
                    this.formWizardFooter(true, false, true)
                )
            )
        );
    }
}
import React from 'react';
import FaIcon from './react_faicon';

export default class IdeiaIconStatus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: props.status
        };
    }
    render() {
        let status = this.state.status;

        if (typeof status != "undefined") {
            if (status === "aprovada") {
                return React.createElement(
                    'div',
                    { style: { "color": "darkgreen" } },
                    React.createElement(FaIcon, { icon: 'fa-check-square' }),
                    ` ${status.capitalizeFirstLetter()}`
                );
            }
            if (status === "pendente") {
                return React.createElement(
                    'div',
                    { style: { "color": "darkorange" } },
                    React.createElement(FaIcon, { icon: 'fa-hourglass' }),
                    ` ${status.capitalizeFirstLetter()}`
                );
            }
            if (status === "reprovada") {
                return React.createElement(
                    'div',
                    { style: { "color": "darkred" } },
                    React.createElement(FaIcon, { icon: 'fa-times-circle' }),
                    ` ${status.capitalizeFirstLetter()}`
                );
            }
        }

        return React.createElement('div', null);
    }
}
import React from 'react';
import Input from "./react_input";

export default class IdeiaMiniCard extends Input {
    constructor(props) {
        super(props);
    }

    render() {
        let ideia = this.props.ideia;
        return React.createElement(
            'div',
            {
                key: `${ideia._id}`,
                'data-id': ideia._id,
                className: `${this.props.popover ? 'popover' : null} popover-card d-inline-block popover-author mr-2 mb-2 d-flex flex-column justify-content-between`, role: 'tooltip',
                'data-slide': 'true',
                clickable: '',
                onClick: this.props.onClick },
            this.props.popover ? React.createElement('div', { className: 'arrow' }) : null,
            React.createElement(
                'h3',
                { className: 'senno-popover-header' },
                React.createElement(
                    'div',
                    { className: 'popover-autor text-center' },
                    React.createElement(
                        'div',
                        { className: 'popover-autor-avatar' },
                        React.createElement('img', { className: 'avatar popover-autor-avatar', src: ideia.cover })
                    ),
                    React.createElement(
                        'div',
                        { className: 'popover-autor-info p-2' },
                        React.createElement(
                            'div',
                            { className: 'popover-autor-info-name p-1 text-subheader', style: { "borderBottom": "1px solid black" } },
                            ideia.nome
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'senno-popover-body' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-lightbulb ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '3.678'
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-bullseye ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '1.366'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-flask ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '3.200'
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-rocket ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '248'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-fire ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '424'
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-fire ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '424'
                    )
                )
            )
        );
    }
}
import React from 'react';
import { initModules } from '../utils/ModulesUtils';
import { charts } from '../main';
import IdeiaCover from './react_ideia_cover';
import IdeiaIconStatus from './react_ideia_icon_status';
import FaIcon from './react_faicon';
import SponsorBoxShow from './react_sponsor_box_show';
import Comentarios from './react_comentarios';
import ModalCoautores from './react_modal_coautores';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class IdeiaPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            ideia: null,
            user: null,
            user_id: null,
            ideia_id: null
        };

        this.state.user_id = this.props.user_id;
        this.state.user = this.props.user;
        this.state.ideia_id = this.props.ideia_id;

        this.participar = this.participar.bind(this);
        this.comentar = this.comentar.bind(this);
        this.curtir_comentario = this.curtir_comentario.bind(this);
        this.descurtir_comentario = this.descurtir_comentario.bind(this);

        this.socket = io.connect(WS_NAMESPACES.IDEIAS);

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (!data.type) return;

                switch (data.type) {
                    case "ideia":
                        that.state.ideia = data.data;
                        that.setState({
                            ideia: that.state.ideia
                        });
                        break;
                    default:
                        break;
                }
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                if (!data.type) return;

                switch (data.type) {
                    case "participar":
                        this.emit(WS_EVENTS.GET, {
                            type: 'ideia',
                            _id: that.state.ideia_id
                        });
                        break;
                    case "comentar":
                        this.emit(WS_EVENTS.GET, {
                            type: 'ideia',
                            _id: that.state.ideia_id
                        });
                        break;
                    case "curtir_comentario":
                        this.emit(WS_EVENTS.GET, {
                            type: 'ideia',
                            _id: that.state.ideia_id
                        });
                        break;
                    case "descurtir_comentario":
                        this.emit(WS_EVENTS.GET, {
                            type: 'ideia',
                            _id: that.state.ideia_id
                        });
                        break;
                    default:
                        break;
                }
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    participar(e) {
        e.preventDefault();
        this.socket.emit(WS_EVENTS.POST, {
            type: 'participar',
            _id: this.state.ideia_id
        });
    }

    comentar(id = null, comentario = "") {
        this.socket.emit(WS_EVENTS.POST, {
            type: 'comentar',
            _id: this.state.ideia_id,
            comentario: comentario,
            comentario_id: id
        });
    }

    curtir_comentario(comentario_id = null) {
        this.socket.emit(WS_EVENTS.POST, {
            type: 'curtir_comentario',
            _id: this.state.ideia_id,
            user_id: this.state.user_id,
            comentario_id: comentario_id
        });
    }

    descurtir_comentario(comentario_id = null) {
        this.socket.emit(WS_EVENTS.POST, {
            type: 'descurtir_comentario',
            _id: this.state.ideia_id,
            user_id: this.state.user_id,
            comentario_id: comentario_id
        });
    }

    componentDidMount() {
        this.socket.emit(WS_EVENTS.GET, {
            type: 'ideia',
            _id: this.state.ideia_id
        });
    }

    componentDidUpdate() {
        initModules();
        let theme = 'light';
        let chartRef = document.getElementById('tester');
        let chartRef2 = document.getElementById('tester2');
        let chartRef3 = document.getElementById('tester3');
        let chartRef4 = document.getElementById('tester4');
        let chartRef5 = document.getElementById('tester5');
        let chartRef6 = document.getElementById('tester6');
        let chartRef7 = document.getElementById('tester7');
        if (!chartRef) return;
        let myChart = echarts.init(chartRef, theme);
        let myChart2 = echarts.init(chartRef2, theme);
        let myChart3 = echarts.init(chartRef3, theme);
        let myChart4 = echarts.init(chartRef4, theme);
        let myChart5 = echarts.init(chartRef5, theme);
        let myChart6 = echarts.init(chartRef6, theme);
        let myChart7 = echarts.init(chartRef7, theme);

        let toolboxOpts = {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: { show: true, title: 'Restaurar' },
                saveAsImage: { show: true, title: 'Salvar\nImagem' }
            }
            // {
            //     feature: {
            //         restore: {
            //             title: 'Reset'
            //         },
            //         saveAsImage: {
            //             title: 'Salvar\nImagem'
            //         }
            //     }
            // }

        };let option = {
            title: {
                text: 'Perfil'
            },
            tooltip: {},
            toolbox: toolboxOpts,
            legend: {
                data: ['Agentes', 'Moderadores']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                indicator: [{ name: 'Ativadores', max: 6500 }, { name: 'Facilitadores', max: 16000 }, { name: 'Executores', max: 30000 }, { name: 'Desenvolvedores', max: 38000 }, { name: 'Criadores', max: 52000 }, { name: 'Buscadores', max: 25000 }]
            },
            series: [{
                name: 'Budget vs spending',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [{
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: 'Agentes',
                    areaStyle: {}
                }, {
                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                    name: 'Moderadores',
                    areaStyle: {}
                }]
            }]
        };
        // use configuration item and data specified to show chart
        myChart.setOption(option, true);

        let option2 = {
            title: {
                text: 'Conteúdo gerado na plataforma',
                padding: "200"
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        color: 'rgba(0,0,0,0.2)',
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            toolbox: toolboxOpts,
            legend: {
                data: ['DQ', 'TY', 'SS', 'QG', 'SY', 'DD'],
                orient: 'vertical',
                right: -20,
                top: 20
            },

            singleAxis: {
                top: 50,
                bottom: 50,
                axisTick: {},
                axisLabel: {},
                type: 'time',
                axisPointer: {
                    animation: true,
                    label: {
                        show: true
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        opacity: 0.2
                    }
                }
            },

            series: [{
                type: 'themeRiver',
                itemStyle: {
                    emphasis: {
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                },
                data: [['2015/11/08', 10, 'DQ'], ['2015/11/09', 15, 'DQ'], ['2015/11/10', 35, 'DQ'], ['2015/11/11', 38, 'DQ'], ['2015/11/12', 22, 'DQ'], ['2015/11/13', 16, 'DQ'], ['2015/11/14', 7, 'DQ'], ['2015/11/15', 2, 'DQ'], ['2015/11/16', 17, 'DQ'], ['2015/11/17', 33, 'DQ'], ['2015/11/18', 40, 'DQ'], ['2015/11/19', 32, 'DQ'], ['2015/11/20', 26, 'DQ'], ['2015/11/21', 35, 'DQ'], ['2015/11/22', 40, 'DQ'], ['2015/11/23', 32, 'DQ'], ['2015/11/24', 26, 'DQ'], ['2015/11/25', 22, 'DQ'], ['2015/11/26', 16, 'DQ'], ['2015/11/27', 22, 'DQ'], ['2015/11/28', 10, 'DQ'], ['2015/11/08', 35, 'TY'], ['2015/11/09', 36, 'TY'], ['2015/11/10', 37, 'TY'], ['2015/11/11', 22, 'TY'], ['2015/11/12', 24, 'TY'], ['2015/11/13', 26, 'TY'], ['2015/11/14', 34, 'TY'], ['2015/11/15', 21, 'TY'], ['2015/11/16', 18, 'TY'], ['2015/11/17', 45, 'TY'], ['2015/11/18', 32, 'TY'], ['2015/11/19', 35, 'TY'], ['2015/11/20', 30, 'TY'], ['2015/11/21', 28, 'TY'], ['2015/11/22', 27, 'TY'], ['2015/11/23', 26, 'TY'], ['2015/11/24', 15, 'TY'], ['2015/11/25', 30, 'TY'], ['2015/11/26', 35, 'TY'], ['2015/11/27', 42, 'TY'], ['2015/11/28', 42, 'TY'], ['2015/11/08', 21, 'SS'], ['2015/11/09', 25, 'SS'], ['2015/11/10', 27, 'SS'], ['2015/11/11', 23, 'SS'], ['2015/11/12', 24, 'SS'], ['2015/11/13', 21, 'SS'], ['2015/11/14', 35, 'SS'], ['2015/11/15', 39, 'SS'], ['2015/11/16', 40, 'SS'], ['2015/11/17', 36, 'SS'], ['2015/11/18', 33, 'SS'], ['2015/11/19', 43, 'SS'], ['2015/11/20', 40, 'SS'], ['2015/11/21', 34, 'SS'], ['2015/11/22', 28, 'SS'], ['2015/11/23', 26, 'SS'], ['2015/11/24', 37, 'SS'], ['2015/11/25', 41, 'SS'], ['2015/11/26', 46, 'SS'], ['2015/11/27', 47, 'SS'], ['2015/11/28', 41, 'SS'], ['2015/11/08', 10, 'QG'], ['2015/11/09', 15, 'QG'], ['2015/11/10', 35, 'QG'], ['2015/11/11', 38, 'QG'], ['2015/11/12', 22, 'QG'], ['2015/11/13', 16, 'QG'], ['2015/11/14', 7, 'QG'], ['2015/11/15', 2, 'QG'], ['2015/11/16', 17, 'QG'], ['2015/11/17', 33, 'QG'], ['2015/11/18', 40, 'QG'], ['2015/11/19', 32, 'QG'], ['2015/11/20', 26, 'QG'], ['2015/11/21', 35, 'QG'], ['2015/11/22', 40, 'QG'], ['2015/11/23', 32, 'QG'], ['2015/11/24', 26, 'QG'], ['2015/11/25', 22, 'QG'], ['2015/11/26', 16, 'QG'], ['2015/11/27', 22, 'QG'], ['2015/11/28', 10, 'QG'], ['2015/11/08', 10, 'SY'], ['2015/11/09', 15, 'SY'], ['2015/11/10', 35, 'SY'], ['2015/11/11', 38, 'SY'], ['2015/11/12', 22, 'SY'], ['2015/11/13', 16, 'SY'], ['2015/11/14', 7, 'SY'], ['2015/11/15', 2, 'SY'], ['2015/11/16', 17, 'SY'], ['2015/11/17', 33, 'SY'], ['2015/11/18', 40, 'SY'], ['2015/11/19', 32, 'SY'], ['2015/11/20', 26, 'SY'], ['2015/11/21', 35, 'SY'], ['2015/11/22', 4, 'SY'], ['2015/11/23', 32, 'SY'], ['2015/11/24', 26, 'SY'], ['2015/11/25', 22, 'SY'], ['2015/11/26', 16, 'SY'], ['2015/11/27', 22, 'SY'], ['2015/11/28', 10, 'SY'], ['2015/11/08', 10, 'DD'], ['2015/11/09', 15, 'DD'], ['2015/11/10', 35, 'DD'], ['2015/11/11', 38, 'DD'], ['2015/11/12', 22, 'DD'], ['2015/11/13', 16, 'DD'], ['2015/11/14', 7, 'DD'], ['2015/11/15', 2, 'DD'], ['2015/11/16', 17, 'DD'], ['2015/11/17', 33, 'DD'], ['2015/11/18', 4, 'DD'], ['2015/11/19', 32, 'DD'], ['2015/11/20', 26, 'DD'], ['2015/11/21', 35, 'DD'], ['2015/11/22', 40, 'DD'], ['2015/11/23', 32, 'DD'], ['2015/11/24', 26, 'DD'], ['2015/11/25', 22, 'DD'], ['2015/11/26', 16, 'DD'], ['2015/11/27', 22, 'DD'], ['2015/11/28', 10, 'DD']]
            }]
        };
        // use configuration item and data specified to show chart
        myChart2.setOption(option2, true);

        let option3 = {
            title: {
                text: 'Ideias Avaliadas'
            },
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: toolboxOpts,
            series: [{
                name: '业务指标',
                type: 'gauge',
                detail: { formatter: '{value}%' },
                data: [{ value: 50, name: '完成率' }],
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [[0.29, '#9FE6B8'], [0.69, '#37A2DA'], [1, '#fd7b5f']],
                        width: 4,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                }
            }]
        };

        // use configuration item and data specified to show chart
        myChart3.setOption(option3, true);

        var data = [[[-5, 12, 56943299, 'Investir em inteligência de mercado', 'Ideias'], [-11, 4, 56943299, 'Documentar as atividades de cada função', 'Ideias'], [-11, 6, 56943299, 'Desenvolver um plano estratégico', 'Ideias'], [-5, 0, 56943299, 'Criar processos para gestão dos recursos humanos', 'Ideias'], [-1, 3, 56943299, 'Ampliar a pauta de conteúdo autoral no canal MOVA', 'Ideias'], [-7, 6, 56943299, 'Aumentar a relevância da marca MOVA', 'Ideias']]];

        let maxX = 17;
        let maxY = 15;
        let minX = -1 * maxX;
        let minY = -1 * maxY;

        let option4 = {
            title: {
                text: 'Matriz de Disrupção'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            toolbox: toolboxOpts,
            legend: {
                // right: 10,
                x: 'center',
                y: 'bottom',
                data: ['Ideias', 'Major Projects', 'Quick Wins', 'Fill Ins', 'Hard Slogs']
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            series: [{
                // data: [[0, 100], [10000, 100], [20000, 100], [30000, 100], [40000, 100], [50000, 100], [60000, 100]],
                data: [[0, maxY], [maxX, maxY]],
                name: 'Major Projects',
                type: 'line',
                color: 'lightsalmon',
                areaStyle: {
                    color: 'lightsalmon'
                }
            }, {
                // data: [[0, 100], [-10000, 100], [-20000, 100], [-30000, 100], [-40000, 100], [-50000, 100], [-60000, 100]],
                data: [[0, maxY], [minX, maxY]],
                name: 'Quick Wins',
                type: 'line',
                color: 'lightblue',
                areaStyle: {
                    color: 'lightblue'
                }
            }, {
                // data: [[0, -100], [-10000, -100], [-20000, -100], [-30000, -100], [-40000, -100], [-50000, -100], [-60000, -100]],
                data: [[0, minY], [minX, minY]],
                name: 'Fill Ins',
                type: 'line',
                color: 'lightyellow',
                areaStyle: {
                    color: 'lightyellow'
                }
            }, {
                // data: [[0, -100], [10000, -100], [20000, -100], [30000, -100], [40000, -100], [50000, -100], [60000, -100]],
                data: [[0, minY], [maxX, minY]],
                name: 'Hard Slogs',
                type: 'line',
                color: 'lightgreen',
                areaStyle: {
                    color: 'lightgreen'
                }
            }, {
                name: 'Ideias',
                data: data[0],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(251, 118, 123)'
                        }, {
                            offset: 1,
                            color: 'rgb(204, 46, 72)'
                        }])
                    }
                }
            }]
        };

        // use configuration item and data specified to show chart
        myChart4.setOption(option4, true);

        let option5 = {
            title: {
                text: 'Perfil das Inovações',
                subtext: 'Ideias',
                x: 'left'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: 'right',
                y: 'middle',
                orient: 'vertical',
                data: ['Produtos/Serviços', 'Processos', 'Marketing', 'Modelo de Negócios']
            },
            toolbox: toolboxOpts,
            calculable: true,
            series: [{
                name: 'Perfil das Inovações',
                type: 'pie',
                roseType: 'radius',
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}\n{c}\n{d}%'
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{ value: 426, name: 'Produtos/Serviços' }, { value: 397, name: 'Processos' }, { value: 345, name: 'Marketing' }, { value: 239, name: 'Modelo de Negócios' }]
            }]
        };

        // use configuration item and data specified to show chart
        myChart5.setOption(option5, true);

        var countries = ['Brazil', 'Canada', 'United States', 'India', 'Australia', 'China', 'Russia', 'South Africa'];

        var data6 = [{ name: 'Brazil', value: 9 }, { name: 'Canada', value: 12 }, { name: 'United States', value: 12 }, { name: 'India', value: 12 }, { name: 'Australia', value: 14 }, { name: 'China', value: 15 }, { name: 'Russia', value: 16 }, { name: 'South Africa', value: 18 }];

        var geoCoordMap = {
            'Brazil': [-47.8645, -15.7998],
            'Canada': [-106.3468, 56.1304],
            'United States': [-95.7129, 37.0902],
            'India': [78.9629, 20.5937],
            'Australia': [133.7751, -25.2744],
            'China': [116.363625, 39.913818],
            'Russia': [105.3188, 61.5240],
            'South Africa': [22.9375, -30.5595]
        };

        function convertData(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        }

        function randomValue() {
            return Math.round(Math.random() * 1000);
        }

        let option6 = {
            tooltip: {},
            toolbox: toolboxOpts,
            visualMap: {
                min: 0,
                max: 1500,
                left: 'left',
                top: 'bottom',
                text: ['High', 'Low'],
                seriesIndex: [1],
                inRange: {
                    color: ['#e0ffff', '#006edd']
                },
                calculable: true
            },
            geo: {
                map: 'world',
                roam: true,
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis: {
                        areaColor: null,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series: [{
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data6),
                symbolSize: 20,
                symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
                symbolRotate: 35,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F06C00'
                    }
                }
            }, {
                name: 'categoryA',
                type: 'map',
                geoIndex: 0,
                // tooltip: {show: false},
                data: [{ name: 'Brazil', value: randomValue() }, { name: 'Canada', value: randomValue() }, { name: 'United States', value: randomValue() }, { name: 'India', value: randomValue() }, { name: 'Australia', value: randomValue() }, { name: 'China', value: randomValue() }, { name: 'Russia', value: randomValue() }, { name: 'South Africa', value: randomValue() }]
            }]
        };

        // use configuration item and data specified to show chart
        myChart6.setOption(option6, true);

        // Generate data
        var category = [];
        var dottedBase = +new Date();
        var lineData = [];
        var barData = [];

        for (var i = 0; i < 20; i++) {
            var date = new Date(dottedBase += 3600 * 24 * 1000);
            category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));
            var b = Math.random() * 200;
            var d = Math.random() * 200;
            barData.push(b);
            lineData.push(d + b);
        }

        // option
        let option7 = {
            title: {
                text: 'Ideias Coletadas'
            },
            backgroundColor: '#fff',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['line', 'bar'],
                textStyle: {
                    color: '#ccc'
                }
            },
            xAxis: {
                data: category,
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },
            yAxis: {
                splitLine: { show: false },
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },
            series: [{
                name: 'line',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 15,
                data: lineData
            }, {
                name: 'bar',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#14c8d4' }, { offset: 1, color: '#43eec6' }])
                    }
                },
                data: barData
            }, {
                name: 'line',
                type: 'bar',
                barGap: '-100%',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(20,200,212,0.5)' }, { offset: 0.2, color: 'rgba(20,200,212,0.2)' }, { offset: 1, color: 'rgba(20,200,212,0)' }])
                    }
                },
                z: -12,
                data: lineData
            }, {
                name: 'dotted',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {
                    normal: {
                        color: '#fff'
                    }
                },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                z: -10,
                data: lineData
            }]
        };

        // use configuration item and data specified to show chart
        myChart7.setOption(option7, true);

        if (charts) {
            charts.push(myChart);
            charts.push(myChart2);
            charts.push(myChart3);
            charts.push(myChart4);
            charts.push(myChart5);
            charts.push(myChart6);
            charts.push(myChart7);
        }
    }

    render() {
        let ideia = this.state.ideia;
        let user_id = this.state.user_id;
        let user = this.state.user;

        if (!ideia) {
            return React.createElement('div', null);
        }

        let _tags = ideia.tags ? ideia.tags.map(function (tag) {
            return React.createElement(
                'p',
                {
                    key: tag,
                    className: 'chip' },
                tag
            );
        }) : null;

        return React.createElement(
            'div',
            null,
            React.createElement(IdeiaCover, { ideia: this.state.ideia }),
            React.createElement(
                'div',
                { className: 'plataforma-summary m-auto' },
                React.createElement(
                    'div',
                    { style: {
                            "textAlign": "center",
                            "width": "100%",
                            "color": "black",
                            "fontWeight": "bold"
                        } },
                    'Resumo'
                ),
                React.createElement(
                    'div',
                    { className: 'ideia-resumo' },
                    React.createElement('p', { dangerouslySetInnerHTML: { "__html": ideia.resumo } })
                ),
                React.createElement(
                    'div',
                    { className: 'ideia-tags' },
                    _tags
                ),
                React.createElement(
                    'div',
                    { className: 'ideia-status ml-auto' },
                    React.createElement(IdeiaIconStatus, { status: ideia.status })
                ),
                React.createElement(
                    'div',
                    { className: 'ideia-actions ml-auto' },
                    ideia.autor._id == user_id ? React.createElement(
                        'div',
                        { className: 'ideia-action' },
                        React.createElement(
                            'button',
                            { className: 'btn btn-danger btn-block', 'data-module': 'button', 'data-url': `/ideias/editar/${ideia._id}` },
                            'Editar'
                        )
                    ) : !ideia.usuarioParticipa ? React.createElement(
                        'div',
                        { className: 'ideia-action' },
                        React.createElement(
                            'button',
                            { className: 'btn btn-danger btn-block', onClick: this.participar },
                            'Participar'
                        )
                    ) : null
                )
            ),
            React.createElement(
                'nav',
                { id: '', className: 'navbar navbar-expand-lg navbar-light bg-white second-navbar' },
                React.createElement(
                    'button',
                    { className: 'navbar-toggler navbar-toggler-fullwidth', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNavDropdownPlataformaDetails', 'aria-controls': 'navbarNavDropdownPlataformaDetails', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
                    React.createElement('span', { className: 'navbar-toggler-icon' })
                ),
                React.createElement(
                    'div',
                    { className: 'collapse navbar-collapse', id: 'navbarNavDropdownPlataformaDetails' },
                    React.createElement(
                        'ul',
                        { className: 'navbar-nav nav nav-tabs d-flex justify-content-center', id: 'plataforma-tabs' },
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border active', id: 'nav-descricao-tab', 'data-toggle': 'tab', href: '#nav-descricao', role: 'tab', 'aria-controls': 'nav-descricao', 'aria-selected': 'true' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Descri\xE7\xE3o'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-anexos-tab', 'data-toggle': 'tab', href: '#nav-anexos', role: 'tab', 'aria-controls': 'nav-anexos', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Anexos'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-value-proposition-tab', 'data-toggle': 'tab', href: '#nav-value-proposition', role: 'tab', 'aria-controls': 'nav-value-proposition', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Proposta de Valor'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-kpis-tab', 'data-toggle': 'tab', href: '#nav-kpis', role: 'tab', 'aria-controls': 'nav-kpis', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link', href: '#' },
                                'KPIs'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-raw-tab', 'data-toggle': 'tab', href: '#nav-raw', role: 'tab', 'aria-controls': 'nav-raw', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link', href: '#' },
                                'Raw'
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { id: 'content', className: `m-auto ${!ideia.usuarioParticipa ? '!blur' : ''}` },
                React.createElement(
                    'div',
                    { className: 'ideia-page' },
                    React.createElement(
                        'div',
                        { className: 'tab-content', id: 'nav-tabContent' },
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade show active', id: 'nav-descricao', role: 'tabpanel', 'aria-labelledby': 'nav-descricao-tab' },
                            React.createElement('div', { dangerouslySetInnerHTML: { "__html": ideia.descricao } }),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'p',
                                    { className: 'text-subheader' },
                                    React.createElement(FaIcon, { icon: 'avaliacoes' }),
                                    ' ',
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Avalia\xE7\xF5es'
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'p',
                                    { className: 'text-subheader' },
                                    React.createElement(FaIcon, { icon: 'medalha' }),
                                    ' ',
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Medalhas'
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'p',
                                    { className: 'text-subheader' },
                                    React.createElement(FaIcon, { icon: 'sponsor' }),
                                    ' ',
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Sponsors'
                                    )
                                )
                            ),
                            React.createElement(SponsorBoxShow, { plataforma_id: ideia._id, sponsors: ideia.sponsors }),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'p',
                                    { className: 'text-subheader' },
                                    React.createElement(FaIcon, { icon: 'conexoes' }),
                                    ' ',
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Conex\xF5es'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-anexos', role: 'tabpanel', 'aria-labelledby': 'nav-anexos-tab' },
                            React.createElement('div', { className: 'content m-auto' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-value-proposition', role: 'tabpanel', 'aria-labelledby': 'nav-value-proposition-tab' },
                            React.createElement(
                                'div',
                                { className: 'content m-auto' },
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-8' },
                                        React.createElement(
                                            'div',
                                            { className: 'card value-proposition value-proposition-customer-jobs' },
                                            React.createElement('div', { className: 'value-proposition-content', dangerouslySetInnerHTML: { "__html": ideia.value_proposition_customer_jobs } })
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'tip-box' },
                                            React.createElement(
                                                'div',
                                                { className: 'header' },
                                                'Tip'
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'body' },
                                                React.createElement(
                                                    'p',
                                                    null,
                                                    'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-8' },
                                        React.createElement(
                                            'div',
                                            { className: 'card value-proposition value-proposition-pains' },
                                            React.createElement('div', { className: 'value-proposition-content', dangerouslySetInnerHTML: { "__html": ideia.value_proposition_pains } })
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'tip-box' },
                                            React.createElement(
                                                'div',
                                                { className: 'header' },
                                                'Tip'
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'body' },
                                                React.createElement(
                                                    'p',
                                                    null,
                                                    'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-8' },
                                        React.createElement(
                                            'div',
                                            { className: 'card value-proposition value-proposition-gains' },
                                            React.createElement('div', { className: 'value-proposition-content', dangerouslySetInnerHTML: { "__html": ideia.value_proposition_gains } })
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'tip-box' },
                                            React.createElement(
                                                'div',
                                                { className: 'header' },
                                                'Tip'
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'body' },
                                                React.createElement(
                                                    'p',
                                                    null,
                                                    'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-8' },
                                        React.createElement(
                                            'div',
                                            { className: 'card value-proposition value-proposition-products-and-services' },
                                            React.createElement('div', { className: 'value-proposition-content', dangerouslySetInnerHTML: { "__html": ideia.value_proposition_products_and_services } })
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'tip-box' },
                                            React.createElement(
                                                'div',
                                                { className: 'header' },
                                                'Tip'
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'body' },
                                                React.createElement(
                                                    'p',
                                                    null,
                                                    'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-8' },
                                        React.createElement(
                                            'div',
                                            { className: 'card value-proposition value-proposition-pains-relievers' },
                                            React.createElement('div', { className: 'value-proposition-content', dangerouslySetInnerHTML: { "__html": ideia.value_proposition_pains_relievers } })
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'tip-box' },
                                            React.createElement(
                                                'div',
                                                { className: 'header' },
                                                'Tip'
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'body' },
                                                React.createElement(
                                                    'p',
                                                    null,
                                                    'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-8' },
                                        React.createElement(
                                            'div',
                                            { className: 'card value-proposition value-proposition-gains-creators' },
                                            React.createElement('div', { className: 'value-proposition-content', dangerouslySetInnerHTML: { "__html": ideia.value_proposition_gains_creators } })
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'tip-box' },
                                            React.createElement(
                                                'div',
                                                { className: 'header' },
                                                'Tip'
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'body' },
                                                React.createElement(
                                                    'p',
                                                    null,
                                                    'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-kpis', role: 'tabpanel', 'aria-labelledby': 'nav-kpis-tab' },
                            React.createElement(
                                'div',
                                { className: 'content m-auto' },
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-400', style: { width: "790px" }, id: 'tester' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-400', style: { width: "790px" }, id: 'tester2' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-400', style: { width: "790px" }, id: 'tester3' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-500', style: { width: "790px" }, id: 'tester4' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-500', style: { width: "790px" }, id: 'tester5' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-500', style: { width: "790px" }, id: 'tester6' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-500', style: { width: "790px" }, id: 'tester7' })
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-raw', role: 'tabpanel', 'aria-labelledby': 'nav-raw-tab' },
                            React.createElement(
                                'pre',
                                null,
                                JSON.stringify(ideia, undefined, 4)
                            )
                        )
                    )
                )
            ),
            ideia.usuarioParticipa || true ? React.createElement(
                'nav',
                { id: '', className: 'navbar navbar-expand-lg navbar-light bg-white second-navbar' },
                React.createElement(
                    'button',
                    { className: 'navbar-toggler navbar-toggler-fullwidth', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNavDropdownPlataformaRelated', 'aria-controls': 'navbarNavDropdownPlataformaRelated', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
                    React.createElement('span', { className: 'navbar-toggler-icon' })
                ),
                React.createElement(
                    'div',
                    { className: 'collapse navbar-collapse', id: 'navbarNavDropdownPlataformaRelated' },
                    React.createElement(
                        'ul',
                        { className: 'navbar-nav nav nav-tabs d-flex', id: 'plataforma-tabs' },
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border show active', id: 'nav-investimentos-tab', 'data-toggle': 'tab', href: '#nav-investimentos', role: 'tab', 'aria-controls': 'nav-investimentos', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Investimentos'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-comentarios-tab', 'data-toggle': 'tab', href: '#nav-comentarios', role: 'tab', 'aria-controls': 'nav-comentarios', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Coment\xE1rios'
                            )
                        )
                    )
                )
            ) : null,
            ideia.usuarioParticipa || true ? React.createElement(
                'div',
                { className: `content m-auto` },
                React.createElement(
                    'div',
                    { className: 'plataforma-page-lower' },
                    React.createElement(
                        'div',
                        { className: 'tab-content', id: 'nav-tabContent' },
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade show active', id: 'nav-investimentos', role: 'tabpanel', 'aria-labelledby': 'nav-investimentos-tab' },
                            React.createElement(
                                'div',
                                { className: 'tile-grid' },
                                'Investimentos'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-comentarios', role: 'tabpanel', 'aria-labelledby': 'nav-comentarios-tab' },
                            React.createElement(
                                'div',
                                { className: 'plataforma-page' },
                                React.createElement(
                                    'div',
                                    { className: 'container' },
                                    React.createElement(
                                        'div',
                                        { className: 'row' },
                                        React.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            React.createElement(
                                                'section',
                                                { className: 'comment-list' },
                                                ideia.usuarioParticipa || true ? React.createElement(Comentarios, { comentarios: ideia.comentarios, user: user, comentar: this.comentar, curtir_comentario: this.curtir_comentario, descurtir_comentario: this.descurtir_comentario }) : null
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ) : null,
            React.createElement(ModalCoautores, null)
        );
    }
}
import React from 'react';
import FaIcon from './react_faicon';
import { h } from '../main';
import TileBoxAutor from './react_tile_box_autor';
import TileBoxCoautores from './react_tile_box_coautores';
import IdeiaIconStatus from './react_ideia_icon_status';

export default class InovacaoBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.inovacao = props.inovacao;
    }

    render() {
        let inovacao = this.state.inovacao;

        let progress = parseInt(Math.floor(Math.random() * 100));

        return React.createElement(
            'a',
            {
                key: inovacao._id,
                clickable: '',
                className: 'tile tile-portfolio',
                href: `/inovacoes/${inovacao._id}`
            },
            React.createElement(
                'div',
                { className: 'tile-photo-container hovereffect' },
                this.state.inovacao.sponsors && this.state.inovacao.sponsors.length > 0 ? React.createElement(
                    'div',
                    { className: 'ribbon ribbon-top-right' },
                    React.createElement(
                        'span',
                        null,
                        React.createElement(FaIcon, { icon: 'sponsor' })
                    )
                ) : null,
                React.createElement('img', { className: 'tile-photo', src: inovacao.cover }),
                React.createElement(
                    'div',
                    { className: 'overlay' },
                    React.createElement(
                        'a',
                        { className: 'tile-ideia-progressbar', href: 'javascript:void(0)' },
                        React.createElement(
                            'div',
                            { className: 'progress', style: { "height": "4px" } },
                            React.createElement('div', { className: `progress-bar ${progress > 75 ? 'bg-success' : progress > 25 ? 'bg-warning' : 'bg-danger'}`, role: 'progressbar', style: { "width": `${progress}%` }, 'aria-valuenow': progress, 'aria-valuemin': '0', 'aria-valuemax': '100' })
                        ),
                        React.createElement(
                            'span',
                            { className: 'white', style: { "marginTop": "4px" } },
                            progress,
                            '/100'
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'tile-ideia-timer', href: 'javascript:void(0)' },
                        React.createElement(
                            'div',
                            { className: 'circle-border' },
                            React.createElement(FaIcon, { icon: 'portfolio' })
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'tile-ideia-alvo', href: 'javascript:void(0)' },
                        React.createElement(
                            'div',
                            { className: 'circle-border' },
                            React.createElement(FaIcon, { icon: 'plataforma' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'info' },
                        React.createElement(
                            'a',
                            { className: 'info tile-ideia-smiles', href: 'javascript:void(0)', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Votos' },
                            React.createElement('i', { className: 'fa fa-smile' }),
                            React.createElement(
                                'div',
                                null,
                                h.getRandomInt(100, 1000)
                            )
                        ),
                        React.createElement(
                            'a',
                            { className: 'info tile-ideia-gem', href: 'javascript:void(0)', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Cr\xE9ditos' },
                            React.createElement(FaIcon, { icon: 'credito' }),
                            React.createElement(
                                'div',
                                null,
                                h.getRandomInt(100, 1000)
                            )
                        ),
                        React.createElement(
                            'a',
                            { className: 'info tile-ideia-medalhas', href: 'javascript:void(0)', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Medalhas' },
                            React.createElement(FaIcon, { icon: 'medalha' }),
                            React.createElement(
                                'div',
                                null,
                                h.getRandomInt(100, 1000)
                            )
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'tile-ideia-flag', href: 'javascript:void(0)', 'data-id': inovacao._id, 'data-objeto': 'inovacao', 'data-toggle': 'modal', 'data-target': '#modal_denunciar' },
                        React.createElement(
                            'div',
                            { className: 'circle-border', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Denunciar' },
                            React.createElement(FaIcon, { icon: 'fa-flag', className: 'pt-1' })
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'tile-ideia-pin', href: 'javascript:void(0)', 'data-toggle': 'modal', 'data-target': '#modal_salvar_favorito' },
                        React.createElement(
                            'div',
                            { className: 'circle-border', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Salvar' },
                            React.createElement(FaIcon, { icon: 'fa-thumbtack', className: 'pt-1' })
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'tile-ideia-share', href: 'javascript:void(0)', 'data-toggle': 'modal', 'data-target': '#modal_compartilhar' },
                        React.createElement(
                            'div',
                            { className: 'circle-border', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Compartilhar' },
                            React.createElement(FaIcon, { icon: 'fa-share-alt', className: 'pt-1' })
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'tile-info' },
                React.createElement(
                    'div',
                    { className: 'tile-body' },
                    React.createElement(
                        'div',
                        { className: 'tile-title text-subheader' },
                        React.createElement(FaIcon, { icon: 'inovacao' }),
                        ` ${inovacao.nome}`
                    ),
                    React.createElement(
                        'div',
                        { className: 'tile-author-date d-flex align-items-center mt-20px' },
                        React.createElement(TileBoxAutor, { autor: inovacao.autor }),
                        React.createElement(
                            'div',
                            { className: 'tile-date ml-auto' },
                            h.short_date(inovacao.data)
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'd-flex align-items-center mt-20px' },
                        React.createElement(TileBoxCoautores, { coautores: inovacao.coautores }),
                        React.createElement(
                            'div',
                            { className: 'tile-status ml-auto' },
                            React.createElement(IdeiaIconStatus, { status: inovacao.status })
                        )
                    )
                )
            ),
            React.createElement('div', { className: 'tile-footer mt-2' })
        );
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import LoadingTiles from './react_loading_tiles';
import FiltersNavbar from './react_filters_navbar';
import { setModuleTooltip, setModuleButton, setModulePopoverHover } from '../utils/ModulesUtils';
import TransparentTiles from './react_transparent_tiles';
import InovacaoBox from './react_inovacao_box';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class InovacoesList extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.inovacoes = props.inovacoes || this.state.inovacoes;
        this.state._loading = function () {
            return React.createElement(LoadingTiles, null);
        }();

        this.list = React.createRef();

        this.updateList = this.updateList.bind(this);
        this.loadMore = this.loadMore.bind(this);

        this.socket = io.connect(WS_NAMESPACES.INOVACOES);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketInovacoes client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (data.error) {
                    alert(data.message);
                    return;
                }
                that.state.inovacoes.push(...data.data);
                that.setState({
                    loading: false,
                    inovacoes: that.state.inovacoes,
                    noMore: data.data.length < 1
                });
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    updateList(filter) {
        // Reinicia carregamento com novo filtro
        this.setState({
            loading: true,
            inovacoes: []
        });
        let data = {
            type: 'inovacoes',
            filter: filter ? filter : window.$('#filterNavbar #listFilters .list-filters .nav-item.active').data('filter')
        };
        this.socket.emit(WS_EVENTS.GET, data);
    }

    loadMore(e) {
        // Adiciona na lista mais itens do mesmo filtro
        e.preventDefault();
        let that = this;
        let _ids = this.state.inovacoes.map(_obj => _obj._id);
        this.socket.emit(WS_EVENTS.GET, {
            type: 'inovacoes',
            filter: that.state.filter ? that.state.filter : window.$('#filterNavbar #listFilters .list-filters .nav-item.active').data('filter'),
            _ids: _ids
        });
    }

    componentDidMount() {
        let that = this;
        this.updateList();
        let _doc = document.querySelector('#template_second_navbar');
        let _template_second_navbar = _doc ? ReactDOM.render(React.createElement(FiltersNavbar, { text_meus_objetos: "Minhas Inovações", with_dropdown_portfolios: false, with_dropdown_plataformas: false }), _doc) : {};
    }

    componentDidUpdate() {
        let that = this;
        window.$('#filterNavbar #listFilters .list-filters .nav-item').unbind('click').bind('click', function () {
            let $this = window.$(this);
            $this.closest('ul').find('li').removeClass('active');
            $this.addClass('active');
            that.state.filter = $this.data('filter');
            that.updateList(that.state.filter);
        });
        let tooltips = window.$(this.list.current).find('[data-toggle="tooltip"]').toArray();
        let buttons = window.$(this.list.current).find('[data-module="button"]').toArray();
        let popoverHover = window.$(this.list.current).find('[data-module="popover-hover"]').toArray();
        setModuleTooltip(tooltips.length > 0 ? tooltips : undefined);
        setModuleButton(buttons.length > 0 ? buttons : undefined);
        setModulePopoverHover(popoverHover.length > 0 ? popoverHover : undefined);
    }

    getInitialState() {
        return {
            inovacoes: [],
            noMore: false
        };
    }

    render() {

        var _transparents = React.createElement(TransparentTiles, { length: this.state.inovacoes.length });

        var _inovacoes = this.state.inovacoes.length < 1 ? function () {
            return React.createElement(
                'p',
                null,
                'Nenhuma inova\xE7\xE3o!'
            );
        }() : this.state.inovacoes.map(function (inovacao) {
            return React.createElement(InovacaoBox, { key: inovacao._id, inovacao: inovacao });
        });

        return React.createElement(
            'div',
            { ref: this.list },
            React.createElement(
                'div',
                { className: 'tile-grid' },
                this.state.loading ? this.state._loading : _inovacoes,
                this.state.loading ? void 0 : _transparents
            ),
            React.createElement(
                'div',
                { className: 'd-flex justify-content-center align-items-center flex-wrap' },
                this.state.noMore && this.state.inovacoes && this.state.inovacoes.length > 0 ? React.createElement(
                    'p',
                    null,
                    'Por enquanto, todas as inovacoes foram carregadas'
                ) : React.createElement(
                    'p',
                    null,
                    '\xA0'
                )
            ),
            React.createElement(
                'div',
                { className: 'd-flex justify-content-center align-items-center flex-wrap mb-5' },
                React.createElement(
                    'button',
                    { className: 'btn btn-outline-info', onClick: this.loadMore },
                    'Carregar mais'
                )
            )
        );
    }
}
import React from 'react';

export default class Input extends React.Component {
    constructor(props) {
        super(props);

        // Methods
        this.getInitialState = this.getInitialState.bind(this);

        // Initial State
        this.state = this.getInitialState();

        // State from props
        this.state.id = props.id ? lodash.uniqueId(props.id) : props.name && props.value ? lodash.uniqueId(`${props.name}_${props.value}`) : lodash.uniqueId();
        this.state.attributes = props.attributes || "";
        this.state.className = props.className || "";
        this.state.name = props.name || "";
        this.state.required = props.required || "";
        this.state.text = props.text || "";
        this.state.value = props.value || "";
        this.onChange = props.onChange;

        // Refs
        this.input = React.createRef();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            attributes: nextProps.attributes,
            className: nextProps.className,
            id: nextProps.id,
            name: nextProps.name,
            required: nextProps.required,
            text: nextProps.text,
            value: nextProps.value
        };
    }

    getInitialState() {
        return {
            id: "",
            attributes: "",
            className: "",
            name: "",
            required: "",
            text: "",
            value: ""
        };
    }
}
import React from 'react';
import Input from './react_input';
import { debounce } from '../main';

export default class InputHidden extends Input {
    constructor(props) {
        super(props);

        this.onChange = props.onChange;
    }

    componentDidUpdate() {
        log('InputHidden did update');
    }

    componentDidMount() {
        let that = this;

        window.$(this.input.current).unbind('change').bind('change', debounce(function (event) {
            log('InputHidden onChange');
            if (that.onChange) that.onChange(event);
        }, 100));
    }

    render() {
        return React.createElement('input', {
            ref: this.input,
            type: 'hidden',
            id: this.state.id,
            name: this.state.name,
            value: this.state.value,
            onChange: this.onChange });
    }
}
import React from 'react';
import Input from './react_input';

export default class InputIdeiaTitulo extends Input {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            {
                className: `form-group bmd-form-group ${this.state.value ? `is-filled` : ''}`,
                'data-toggle': 'tooltip',
                'data-placement': 'right',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, inventore temporibus voluptates voluptate, dolores minima optio explicabo corporis reprehenderit non, suscipit sit perspiciatis? Magnam doloremque officiis, animi reiciendis nemo necessitatibus!' },
            React.createElement(
                'label',
                {
                    htmlFor: `titulo-${this.state.id}`,
                    className: 'bmd-label-floating' },
                'T\xEDtulo da Ideia'
            ),
            React.createElement('input', { type: 'text',
                className: `form-control ${this.state.className}`,
                name: 'nome',
                minLength: '5',
                maxLength: '100',
                id: `titulo-${this.state.id}`,
                'data-char-count': 'true',
                'data-char-count-limit': '10',
                'data-char-count-selector': `#remainingCharacters-${this.state.id}`,
                required: this.state.required,
                value: this.state.value,
                onChange: this.onChange }),
            React.createElement('span', {
                className: 'bmd-help bmd-help-w100 text-right',
                id: `remainingCharacters-${this.state.id}` })
        );
    }
}
import React from 'react';
import InputRedactor from './react_input_redactor';

export default class InputPlataformaDescricao extends InputRedactor {
    constructor(props) {
        super(props);

        this.onChange = props.onChange;
    }

    render() {
        return React.createElement(
            'div',
            { className: 'form-group', 'data-toggle': 'tooltip', 'data-placement': 'right', title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, inventore temporibus voluptates voluptate, dolores minima optio explicabo corporis reprehenderit non, suscipit sit perspiciatis? Magnam doloremque officiis, animi reiciendis nemo necessitatibus!' },
            React.createElement(
                'label',
                { htmlFor: 'descricao', className: 'bmd-label-static' },
                'Descri\xE7\xE3o'
            ),
            React.createElement('textarea', {
                className: 'form-control',
                id: this.state.id, rows: '5', name: 'descricao',
                ref: this.input,
                'data-reload': 'true',
                required: this.state.required,
                value: this.state.value,
                onChange: this.onChange }),
            React.createElement(
                'span',
                { className: 'bmd-help' },
                'Descri\xE7\xE3o'
            )
        );
    }
}
import React from 'react';
import InputRedactor from "./react_input_redactor";

export default class InputPlataformaResumo extends InputRedactor {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            "div",
            { className: "form-group",
                "data-toggle": "tooltip",
                "data-placement": "right",
                title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, inventore temporibus voluptates voluptate, dolores minima optio explicabo corporis reprehenderit non, suscipit sit perspiciatis? Magnam doloremque officiis, animi reiciendis nemo necessitatibus!" },
            React.createElement(
                "label",
                { htmlFor: "resumo", className: "bmd-label-static" },
                "Resumo"
            ),
            React.createElement("textarea", { className: "form-control", id: this.state.id, rows: "5", name: "resumo",
                ref: this.input,
                "data-reload": "true",
                "data-restricted": "link,file,image,video,table",
                required: this.state.required,
                value: this.state.value,
                onChange: this.onChange })
        );
    }
}
import React from 'react';
import Input from './react_input';
import { setModuleChips } from '../utils/ModulesUtils';
import { debounce } from '../main';

export class InputPlataformaTags extends Input {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        console.log('tags didUpdate');
    }

    componentDidMount() {
        console.log('tags didMount');
        let that = this;
        if (!this.input.current) return;

        // var $el = window.$(this.input.current);
        // setModuleChips(this.input.current);

        // $el.find('.inputs').unbind('DOMNodeInserted DOMSubtreeModified DOMNodeRemoved').bind('DOMNodeInserted DOMSubtreeModified DOMNodeRemoved', debounce(function (event) {
        //     event.preventDefault();
        //     event.stopPropagation();
        //     console.log('DOMSUBTREEMODIFIED');
        //     if (that.onChange) that.onChange(event);
        // }, 500));
    }

    render() {

        // let _initial_tags = this.state.value.map(function(tag, index){
        //     return(
        //         <input key={ index } type="hidden" id="tags" name="tags" value={ tag }/>
        //     )
        // })

        let _initial_tags = [];

        if (Array.isArray(this.state.value)) {
            _initial_tags = this.state.value;
        } else {
            _initial_tags.push(this.state.value);
        }

        return React.createElement(
            'div',
            {
                className: 'form-group bmd-form-group is-filled',
                'data-toggle': 'tooltip',
                'data-placement': 'right',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, inventore temporibus voluptates voluptate, dolores minima optio explicabo corporis reprehenderit non, suscipit sit perspiciatis? Magnam doloremque officiis, animi reiciendis nemo necessitatibus!' },
            React.createElement(
                'label',
                { htmlFor: 'tags', className: 'bmd-label-static' },
                'Tags'
            ),
            React.createElement(
                'div',
                {
                    ref: this.input,
                    className: 'form-control chips-autocomplete',
                    required: this.state.required,
                    'data-initial-tags': JSON.stringify(_initial_tags)
                },
                React.createElement('div', { className: 'inputs' })
            ),
            React.createElement(
                'span',
                { className: 'bmd-help' },
                'Tags'
            )
        );
    }
}
import React from 'react';
import Input from './react_input';

export class InputPlataformaTitulo extends Input {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            {
                className: `form-group bmd-form-group ${this.state.value ? `is-filled` : ''}`,
                'data-toggle': 'tooltip',
                'data-placement': 'right',
                title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, inventore temporibus voluptates voluptate, dolores minima optio explicabo corporis reprehenderit non, suscipit sit perspiciatis? Magnam doloremque officiis, animi reiciendis nemo necessitatibus!' },
            React.createElement(
                'label',
                {
                    htmlFor: `titulo-${this.state.id}`,
                    className: 'bmd-label-floating' },
                'T\xEDtulo da Plataforma'
            ),
            React.createElement('input', { type: 'text',
                className: `form-control ${this.state.className}`,
                name: 'nome',
                minLength: '5',
                maxLength: '100',
                id: `titulo-${this.state.id}`,
                'data-char-count': 'true',
                'data-char-count-limit': '10',
                'data-char-count-selector': `#remainingCharacters-${this.state.id}`,
                required: this.state.required,
                value: this.state.value,
                onChange: this.onChange }),
            React.createElement('span', {
                className: 'bmd-help bmd-help-w100 text-right',
                id: `remainingCharacters-${this.state.id}` })
        );
    }
}
import React from 'react';
import InputRedactor from './react_input_redactor';

export default class InputPlataformaValueProposition extends InputRedactor {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement('textarea', {
            type: 'text',
            className: 'form-control',
            id: this.state.id,
            name: this.state.name,
            ref: this.input,
            'data-restricted': 'link,file,image',
            'data-reload': 'true',
            value: this.state.value,
            onChange: this.onChange });
    }
}
import React from 'react';
import Input from './react_input';
import { debounce } from '../main';

export default class InputRedactor extends Input {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let that = this;
        if (!this.input.current) return;

        var options = ['bold', 'italic', 'unorderedlist', 'orderedlist', 'formatting', 'link', 'file', 'image'];
        var options = ['html', 'formatting', 'bold', 'italic', 'deleted', 'underline', 'unorderedlist', 'orderedlist', 'outdent', 'indent', 'image', 'video', 'file', 'table', 'link', 'text', 'fontcolor', 'backcolor', 'alignment', 'alignleft', 'aligncenter', 'alignright', 'justify', 'horizontalrule'];
        var airButtons = ['formatting', 'bold', 'italic', 'deleted', 'unorderedlist', 'orderedlist', 'outdent', 'indent', 'fontcolor', 'backcolor'];

        var $el = window.$(this.input.current);

        var restricted_options = $el.data("restricted");

        if (restricted_options) {
            restricted_options = restricted_options.split(",");
            options = $.grep(options, function (val, i) {
                return $.inArray(val, restricted_options) == -1;
            });
        }

        $el.redactor({
            // air: true,
            // airButtons: airButtons,
            fixed: true,
            fixedBox: true,
            buttons: options,
            formatting: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            cleanup: false,
            imageUpload: '/media/upload',
            placeholder: $el.attr("placeholder"),
            // plugins: ['limiter','fontFamily'],
            limiter: 100,
            fontFamily: {
                defaultFont: 'Georgia',
                fonts: {
                    'Arial': 'Arial, Helvetica, sans-serif',
                    'Comic Sans MS': "'Comic Sans MS', cursive, sans-serif",
                    'Georgia': 'Georgia, serif',
                    'Times New Roman': "'Times New Roman', Times, serif"
                }
            }
        });
        $el.parent().find('.redactor_editor').unbind('DOMNodeInserted DOMSubtreeModified DOMNodeRemoved').bind('DOMNodeInserted DOMSubtreeModified DOMNodeRemoved', debounce(function (event) {
            if (that.onChange) that.onChange(event);
        }, 1000));
    }
}
import React from 'react';
import Input from './react_input';

export default class InputText extends Input {
    constructor(props) {
        super(props);

        this.state.label = props.label;
        this.state.helpLabel = props.helpLabel;
    }

    render() {
        return React.createElement(
            'div',
            {
                className: `form-group bmd-form-group ${this.state.value ? `is-filled` : ''}`
            },
            this.state.label ? React.createElement(
                'label',
                {
                    htmlFor: this.state.id,
                    className: 'bmd-label-floating' },
                this.state.label
            ) : null,
            React.createElement('input', {
                type: 'text',
                className: `form-control ${this.state.className}`,
                name: this.state.name,
                minLength: this.state.minLength,
                maxLength: this.state.maxLength,
                id: this.state.id,
                'data-char-count': this.state.isCharCount,
                'data-char-count-limit': this.state.charCountLimit,
                'data-char-count-selector': this.state.charCountSelector,
                required: this.state.required,
                value: this.state.value,
                onChange: this.onChange }),
            this.state.helpLabel ? React.createElement(
                'span',
                {
                    className: 'bmd-help bmd-help-w100 text-right',
                    id: `remainingCharacters-${this.state.id}` },
                this.state.helpLabel
            ) : null
        );
    }
}
import React from 'react';
import InputRedactor from './react_input_redactor';

export default class InputTextareaSobre extends InputRedactor {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement('textarea', {
            type: 'text',
            className: 'form-control',
            id: this.state.id,
            name: this.state.name,
            ref: this.input,
            'data-restricted': 'link,file,image',
            'data-reload': 'true',
            value: this.state.value,
            onChange: this.onChange });
    }
}
import React from 'react';

export default class LoadingTiles extends React.Component {
    render() {

        var color = "#f5f5f5";
        var _tiles = [1, 2, 3, 4].map(function (el) {
            return React.createElement(
                "div",
                { key: el, className: "tile shadow-none" },
                React.createElement(
                    "div",
                    { className: "tile-photo-container hovereffect tile-photo-container-loading" },
                    React.createElement("img", { className: "tile-photo", src: "" })
                ),
                React.createElement(
                    "div",
                    { className: "tile-info" },
                    React.createElement(
                        "div",
                        { className: "tile-title", style: { "backgroundColor": color } },
                        React.createElement(
                            "p",
                            null,
                            "\xA0"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "tile-footer mt-2" },
                    React.createElement(
                        "button",
                        { className: "btn btn-lg btn-block mb-0", style: { "backgroundColor": color } },
                        "\xA0"
                    )
                )
            );
        });
        return React.createElement(
            "div",
            { className: "d-flex justify-content-between flex-wrap", style: { "width": "100%" } },
            _tiles
        );
    }
}
import React from 'react';
import MedalhaMiniCard from './react_medalha_minicard';
import Slider from './react_slider';
import { comparaPorNome } from '../main';

export default class MedalhaBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            plataforma_id: props.plataforma_id ? props.plataforma_id : "",
            medalhas: props.medalhas ? props.medalhas : []
        };

        this.getInitialState = this.getInitialState.bind(this);

        this.socket = io.connect('/medalhas');
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketMedalhas client connected ');
            this.emit('join', that.room);

            this.on('nova_medalha', function (data) {
                that.state.medalhas.push(data);
                that.setState({
                    medalhas: that.state.medalhas
                });
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    getInitialState() {
        return [];
    }

    render() {

        var _boxes = [];

        this.state.medalhas.sort(comparaPorNome).map(function (medalha) {
            _boxes.push(React.createElement(MedalhaMiniCard, { medalha: medalha }));
        }, this);

        _boxes.push(function () {
            return React.createElement(
                'div',
                {
                    key: _boxes.length + 1,
                    'data-slide': 'true',
                    className: 'popover-card d-inline-block popover-author mr-2 mb-2 d-flex justify-content-around align-items-center align-content-center flex-column',
                    'data-toggle': 'modal',
                    'data-target': '#modal_nova_medalha',
                    clickable: '' },
                React.createElement(
                    'h3',
                    { className: 'senno-popover-header', style: { "borderBottom": "none" } },
                    React.createElement(
                        'div',
                        { className: 'circle-border circle-border-black w-5em_i h-5em_i' },
                        React.createElement('i', { className: 'fa fa-plus' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'senno-popover-body text-center' },
                    'NOVA',
                    React.createElement('br', null),
                    'MEDALHA'
                )
            );
        }());

        return React.createElement(
            'div',
            null,
            React.createElement(Slider, { boxes: _boxes, goToLastSlideOnUpdate: 'true' })
        );
    }
}
import React from 'react';
import MedalhaMiniCard from './react_medalha_minicard';
import Slider from './react_slider';
import ModalShowMedalha from './react_modal_show_medalha';

export default class MedalhaBoxShow extends React.Component {
    constructor(props) {
        super(props);

        this.modal = React.createRef();
        this.showModal = this.showModal.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
        this.renderBoxes = this.renderBoxes.bind(this);

        this.state = {
            plataforma_id: props.plataforma_id ? props.plataforma_id : "",
            medalhas: props.medalhas ? props.medalhas : [],
            selected_id: null
        };

        this.state._boxes = this.renderBoxes();
    }

    getInitialState() {
        return [];
    }

    showModal(e) {
        let $this = window.$(e.currentTarget);
        this.setState({
            selected_id: $this.data('id')
        });
    }

    componentDidUpdate() {
        if (!this.modal.current || !this.state.selected_id) {
            return;
        }
        let that = this;
        let $modal = window.$(this.modal.current.modal.current);
        $modal.unbind('hidden.bs.modal').on('hidden.bs.modal', function () {
            console.log('modal hidden');
            that.setState({
                selected_id: null
            });
        });
        $modal.modal('show');
    }

    renderBoxes() {
        return this.state.medalhas.map(function (medalha, index) {
            return React.createElement(MedalhaMiniCard, { medalha: medalha, onClick: this.showModal });
        }, this);
    }

    render() {

        return React.createElement(
            'div',
            null,
            React.createElement(Slider, { boxes: this.state._boxes }),
            React.createElement(ModalShowMedalha, { ref: this.modal, selected_id: this.state.selected_id, plataforma_id: this.state.plataforma_id })
        );
    }
}
import React from 'react';
import Input from './react_input';

export default class MedalhaMiniCard extends Input {
    constructor(props) {
        super(props);
    }

    render() {
        let medalha = this.props.medalha;
        return React.createElement(
            'div',
            {
                key: `${medalha._id}`,
                'data-id': medalha._id,
                className: `${this.props.popover ? 'popover' : null} popover-card d-inline-block popover-author mr-2 mb-2 d-flex flex-column justify-content-between`, role: 'tooltip',
                'data-slide': 'true',
                clickable: '',
                onClick: this.props.onClick },
            this.props.popover ? React.createElement('div', { className: 'arrow' }) : null,
            React.createElement(
                'h3',
                { className: 'senno-popover-header' },
                React.createElement(
                    'div',
                    { className: 'popover-autor text-center' },
                    React.createElement(
                        'div',
                        { className: 'medal-avatar m-auto', style: { "backgroundColor": medalha.cor } },
                        React.createElement(
                            'div',
                            { className: 'medal-avatar-text' },
                            medalha.nome.getInitials()
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'popover-autor-info p-2' },
                        React.createElement(
                            'div',
                            {
                                className: 'popover-autor-info-name p-1 font-weight-bold',
                                style: { "borderBottom": "1px solid black" } },
                            medalha.nome
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'senno-popover-body' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-12 text-center' },
                        React.createElement('i', { className: 'fa fa-gem' }),
                        ' ',
                        medalha.pontos
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-12 text-center text-uppercase' },
                        'Pontos'
                    )
                )
            )
        );
    }
}
import React from 'react';
import TileBoxAutor from './react_tile_box_autor';
import FaIcon from './react_faicon';
import SpinnerLDSRipple from './react_spinner_lds_ripple';

export default class ModalCoautores extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        this.modal = React.createRef();
        this.inputForm = React.createRef();
    }

    getInitialState() {
        return {
            ideia: {}, coautores: []
        };
    }

    componentDidMount() {
        let that = this;
        window.$(this.modal.current).on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget); // Button that triggered the modal
            var id = button.data('id'); // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this);

            that.setState({
                loading: true
            });

            window.$.ajax({
                url: `/api/ideias/${id}/coautores`,
                success: function (response) {
                    that.setState({
                        loading: false,
                        ideia: response.data.ideia,
                        coautores: response.data.coautores
                    });
                }
            });
        });
    }

    render() {

        let _coautores = this.state.coautores.map(function (_coautor) {
            return React.createElement(
                'div',
                { className: 'row mb-2' },
                React.createElement(
                    'div',
                    { className: 'col-1' },
                    React.createElement(
                        'div',
                        { className: 'd-inline text-center' },
                        React.createElement(TileBoxAutor, { autor: _coautor, only_avatar: true })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-6 d-flex align-items-center' },
                    _coautor.nome
                ),
                React.createElement(
                    'div',
                    { className: 'col-5 d-flex align-items-center text-center' },
                    React.createElement(FaIcon, { icon: 'ideia', className: 'mr-1' }),
                    React.createElement(
                        'span',
                        { className: 'mr-2' },
                        _coautor.ideias_count
                    ),
                    React.createElement(FaIcon, { icon: 'pesquisa', className: 'mr-1' }),
                    React.createElement(
                        'span',
                        { className: 'mr-2' },
                        _coautor.pesquisas_count
                    ),
                    React.createElement(FaIcon, { icon: 'inovacao', className: 'mr-1' }),
                    React.createElement(
                        'span',
                        { className: 'mr-2' },
                        _coautor.inovacoes_count
                    )
                )
            );
        });

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_coautores', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_coautores_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered modal_coautores', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Coautores'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    this.state.loading ? React.createElement(
                        'div',
                        { className: 'modal-body text-center' },
                        React.createElement(SpinnerLDSRipple, null)
                    ) : React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'div',
                            { className: 'text-center' },
                            React.createElement('label', { className: 'select-cover m-auto border-0', style: { "backgroundImage": `url(${this.state.ideia.cover})` } })
                        ),
                        React.createElement(
                            'h5',
                            { className: 'title', style: { fontSize: "30px" } },
                            this.state.ideia.nome
                        ),
                        _coautores
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Salvar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import Slider from './react_slider';
import SpinnerLDSRipple from './react_spinner_lds_ripple';

export default class ModalCompartilhar extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        this.modal = React.createRef();
        this.inputForm = React.createRef();

        this.handleBusca = this.handleBusca.bind(this);
    }

    handleBusca(e) {
        var code = e.keyCode || e.which;
        var $this = window.$(e.currentTarget);
        if (code == '9') return;
        if (code == '27') $this.val(null);
        var $rows = $this.closest('.modal-body').find('#slider-pessoas').find('div[data-slide]');
        var val = window.$.trim($this.val()).replace(/ +/g, ' ').toLowerCase().normalizeString();
        $rows.show().filter(function () {
            var text = window.$(this).text().replace(/\s+/g, ' ').toLowerCase().normalizeString();
            return !~text.indexOf(val);
        }).hide();
    }

    getInitialState() {
        return {
            pessoas: [],
            shortURL: '',
            sugestoes: [{ nome: "Facebook", cor: "rgb(59, 89, 152)" }, { nome: "Twitter", cor: "rgb(29, 161, 242)" }, { nome: "Google+", cor: "rgb(211, 72, 54)" }, { nome: "Reddit", cor: "rgb(255, 69, 0)" }, { nome: "Whatsapp", cor: "rgb(0, 230, 118)" }]
        };
    }

    componentDidMount() {
        let that = this;
        window.$(this.modal.current).on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget); // Button that triggered the modal
            var id = button.data('id'); // Extract info from data-* attributes
            var href = button.data('href');
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this);

            that.setState({
                loading: true
            });

            window.$.ajax({
                url: `/api/compartilhar/pessoas`,
                success: function (response) {
                    that.setState({
                        loading: false,
                        pessoas: response.data.pessoas
                    });
                }
            });

            window.$.ajax({
                url: '/api/short_url',
                method: "POST",
                data: { url: href || window.location.pathname },
                success: function (response) {
                    that.setState({
                        shortURL: `${window.location.origin}/${response.data.code}`
                    });
                }
            });
        });
    }

    render() {

        let _pessoas = this.state.pessoas.map(function (pessoa) {
            return React.createElement(
                'div',
                { 'data-slide': 'true', className: 'mr-4 text-center', style: { width: "100px" }, clickable: 'true' },
                React.createElement('img', {
                    className: 'medal-avatar mr-2',
                    src: pessoa.image,
                    style: { width: "100px", height: "100px" } }),
                pessoa.nome
            );
        });

        let _sugestoes = this.state.sugestoes.map(function (sugestao) {
            return React.createElement(
                'div',
                { 'data-slide': 'true', className: 'mr-4 text-center', style: { width: "100px" }, clickable: 'true' },
                React.createElement(
                    'div',
                    {
                        className: 'medal-avatar mr-2',
                        style: { "backgroundColor": `${sugestao.cor}` } },
                    React.createElement(
                        'div',
                        { className: 'medal-avatar-text' },
                        sugestao.nome.getInitials()
                    )
                ),
                sugestao.nome
            );
        });

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_compartilhar', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_compartilhar_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Compartilhar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    this.state.loading ? React.createElement(
                        'div',
                        { className: 'modal-body text-center' },
                        React.createElement(SpinnerLDSRipple, null)
                    ) : React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'div',
                            { className: 'form-group' },
                            React.createElement(
                                'p',
                                null,
                                'Notificar no SENNO'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'form-group form-inline' },
                            React.createElement(
                                'p',
                                { className: 'mb-0' },
                                'Para'
                            ),
                            React.createElement('input', { className: 'form-control bmd-form-group bg-white p-2', type: 'search', placeholder: 'Buscar', 'aria-label': 'Search', style: { width: "80%" }, onChange: this.handleBusca }),
                            React.createElement(
                                'button',
                                { className: 'btn btn-transparent fa-1_5x', type: 'submit', style: { width: "10%" } },
                                React.createElement('i', { className: 'fas fa-search' })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'form-group slider-modal-container' },
                            React.createElement(Slider, { id: 'slider-pessoas', boxes: _pessoas })
                        ),
                        React.createElement(
                            'div',
                            { className: 'form-group' },
                            React.createElement(
                                'p',
                                null,
                                'Sugest\xF5es'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'form-group slider-modal-container' },
                            React.createElement(Slider, { boxes: _sugestoes })
                        ),
                        React.createElement(
                            'div',
                            { className: 'form-group' },
                            React.createElement(
                                'p',
                                null,
                                'Compartilhar um link'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'form-group' },
                            React.createElement('input', { className: 'form-control bmd-form-group bg-white p-2 disabled', disabled: 'disabled', type: 'text', value: this.state.shortURL, 'aria-label': 'Link', style: { width: "80%" } })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Salvar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import { serializeDataContainer } from '../main';
import TileBoxGrupo from './react_tile_box_grupo';
import FaIcon from './react_faicon';
import DualList from './react_dual_list';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class ModalConvidarGrupo extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.plataforma_id = props.plataforma_id;

        this.modal = React.createRef();
        this.inputForm = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);

        this.socket = io.connect(WS_NAMESPACES.PLATAFORMAS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketPlataformas client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (data.error) {
                    alert(data.message);
                }
                that.setState({
                    leftList: data.data.left || [],
                    rightList: data.data.right || []
                });

                // window.$(that.modal.current).modal('show');
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);
                console.log(data);

                let $modal = $(that.modal.current);
                $modal.modal('hide');
                that.setState(that.getInitialState());
            });

            this.on(WS_EVENTS.POST_ERROR, function (data) {
                log(WS_EVENTS.POST_ERROR);
                alert(data);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    componentDidMount() {
        var that = this;
        window.$(this.modal.current).on('show.bs.modal', function (e) {
            that.setState(that.getInitialState());
            that.socket.emit(WS_EVENTS.GET, {
                type: 'grupos',
                _id: that.state.plataforma_id
            });
        });
    }

    getInitialState() {
        return {
            leftList: [],
            rightList: []
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.socket.emit(WS_EVENTS.POST, { type: 'grupos',
            data: serializeDataContainer(this.inputForm.current)
        });
        window.$(this.modal.current).modal('hide');
        return false;
    }

    _dualListTemplate(grupo) {
        return React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-9' },
                React.createElement(TileBoxGrupo, { grupo: grupo }),
                ` ${grupo.nome}`
            ),
            React.createElement(
                'div',
                { className: 'col-3 d-flex align-items-center' },
                React.createElement(FaIcon, { icon: 'grupo', className: 'pr-2' }),
                grupo.membros.length
            )
        );
    }

    render() {

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_convidar_grupo', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_nova_medalha_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-lg modal-dialog-centered', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Convidar Grupo'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-body', style: { "paddingLeft": "15px", "paddingRight": "15px", "paddingTop": "0px", "paddingBottom": "0px", borderBottom: "1px solid black" } },
                        React.createElement(
                            'form',
                            { ref: this.inputForm },
                            React.createElement('input', { type: 'hidden', name: '_id', value: this.state.plataforma_id }),
                            React.createElement(DualList, { leftList: this.state.leftList, rightList: this.state.rightList, propToCompare: 'nome', name: 'grupos', template: this._dualListTemplate })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Convidar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import TileBoxAutor from './react_tile_box_autor';
import DualList from './react_dual_list';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class ModalConvidarModerador extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.plataforma_id = props.plataforma_id;
        this.state.id = props.id || 'modal_convidar_moderador';

        this.modal = React.createRef();
        this.inputForm = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);

        this.onShow = props.onShow;
        this.onSubmit = props.onSubmit;

        this.socket = io.connect(WS_NAMESPACES.PLATAFORMAS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketPlataformas client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (data.error) {
                    alert(data.message);
                }
                // that.setState({
                //     leftList: data.data.left || [],
                //     rightList: data.data.right || []
                // })
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);
                console.log(data);

                let $modal = $(that.modal.current);
                $modal.modal('hide');
                that.setState(that.getInitialState());
            });

            this.on(WS_EVENTS.POST_ERROR, function (data) {
                log(WS_EVENTS.POST_ERROR);
                alert(data);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    componentDidMount() {
        var that = this;
        window.$(this.modal.current).on('show.bs.modal', function (e) {
            that.setState(that.getInitialState());
            if (that.onShow) {
                try {
                    that.onShow();
                } catch (error) {}
            }
        });
    }

    getInitialState() {
        return {
            leftList: [],
            rightList: []
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.onSubmit) {
            try {
                this.onSubmit();
            } catch (error) {}
        }
        window.$(this.modal.current).modal('hide');
        return false;
    }

    _dualListTemplate(moderador) {
        return React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-9' },
                React.createElement(TileBoxAutor, { autor: moderador, only_avatar: true }),
                ` ${moderador.nome}`
            )
        );
    }

    render() {

        this.state.leftList = this.props.leftList || [];
        this.state.rightList = this.props.rightList || [];

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: this.state.id, tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_nova_medalha_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-lg modal-dialog-centered', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Convidar Moderador'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-body', style: { "paddingLeft": "15px", "paddingRight": "15px", "paddingTop": "0px", "paddingBottom": "0px", borderBottom: "1px solid black" } },
                        React.createElement(
                            'form',
                            { ref: this.inputForm, id: 'form_modal_convidar_moderador' },
                            React.createElement('input', { type: 'hidden', name: '_id', value: this.state.plataforma_id }),
                            React.createElement(DualList, { leftList: this.state.leftList, rightList: this.state.rightList, propToCompare: 'nome', name: 'moderadores', template: this._dualListTemplate })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Convidar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import { serializeDataContainer } from '../main';
import TileBoxAutor from './react_tile_box_autor';
import DualList from './react_dual_list';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class ModalConvidarSponsor extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.plataforma_id = props.plataforma_id;

        this.modal = React.createRef();
        this.inputForm = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);

        this.socket = io.connect(WS_NAMESPACES.PLATAFORMAS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketPlataformas client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (data.error) {
                    alert(data.message);
                }
                that.setState({
                    leftList: data.data.left || [],
                    rightList: data.data.right || []
                });

                // window.$(that.modal.current).modal('show');
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);
                console.log(data);

                let $modal = $(that.modal.current);
                $modal.modal('hide').find('.redactor_editor').html('');
                that.setState(that.getInitialState());
            });

            this.on(WS_EVENTS.POST_ERROR, function (data) {
                log(WS_EVENTS.POST_ERROR);
                alert(data);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    componentDidMount() {
        var that = this;
        window.$(this.modal.current).on('show.bs.modal', function (e) {
            that.setState(that.getInitialState());
            that.socket.emit(WS_EVENTS.GET, {
                type: 'sponsors',
                _id: that.state.plataforma_id
            });
        });
    }

    getInitialState() {
        return {
            leftList: [],
            rightList: []
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();
        this.socket.emit(WS_EVENTS.POST, { type: 'sponsors',
            data: serializeDataContainer(this.inputForm.current)
        });
        window.$(this.modal.current).modal('hide');
        return false;
    }

    _dualListTemplate(sponsor) {
        return React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-9' },
                React.createElement(TileBoxAutor, { autor: sponsor, only_avatar: true }),
                ` ${sponsor.nome}`
            )
        );
    }

    render() {

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_convidar_sponsor', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_nova_medalha_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-lg modal-dialog-centered', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Convidar Sponsor'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-body', style: { "paddingLeft": "15px", "paddingRight": "15px", "paddingTop": "0px", "paddingBottom": "0px", borderBottom: "1px solid black" } },
                        React.createElement(
                            'form',
                            { ref: this.inputForm },
                            React.createElement('input', { type: 'hidden', name: '_id', value: this.state.plataforma_id }),
                            React.createElement(DualList, { leftList: this.state.leftList, rightList: this.state.rightList, propToCompare: 'nome', name: 'sponsors', template: this._dualListTemplate })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Convidar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import Radio from './react_radio';
import { serializeDataContainer, showSocketSuccessMessage } from '../main';

export default class ModalDenunciar extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        this.modal = React.createRef();
        this.inputForm = React.createRef();

        this.handleMotivo = this.handleMotivo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleMotivo(event) {
        this.setState({
            motivo: event.target.value
        });
    }

    handleSubmit(e) {
        let that = this;
        window.$.ajax({
            url: `/api/denunciar`,
            method: 'POST',
            data: serializeDataContainer(this.inputForm.current),
            success: function (response) {
                window.$(that.modal.current).modal('hide');
                showSocketSuccessMessage('Denuncia realizada com sucesso!');
            }
        });
        // alert(JSON.stringify(serializeDataContainer(this.inputForm.current)));
    }

    getInitialState() {
        return {
            motivo: "conteudo_pornografico"
        };
    }

    componentDidMount() {
        window.$(this.modal.current).on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget); // Button that triggered the modal
            var id = button.data('id'); // Extract info from data-* attributes
            var objeto = button.data('objeto'); // Extract info from data-* attributes
            var href = window.location.href;
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this);
            modal.find('#_id').val(id);
            modal.find('#href').val(href);
            modal.find('#objeto').val(objeto);
            modal.find('[name="outro_motivo"]').val('');
        });
    }

    render() {

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_denunciar', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_denunciar_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Denunciar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'form',
                            { ref: this.inputForm, id: 'modal_denunciar_form' },
                            React.createElement('input', { type: 'hidden', id: '_id', name: '_id' }),
                            React.createElement('input', { type: 'hidden', id: 'href', name: 'href' }),
                            React.createElement('input', { type: 'hidden', id: 'objeto', name: 'objeto' }),
                            [{ value: "conteudo_pornografico", text: "Conteúdo pornográfico" }, { value: "conteudo_violento_repulsivo", text: "Conteúdo violento ou repulsivo" }, { value: "conteudo_preconceituoso_abusivo", text: "Conteúdo preconceituoso ou abusivo" }, { value: "conteudo_perigoso", text: "Conteúdo perigoso" }, { value: "abuso_infantil", text: "Abuso infantil" }, { value: "apologia_terrorismo", text: "Apologia ao terrorismo" }, { value: "spam_fake", text: "Spam ou fake" }, { value: "violacao_direitos_autorais", text: "Violação de direitos autorais" }, { value: "outro", text: "Outro" }].map(function (motivo) {
                                return React.createElement(Radio, {
                                    key: motivo.value,
                                    name: 'motivo',
                                    value: motivo.value,
                                    text: motivo.text,
                                    valProp: this.state.motivo,
                                    onChange: this.handleMotivo
                                });
                            }, this),
                            React.createElement(
                                'div',
                                { className: `form-group ${this.state.motivo === "outro" ? "" : "d-none"}` },
                                React.createElement('textarea', { className: this.state.motivo === "outro" ? "" : "d-none", name: 'outro_motivo', 'data-module': 'text-editor' })
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Denunciar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import { serializeDataContainer } from '../main';
import { RadioColorsRow1, RadioColorsRow2 } from './consts';
import { setModuleInputFile } from '../utils/ModulesUtils';
import FaIcon from './react_faicon';
import InputTextareaSobre from './react_input_textarea_sobre';
import DropdownFilterable from './react_dropdown_filterable';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class ModalEditarPerfil extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        this.modal = React.createRef();
        this.inputForm = React.createRef();

        this.handleSobre = this.handleSobre.bind(this);
        this.handleNome = this.handleNome.bind(this);
        this.handleCor = this.handleCor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.coverOnChange = this.coverOnChange.bind(this);
        this.coverOnChangeHandler = this.coverOnChangeHandler.bind(this);
        // this.handleLocalizacao  = this.handleLocalizacao.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
        this.readBLOB = this.readBLOB.bind(this);

        this.inputCover = React.createRef();

        this.socket = io.connect(WS_NAMESPACES.USUARIOS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketUsuarios client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (!data.type) return;

                switch (data.type) {

                    case 'perfil':
                        that.state.usuario = data.data;
                        that.setState({
                            loading: false,
                            usuario: that.state.usuario,
                            nome: that.state.usuario.nome,
                            medal_avatar_text: that.state.usuario.nome.getInitials(),
                            cor: that.state.usuario.cor,
                            sobre: that.state.usuario.sobre,
                            _localizacaoSelected: that.state.usuario.localizacao,
                            _funcaoSelected: that.state.usuario.funcao
                        });
                        break;
                    case 'localizacoes':
                        that.state.localizacoes = data.data;
                        that.setState({
                            localizacoes: that.state.localizacoes
                        });
                        break;
                    case 'funcoes':
                        that.state.funcoes = data.data;
                        that.setState({
                            funcoes: that.state.funcoes
                        });
                        break;

                    default:
                        break;
                }
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);
                console.log(data);

                if (data.type === 'end upload') {
                    that.state.usuario.image = data.data.cover;
                    that.setState({
                        usuario: that.state.usuario
                    });
                    window.$('[name="image"]').val(that.state.usuario.image).trigger('change').trigger('keyup');
                    that.socket.emit(WS_EVENTS.POST, {
                        type: "editar_perfil",
                        data: serializeDataContainer('#form_modal_editar_perfil')
                    });
                    return;
                }

                if (data.type === 'request slice upload') {
                    that.currentSlice = data.data.currentSlice;
                    that.fileName = data.data.fileName;
                    var place = data.data.currentSlice * 100000,
                        slice = that.file.slice(place, place + Math.min(100000, that.file.size - place));

                    that.fileReader.readAsArrayBuffer(slice);
                    return;
                }

                let $modal = $(that.modal.current);
                $modal.modal('hide').find('.redactor_editor').html('');
                //that.setState(that.getInitialState());
            });

            this.on(WS_EVENTS.POST_ERROR, function (data) {
                log(WS_EVENTS.POST_ERROR);
                alert(data);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    getInitialState() {
        return {
            usuario: {},
            nome: '',
            sobre: '',
            pontos: '',
            medal_avatar_text: '',
            cor: RadioColorsRow1[0].value,
            localizacoes: [{ _id: "0" }],
            _localizacaoSelected: "0",
            funcoes: [{ _id: "0" }],
            _funcaoSelected: "0"
        };
    }

    readBLOB(input) {
        let that = this;
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            that.fileReader = new FileReader();
            that.file = input.files[0];
            let slice = that.file.slice(0, 100000);

            that.fileReader.onload = function (evt) {
                var arrayBuffer = that.fileReader.result;
                that.currentSlice = that.currentSlice || 0;
                that.fileName = that.fileName;
                that.socket.emit(WS_EVENTS.POST, {
                    _id: that.state.usuario._id,
                    type: 'slice upload',
                    data: {
                        name: that.file.name,
                        type: that.file.type,
                        size: that.file.size,
                        data: arrayBuffer,
                        currentSlice: that.currentSlice,
                        fileName: that.fileName
                    }
                });
            };
            that.fileReader.readAsArrayBuffer(slice);

            reader.onload = function (e) {
                $('.select-cover').css({ 'background-size': 'cover', 'background-position': 'center', 'background-image': `url(${e.target.result})` });
            };
            reader.readAsDataURL(that.file);
        }
    }

    componentDidMount() {
        var that = this;
        var $modal = window.$(this.modal.current);
        $modal.on('show.bs.modal', function (e) {
            that.setState({
                loading: true
            });
            that.socket.emit(WS_EVENTS.GET, {
                type: 'localizacoes'
            });
            that.socket.emit(WS_EVENTS.GET, {
                type: 'funcoes'
            });
            that.socket.emit(WS_EVENTS.GET, {
                type: 'perfil',
                _id: that.props.user_id
            });
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        if (this.state.coverChanged) this.readBLOB(this.inputCover.current);else this.socket.emit(WS_EVENTS.POST, {
            type: "editar_perfil",
            data: serializeDataContainer('#form_modal_editar_perfil')
        });

        return false;
    }

    handleCor(changeEvent) {
        console.log('handleCor');

        this.setState({
            cor: changeEvent.target.value
        });
    }

    handleSobre(event) {
        console.log('handleSobre');
        this.setState({
            sobre: event.target.value
        });
    }

    handleNome(event) {
        console.log('handleNome');

        let nome = event.target.value;
        let medal_avatar_text = nome.getInitials();
        this.setState({
            nome: nome,
            medal_avatar_text: medal_avatar_text
        });
    }

    coverOnChangeHandler(e) {
        this.setState({
            coverChanged: true
        });
    }

    coverOnChange() {
        let that = this;
        if (!this.inputCover.current) {
            return;
        }
        this.inputCover.current.removeEventListener('change', this.coverOnChangeHandler);
        this.inputCover.current.addEventListener('change', this.coverOnChangeHandler);
    }

    componentDidUpdate() {
        this.coverOnChange();
        setModuleInputFile();
    }

    render() {

        var _render_color = function (color) {
            return React.createElement(
                'div',
                {
                    key: `${color.value}${color.index}`,
                    className: `pretty pretty-lg p-icon p-default p-color-${color.index} pretty-no-margin p-curve` },
                React.createElement('input', {
                    type: 'radio',
                    name: 'cor',
                    value: color.value,
                    onChange: this.handleCor,
                    checked: this.state.cor === color.value }),
                React.createElement(
                    'div',
                    { className: 'state' },
                    React.createElement('i', { className: 'icon fa fa-check' }),
                    React.createElement(
                        'label',
                        null,
                        '\xA0'
                    )
                )
            );
        };

        var radioColorsRow1 = RadioColorsRow1.map(_render_color, this);

        var radioColorsRow2 = RadioColorsRow2.map(_render_color, this);

        let usuario = this.state.usuario;

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_editar_perfil', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_editar_perfil_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Editar Perfil'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-body' },
                        this.state.loading ? null : React.createElement(
                            'form',
                            {
                                id: 'form_modal_editar_perfil',
                                method: 'GET',
                                onSubmit: this.handleSubmit,
                                ref: this.inputForm },
                            React.createElement('input', { type: 'hidden', name: 'user_id', value: this.state.user_id }),
                            React.createElement(
                                'div',
                                {
                                    className: 'form-group',
                                    'data-toggle': 'tooltip',
                                    'data-placement': 'right',
                                    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, inventore temporibus voluptates voluptate, dolores minima optio explicabo corporis reprehenderit non, suscipit sit perspiciatis? Magnam doloremque officiis, animi reiciendis nemo necessitatibus!' },
                                React.createElement(
                                    'label',
                                    {
                                        htmlFor: 'inputTitulo',
                                        className: 'bmd-label-floating' },
                                    'Nome'
                                ),
                                React.createElement('input', {
                                    type: 'text',
                                    className: 'form-control',
                                    name: 'nome',
                                    minLength: '5',
                                    maxLength: '100',
                                    id: 'nome-',
                                    value: this.state.nome,
                                    onChange: this.handleNome,
                                    'data-char-count': 'true',
                                    'data-char-count-limit': '10',
                                    'data-char-count-selector': '#remainingCharacters-nome-'
                                }),
                                React.createElement('span', {
                                    className: 'bmd-help bmd-help-w100 text-right',
                                    id: 'remainingCharacters-nome-' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group row' },
                                React.createElement(
                                    'label',
                                    { htmlFor: 'inputCover', className: 'col-sm-7 col-form-label d-flex align-content-center align-items-center text-title' },
                                    'Selecionar imagem de perfil'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-sm-5 d-flex justify-content-center' },
                                    React.createElement('input', { ref: this.inputCover, type: 'file', name: 'cover', className: 'form-control-file inputfile', id: 'inputCoverPerfil', 'data-multiple-caption': '{count} files selected', multiple: true }),
                                    React.createElement('input', { id: 'image', name: 'image', type: 'hidden', value: usuario.image }),
                                    React.createElement(
                                        'label',
                                        { className: 'select-cover', htmlFor: 'inputCoverPerfil', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Foto', style: usuario.image ? { backgroundSize: "cover", backgroundPosition: "center center", backgroundImage: `url(${usuario.image})` } : null },
                                        React.createElement(FaIcon, { icon: 'fa-image', className: 'fa-2x' })
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                {
                                    className: 'form-group',
                                    'data-toggle': 'tooltip',
                                    'data-placement': 'right',
                                    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, inventore temporibus voluptates voluptate, dolores minima optio explicabo corporis reprehenderit non, suscipit sit perspiciatis? Magnam doloremque officiis, animi reiciendis nemo necessitatibus!' },
                                React.createElement(
                                    'label',
                                    {
                                        htmlFor: 'sobre',
                                        className: 'bmd-label-static' },
                                    'Sobre'
                                ),
                                React.createElement(InputTextareaSobre, {
                                    id: 'sobre',
                                    name: 'sobre',
                                    value: this.state.sobre,
                                    onChange: this.handleSobre }),
                                React.createElement(
                                    'span',
                                    {
                                        className: 'bmd-help' },
                                    'Sobre'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'form-group d-flex justify-content-start align-items-baseline row' },
                                        React.createElement(
                                            'div',
                                            { className: 'col-12 col-md-3 text-right text-subheader' },
                                            'Localiza\xE7\xE3o'
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'col-12 col-md-9 text-left' },
                                            React.createElement(DropdownFilterable, {
                                                id: 'dropdown_localizacoes',
                                                value: this.state._localizacaoSelected,
                                                objects: this.state.localizacoes,
                                                className: 'btn-portfolio',
                                                icon: 'localizacao',
                                                name: 'localizacao' })
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'form-group d-flex justify-content-start align-items-baseline row' },
                                        React.createElement(
                                            'div',
                                            { className: 'col-12 col-md-3 text-right text-subheader' },
                                            'Fun\xE7\xE3o'
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'col-12 col-md-9 text-left' },
                                            React.createElement(DropdownFilterable, {
                                                id: 'dropdown_funcoes',
                                                value: this.state._funcaoSelected,
                                                objects: this.state.funcoes,
                                                className: 'btn-portfolio',
                                                icon: 'funcao',
                                                name: 'funcao',
                                                onChange: this.onChange
                                            })
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'p',
                                    null,
                                    'Cor'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group row' },
                                React.createElement(
                                    'div',
                                    { className: 'col-6 d-flex align-items-center' },
                                    React.createElement(
                                        'div',
                                        { className: 'colors-container' },
                                        React.createElement(
                                            'div',
                                            { className: 'colors-container-row' },
                                            radioColorsRow1
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'colors-container-row' },
                                            radioColorsRow2
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-6' },
                                    React.createElement(
                                        'div',
                                        {
                                            className: 'medal-avatar',
                                            style: { "backgroundColor": `${this.state.cor}` } },
                                        React.createElement('input', { type: 'hidden', name: 'medal_avatar_text', value: this.state.medal_avatar_text }),
                                        React.createElement(
                                            'div',
                                            { className: 'medal-avatar-text' },
                                            this.state.medal_avatar_text
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-raised btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-raised btn-primary', onClick: this.handleSubmit },
                            'Atualizar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import TileBoxGrupo from './react_tile_box_grupo';
import SpinnerLDSRipple from './react_spinner_lds_ripple';

export default class ModalGrupos extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        this.modal = React.createRef();
        this.inputForm = React.createRef();
    }

    getInitialState() {
        return {
            plataforma: {},
            grupos: []
        };
    }

    componentDidMount() {
        let that = this;
        window.$(this.modal.current).on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget); // Button that triggered the modal
            var id = button.data('id'); // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this);

            that.setState({
                loading: true
            });

            window.$.ajax({
                url: `/api/plataformas/${id}/grupos`,
                success: function (response) {
                    that.setState({
                        loading: false,
                        plataforma: response.data.plataforma,
                        grupos: response.data.grupos
                    });
                }
            });
        });
    }

    render() {

        let _grupos = this.state.grupos.map(function (_grupo) {
            return React.createElement(
                'div',
                { className: 'row mb-2' },
                React.createElement(
                    'div',
                    { className: 'col-1' },
                    React.createElement(
                        'div',
                        { className: 'd-inline text-center' },
                        React.createElement(TileBoxGrupo, { grupo: _grupo, only_avatar: true })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-6 d-flex align-items-center' },
                    _grupo.nome
                ),
                React.createElement('div', { className: 'col-5 d-flex align-items-center text-center' })
            );
        });

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_grupos', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_grupos_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered modal_grupos', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Grupos'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    this.state.loading ? React.createElement(
                        'div',
                        { className: 'modal-body text-center' },
                        React.createElement(SpinnerLDSRipple, null)
                    ) : React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'div',
                            { className: 'text-center' },
                            React.createElement('label', { className: 'select-cover m-auto border-0', style: { "backgroundImage": `url(${this.state.plataforma.cover})` } })
                        ),
                        React.createElement(
                            'h5',
                            { className: 'title', style: { fontSize: "30px" } },
                            this.state.plataforma.nome
                        ),
                        _grupos
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Salvar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import TileBoxAutor from './react_tile_box_autor';
import FaIcon from './react_faicon';
import SpinnerLDSRipple from './react_spinner_lds_ripple';

export default class ModalModeradores extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        this.modal = React.createRef();
        this.inputForm = React.createRef();
    }

    getInitialState() {
        return {
            plataforma: {},
            moderadores: []
        };
    }

    componentDidMount() {
        let that = this;
        window.$(this.modal.current).on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget); // Button that triggered the modal
            var id = button.data('id'); // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this);

            that.setState({
                loading: true
            });

            window.$.ajax({
                url: `/api/plataformas/${id}/moderadores`,
                success: function (response) {
                    that.setState({
                        loading: false,
                        plataforma: response.data.plataforma,
                        moderadores: response.data.moderadores
                    });
                }
            });
        });
    }

    render() {

        let _moderadores = this.state.moderadores.map(function (_mod) {
            return React.createElement(
                'div',
                { className: 'row mb-2' },
                React.createElement(
                    'div',
                    { className: 'col-1' },
                    React.createElement(
                        'div',
                        { className: 'd-inline text-center' },
                        React.createElement(TileBoxAutor, { autor: _mod, only_avatar: true })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-6 d-flex align-items-center' },
                    _mod.nome
                ),
                React.createElement(
                    'div',
                    { className: 'col-5 d-flex align-items-center text-center' },
                    React.createElement(FaIcon, { icon: 'ideia', className: 'mr-1' }),
                    React.createElement(
                        'span',
                        { className: 'mr-2' },
                        _mod.ideias_count
                    ),
                    React.createElement(FaIcon, { icon: 'pesquisa', className: 'mr-1' }),
                    React.createElement(
                        'span',
                        { className: 'mr-2' },
                        _mod.pesquisas_count
                    ),
                    React.createElement(FaIcon, { icon: 'inovacao', className: 'mr-1' }),
                    React.createElement(
                        'span',
                        { className: 'mr-2' },
                        _mod.inovacoes_count
                    )
                )
            );
        });

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_moderadores', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_moderadores_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered modal_moderadores', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Moderadores'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    this.state.loading ? React.createElement(
                        'div',
                        { className: 'modal-body text-center' },
                        React.createElement(SpinnerLDSRipple, null)
                    ) : React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'div',
                            { className: 'text-center' },
                            React.createElement('label', { className: 'select-cover m-auto border-0', style: { "backgroundImage": `url(${this.state.plataforma.cover})` } })
                        ),
                        React.createElement(
                            'h5',
                            { className: 'title', style: { fontSize: "30px" } },
                            this.state.plataforma.nome
                        ),
                        _moderadores
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Salvar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import FaIcon from './react_faicon';

export default class ModalNovaIdeia extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'modal fade', id: 'modal_nova_ideia', tabindex: '-1', role: 'dialog', 'aria-labelledby': 'modal_nova_ideia_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Nova Ideia'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                            React.createElement(
                                'span',
                                { 'aria-hidden': 'true' },
                                '\xD7'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement('form', { action: '/ideias/new', method: 'POST', enctype: 'multipart/form-data' }),
                        React.createElement(
                            'div',
                            { className: 'mr-auto d-flex flex-flow-row' },
                            React.createElement(
                                'div',
                                { className: 'circle-border circle-border-black ml-1' },
                                React.createElement(
                                    'a',
                                    { href: '' },
                                    React.createElement(FaIcon, { icon: 'ajuda' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'circle-border circle-border-black ml-1' },
                                React.createElement(
                                    'a',
                                    { href: '' },
                                    React.createElement(FaIcon, { icon: 'sysop' })
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-raised btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-raised btn-primary', onclick: 'this.parentElement.parentElement.getElementsByTagName(\'form\')[0].submit()' },
                            'Criar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import { RadioColorsRow1, RadioColorsRow2 } from './consts';
import { serializeDataContainer } from '../main';
import { WS_EVENTS } from '../constants/ws_events';

export default class ModalNovaMedalha extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.plataforma_id = props.plataforma_id;

        this.modal = React.createRef();
        this.inputForm = React.createRef();

        this.handleDescricao = this.handleDescricao.bind(this);
        this.handleNome = this.handleNome.bind(this);
        this.handleCor = this.handleCor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePontos = this.handlePontos.bind(this);
        this.getInitialState = this.getInitialState.bind(this);

        this.socket = io.connect('/medalhas');
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketMedalhas client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);
                console.log(data);
                let $modal = $(that.modal.current);
                $modal.modal('hide').find('.redactor_editor').html('');
                that.setState(that.getInitialState());
            });

            this.on(WS_EVENTS.POST_ERROR, function (data) {
                log(WS_EVENTS.POST_ERROR);
                alert(data);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    getInitialState() {
        return {
            nome: '',
            descricao: '',
            pontos: '',
            medal_avatar_text: '',
            cor: RadioColorsRow1[0].value
        };
    }

    handlePontos(event) {
        console.log('handlePontos');

        this.setState({
            pontos: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        this.socket.emit(WS_EVENTS.POST, serializeDataContainer('#form_modal_nova_medalha'));
        return false;
    }

    handleCor(changeEvent) {
        console.log('handleCor');

        this.setState({
            cor: changeEvent.target.value
        });
    }

    handleDescricao(event) {
        console.log('handleDescricao');
        this.setState({
            descricao: event.target.value
        });
    }

    handleNome(event) {
        console.log('handleNome');

        let nome = event.target.value;
        let medal_avatar_text = "";
        if (nome) {
            let nomes = nome.split(' ');
            let nomeFirst = "";
            let nomeLast = "";
            nomeFirst = nomes[0];
            if (nomes.length > 1) {
                nomeLast = nomes[nomes.length - 1];
            }
            nomeFirst = nomeFirst.charAt(0).toUpperCase();
            nomeLast = nomeLast.charAt(0).toUpperCase();
            medal_avatar_text = `${nomeFirst}${nomeLast}`;
        } else {
            nome = "";
        }
        this.setState({
            nome: nome,
            medal_avatar_text: medal_avatar_text
        });
    }

    render() {

        var _render_medalha = function (medal, index) {
            return React.createElement(
                'li',
                {
                    key: `${medal.value}${index}`,
                    id: `medal-${medal.value}`,
                    className: `medal-type-list-item medal medal-${medal.value}`
                },
                React.createElement('i', { className: 'fa fa-gem d-block' }),
                medal.value
            );
        };

        var _render_color = function (color) {
            return React.createElement(
                'div',
                {
                    key: `${color.value}${color.index}`,
                    className: `pretty pretty-lg p-icon p-default p-color-${color.index} pretty-no-margin p-curve` },
                React.createElement('input', {
                    type: 'radio',
                    name: 'cor',
                    value: color.value,
                    onChange: this.handleCor,
                    checked: this.state.cor === color.value }),
                React.createElement(
                    'div',
                    { className: 'state' },
                    React.createElement('i', { className: 'icon fa fa-check' }),
                    React.createElement(
                        'label',
                        null,
                        '\xA0'
                    )
                )
            );
        };

        var medalhasFacil = [{ value: 100 }, { value: 200 }, { value: 300 }].map(_render_medalha, this);
        var medalhasMedio = [{ value: 400 }, { value: 500 }, { value: 600 }, { value: 700 }].map(_render_medalha, this);
        var medalhasDificil = [{ value: 800 }, { value: 900 }, { value: 1000 }].map(_render_medalha, this);

        var radioColorsRow1 = RadioColorsRow1.map(_render_color, this);

        var radioColorsRow2 = RadioColorsRow2.map(_render_color, this);

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_nova_medalha', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_nova_medalha_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Nova Medalha'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'form',
                            {
                                id: 'form_modal_nova_medalha',
                                action: '/ideias/new',
                                method: 'GET',
                                onSubmit: this.handleSubmit,
                                ref: this.inputForm },
                            React.createElement('input', { type: 'hidden', name: 'plataforma_id', value: this.state.plataforma_id }),
                            React.createElement(
                                'div',
                                {
                                    className: 'form-group',
                                    'data-toggle': 'tooltip',
                                    'data-placement': 'right',
                                    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, inventore temporibus voluptates voluptate, dolores minima optio explicabo corporis reprehenderit non, suscipit sit perspiciatis? Magnam doloremque officiis, animi reiciendis nemo necessitatibus!' },
                                React.createElement(
                                    'label',
                                    {
                                        htmlFor: 'inputTitulo',
                                        className: 'bmd-label-floating' },
                                    'T\xEDtulo da Medalha'
                                ),
                                React.createElement('input', {
                                    type: 'text',
                                    className: 'form-control',
                                    name: 'nome',
                                    minLength: '5',
                                    maxLength: '100',
                                    id: 'nome-',
                                    value: this.state.nome,
                                    onChange: this.handleNome,
                                    'data-char-count': 'true',
                                    'data-char-count-limit': '10',
                                    'data-char-count-selector': '#remainingCharacters-nome-'
                                }),
                                React.createElement('span', {
                                    className: 'bmd-help bmd-help-w100 text-right',
                                    id: 'remainingCharacters-nome-' })
                            ),
                            React.createElement(
                                'div',
                                {
                                    className: 'form-group',
                                    'data-toggle': 'tooltip',
                                    'data-placement': 'right',
                                    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, inventore temporibus voluptates voluptate, dolores minima optio explicabo corporis reprehenderit non, suscipit sit perspiciatis? Magnam doloremque officiis, animi reiciendis nemo necessitatibus!' },
                                React.createElement(
                                    'label',
                                    {
                                        htmlFor: 'descricao',
                                        className: 'bmd-label-static' },
                                    'Descri\xE7\xE3o'
                                ),
                                React.createElement('textarea', {
                                    className: 'form-control',
                                    id: 'descricao-',
                                    rows: '5',
                                    name: 'descricao',
                                    defaultValue: () => this.state.descricao,
                                    onChange: this.handleDescricao,
                                    'data-module': 'text-editor',
                                    'data-reload': 'true' }),
                                React.createElement(
                                    'span',
                                    {
                                        className: 'bmd-help' },
                                    'Descri\xE7\xE3o'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'p',
                                    null,
                                    'Pontua\xE7\xE3o da Medalha'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'bg-gray-six' },
                                React.createElement('div', { className: 'border-medal' }),
                                React.createElement('input', {
                                    name: 'pontos',
                                    id: 'pontos',
                                    type: 'hidden',
                                    className: 'input-pontos' }),
                                React.createElement('ul', { className: 'medals m-auto' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group d-flex' },
                                React.createElement(
                                    'div',
                                    { className: 'medal-points m-auto' },
                                    React.createElement(
                                        'div',
                                        { id: 'bt-green', className: 'medal-points-item green expanded' },
                                        React.createElement(
                                            'span',
                                            { className: 'title' },
                                            'F\xC1CIL'
                                        ),
                                        React.createElement('br', null),
                                        React.createElement(
                                            'ul',
                                            {
                                                className: 'medal-type-list' },
                                            medalhasFacil
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { id: 'bt-yellow', className: 'medal-points-item yellow retract' },
                                        React.createElement(
                                            'span',
                                            { className: 'title' },
                                            'M\xC9DIO'
                                        ),
                                        React.createElement('br', null),
                                        React.createElement(
                                            'ul',
                                            {
                                                className: 'medal-type-list' },
                                            medalhasMedio
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { id: 'bt-red', className: 'medal-points-item red retract' },
                                        React.createElement(
                                            'span',
                                            { className: 'title' },
                                            'D\xCDFICIL'
                                        ),
                                        React.createElement('br', null),
                                        React.createElement(
                                            'ul',
                                            {
                                                className: 'medal-type-list' },
                                            medalhasDificil
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'p',
                                    null,
                                    'Cor da Medalha'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group row' },
                                React.createElement(
                                    'div',
                                    { className: 'col-6 d-flex align-items-center' },
                                    React.createElement(
                                        'div',
                                        { className: 'colors-container' },
                                        React.createElement(
                                            'div',
                                            { className: 'colors-container-row' },
                                            radioColorsRow1
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'colors-container-row' },
                                            radioColorsRow2
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-6' },
                                    React.createElement(
                                        'div',
                                        {
                                            className: 'medal-avatar',
                                            style: { "backgroundColor": `${this.state.cor}` } },
                                        React.createElement('input', { type: 'hidden', name: 'medal_avatar_text', value: this.state.medal_avatar_text }),
                                        React.createElement(
                                            'div',
                                            { className: 'medal-avatar-text' },
                                            this.state.medal_avatar_text
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Criar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import { RadioColorsRow1, RadioColorsRow2 } from './consts';
import { serializeDataContainer } from '../main';
import InputHidden from './react_input_hidden';
import TileBoxAutor from './react_tile_box_autor';
import FaIcon from './react_faicon';
import ModalConvidarModerador from './react_modal_convidar_moderador';
import { InputPlataformaTags } from './react_input_plataforma_tags';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class ModalEditarGrupo extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state._id = props._id;

        this.modal = React.createRef();
        this.inputForm = React.createRef();

        this.handleDescricao = this.handleDescricao.bind(this);
        this.handleNome = this.handleNome.bind(this);
        this.handleCor = this.handleCor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePontos = this.handlePontos.bind(this);
        this.getInitialState = this.getInitialState.bind(this);

        this.convidarModeradorOnShow = this.convidarModeradorOnShow.bind(this);
        this.convidarModeradorOnSubmit = this.convidarModeradorOnSubmit.bind(this);
        this.convidarAgenteOnShow = this.convidarAgenteOnShow.bind(this);
        this.convidarAgenteOnSubmit = this.convidarAgenteOnSubmit.bind(this);

        this.socket = io.connect(WS_NAMESPACES.GRUPOS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketGrupos client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (!data.data) return;

                if (data.type === 'grupo') {} else if (data.type === 'moderadores') {
                    let left = data.data.left.filter(_leftModerador => lodash.findIndex(that.state.moderadores, function (_rightModerador) {
                        return _rightModerador._id == _leftModerador._id;
                    }) < 0);
                    that.setState({
                        moderadoresLeftList: left,
                        moderadores: that.state.moderadores
                    });
                } else if (data.type === 'agentes') {
                    let left = data.data.left.filter(_leftModerador => lodash.findIndex(that.state.agentes, function (_rightModerador) {
                        return _rightModerador._id == _leftModerador._id;
                    }) < 0);
                    that.setState({
                        agentesLeftList: left,
                        agentes: that.state.agentes
                    });
                }
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);
                console.log(data);
                let $modal = $(that.modal.current);
                $modal.modal('hide').find('.redactor_editor').html('');
                that.setState(that.getInitialState());
            });

            this.on(WS_EVENTS.POST_ERROR, function (data) {
                log(WS_EVENTS.POST_ERROR);
                alert(data);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    getInitialState() {
        return {
            nome: '',
            descricao: '',
            tags: [],
            moderadores: [],
            agentes: [],
            medal_avatar_text: '',
            medal_avatar_color: RadioColorsRow1[0].value,
            moderadoresLeftList: [],
            agentesLeftList: []
        };
    }

    handlePontos(event) {
        console.log('handlePontos');

        this.setState({
            pontos: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        this.socket.emit(WS_EVENTS.POST, {
            type: "novo_grupo",
            data: serializeDataContainer('#form_modal_editar_grupo')
        });
        return false;
    }

    handleCor(changeEvent) {
        console.log('handleCor');

        this.setState({
            medal_avatar_color: changeEvent.target.value
        });
    }

    handleDescricao(event) {
        console.log('handleDescricao');
        this.setState({
            descricao: event.target.value
        });
    }

    handleNome(event) {
        console.log('handleNome');

        let nome = event.target.value;
        let medal_avatar_text = "";
        if (nome) {
            let nomes = nome.split(' ');
            let nomeFirst = "";
            let nomeLast = "";
            nomeFirst = nomes[0];
            if (nomes.length > 1) {
                nomeLast = nomes[nomes.length - 1];
            }
            nomeFirst = nomeFirst.charAt(0).toUpperCase();
            nomeLast = nomeLast.charAt(0).toUpperCase();
            medal_avatar_text = `${nomeFirst}${nomeLast}`;
        } else {
            nome = "";
        }
        this.setState({
            nome: nome,
            medal_avatar_text: medal_avatar_text
        });
    }

    convidarModeradorOnShow() {
        this.socket.emit(WS_EVENTS.GET, {
            type: 'moderadores',
            _id: this.state._id
        });
    }

    convidarModeradorOnSubmit() {
        this.setState({
            moderadores: this.state.moderadores
        });
    }

    convidarAgenteOnShow() {
        this.socket.emit(WS_EVENTS.GET, {
            type: 'agentes',
            _id: this.state._id
        });
    }

    convidarAgenteOnSubmit() {
        this.setState({
            agentes: this.state.agentes
        });
    }

    render() {
        var _render_color = function (color) {
            return React.createElement(
                'div',
                {
                    key: `${color.value}${color.index}`,
                    className: `pretty pretty-lg p-icon p-default p-color-${color.index} pretty-no-margin p-curve` },
                React.createElement('input', {
                    type: 'radio',
                    name: 'medal_avatar_color',
                    value: color.value,
                    onChange: this.handleCor,
                    checked: this.state.medal_avatar_color === color.value }),
                React.createElement(
                    'div',
                    { className: 'state' },
                    React.createElement('i', { className: 'icon fa fa-check' }),
                    React.createElement(
                        'label',
                        null,
                        '\xA0'
                    )
                )
            );
        };

        var radioColorsRow1 = RadioColorsRow1.map(_render_color, this);

        var radioColorsRow2 = RadioColorsRow2.map(_render_color, this);

        var _moderadores = this.state.moderadores.map(function (moderador) {
            return React.createElement(
                'div',
                { className: 'd-inline' },
                React.createElement(InputHidden, { name: 'moderadores', value: moderador._id }),
                React.createElement(TileBoxAutor, { autor: moderador, only_avatar: true })
            );
        });

        var _agentes = this.state.agentes.map(function (agente) {
            return React.createElement(
                'div',
                { className: 'd-inline' },
                React.createElement(InputHidden, { name: 'agentes', value: agente._id }),
                React.createElement(TileBoxAutor, { autor: agente, only_avatar: true })
            );
        });

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_editar_grupo', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_editar_grupo_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            this.props._id ? "Editar Grupo" : "Novo Grupo"
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'form',
                            {
                                id: 'form_modal_editar_grupo',
                                method: 'GET',
                                onSubmit: this.handleSubmit,
                                ref: this.inputForm },
                            React.createElement('input', { type: 'hidden', name: 'plataforma_id', value: this.state.plataforma_id }),
                            React.createElement(
                                'div',
                                {
                                    className: 'form-group',
                                    'data-toggle': 'tooltip',
                                    'data-placement': 'right',
                                    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, inventore temporibus voluptates voluptate, dolores minima optio explicabo corporis reprehenderit non, suscipit sit perspiciatis? Magnam doloremque officiis, animi reiciendis nemo necessitatibus!' },
                                React.createElement(
                                    'label',
                                    {
                                        htmlFor: 'inputTitulo',
                                        className: 'bmd-label-floating' },
                                    'T\xEDtulo do Grupo'
                                ),
                                React.createElement('input', {
                                    type: 'text',
                                    className: 'form-control',
                                    name: 'nome',
                                    minLength: '5',
                                    maxLength: '100',
                                    id: 'nome-',
                                    value: this.state.nome,
                                    onChange: this.handleNome,
                                    'data-char-count': 'true',
                                    'data-char-count-limit': '10',
                                    'data-char-count-selector': '#remainingCharacters-nome-'
                                }),
                                React.createElement('span', {
                                    className: 'bmd-help bmd-help-w100 text-right',
                                    id: 'remainingCharacters-nome-' })
                            ),
                            React.createElement(
                                'div',
                                {
                                    className: 'form-group',
                                    'data-toggle': 'tooltip',
                                    'data-placement': 'right',
                                    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, inventore temporibus voluptates voluptate, dolores minima optio explicabo corporis reprehenderit non, suscipit sit perspiciatis? Magnam doloremque officiis, animi reiciendis nemo necessitatibus!' },
                                React.createElement(
                                    'label',
                                    {
                                        htmlFor: 'descricao',
                                        className: 'bmd-label-static' },
                                    'Descri\xE7\xE3o'
                                ),
                                React.createElement('textarea', {
                                    className: 'form-control',
                                    id: 'descricao-',
                                    rows: '5',
                                    name: 'descricao',
                                    defaultValue: () => this.state.descricao,
                                    onChange: this.handleDescricao,
                                    'data-module': 'text-editor',
                                    'data-reload': 'true' }),
                                React.createElement(
                                    'span',
                                    {
                                        className: 'bmd-help' },
                                    'Descri\xE7\xE3o'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'p',
                                    null,
                                    'Tags'
                                )
                            ),
                            React.createElement(InputPlataformaTags, { value: this.state.tags }),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(FaIcon, { icon: 'moderador' }),
                                React.createElement(
                                    'p',
                                    { className: 'd-inline' },
                                    ' Moderadores'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'div',
                                    { className: 'user-container' },
                                    _moderadores
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group text-right' },
                                React.createElement(
                                    'a',
                                    { className: 'btn btn-primary', 'data-toggle': 'modal', 'data-target': '#modal_convidar_moderador' },
                                    'Convidar'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(FaIcon, { icon: 'agente' }),
                                React.createElement(
                                    'p',
                                    { className: 'd-inline' },
                                    ' Agentes'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'div',
                                    { className: 'user-container' },
                                    _agentes
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group text-right' },
                                React.createElement(
                                    'a',
                                    { className: 'btn btn-primary', 'data-toggle': 'modal', 'data-target': '#modal_convidar_agente' },
                                    'Convidar'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'p',
                                    null,
                                    'Cor do Grupo'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group row' },
                                React.createElement(
                                    'div',
                                    { className: 'col-6 d-flex align-items-center' },
                                    React.createElement(
                                        'div',
                                        { className: 'colors-container' },
                                        React.createElement(
                                            'div',
                                            { className: 'colors-container-row' },
                                            radioColorsRow1
                                        ),
                                        React.createElement(
                                            'div',
                                            { className: 'colors-container-row' },
                                            radioColorsRow2
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-6' },
                                    React.createElement(
                                        'div',
                                        {
                                            className: 'medal-avatar',
                                            style: { "backgroundColor": `${this.state.medal_avatar_color}` } },
                                        React.createElement('input', { type: 'hidden', name: 'medal_avatar_text', value: this.state.medal_avatar_text }),
                                        React.createElement(
                                            'div',
                                            { className: 'medal-avatar-text' },
                                            this.state.medal_avatar_text
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Criar'
                        )
                    )
                )
            ),
            React.createElement(ModalConvidarModerador, { id: 'modal_convidar_moderador',
                onShow: this.convidarModeradorOnShow,
                onSubmit: this.convidarModeradorOnSubmit,
                leftList: this.state.moderadoresLeftList,
                rightList: this.state.moderadores }),
            React.createElement(ModalConvidarModerador, { id: 'modal_convidar_agente',
                onShow: this.convidarAgenteOnShow,
                onSubmit: this.convidarAgenteOnSubmit,
                leftList: this.state.agentesLeftList,
                rightList: this.state.agentes })
        );
    }
}
import React from 'react';
import { setModulePopoverHover, setModuleRedactor } from '../utils/ModulesUtils';
import TileBoxGrupo from './react_tile_box_grupo';
import SpinnerLDSRipple from './react_spinner_lds_ripple';
import FaIcon from './react_faicon';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class ModalParticipar extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.plataforma_id = props.plataforma_id;

        this.modal = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);

        this.socket = io.connect(WS_NAMESPACES.PLATAFORMAS);
        this.room = 'asd';

        let that = this;

        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketPlataformas client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (data.error) {
                    alert(data.message);
                    return;
                }
                that.setState({
                    loading: false,
                    plataforma: data.data.plataforma,
                    grupos: data.data.grupos
                });
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                if (data.error) {
                    alert(data.message);
                    return;
                }
                if (!data.type) return;

                switch (data.type) {
                    case "participar":
                        window.$(this.modal.current).modal('hide');
                        break;

                    default:
                        break;
                }
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    componentDidMount() {
        var that = this;
        window.$(this.modal.current).on('show.bs.modal', function (e) {
            that.socket.emit(WS_EVENTS.GET, { type: 'participar_plataforma', _id: that.state.plataforma_id });
        });
    }

    componentDidUpdate() {
        setModulePopoverHover();
        setModuleRedactor();
    }

    componentWillUnmount() {
        if (this.state.timerId) {
            clearInterval(timerId);
        }
    }

    getInitialState() {
        return {
            loading: true,
            plataforma_id: "",
            plataforma: {},
            grupos: []
        };
    }

    handleSubmit(e) {
        if (this.props.onSubmit) {
            this.props.onSubmit(e);
        }
    }

    render() {

        var _grupos = this.state.grupos.map(function (grupo, index) {
            return React.createElement(TileBoxGrupo, { key: grupo._id, grupo: grupo });
        });

        let plataforma = this.state.plataforma;

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_participar', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_nova_medalha_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered modal_participar', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Participar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    this.state.loading ? React.createElement(
                        'div',
                        { className: 'modal-body text-center' },
                        React.createElement(SpinnerLDSRipple, null)
                    ) : React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'form',
                            { id: 'modal_participar_form', method: '', action: '' },
                            React.createElement(
                                'div',
                                { className: 'text-center' },
                                React.createElement('label', { className: 'select-cover m-auto border-0', style: { "backgroundImage": `url(${this.state.plataforma.cover})` } })
                            ),
                            React.createElement(
                                'h5',
                                { className: 'title', style: { fontSize: "30px" } },
                                this.state.plataforma.nome
                            ),
                            React.createElement(
                                'div',
                                { className: 'row text-subheader' },
                                React.createElement(
                                    'div',
                                    { className: 'col-12 text-center' },
                                    React.createElement(FaIcon, { icon: 'grupo' }),
                                    ' ',
                                    plataforma.membros ? `${plataforma.membros.participantes.length}/${plataforma.todos_participantes.length}` : null
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row text-subheader' },
                                React.createElement(
                                    'div',
                                    { className: 'col-12 text-center' },
                                    'SEUS GRUPOS CONVIDADOS'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row text-subheader' },
                                React.createElement(
                                    'div',
                                    { className: 'col-12 text-center' },
                                    _grupos
                                )
                            ),
                            plataforma.permissao === "restrita" ? React.createElement(
                                'div',
                                { className: 'row text-subheader' },
                                React.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    'Justificativa'
                                )
                            ) : null,
                            plataforma.permissao === "restrita" ? React.createElement(
                                'div',
                                { className: 'row text-subheader' },
                                React.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    React.createElement('textarea', { name: 'justificativa', 'data-module': 'text-editor', 'data-restricted': 'html,video,image,table,link,link_insert,unlink,formatting,paragraph,quote,code,header1,header2,header3,header4,bold,italic,fontcolor,backcolor,unorderedlist,orderedlist,outdent,indent,cancel,insert,save,_delete,insert_table,insert_row_above,insert_row_below,insert_column_left,insert_column_right,delete_column,delete_row,delete_table,rows,columns,add_head,delete_head,title,image_position,none,left,right,image_web_link,text,mailto,web,video_html_code,file,upload,download,choose,or_choose,drop_file_here,align_left,align_center,align_right,align_justify,horizontalrule,deleted,anchor,link_new_tab,underline,alignment,justify,alignleft,aligncenter,alignright' })
                                )
                            ) : null,
                            plataforma.permissao === "secreta" ? React.createElement(
                                'div',
                                { className: 'row text-subheader' },
                                React.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    'Senha'
                                )
                            ) : null,
                            plataforma.permissao === "secreta" ? React.createElement(
                                'div',
                                { className: 'row text-subheader' },
                                React.createElement(
                                    'div',
                                    { className: 'col-12' },
                                    React.createElement('input', { type: 'password', className: 'form-control', name: 'senha' })
                                )
                            ) : null
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Enviar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import SpinnerLDSRipple from './react_spinner_lds_ripple';
import FaIcon from './react_faicon';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class ModalPlataformaQuantidadeIdeias extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.plataforma_id = props.plataforma_id;
        this.state.startDate = props.startDate;
        this.state.endDate = props.endDate;
        this.state.timerId;

        this.modal = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);

        this.socket = io.connect(WS_NAMESPACES.PLATAFORMAS);
        this.room = 'asd';

        let that = this;

        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketPlataformas client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (data.error) {
                    alert(data.message);
                    return;
                }

                that.setState({
                    loading: false,
                    plataforma: data.data,
                    limite: data.data.encerrarFaseLimiteIdeia_valor,
                    quantidade: data.data.ideias.length
                });
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    componentDidMount() {
        var that = this;
        window.$(this.modal.current).on('show.bs.modal', function (e) {
            that.socket.emit(WS_EVENTS.GET, { type: 'plataforma', _id: that.state.plataforma_id });
        });
    }

    componentWillUnmount() {}

    getInitialState() {
        return {
            loading: true,
            plataforma_id: "",
            plataforma: {},
            limite: 0,
            quantidade: 0
        };
    }

    handleSubmit() {
        alert('Editar!');
    }

    render() {

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_plataforma_quantidade_ideias', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_plataforma_quantidade_ideias_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered modal_plataforma_quantidade_ideias', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Quantidade de Ideias'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    this.state.loading ? React.createElement(
                        'div',
                        { className: 'modal-body text-center' },
                        React.createElement(SpinnerLDSRipple, null)
                    ) : React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'div',
                            { className: 'text-center' },
                            React.createElement('label', { className: 'select-cover m-auto border-0', style: { "backgroundImage": `url(${this.state.plataforma.cover})` } })
                        ),
                        React.createElement(
                            'h5',
                            { className: 'title', style: { fontSize: "30px" } },
                            this.state.plataforma.nome
                        ),
                        React.createElement(
                            'div',
                            { className: 'text-center', style: { marginBottom: "30px" } },
                            React.createElement(FaIcon, { icon: 'ideia', className: 'fa-2x mr-2' }),
                            React.createElement(
                                'h3',
                                { className: 'd-inline text-headline-bold' },
                                this.state.quantidade
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'row text-subheader' },
                            React.createElement(
                                'div',
                                { className: 'col-6 text-right' },
                                React.createElement(
                                    'strong',
                                    null,
                                    'Limite'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-6' },
                                ` ${this.state.limite}`
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Editar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';

export default class ModalSalvarFavorito extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        this.modal = React.createRef();
        this.inputForm = React.createRef();
    }

    getInitialState() {
        return {};
    }

    render() {

        return React.createElement(
            "div",
            { ref: this.modal, className: "modal fade", id: "modal_salvar_favorito", tabIndex: "-1", role: "dialog", "aria-labelledby": "modal_salvar_favorito_title", "aria-hidden": "true" },
            React.createElement(
                "div",
                { className: "modal-dialog modal-dialog-centered", role: "document" },
                React.createElement(
                    "div",
                    { className: "modal-content" },
                    React.createElement(
                        "div",
                        { className: "modal-header" },
                        React.createElement(
                            "h5",
                            { className: "modal-title", id: "exampleModalLongTitle" },
                            "Favoritos"
                        ),
                        React.createElement(
                            "button",
                            { type: "button", className: "close", "data-container": "body", "data-toggle": "popover", "data-trigger": "focus", "data-placement": "bottom", "data-content": " ", "data-template": "<div class='popover' role='tooltip'> <div class='arrow'></div> <div class='senno-popover-body p-0'> <div class='list-group'> <a href='#' class='list-group-item list-group-item-action menu-user-item'> <i class='fa fa-question'></i> <span class='badge-sm badge-pill badge-danger badge-up-sm invisible'>\xA0</span> Ajuda </a> <a href='#' class='list-group-item list-group-item-action menu-user-item'> <i class='fa fa-traffic-light'></i> <span class='badge-sm badge-pill badge-danger badge-up-sm invisible'>\xA0</span> Sysop </a> </div> </div> </div>" },
                            React.createElement("i", { className: "fa fa-ellipsis-h" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "modal-body" },
                        React.createElement(
                            "div",
                            { className: "row text-subheader" },
                            React.createElement(
                                "div",
                                { className: "col-5 text-right" },
                                React.createElement(
                                    "strong",
                                    null,
                                    "Selecionar Painel"
                                )
                            ),
                            React.createElement("div", { className: "col-7" })
                        ),
                        React.createElement(
                            "div",
                            { className: "row text-subheader" },
                            React.createElement(
                                "div",
                                { className: "col-5 text-right" },
                                React.createElement(
                                    "strong",
                                    null,
                                    "Selecionar Se\xE7\xE3o"
                                )
                            ),
                            React.createElement("div", { className: "col-7" })
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "modal-footer" },
                        React.createElement(
                            "button",
                            { type: "button", className: "btn btn-secondary mr-auto", "data-dismiss": "modal" },
                            "Fechar"
                        ),
                        React.createElement(
                            "button",
                            { type: "button", className: "btn btn-primary", onClick: this.handleSubmit },
                            "Salvar"
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import TileBoxAutor from './react_tile_box_autor';
import FaIcon from './react_faicon';
import { WS_EVENTS } from '../constants/ws_events';
import { comparaPorNome } from '../main';

export default class ModalShowGrupo extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        this.state.plataforma_id = props.plataforma_id;
        this.state.selected_id = props.selected_id;

        this.modal = React.createRef();
        this.inputForm = React.createRef();

        this.componentDidMount = this.componentDidMount.bind(this);
        this.getInitialState = this.getInitialState.bind(this);

        this.socket = io.connect('/grupos');
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketGrupos client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                log(WS_EVENTS.GET_OK);
                that.setState({
                    grupo: data.data
                });
            });

            this.on(WS_EVENTS.GET_ERROR, function (data) {
                log(WS_EVENTS.GET_ERROR);
                alert(data);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    getInitialState() {
        return { plataforma_id: null,
            selected_id: null,
            grupo: { nome: '',
                descricao: '',
                membros: []
            }
        };
    }

    componentDidMount() {
        var that = this;
        var $modal = window.$(this.modal.current);
        $modal.on('show.bs.modal', function (e) {
            that.socket.emit(WS_EVENTS.GET, {
                type: "grupo",
                _id: that.props.selected_id
            });
        });
    }

    render() {

        let grupo = this.state.grupo;
        let _membros = grupo.membros.sort(comparaPorNome).map(function (membro) {
            return React.createElement(
                'div',
                { className: 'row mb-2' },
                React.createElement(
                    'div',
                    { className: 'col-1' },
                    React.createElement(
                        'div',
                        { className: 'd-inline text-center' },
                        React.createElement(TileBoxAutor, { autor: membro, only_avatar: true })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-6 d-flex align-items-center' },
                    membro.nome
                ),
                React.createElement(
                    'div',
                    { className: 'col-5 d-flex align-items-center text-center' },
                    React.createElement(FaIcon, { icon: 'ideia', className: 'mr-1' }),
                    React.createElement(
                        'span',
                        { className: 'mr-2' },
                        membro.ideias_count
                    ),
                    React.createElement(FaIcon, { icon: 'pesquisa', className: 'mr-1' }),
                    React.createElement(
                        'span',
                        { className: 'mr-2' },
                        membro.pesquisas_count
                    ),
                    React.createElement(FaIcon, { icon: 'inovacao', className: 'mr-1' }),
                    React.createElement(
                        'span',
                        { className: 'mr-2' },
                        membro.inovacoes_count
                    )
                )
            );
        });

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_show_grupo', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_nova_medalha_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered modal_show_grupo', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Grupo'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'div',
                            { className: 'd-inline text-center' },
                            React.createElement(
                                'div',
                                { className: 'popover-autor-avatar' },
                                React.createElement(
                                    'div',
                                    { className: 'circle-avatar circle-avatar-lg m-auto', style: { "backgroundColor": this.state.grupo.cor } },
                                    React.createElement(
                                        'div',
                                        { className: 'circle-avatar-text' },
                                        this.state.grupo.nome.getInitials()
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'h5',
                            { className: 'title' },
                            this.state.grupo.nome
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Descri\xE7\xE3o'
                        ),
                        React.createElement('div', { dangerouslySetInnerHTML: { "__html": this.state.grupo.descricao } }),
                        React.createElement('br', null),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(FaIcon, { icon: 'grupo' }),
                            ' 0 / ',
                            this.state.grupo.membros.length
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Participantes / Membros'
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'p',
                            { className: 'text-center text-subheader' },
                            'Participantes'
                        ),
                        React.createElement(
                            'div',
                            { className: 'form-group' },
                            _membros
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Editar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import FaIcon from './react_faicon';
import { WS_EVENTS } from '../constants/ws_events';

export default class ModalShowMedalha extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();

        this.state.plataforma_id = props.plataforma_id;
        this.state.selected_id = props.selected_id;

        log('props');
        console.log(props);

        this.modal = React.createRef();
        this.inputForm = React.createRef();

        this.componentDidMount = this.componentDidMount.bind(this);
        this.getInitialState = this.getInitialState.bind(this);

        this.socket = io.connect('/medalhas');
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketMedalhas client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                log(WS_EVENTS.GET_OK);
                that.setState({
                    medalha: data.data
                });
            });

            this.on(WS_EVENTS.GET_ERROR, function (data) {
                log(WS_EVENTS.GET_ERROR);
                alert(data);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    getInitialState() {
        return { plataforma_id: null,
            selected_id: null,
            medalha: { nome: '',
                descricao: '',
                pontos: '',
                medal_avatar_color: 'rgb(255, 255, 255)',
                medal_avatar_text: ''
            }
        };
    }

    componentDidMount() {
        var that = this;
        var $modal = window.$(this.modal.current);
        $modal.on('show.bs.modal', function (e) {
            that.socket.emit(WS_EVENTS.GET, {
                plataforma_id: that.state.plataforma_id,
                _id: that.props.selected_id
            });
        });
    }

    render() {

        var _render_medalha = function (medal, index) {
            return React.createElement(
                'li',
                {
                    key: `${medal.value}${index}`,
                    id: `medal-${medal.value}`,
                    className: `medal-type-list-item medal medal-${medal.value}` },
                React.createElement('i', { className: 'fa fa-gem d-block' }),
                medal.value
            );
        };

        var _render_color = function (color) {
            return React.createElement(
                'div',
                {
                    key: `${color.value}${color.index}`,
                    className: `pretty pretty-lg p-icon p-default p-color-${color.index} pretty-no-margin p-curve` },
                React.createElement('input', {
                    type: 'radio',
                    name: 'medal_avatar_color',
                    value: color.value,
                    onChange: this.handleCor,
                    checked: this.state.medal_avatar_color === color.value }),
                React.createElement(
                    'div',
                    { className: 'state' },
                    React.createElement('i', { className: 'icon fa fa-check' }),
                    React.createElement(
                        'label',
                        null,
                        '\xA0'
                    )
                )
            );
        };

        var medalhasFacil = [{ value: 100 }, { value: 200 }, { value: 300 }].map(_render_medalha, this);
        var medalhasMedio = [{ value: 400 }, { value: 500 }, { value: 600 }, { value: 700 }].map(_render_medalha, this);
        var medalhasDificil = [{ value: 800 }, { value: 900 }, { value: 1000 }].map(_render_medalha, this);

        var radioColorsRow1 = [{ value: "rgb(255,255,255)", index: 1 }, { value: "rgb(232, 56, 79)", index: 2 }, { value: "rgb(253, 97, 44)", index: 3 }, { value: "rgb(253, 145, 0)", index: 4 }, { value: "rgb(238, 195, 0)", index: 5 }, { value: "rgb(164, 207, 48)", index: 6 }, { value: "rgb(98, 210, 111)", index: 7 }, { value: "rgb(55, 197, 171)", index: 8 }].map(_render_color, this);

        var radioColorsRow2 = [{ value: "rgb(32, 170, 234)", index: 9 }, { value: "rgb(65, 134, 224)", index: 10 }, { value: "rgb(122, 111, 240)", index: 11 }, { value: "rgb(170, 98, 227)", index: 12 }, { value: "rgb(227, 98, 227)", index: 13 }, { value: "rgb(234, 78, 157)", index: 14 }, { value: "rgb(252, 145, 173)", index: 15 }, { value: "rgb(141, 163, 166)", index: 16 }].map(_render_color, this);

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_show_medalha', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_nova_medalha_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered modal_show_medalha', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Medalha'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'div',
                            {
                                className: 'medal-avatar medal-avatar-lg m-auto',
                                style: { "backgroundColor": `${this.state.medalha.cor}` } },
                            React.createElement(
                                'div',
                                { className: 'medal-avatar-text' },
                                this.state.medalha.nome.getInitials()
                            )
                        ),
                        React.createElement(
                            'h5',
                            { className: 'title' },
                            this.state.medalha.nome
                        ),
                        React.createElement(
                            'div',
                            { className: 'pontos' },
                            React.createElement(FaIcon, { icon: 'credito', className: '' }),
                            ' ',
                            this.state.medalha.pontos
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Descri\xE7\xE3o'
                        ),
                        React.createElement('div', { dangerouslySetInnerHTML: { "__html": this.state.medalha.descricao } }),
                        React.createElement('br', null),
                        React.createElement(
                            'p',
                            null,
                            'Premiados'
                        ),
                        React.createElement(
                            'div',
                            { className: 'form-group' },
                            React.createElement(
                                'div',
                                { className: 'row mb-2' },
                                React.createElement(
                                    'div',
                                    { className: 'col-2' },
                                    React.createElement(
                                        'div',
                                        { className: 'd-inline text-center' },
                                        React.createElement('label', { className: 'select-cover select-cover-sm m-auto border-0', style: { "backgroundImage": "url('https://picsum.photos/1920/1080?image=994')" } })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-8 d-flex align-items-center' },
                                    '#1'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-2 d-flex align-items-center' },
                                    React.createElement(FaIcon, { icon: 'ideia', className: 'mr-1' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row mb-2' },
                                React.createElement(
                                    'div',
                                    { className: 'col-2' },
                                    React.createElement(
                                        'div',
                                        { className: 'd-inline text-center' },
                                        React.createElement('label', { className: 'select-cover select-cover-sm m-auto border-0', style: { "backgroundImage": "url('https://picsum.photos/1920/1080?image=994')" } })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-8 d-flex align-items-center' },
                                    '#2'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-2 d-flex align-items-center' },
                                    React.createElement(FaIcon, { icon: 'pesquisa', className: 'mr-1' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row mb-2' },
                                React.createElement(
                                    'div',
                                    { className: 'col-2' },
                                    React.createElement(
                                        'div',
                                        { className: 'd-inline text-center' },
                                        React.createElement('label', { className: 'select-cover select-cover-sm m-auto border-0', style: { "backgroundImage": "url('https://picsum.photos/1920/1080?image=994')" } })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-8 d-flex align-items-center' },
                                    'Ideia #3'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-2 d-flex align-items-center' },
                                    React.createElement(FaIcon, { icon: 'inovacao', className: 'mr-1' })
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-raised btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-raised btn-primary', onClick: this.handleSubmit },
                            'Editar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import { getTimeRemaining } from '../main';
import SpinnerLDSRipple from './react_spinner_lds_ripple';
import FaIcon from './react_faicon';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class ModalTempoRestante extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.plataforma_id = props.plataforma_id;
        this.state.startDate = props.startDate;
        this.state.endDate = props.endDate;
        this.state.timerId;

        this.modal = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);

        this.socket = io.connect(WS_NAMESPACES.PLATAFORMAS);
        this.room = 'asd';

        let that = this;

        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketPlataformas client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (data.error) {
                    alert(data.message);
                    return;
                }
                var endDate = moment(data.data.createdAt).add(data.data.encerrarFasePeriodoTempo_valor, 'days').toDate();
                that.setState({
                    loading: false,
                    plataforma: data.data,
                    startDate: data.data.data,
                    endDate: endDate,
                    timeRemaining: getTimeRemaining(endDate)
                });
                if (that.state.timerId) {
                    clearInterval(that.state.timerId);
                }
                that.state.timerId = setInterval(function () {
                    that.setState({
                        timeRemaining: getTimeRemaining(that.state.endDate)
                    });
                }, 1000);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    componentDidMount() {
        var that = this;
        window.$(this.modal.current).on('show.bs.modal', function (e) {
            that.socket.emit(WS_EVENTS.GET, { type: 'plataforma', _id: that.state.plataforma_id });
        });
    }

    componentWillUnmount() {
        if (this.state.timerId) {
            clearInterval(timerId);
        }
    }

    getInitialState() {
        return {
            loading: true,
            plataforma_id: "",
            plataforma: {},
            startDate: null,
            endDate: null,
            timeRemaining: {
                dias: "00",
                horas: "00",
                minutos: "00",
                segundos: "00"
            }
        };
    }

    handleSubmit() {
        alert('Editar!');
    }

    render() {

        return React.createElement(
            'div',
            { ref: this.modal, className: 'modal fade', id: 'modal_tempo_restante', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'modal_nova_medalha_title', 'aria-hidden': 'true' },
            React.createElement(
                'div',
                { className: 'modal-dialog modal-dialog-centered modal_tempo_restante', role: 'document' },
                React.createElement(
                    'div',
                    { className: 'modal-content' },
                    React.createElement(
                        'div',
                        { className: 'modal-header' },
                        React.createElement(
                            'h5',
                            { className: 'modal-title', id: 'exampleModalLongTitle' },
                            'Tempo Restante'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'close', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                        )
                    ),
                    this.state.loading ? React.createElement(
                        'div',
                        { className: 'modal-body text-center' },
                        React.createElement(SpinnerLDSRipple, null)
                    ) : React.createElement(
                        'div',
                        { className: 'modal-body' },
                        React.createElement(
                            'div',
                            { className: 'text-center' },
                            React.createElement('label', { className: 'select-cover m-auto border-0', style: { "backgroundImage": `url(${this.state.plataforma.cover})` } })
                        ),
                        React.createElement(
                            'h5',
                            { className: 'title', style: { fontSize: "30px" } },
                            this.state.plataforma.nome
                        ),
                        React.createElement(
                            'div',
                            { className: 'timer' },
                            React.createElement(FaIcon, { icon: 'timer', className: 'fa-2x timer-icon mr-2' }),
                            React.createElement(
                                'h3',
                                { className: 'timer-text text-headline-bold' },
                                ` ${this.state.timeRemaining.dias} dias, ${this.state.timeRemaining.horas}:${this.state.timeRemaining.minutos}:${this.state.timeRemaining.segundos}`
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'row text-subheader' },
                            React.createElement(
                                'div',
                                { className: 'col-5 text-right' },
                                React.createElement(
                                    'strong',
                                    null,
                                    'In\xEDcio'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-7' },
                                ` ${moment(this.state.startDate).format('DD/MM/YYYY [às] HH:mm')}`
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'row text-subheader' },
                            React.createElement(
                                'div',
                                { className: 'col-5 text-right' },
                                React.createElement(
                                    'strong',
                                    null,
                                    'Fim'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-7' },
                                ` ${moment(this.state.endDate).format('DD/MM/YYYY [às] HH:mm')}`
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'modal-footer' },
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-secondary mr-auto', 'data-dismiss': 'modal' },
                            'Fechar'
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-primary', onClick: this.handleSubmit },
                            'Editar'
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import ModeradorMiniCard from './react_moderador_minicard';
import Slider from './react_slider';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';
import { comparaPorNome } from '../main';

export default class ModeradorBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: props.object_id ? props.object_id : "",
            moderadores: props.moderadores ? props.moderadores : []
        };

        this.getInitialState = this.getInitialState.bind(this);

        this.socket = io.connect(WS_NAMESPACES.PLATAFORMAS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketPlataformas client connected ' + that.room);
            this.emit('join', that.room);

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);
                return;
                if (data.type !== 'moderadores') return;

                that.state.moderadores = data.data;
                that.setState({
                    moderadores: that.state.moderadores
                });
            });
        });
    }

    getInitialState() {
        return [];
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            _id: nextProps.object_id,
            moderadores: nextProps.moderadores
        };
    }

    render() {

        var _boxes = this.state.moderadores.sort(comparaPorNome).map(function (moderador) {
            return React.createElement(ModeradorMiniCard, { moderador: moderador });
        }, this);

        _boxes.push(function () {
            return React.createElement(
                'div',
                {
                    key: _boxes.length + 1,
                    className: 'popover-card d-inline-block popover-author mr-2 mb-2 d-flex justify-content-around align-items-center align-content-center flex-column',
                    'data-slide': 'true',
                    'data-toggle': 'modal',
                    'data-target': '#modal_convidar_moderador',
                    clickable: '' },
                React.createElement(
                    'h3',
                    { className: 'senno-popover-header', style: { "borderBottom": "none" } },
                    React.createElement(
                        'div',
                        { className: 'circle-border circle-border-black w-5em_i h-5em_i' },
                        React.createElement('i', { className: 'fa fa-plus' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'senno-popover-body text-center' },
                    'CONVIDAR',
                    React.createElement('br', null),
                    'MODERADOR'
                )
            );
        }());

        return React.createElement(
            'div',
            null,
            React.createElement(Slider, { boxes: _boxes })
        );
    }
}
import React from 'react';
import ModeradorMiniCard from './react_moderador_minicard';
import Slider from './react_slider';
import { comparaPorNome } from '../main';

export default class ModeradorBoxShow extends React.Component {
    constructor(props) {
        super(props);

        this.modal = React.createRef();
        this.showModal = this.showModal.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
        this.renderBoxes = this.renderBoxes.bind(this);

        this.state = {
            plataforma_id: props.plataforma_id ? props.plataforma_id : "",
            moderadores: props.moderadores ? props.moderadores : [],
            selected_id: null
        };

        this.state._boxes = this.renderBoxes();
    }

    getInitialState() {
        return [];
    }

    showModal(e) {
        alert('Clicou!');
        // let $this = window.$(e.currentTarget);
        // this.setState({
        //     selected_id: $this.data('id')
        // })
    }

    componentDidUpdate() {
        if (!this.modal.current || !this.state.selected_id) {
            return;
        }
        let $modal = window.$(this.modal.current.modal.current);
        $modal.modal('show');
    }

    renderBoxes() {
        return this.state.moderadores.sort(comparaPorNome).map(function (moderador) {
            return React.createElement(ModeradorMiniCard, { moderador: moderador, onClick: this.showModal });
        }, this);
    }

    render() {

        return React.createElement(
            'div',
            null,
            React.createElement(Slider, { boxes: this.state._boxes })
        );
    }
}
import React from 'react';
import Input from './react_input';

export default class ModeradorMiniCard extends Input {
    constructor(props) {
        super(props);
    }

    render() {
        let moderador = this.props.moderador;
        return React.createElement(
            'div',
            {
                key: `${moderador._id}`,
                'data-id': moderador._id,
                className: `${this.props.popover ? React.createElement('div', { className: 'arrow' }) : null} popover-card d-inline-block popover-author mr-2 mb-2 d-flex flex-column justify-content-between`, role: 'tooltip',
                'data-slide': 'true',
                clickable: '',
                onClick: this.props.onClick },
            this.props.popover ? React.createElement('div', { className: 'arrow' }) : null,
            React.createElement(
                'h3',
                { className: 'senno-popover-header pt-0 pr-0 pl-0' },
                React.createElement(
                    'div',
                    { className: 'popover-autor text-center' },
                    React.createElement(
                        'div',
                        { className: 'popover-autor-avatar', style: { position: "relative" } },
                        React.createElement('div', { style: { backgroundColor: moderador.cor, height: "55px", width: "100%", borderRadius: ".3em .3em 0 0" } }),
                        React.createElement(
                            'div',
                            { style: { position: "relative", top: "-50px" } },
                            React.createElement('img', { className: 'avatar popover-autor-avatar', src: moderador.image }),
                            React.createElement(
                                'div',
                                { className: 'popover-autor-info' },
                                React.createElement(
                                    'div',
                                    { className: 'popover-autor-info-name font-weight-bold' },
                                    moderador.nome
                                ),
                                React.createElement(
                                    'div',
                                    {
                                        className: 'popover-autor-info-cargo text-uppercase' },
                                    moderador.funcao ? moderador.funcao.nome : null
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'senno-popover-body' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-lightbulb ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        moderador.ideias_count
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-bullseye ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        moderador.portfolios_count
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-flask ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        moderador.pesquisas_count
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-rocket ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        moderador.plataformas_count
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-fire ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        moderador.inovacoes_count
                    )
                )
            )
        );
    }
}
import React from 'react';
import { initModules } from '../utils/ModulesUtils';
import GrupoMiniCard from './react_grupo_minicard';
import PlataformaMiniCard from './react_plataforma_minicard';
import IdeiaMiniCard from './react_ideia_minicard';
import SpinnerLDSRipple from './react_spinner_lds_ripple';
import FaIcon from './react_faicon';
import { h } from '../main';
import GrupoBoxShow from './react_grupo_box_show';
import Slider from './react_slider';
import ModalEditarPerfil from './react_modal_editar_perfil';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class PerfilPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: null,
            grupos: [],
            plataformas: [],
            ideias: [],
            inovacoes: [],
            medalhas: []
        };

        this.state.user_id = props.user_id;

        this.socket = io.connect(WS_NAMESPACES.USUARIOS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (!data.type) return;

                switch (data.type) {
                    case "perfil":
                        that.state.usuario = data.data;
                        that.setState({
                            usuario: that.state.usuario
                        });
                        break;
                    case "grupos":
                        that.state.grupos = data.data;
                        that.setState({
                            grupos: that.state.grupos
                        });
                        break;
                    case "plataformas":
                        that.state.plataformas = data.data;
                        that.setState({
                            plataformas: that.state.plataformas
                        });
                        break;
                    case "ideias":
                        that.state.ideias = data.data;
                        that.setState({
                            ideias: that.state.ideias
                        });
                        break;

                    default:
                        break;
                }
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);
                console.log(data);

                if (!data.type) return;

                switch (data.type) {

                    case 'editar_perfil':
                        that.state.usuario = data.data;
                        that.setState({
                            usuario: that.state.usuario
                        });
                        break;

                    default:
                        break;
                }
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    componentDidUpdate() {
        initModules();
    }

    componentDidMount() {
        let that = this;
        this.socket.emit(WS_EVENTS.GET, {
            type: 'perfil',
            _id: that.state.user_id
        });
        this.socket.emit(WS_EVENTS.GET, {
            type: 'grupos',
            _id: that.state.user_id
        });
        this.socket.emit(WS_EVENTS.GET, {
            type: 'plataformas',
            _id: that.state.user_id
        });
        this.socket.emit(WS_EVENTS.GET, {
            type: 'ideias',
            _id: that.state.user_id
        });
    }

    render() {
        let usuario = this.state.usuario;
        let _grupos = this.state.grupos.map(function (_grupo) {
            return React.createElement(GrupoMiniCard, {
                key: _grupo._id,
                grupo: _grupo });
        });

        let _plataformas = this.state.plataformas.map(function (_plataforma) {
            return React.createElement(PlataformaMiniCard, {
                key: _plataforma._id,
                plataforma: _plataforma });
        });

        let _ideias = this.state.ideias.map(function (_ideia) {
            return React.createElement(IdeiaMiniCard, {
                key: _ideia._id,
                ideia: _ideia });
        });

        let _inovacoes = [].map(function (_inovacao) {
            return null;
        });

        let _medalhas = [].map(function (_medalha) {
            return null;
        });

        if (!usuario) {
            return React.createElement(SpinnerLDSRipple, null);
        }

        return React.createElement(
            'div',
            { style: { position: "relative" } },
            React.createElement(
                'div',
                { className: 'cover grupo-cover', style: { "backgroundColor": usuario.cor || 'white' } },
                React.createElement(
                    'a',
                    { href: this.state.withLink ? `/grupos/${grupo._id}` : 'javascript:void(0);' },
                    React.createElement('div', { className: 'usuario-cover-overlay' }),
                    React.createElement('div', { className: 'cover-content d-flex align-items-center align-content-center word-ellipsis' })
                )
            ),
            React.createElement(
                'div',
                { className: 'text-center', style: { position: "relative", top: "-100px" } },
                React.createElement(
                    'div',
                    { className: 'd-inline-block' },
                    React.createElement('img', { className: 'avatar tile-author-avatar',
                        src: usuario.image,
                        style: { "width": "200px", "height": "200px" } }),
                    React.createElement(
                        'div',
                        { className: 'text-headline', style: { marginTop: "30px" } },
                        usuario.name
                    ),
                    React.createElement(
                        'div',
                        { className: 'text-subheader text-uppercase', style: { marginTop: "10px" } },
                        usuario.papeis && usuario.papeis.length > 0 ? usuario.papeis[0].nome : ''
                    ),
                    React.createElement(
                        'div',
                        { className: 'text-subheader-bold mt-4', style: {} },
                        'Sobre'
                    ),
                    React.createElement(
                        'div',
                        { className: '', style: {} },
                        React.createElement('p', { dangerouslySetInnerHTML: { "__html": usuario.sobre } })
                    ),
                    React.createElement(
                        'div',
                        null,
                        React.createElement(FaIcon, { icon: 'localizacao', className: 'fa-2x mr-1' }),
                        React.createElement(
                            'span',
                            { className: 'text-subheader-bold mr-4' },
                            usuario.localizacao ? usuario.localizacao.nome : ""
                        ),
                        React.createElement(FaIcon, { icon: 'funcao', className: 'fa-2x mr-1' }),
                        React.createElement(
                            'span',
                            { className: 'text-subheader-bold mr-4' },
                            usuario.funcao ? usuario.funcao.nome : ""
                        ),
                        React.createElement(FaIcon, { icon: 'fa-calendar-alt', className: 'fa-2x mr-1' }),
                        React.createElement(
                            'span',
                            { className: 'text-subheader-bold mr-4' },
                            h.short_date(usuario.createdAt)
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'plataforma-action mt-4', 'data-toggle': 'modal', 'data-target': '#modal_editar_perfil' },
                        React.createElement(
                            'button',
                            { className: 'btn btn-danger btn-block' },
                            'Editar'
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { id: 'content', className: `m-auto` },
                React.createElement(
                    'div',
                    { className: 'perfil-page content' },
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'p',
                            { className: 'text-subheader' },
                            React.createElement(FaIcon, { icon: 'grupo' }),
                            ' ',
                            React.createElement(
                                'strong',
                                null,
                                'Grupos'
                            )
                        )
                    ),
                    React.createElement(GrupoBoxShow, { grupos: this.state.grupos }),
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'p',
                            { className: 'text-subheader' },
                            React.createElement(FaIcon, { icon: 'plataforma' }),
                            ' ',
                            React.createElement(
                                'strong',
                                null,
                                'Plataformas'
                            )
                        )
                    ),
                    React.createElement(Slider, { boxes: _plataformas }),
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'p',
                            { className: 'text-subheader' },
                            React.createElement(FaIcon, { icon: 'ideia' }),
                            ' ',
                            React.createElement(
                                'strong',
                                null,
                                'Ideias'
                            )
                        )
                    ),
                    React.createElement(Slider, { boxes: _ideias }),
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'p',
                            { className: 'text-subheader' },
                            React.createElement(FaIcon, { icon: 'inovacao' }),
                            ' ',
                            React.createElement(
                                'strong',
                                null,
                                'Inova\xE7\xF5es'
                            )
                        )
                    ),
                    React.createElement(Slider, { boxes: _inovacoes }),
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'p',
                            { className: 'text-subheader' },
                            React.createElement(FaIcon, { icon: 'medalha' }),
                            ' ',
                            React.createElement(
                                'strong',
                                null,
                                'Medalhas'
                            )
                        )
                    ),
                    React.createElement(Slider, { boxes: _medalhas })
                )
            ),
            React.createElement(ModalEditarPerfil, { user_id: this.props.user_id })
        );
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import LoadingTiles from './react_loading_tiles';
import { showSocketError } from '../main';
import FiltersNavbar from './react_filters_navbar';
import { setModuleButton, setModulePopoverHover, setModuleTooltip } from '../utils/ModulesUtils';
import TransparentTiles from './react_transparent_tiles';
import PlataformaBox from './react_plataforma_box';
import ModalModeradores from './react_modal_moderadores';
import ModalGrupos from './react_modal_grupos';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class PlataformasList extends React.Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.plataformas = props.plataformas || this.state.plataformas;
        this.state._loading = function () {
            return React.createElement(LoadingTiles, null);
        }();

        this.list = React.createRef();

        this.updateList = this.updateList.bind(this);
        this.loadMore = this.loadMore.bind(this);

        this.socket = io.connect(WS_NAMESPACES.PLATAFORMAS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketPlataformas client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (data.error) {
                    showSocketError(data.message);
                    return;
                }
                that.state.plataformas.push(...data.data);
                that.setState({
                    loading: false,
                    plataformas: that.state.plataformas,
                    noMore: data.data.length < 1
                });
            });

            this.on(WS_EVENTS.GET_ERROR, function (data) {
                if (data.error) {
                    showSocketError(data.message);
                    return;
                }
            });

            this.on(WS_EVENTS.GET_OK, function (data) {});

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    updateList(filter) {
        // Reinicia carregamento com novo filtro
        this.setState({
            loading: true,
            plataformas: []
        });
        let data = {
            type: 'plataformas',
            filter: filter ? filter : window.$('#filterNavbar #listFilters .list-filters .nav-item.active').data('filter')
        };
        this.socket.emit(WS_EVENTS.GET, data);
    }

    loadMore(e) {
        // Adiciona na lista mais itens do mesmo filtro
        e.preventDefault();
        let that = this;
        let _ids = this.state.plataformas.map(_obj => _obj._id);
        this.socket.emit(WS_EVENTS.GET, {
            type: 'plataformas',
            filter: that.state.filter ? that.state.filter : window.$('#filterNavbar #listFilters .list-filters .nav-item.active').data('filter'),
            _ids: _ids
        });
    }

    componentDidMount() {
        let that = this;
        this.updateList();
        let _doc;
        _doc = document.querySelector('#template_second_navbar');
        let _template_second_navbar = _doc ? ReactDOM.render(React.createElement(FiltersNavbar, { text_meus_objetos: "Minhas Plataformas", with_dropdown_portfolios: false }), _doc) : {};
    }

    componentDidUpdate() {
        let that = this;
        window.$('#filterNavbar #listFilters .list-filters .nav-item').unbind('click').bind('click', function () {
            let $this = window.$(this);
            $this.closest('ul').find('li').removeClass('active');
            $this.addClass('active');
            that.state.filter = $this.data('filter');
            that.updateList(that.state.filter);
        });
        let tooltips = window.$(this.list.current).find('[data-toggle="tooltip"]').toArray();
        let buttons = window.$(this.list.current).find('[data-module="button"]').toArray();
        let popoverHover = window.$(this.list.current).find('[data-module="popover-hover"]').toArray();
        setModuleTooltip(tooltips.length > 0 ? tooltips : undefined);
        setModuleButton(buttons.length > 0 ? buttons : undefined);
        setModulePopoverHover(popoverHover.length > 0 ? popoverHover : undefined);
    }

    getInitialState() {
        return {
            plataformas: [],
            noMore: false
        };
    }

    render() {

        var _transparents = React.createElement(TransparentTiles, { length: this.state.plataformas.length });

        var _plataformas = this.state.plataformas.length < 1 ? function () {
            return React.createElement(
                'p',
                null,
                'Nenhuma plataforma!'
            );
        }() : this.state.plataformas.map(function (plataforma) {
            return React.createElement(PlataformaBox, { key: plataforma._id, plataforma: plataforma });
        });

        return React.createElement(
            'div',
            { ref: this.list },
            React.createElement(
                'div',
                { id: 'plataformas', className: 'tile-grid' },
                this.state.loading ? this.state._loading : _plataformas,
                this.state.loading ? void 0 : _transparents
            ),
            React.createElement(
                'div',
                { className: 'd-flex justify-content-center align-items-center flex-wrap' },
                this.state.noMore && this.state.plataformas && this.state.plataformas.length > 0 ? React.createElement(
                    'p',
                    null,
                    'Por enquanto, todas as plataformas foram carregadas'
                ) : React.createElement(
                    'p',
                    null,
                    '\xA0'
                )
            ),
            React.createElement(
                'div',
                { className: 'd-flex justify-content-center align-items-center flex-wrap mb-5' },
                React.createElement(
                    'button',
                    { className: 'btn btn-outline-info', onClick: this.loadMore },
                    'Carregar mais'
                )
            ),
            React.createElement(ModalModeradores, null),
            React.createElement(ModalGrupos, null)
        );
    }
}
import React from 'react';
import FaIcon from './react_faicon';
import { h } from '../main';
import TileBoxPlataformaIdeiasInfo from './react_tile_box_plataforma_ideias_info';
import TileBoxPlataformaInovacoesInfo from './react_tile_box_plataforma_inovacoes_info';
import TileBoxAutor from './react_tile_box_autor';
import TileBoxGrupos from './react_tile_box_grupos';
import PortfolioMiniCard from './react_portfolio_minicard';
import PlataformaIconPermissao from './react_plataforma_icon_permissao';

export default class PlataformaBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.state.plataforma = props.plataforma;
    }

    render() {
        let plataforma = this.state.plataforma;
        let membros = plataforma && plataforma.membros ? plataforma.membros : {};

        let _template_popover_portfolio = plataforma && plataforma.portfolio ? React.createElement(PortfolioMiniCard, { portfolio: plataforma.portfolio, popover: true }) : null;

        let href = `/plataformas/${plataforma._id}`;

        return React.createElement(
            'a',
            {
                key: plataforma._id,
                clickable: '',
                className: 'tile tile-plataforma',
                href: href,
                'data-slide': 'true' },
            React.createElement(
                'div',
                { className: 'tile-photo-container hovereffect' },
                React.createElement('img', { className: 'tile-photo', src: `${plataforma.cover}` }),
                React.createElement(
                    'div',
                    { className: 'overlay' },
                    React.createElement(
                        'div',
                        { className: 'top-left-info' },
                        plataforma.encerrarFaseLimiteIdeia && plataforma.encerrarFaseLimiteIdeia_valor ? React.createElement(
                            'a',
                            { className: 'tile-plataforma-quantidade', href: 'javascript:void(0)', 'data-toggle': 'tooltip', 'data-placement': 'right', title: `${plataforma.ideias.length}/${plataforma.encerrarFaseLimiteIdeia_valor}` },
                            React.createElement(
                                'div',
                                { className: 'circle-border' },
                                React.createElement(FaIcon, { icon: 'fa-infinity' })
                            )
                        ) : null,
                        plataforma.encerrarFasePeriodoTempo && plataforma.encerrarFasePeriodoTempo_valor && h.getTimeRemainingStringFromDays(plataforma.createdAt, plataforma.encerrarFasePeriodoTempo_valor) != null ? React.createElement(
                            'a',
                            { className: 'tile-plataforma-timer', href: 'javascript:void(0)', 'data-toggle': 'tooltip', 'data-placement': 'right', title: `${h.getTimeRemainingStringFromDays(plataforma.createdAt, plataforma.encerrarFasePeriodoTempo_valor)}` },
                            React.createElement(
                                'div',
                                { className: 'circle-border' },
                                React.createElement(FaIcon, { icon: 'fa-clock' })
                            )
                        ) : null
                    ),
                    React.createElement(
                        'div',
                        { className: 'info' },
                        React.createElement(TileBoxPlataformaIdeiasInfo, { quantidade: plataforma.ideias.length }),
                        React.createElement(TileBoxPlataformaInovacoesInfo, { quantidade: lodash.compact(plataforma.ideias.map(function (_obj) {
                                return _obj.inovacao;
                            })).length })
                    ),
                    React.createElement(
                        'a',
                        { className: 'tile-plataforma-flag', href: 'javascript:void(0)', 'data-id': plataforma._id, 'data-objeto': 'plataforma', 'data-toggle': 'modal', 'data-target': '#modal_denunciar' },
                        React.createElement(
                            'div',
                            { className: 'circle-border', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Denunciar' },
                            React.createElement(FaIcon, { icon: 'fa-flag', className: 'pt-1' })
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'tile-plataforma-pin', href: 'javascript:void(0)', 'data-toggle': 'modal', 'data-target': '#modal_salvar_favorito' },
                        React.createElement(
                            'div',
                            { className: 'circle-border', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Salvar' },
                            React.createElement(FaIcon, { icon: 'fa-thumbtack', className: 'pt-1' })
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'tile-plataforma-share', href: 'javascript:void(0)', 'data-href': href, 'data-toggle': 'modal', 'data-target': '#modal_compartilhar' },
                        React.createElement(
                            'div',
                            { className: 'circle-border', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Compartilhar' },
                            React.createElement(FaIcon, { icon: 'fa-share-alt', className: 'pt-1' })
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'tile-info' },
                React.createElement(
                    'div',
                    { className: 'tile-title text-subheader' },
                    React.createElement(FaIcon, { icon: 'plataforma' }),
                    ` ${plataforma.nome}`
                ),
                React.createElement(
                    'div',
                    { className: 'tile-author-date d-flex mt-20px' },
                    React.createElement(TileBoxAutor, { autor: plataforma.autor, moderadores: membros.moderadores, _id: plataforma._id }),
                    React.createElement(
                        'div',
                        { className: 'tile-date ml-auto' },
                        h.short_date(plataforma.createdAt)
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'd-flex mt-20px align-items-end', style: { "flex": "1" } },
                    React.createElement(TileBoxGrupos, { grupos: plataforma.membros.grupos, _id: plataforma._id }),
                    React.createElement(
                        'div',
                        { className: 'tile-permission ml-auto' },
                        React.createElement(PlataformaIconPermissao, { permissao: plataforma.permissao })
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'tile-footer mt-2' },
                plataforma.usuarioParticipa ? React.createElement(
                    'button',
                    { className: 'btn btn-box btn-plataforma-participando btn-block mb-0' },
                    'Participando'
                ) : plataforma.possuiPedidoParticipacao ? React.createElement(
                    'button',
                    { className: 'btn btn-box btn-plataforma-pedido-pendente btn-block mb-0' },
                    'Pedido Pendente'
                ) : React.createElement(
                    'button',
                    { className: 'btn btn-box btn-plataforma-participar btn-block mb-0' },
                    'Participar'
                )
            )
        );
    }
}
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PortfolioMiniCard from './react_portfolio_minicard';
import TileBoxAutor from './react_tile_box_autor';
import { h } from '../main';
import FaIcon from './react_faicon';
import TileBoxPlataformaIdeiasInfo from './react_tile_box_plataforma_ideias_info';
import TileBoxPlataformaInovacoesInfo from './react_tile_box_plataforma_inovacoes_info';
import TileBoxGrupos from './react_tile_box_grupos';

export default class PlataformaCover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            plataforma: null,
            withLink: null
        };
        this.state.plataforma = props.plataforma;
        this.state.withLink = props.withLink;
    }

    render() {

        let plataforma = this.state.plataforma;
        let membros = plataforma && plataforma.membros ? plataforma.membros : {};

        let _template_popover_portfolio = plataforma && plataforma.portfolio ? React.createElement(PortfolioMiniCard, { portfolio: plataforma.portfolio, popover: true }) : null;

        return React.createElement(
            'div',
            { className: 'cover', style: { "backgroundImage": `url('${plataforma.cover}')` } },
            React.createElement(
                'a',
                { href: this.state.withLink ? `/plataformas/${plataforma._id}` : 'javascript:void(0);' },
                React.createElement('div', { className: 'cover-overlay' }),
                React.createElement(
                    'div',
                    { className: 'cover-content' },
                    React.createElement(
                        'a',
                        { className: 'cover-plataforma-author', href: '#' },
                        React.createElement(TileBoxAutor, { autor: plataforma.autor, moderadores: membros.moderadores, _id: plataforma._id }),
                        React.createElement(
                            'div',
                            { className: 'tile-date ml-4 pl-2' },
                            'em ',
                            h.short_date(plataforma.data)
                        )
                    ),
                    plataforma.portfolio ? React.createElement(
                        'a',
                        { className: 'cover-plataforma-portfolio', href: '#', 'data-toggle': 'popover-hover', 'data-placement': 'bottom', 'data-template': ReactDOMServer.renderToString(_template_popover_portfolio), 'data-content': ' ' },
                        React.createElement(FaIcon, { icon: 'portfolio' }),
                        ` ${plataforma.portfolio.nome}`
                    ) : null,
                    React.createElement(
                        'div',
                        { className: 'cover-info' },
                        React.createElement(
                            'div',
                            { className: 'cover-title' },
                            plataforma.nome
                        ),
                        React.createElement(
                            'div',
                            { className: 'd-block mb-4' },
                            React.createElement(TileBoxPlataformaIdeiasInfo, { quantidade: plataforma.ideias.length }),
                            React.createElement(TileBoxPlataformaInovacoesInfo, { quantidade: lodash.compact(plataforma.ideias.map(function (_obj) {
                                    return _obj.inovacao;
                                })).length })
                        ),
                        React.createElement(
                            'div',
                            { className: 'd-block' },
                            plataforma.encerrarFasePeriodoTempo && plataforma.encerrarFasePeriodoTempo_valor && h.getTimeRemainingStringFromDays(plataforma.createdAt, plataforma.encerrarFasePeriodoTempo_valor) != null ? React.createElement(
                                'div',
                                { className: 'plataforma-timespan d-inline mr-2', 'data-toggle': 'modal', 'data-target': '#modal_tempo_restante', clickable: true },
                                React.createElement(FaIcon, { icon: 'fa-stopwatch' }),
                                ` ${h.getTimeRemainingStringFromDays(plataforma.createdAt, plataforma.encerrarFasePeriodoTempo_valor)}`
                            ) : null,
                            plataforma.encerrarFaseLimiteIdeia && plataforma.encerrarFaseLimiteIdeia_valor ? React.createElement(
                                'div',
                                { className: 'plataforma-timespan d-inline', 'data-toggle': 'modal', 'data-target': '#modal_plataforma_quantidade_ideias', clickable: true },
                                React.createElement(FaIcon, { icon: 'fa-infinity' }),
                                ` ${plataforma.ideias.length}/${plataforma.encerrarFaseLimiteIdeia_valor}`
                            ) : null
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'cover-plataforma-groups', href: '#' },
                        React.createElement(TileBoxGrupos, { grupos: plataforma.membros.grupos, _id: plataforma._id })
                    ),
                    React.createElement(
                        'a',
                        { className: 'cover-plataforma-flag', href: '#', 'data-toggle': 'modal', 'data-id': plataforma._id, 'data-objeto': 'plataforma', 'data-target': '#modal_denunciar', 'data-id': plataforma._id },
                        React.createElement(
                            'div',
                            { className: 'circle-border', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Denunciar' },
                            React.createElement('i', { className: 'fa fa-flag pt-1' })
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'cover-plataforma-pin', 'data-toggle': 'modal', 'data-target': '#modal_salvar_favorito' },
                        React.createElement(
                            'div',
                            { className: 'circle-border', href: '#', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Salvar' },
                            React.createElement(FaIcon, { icon: 'fa-thumbtack', className: 'pt-1' })
                        )
                    ),
                    React.createElement(
                        'a',
                        { className: 'cover-plataforma-share', href: '#', 'data-toggle': 'modal', 'data-target': '#modal_compartilhar' },
                        React.createElement(
                            'div',
                            { className: 'circle-border', href: '#', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Compartilhar' },
                            React.createElement(FaIcon, { icon: 'fa-share-alt', className: 'pt-1' })
                        )
                    )
                )
            )
        );
    }
}
import React from 'react';
import { debounce, serializeDataContainer, h } from '../main';
import { new_medal, setModuleRedactor, setModuleFormWizard, setModuleDatetimePicker, setModuleTipBox, setModulePopover } from '../utils/ModulesUtils';
import FaIcon from './react_faicon';
import InputHidden from './react_input_hidden';
import { InputPlataformaTitulo } from './react_input_plataforma_titulo';
import InputPlataformaResumo from './react_input_plataforma_resumo';
import InputPlataformaDescricao from './react_input_plataforma_descricao';
import MedalhaBox from './react_medalha_box';
import GrupoBox from './react_grupo_box';
import ModeradorBox from './react_moderador_box';
import SponsorBox from './react_sponsor_box';
import InputPlataformaValueProposition from './react_input_plataforma_value_proposition';
import DropdownFilterablePortfolios from './react_dropdown_filterable_portfolios';
import Radio from './react_radio';
import InputText from './react_input_text';
import Switch from './react_switch';
import SwitchIcon from './react_switch_icon';
import Range from './react_range';
import { DateTimeField } from './react_datetimepicker';
import ModalNovaMedalha from './react_modal_nova_medalha';
import ModalConvidarGrupo from './react_modal_convidar_grupo';
import ModalConvidarModerador from './react_modal_convidar_moderador';
import ModalConvidarSponsor from './react_modal_convidar_sponsor';
import { InputPlataformaTags } from './react_input_plataforma_tags';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class PlataformaEdit extends React.Component {
    constructor(props) {
        super(props);

        // Methods
        this.getInitialState = this.getInitialState.bind(this);
        this.updatePlataforma = this.updatePlataforma.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleEncerrarFaseManualmente = this.handleEncerrarFaseManualmente.bind(this);
        this.coverOnChangeHandler = this.coverOnChangeHandler.bind(this);
        this.coverOnChange = this.coverOnChange.bind(this);
        this.readBLOB = this.readBLOB.bind(this);
        this.removeModerador = this.removeModerador.bind(this);
        this.teste = this.teste.bind(this);

        this.convidarModeradorOnShow = this.convidarModeradorOnShow.bind(this);
        this.convidarModeradorOnSubmit = this.convidarModeradorOnSubmit.bind(this);

        this.sendSocket = debounce(function () {
            console.log(that.state.plataforma);
            that.socket.emit(WS_EVENTS.POST, that.state.plataforma);
            console.log('socket emited');
        }, 1000);

        // Initial State
        this.state = this.getInitialState();

        // State from props
        this.state.plataforma_id = props.plataforma_id;

        // Refs
        this.form = React.createRef();
        this.inputCover = React.createRef();

        this.socket = io.connect(WS_NAMESPACES.PLATAFORMAS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketPlataformas client connected ');
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (!data.data) return;

                if (data.type === 'plataforma') {
                    that.state.plataforma = data.data;
                    that.setState({
                        plataforma: that.state.plataforma
                    });
                } else if (data.type === 'moderadores') {
                    that.setState({
                        moderadoresLeftList: data.data.left,
                        moderadoresRightList: data.data.right
                    });
                }
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);

                if (!data.data) return;

                if (data.type === 'end upload') {
                    that.state.plataforma.cover = data.data.cover;
                    that.setState({
                        plataforma: that.state.plataforma,
                        uploadingCover: true
                    });
                    window.$('[name="cover"][type="hidden"]').val(that.state.plataforma.cover).trigger('change').trigger('keyup');
                }

                if (data.type === 'request slice upload') {
                    that.currentSlice = data.data.currentSlice;
                    that.fileName = data.data.fileName;
                    var place = data.data.currentSlice * 100000,
                        slice = that.file.slice(place, place + Math.min(100000, that.file.size - place));

                    that.fileReader.readAsArrayBuffer(slice);
                }

                if (data.type === 'grupos') {
                    that.state.plataforma.membros.grupos = data.data;
                    that.setState({
                        plataforma: that.state.plataforma
                    });
                }

                if (data.type === 'moderadores') {
                    that.state.plataforma.membros.moderadores = data.data;
                    that.setState({
                        plataforma: that.state.plataforma
                    });
                }

                if (data.type === 'sponsors') {
                    that.state.plataforma.membros.sponsors = data.data;
                    that.setState({
                        plataforma: that.state.plataforma
                    });
                }
            });

            this.on(WS_EVENTS.POST_ERROR, function (data) {
                log(WS_EVENTS.POST_ERROR);
                alert(data);
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    getInitialState() {
        return {
            plataforma: null,
            plataforma_id: null
        };
    }

    componentDidUpdate() {
        this.coverOnChange();
        new_medal.init();
        setModuleRedactor();
        setModuleFormWizard();
        setModuleDatetimePicker();
        setModuleTipBox();
        setModulePopover();
        // setModuleChips();
    }

    componentDidMount() {
        this.socket.emit(WS_EVENTS.GET, {
            type: 'plataforma',
            _id: this.state.plataforma_id
        });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!prevState.plataforma) {
            return {
                plataforma: null,
                plataforma_id: nextProps.plataforma_id
            };
        }
        // Permissoes
        if (!prevState.plataforma.permissoes_moderadores) {
            prevState.plataforma.permissoes_moderadores = {};
            prevState.plataforma.membros.moderadores.forEach(function (_mod) {
                prevState.plataforma.permissoes_moderadores[_mod._id] = {
                    _id: _mod._id,
                    name: _mod.name,
                    image: _mod.image,
                    ativo: "false",
                    permissoes: {
                        "editar": "false",
                        "aprovar-agente": "false",
                        "ideia": "false",
                        "pesquisa": "false",
                        "inovacao": "false"
                    }
                };
            });
        } else {
            let permissoes_existentes = Object.keys(prevState.plataforma.permissoes_moderadores);
            let permissoes_novas = prevState.plataforma.membros.moderadores.map(function (_mod) {
                return _mod._id;
            });

            let nao_incluidas = lodash.difference(permissoes_existentes, permissoes_novas);

            let moderadores_atuais = prevState.plataforma.membros.moderadores.map(function (_mod) {
                return _mod._id;
            });
            // Permissoes removidas
            nao_incluidas.forEach(function (p) {
                delete prevState.plataforma.permissoes_moderadores[p];
            });

            prevState.plataforma.membros.moderadores.forEach(function (_mod) {
                if (!prevState.plataforma.permissoes_moderadores[_mod._id]) {
                    prevState.plataforma.permissoes_moderadores[_mod._id] = {
                        _id: _mod._id,
                        name: _mod.name,
                        image: _mod.image,
                        ativo: "false",
                        permissoes: {
                            "editar": "false",
                            "aprovar-agente": "false",
                            "ideia": "false",
                            "pesquisa": "false",
                            "inovacao": "false"
                        }
                    };
                }
            });
        }
        return {
            plataforma: prevState.plataforma
        };
    }

    coverOnChangeHandler(e) {
        this.readBLOB(this.inputCover.current);
        var fileName = '';
        if (this.files && this.files.length > 1) fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);else fileName = e.target.value.split('\\').pop();

        if (fileName) {
            // label.querySelector( 'span' ) ? label.querySelector( 'span' ).innerHTML = fileName : void 0;
        } else {
                // label.innerHTML = labelVal;
            }
    }

    coverOnChange() {
        let that = this;
        if (!this.inputCover.current) {
            return;
        }
        this.inputCover.current.removeEventListener('change', this.coverOnChangeHandler);
        this.inputCover.current.addEventListener('change', this.coverOnChangeHandler);
    }

    readBLOB(input) {
        let that = this;
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            that.fileReader = new FileReader();
            that.file = input.files[0];
            let slice = that.file.slice(0, 100000);

            that.fileReader.onload = function (evt) {
                var arrayBuffer = that.fileReader.result;
                that.currentSlice = that.currentSlice || 0;
                that.fileName = that.fileName;
                that.socket.emit(WS_EVENTS.POST, {
                    _id: that.state.plataforma._id,
                    type: 'slice upload',
                    data: {
                        name: that.file.name,
                        type: that.file.type,
                        size: that.file.size,
                        data: arrayBuffer,
                        currentSlice: that.currentSlice,
                        fileName: that.fileName
                    }
                });
                that.setState({
                    uploadingCover: true
                });
            };
            that.fileReader.readAsArrayBuffer(slice);

            reader.onload = function (e) {
                $('.select-cover').css({ 'background-size': 'cover', 'background-position': 'center', 'background-image': `url(${e.target.result})` });
            };
            reader.readAsDataURL(that.file);
        }
    }

    removeModerador(e) {
        e.preventDefault();
        let $this = $(e.currentTarget);
        let _mod_id = $this.data('id');
        if (!_mod_id) {
            return;
        }
        log('mods');
        this.state.plataforma.membros.moderadores = this.state.plataforma.membros.moderadores.filter(_mod => _mod._id !== _mod_id);
        let plataforma = this.state.plataforma;
        this.setState({
            plataforma: plataforma
        });
    }

    handleEncerrarFaseManualmente(e) {
        let $this = $(e.currentTarget);
        let $parent = $this.closest('.form-group');

        if ($this.val() == "true") {
            $parent.find('div.checkbox.disabled').addClass('disabled');
            $parent.find('input[type=\'checkbox\']').attr('disabled', '').prop('checked', null);
        } else {
            $parent.find('div.checkbox.disabled').removeClass('disabled');
            $parent.find('input[type=\'checkbox\']').attr('disabled', null);
        }
    }

    handleDate(e, m) {
        this.state.publicacao_programada_valor = new Date(parseInt(m));
        this.updatePlataforma(e);
    }

    updatePlataforma(e) {
        console.log('updatePlataforma');
        let newPlataforma = serializeDataContainer(this.form.current);
        if (newPlataforma.encerrarFaseManualmente === "true" || newPlataforma.encerrarFaseManualmente == true) {
            newPlataforma.encerrarFaseLimiteIdeia = "false";
            newPlataforma.encerrarFaseLimiteIdeia_valor = null;
            newPlataforma.encerrarFasePeriodoTempo = "false";
            newPlataforma.encerrarFasePeriodoTempo_valor = null;
        }

        if (newPlataforma.publicacao_programada === "true") {
            newPlataforma.publicacao_programada_valor = this.state.publicacao_programada_valor || this.state.plataforma.publicacao_programada_valor;
        } else {
            newPlataforma.publicacao_programada_valor = null;
        }

        if (e.currentTarget.name === "criterio_avaliacao_dificuldade_impacto") {
            if (e.currentTarget.checked) newPlataforma.criterio_avaliacao_dificuldade_impacto = "true";else delete newPlataforma.criterio_avaliacao_dificuldade_impacto;
        } else {
            if (Array.isArray(newPlataforma.criterio_avaliacao_dificuldade_impacto)) {
                if (newPlataforma.criterio_avaliacao_dificuldade_impacto.indexOf("true") > -1) {
                    newPlataforma.criterio_avaliacao_dificuldade_impacto = "true";
                } else {
                    delete newPlataforma.criterio_avaliacao_dificuldade_impacto;
                }
            }
        }

        newPlataforma.autor = this.state.plataforma.autor;
        newPlataforma.medalhas = this.state.plataforma.medalhas;
        newPlataforma.membros = {};
        newPlataforma.membros.grupos = this.state.plataforma.membros.grupos;
        newPlataforma.membros.moderadores = this.state.plataforma.membros.moderadores;
        newPlataforma.membros.sponsors = this.state.plataforma.membros.sponsors;

        this.state.plataforma = newPlataforma;
        this.setState({
            plataforma: this.state.plataforma
        });

        let that = this;
        this.sendSocket();
    }

    withPreviousButton() {
        return React.createElement('input', { type: 'button', name: 'previous', className: 'previous action-button', value: 'Anterior' });
    }

    withNextButton() {
        return React.createElement('input', { type: 'button', name: 'next', className: 'next action-button', value: 'Pr\xF3ximo' });
    }

    withSubmitButton() {
        return React.createElement('input', { type: 'submit', name: 'submit', className: 'submit action-button', value: 'Publicar' });
    }

    formWizardFooter(withPreviousButton = true, withNextButton = true, withSubmitButton = false) {
        return React.createElement(
            'div',
            { className: 'form-group d-flex flex-flow-row align-content-center align-items-center' },
            withPreviousButton ? this.withPreviousButton() : void 0,
            React.createElement(
                'div',
                { className: 'sysop-container m-auto' },
                React.createElement(
                    'div',
                    { className: 'circle-border circle-border-black ml-1' },
                    React.createElement(
                        'a',
                        { href: '' },
                        React.createElement(FaIcon, { icon: 'ajuda' })
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'buttons-container float-right' },
                withNextButton ? this.withNextButton() : void 0,
                withSubmitButton ? this.withSubmitButton() : void 0
            )
        );
    }

    convidarModeradorOnShow() {
        this.socket.emit(WS_EVENTS.GET, {
            type: 'moderadores',
            _id: this.state.plataforma._id
        });
    }

    convidarModeradorOnSubmit() {
        this.socket.emit(WS_EVENTS.POST, { type: 'moderadores',
            data: serializeDataContainer('#form_modal_convidar_moderador')
        });
    }

    teste(e, a) {
        console.log('1');
        console.log(e);
        console.log(a);
    }

    render() {
        let that = this;
        if (!this.state.plataforma) {
            return React.createElement('div', null);
        }
        return React.createElement(
            'div',
            { className: '' },
            React.createElement(
                'form',
                { id: 'msform', ref: this.form, method: 'POST' },
                React.createElement(
                    'ul',
                    { className: 'progressbar' },
                    React.createElement(
                        'li',
                        { className: 'active current' },
                        React.createElement(
                            'a',
                            { href: '#', className: 'progressbar-link', onClick: this.updatePlataforma },
                            'Descri\xE7\xE3o'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#', className: 'progressbar-link', onClick: this.updatePlataforma },
                            'Anexos'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#', className: 'progressbar-link', onClick: this.updatePlataforma },
                            'SWOT'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#', className: 'progressbar-link', onClick: this.updatePlataforma },
                            'Configura\xE7\xF5es'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#', className: 'progressbar-link', onClick: this.updatePlataforma },
                            'Coleta de Ideias'
                        )
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement(
                            'a',
                            { href: '#', className: 'progressbar-link', onClick: this.updatePlataforma },
                            'Publicar'
                        )
                    )
                ),
                React.createElement(
                    'ul',
                    { id: 'progressbar' },
                    React.createElement(
                        'li',
                        { className: 'active current' },
                        React.createElement('a', { href: '#', className: 'progressbar-link', onClick: this.updatePlataforma, dangerouslySetInnerHTML: { "__html": h.svg('wizard-step') } })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement('a', { href: '#', className: 'progressbar-link', onClick: this.updatePlataforma, dangerouslySetInnerHTML: { "__html": h.svg('wizard-step') } })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement('a', { href: '#', className: 'progressbar-link', onClick: this.updatePlataforma, dangerouslySetInnerHTML: { "__html": h.svg('wizard-step') } })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement('a', { href: '#', className: 'progressbar-link', onClick: this.updatePlataforma, dangerouslySetInnerHTML: { "__html": h.svg('wizard-step') } })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement('a', { href: '#', className: 'progressbar-link', onClick: this.updatePlataforma, dangerouslySetInnerHTML: { "__html": h.svg('wizard-step') } })
                    ),
                    React.createElement(
                        'li',
                        null,
                        React.createElement('a', { href: '#', className: 'progressbar-link', onClick: this.updatePlataforma, dangerouslySetInnerHTML: { "__html": h.svg('wizard-step') } })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'wizard-fieldset' },
                    React.createElement(InputHidden, { name: '_id', id: '_id', value: this.state.plataforma._id }),
                    React.createElement(
                        'div',
                        { className: 'form-group row', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Foto' },
                        React.createElement(InputHidden, { name: 'cover', id: 'cover', value: this.state.plataforma.cover, onChange: this.updatePlataforma }),
                        React.createElement('input', { ref: this.inputCover, type: 'file', name: 'coverFile', className: 'form-control-file inputfile', id: 'inputCover', 'data-multiple-caption': '{count} files selected' }),
                        React.createElement(
                            'div',
                            { className: 'col-12' },
                            React.createElement(
                                'label',
                                { className: 'select-cover', htmlFor: 'inputCover', style: { "backgroundImage": `url('${this.state.plataforma.cover}')` } },
                                React.createElement(
                                    'div',
                                    { className: 'cover-overlay' },
                                    this.state.uploadingCover ? React.createElement(
                                        'div',
                                        { 'class': 'lds-ripple' },
                                        React.createElement('div', null),
                                        React.createElement('div', null)
                                    ) : null
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'form-group d-flex justify-content-end align-items-baseline row' },
                        React.createElement(
                            'div',
                            { className: 'col-12' },
                            React.createElement(InputPlataformaTitulo, { value: this.state.plataforma.nome, className: 'form-control-lg', onChange: this.updatePlataforma })
                        )
                    )
                ),
                React.createElement(
                    'fieldset',
                    { className: 'active' },
                    React.createElement(InputPlataformaResumo, { id: 'resumo', value: this.state.plataforma.resumo, onChange: this.updatePlataforma }),
                    React.createElement(InputPlataformaTags, { value: this.state.plataforma.tags, onChange: this.updatePlataforma }),
                    React.createElement(InputPlataformaDescricao, { id: 'descricao', value: this.state.plataforma.descricao, onChange: this.updatePlataforma }),
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'p',
                            null,
                            React.createElement(FaIcon, { icon: 'medalha' }),
                            ' ',
                            React.createElement(
                                'strong',
                                null,
                                'Medalhas'
                            )
                        )
                    ),
                    React.createElement(MedalhaBox, { plataforma_id: this.state.plataforma._id, medalhas: this.state.plataforma.medalhas }),
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'p',
                            null,
                            React.createElement(FaIcon, { icon: 'grupo' }),
                            ' ',
                            React.createElement(
                                'strong',
                                null,
                                'Grupos'
                            )
                        )
                    ),
                    React.createElement(GrupoBox, { object_id: this.state.plataforma._id, grupos: this.state.plataforma.membros.grupos }),
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'p',
                            null,
                            React.createElement(FaIcon, { icon: 'moderador' }),
                            ' ',
                            React.createElement(
                                'strong',
                                null,
                                'Moderador'
                            )
                        )
                    ),
                    React.createElement(ModeradorBox, { object_id: this.state.plataforma._id, moderadores: this.state.plataforma.membros.moderadores }),
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'p',
                            null,
                            React.createElement(FaIcon, { icon: 'sponsor' }),
                            ' ',
                            React.createElement(
                                'strong',
                                null,
                                'Sponsors'
                            )
                        )
                    ),
                    React.createElement(SponsorBox, { object_id: this.state.plataforma._id, sponsors: this.state.plataforma.membros.sponsors }),
                    this.formWizardFooter(false, true, false)
                ),
                React.createElement(
                    'fieldset',
                    null,
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'button',
                            { type: 'button', name: 'next', className: 'btn btn-info', id: 'uploadBtn', onClick: this.teste, value: 'Pr\xF3ximo', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-desktop\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Seu computador </a> <a href=\'#\' onClick=\'alert(1); debugger;\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-google-drive\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Google Drive </a> </div> </div> </div>' },
                            React.createElement('i', { className: 'fa fa-upload' }),
                            ' Upload'
                        )
                    ),
                    this.formWizardFooter(true, true, false)
                ),
                React.createElement(
                    'fieldset',
                    null,
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-8' },
                            React.createElement(
                                'div',
                                { className: 'card swot swot-forcas' },
                                React.createElement(
                                    'div',
                                    { className: 'swot-content' },
                                    React.createElement(InputPlataformaValueProposition, {
                                        id: 'swot_forcas',
                                        name: 'swot_forcas',
                                        value: this.state.plataforma.swot_forcas,
                                        onChange: this.updatePlataforma })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-4' },
                            React.createElement(
                                'div',
                                { className: 'tip-box' },
                                React.createElement(
                                    'div',
                                    { className: 'header' },
                                    'Tip'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'body' },
                                    React.createElement(
                                        'p',
                                        null,
                                        'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-8' },
                            React.createElement(
                                'div',
                                { className: 'card swot swot-fraquezas' },
                                React.createElement(
                                    'div',
                                    { className: 'swot-content' },
                                    React.createElement(InputPlataformaValueProposition, {
                                        id: 'swot_fraquezas',
                                        name: 'swot_fraquezas',
                                        value: this.state.plataforma.swot_fraquezas,
                                        onChange: this.updatePlataforma })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-4' },
                            React.createElement(
                                'div',
                                { className: 'tip-box' },
                                React.createElement(
                                    'div',
                                    { className: 'header' },
                                    'Tip'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'body' },
                                    React.createElement(
                                        'p',
                                        null,
                                        'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-8' },
                            React.createElement(
                                'div',
                                { className: 'card swot swot-oportunidades' },
                                React.createElement(
                                    'div',
                                    { className: 'swot-content' },
                                    React.createElement(InputPlataformaValueProposition, {
                                        id: 'swot_oportunidades',
                                        name: 'swot_oportunidades',
                                        value: this.state.plataforma.swot_oportunidades,
                                        onChange: this.updatePlataforma })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-4' },
                            React.createElement(
                                'div',
                                { className: 'tip-box' },
                                React.createElement(
                                    'div',
                                    { className: 'header' },
                                    'Tip'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'body' },
                                    React.createElement(
                                        'p',
                                        null,
                                        'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-8' },
                            React.createElement(
                                'div',
                                { className: 'card swot swot-ameacas' },
                                React.createElement(
                                    'div',
                                    { className: 'swot-content' },
                                    React.createElement(InputPlataformaValueProposition, {
                                        id: 'swot_ameacas',
                                        name: 'swot_ameacas',
                                        value: this.state.plataforma.swot_ameacas,
                                        onChange: this.updatePlataforma })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-12 col-md-4' },
                            React.createElement(
                                'div',
                                { className: 'tip-box' },
                                React.createElement(
                                    'div',
                                    { className: 'header' },
                                    'Tip'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'body' },
                                    React.createElement(
                                        'p',
                                        null,
                                        'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                    )
                                )
                            )
                        )
                    ),
                    this.formWizardFooter(true, true, false)
                ),
                React.createElement(
                    'fieldset',
                    null,
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'div',
                            { className: 'mb-5' },
                            React.createElement(
                                'div',
                                { className: 'form-group d-flex justify-content-end align-items-baseline row' },
                                React.createElement(
                                    'div',
                                    { className: 'col-12 col-md-6 text-right text-subheader' },
                                    'Selecione o Portf\xF3lio'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-12 col-md-6 text-left' },
                                    React.createElement(DropdownFilterablePortfolios, { value: this.state.plataforma.portfolio, onChange: this.updatePlataforma })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'mb-5' },
                            React.createElement(
                                'h5',
                                null,
                                React.createElement(FaIcon, { icon: 'fa-lock', className: 'mr-2' }),
                                " Acesso"
                            ),
                            React.createElement(
                                'div',
                                { className: 'ml-3 mt-3' },
                                [{ value: "publica", text: "Pública" }, { value: "livre", text: "Livre" }, { value: "restrita", text: "Restrita" }, { value: "secreta", text: "Secreta" }].map(function (permissao) {
                                    return React.createElement(Radio, {
                                        key: permissao.value,
                                        name: 'permissao',
                                        value: permissao.value,
                                        text: permissao.text,
                                        valProp: this.state.plataforma.permissao,
                                        onChange: this.updatePlataforma
                                    });
                                }, this),
                                this.state.plataforma.permissao === 'secreta' ? React.createElement(
                                    'div',
                                    { className: 'row ml-3' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-sm-6' },
                                        React.createElement(InputText, { name: 'senha', label: 'Senha', value: this.state.plataforma.senha, onChange: this.updatePlataforma }),
                                        React.createElement(InputText, { name: 'senha_confirmacao', label: 'Confirma\xE7\xE3o', value: this.state.plataforma.senha_confirmacao, onChange: this.updatePlataforma })
                                    )
                                ) : null
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'mb-5' },
                            React.createElement(
                                'div',
                                { className: 'table-responsive-lg' },
                                React.createElement(
                                    'table',
                                    { className: 'table' },
                                    React.createElement(
                                        'thead',
                                        { className: 'text-center' },
                                        React.createElement(
                                            'tr',
                                            { className: 'bg-blue' },
                                            React.createElement(
                                                'th',
                                                { className: 'white', scope: 'col', style: { wordBreak: "keep-all", whiteSpace: "nowrap" } },
                                                React.createElement(
                                                    'h5',
                                                    null,
                                                    React.createElement(FaIcon, { icon: 'moderador', className: 'mr-2' }),
                                                    " Moderadores"
                                                )
                                            ),
                                            React.createElement(
                                                'th',
                                                { className: 'white', scope: 'col' },
                                                'Status'
                                            ),
                                            React.createElement(
                                                'th',
                                                { className: 'white', scope: 'col' },
                                                'Editar Plataforma'
                                            ),
                                            React.createElement(
                                                'th',
                                                { className: 'white', scope: 'col' },
                                                'Aprovar Agentes'
                                            ),
                                            React.createElement(
                                                'th',
                                                { className: 'white', scope: 'col' },
                                                'Aprovar Ideias'
                                            ),
                                            React.createElement(
                                                'th',
                                                { className: 'white', scope: 'col' },
                                                'Aprovar Pesquisas'
                                            ),
                                            React.createElement(
                                                'th',
                                                { className: 'white', scope: 'col' },
                                                'Aprovar Inova\xE7\xF5es'
                                            ),
                                            React.createElement(
                                                'th',
                                                { className: 'white', scope: 'col' },
                                                'A\xE7\xF5es'
                                            )
                                        )
                                    ),
                                    React.createElement(
                                        'tbody',
                                        null,
                                        this.state.plataforma.permissoes_moderadores ? Object.keys(this.state.plataforma.permissoes_moderadores).map(function (_mod_id) {
                                            let _mod = this.state.plataforma.permissoes_moderadores[_mod_id];
                                            console.log(_mod);
                                            return React.createElement(
                                                'tr',
                                                null,
                                                React.createElement(
                                                    'td',
                                                    null,
                                                    React.createElement(InputHidden, { id: `permissoes_moderadores{${_mod_id}}{_id}`, name: `permissoes_moderadores{${_mod_id}}{_id}`, value: _mod._id }),
                                                    React.createElement(InputHidden, { id: `permissoes_moderadores{${_mod_id}}{name}`, name: `permissoes_moderadores{${_mod_id}}{name}`, value: _mod.name }),
                                                    React.createElement(InputHidden, { id: `permissoes_moderadores{${_mod_id}}{image}`, name: `permissoes_moderadores{${_mod_id}}{image}`, value: _mod.image }),
                                                    React.createElement(
                                                        'div',
                                                        { className: 'popover-autor-avatar w-3em_i h-3em_i mr-2 d-inline-block' },
                                                        React.createElement('img', { className: 'avatar', src: _mod.image })
                                                    ),
                                                    _mod.name,
                                                    _mod._id === that.state.plataforma.autor._id ? React.createElement(
                                                        'span',
                                                        { className: 'badge badge-pill badge-primary text-secondary-body ml-2' },
                                                        'Owner'
                                                    ) : null
                                                ),
                                                React.createElement(
                                                    'td',
                                                    { className: 'text-center' },
                                                    React.createElement(Switch, {
                                                        value: 'true',
                                                        className: 'switch-inline',
                                                        id: `permissoes_moderadores{${_mod_id}}{ativo}`,
                                                        name: `permissoes_moderadores{${_mod_id}}{ativo}`,
                                                        valProp: _mod.ativo,
                                                        onChange: that.updatePlataforma })
                                                ),
                                                React.createElement(
                                                    'td',
                                                    { className: 'text-center' },
                                                    React.createElement(SwitchIcon, {
                                                        value: 'true',
                                                        icon: 'editar',
                                                        id: `permissoes_moderadores{${_mod_id}}{permissoes}{editar}`,
                                                        name: `permissoes_moderadores{${_mod_id}}{permissoes}{editar}`,
                                                        valProp: _mod.permissoes ? _mod.permissoes.editar : 'teste',
                                                        onChange: that.updatePlataforma })
                                                ),
                                                React.createElement(
                                                    'td',
                                                    { className: 'text-center' },
                                                    React.createElement(SwitchIcon, {
                                                        value: 'true',
                                                        icon: 'aprovar-agente',
                                                        id: `permissoes_moderadores{${_mod_id}}{permissoes}{aprovar-agente}`,
                                                        name: `permissoes_moderadores{${_mod_id}}{permissoes}{aprovar-agente}`,
                                                        valProp: _mod.permissoes ? _mod.permissoes['aprovar-agente'] : 'teste',
                                                        onChange: that.updatePlataforma })
                                                ),
                                                React.createElement(
                                                    'td',
                                                    { className: 'text-center' },
                                                    React.createElement(SwitchIcon, {
                                                        value: 'true',
                                                        icon: 'ideia',
                                                        id: `permissoes_moderadores{${_mod_id}}{permissoes}{ideia}`,
                                                        name: `permissoes_moderadores{${_mod_id}}{permissoes}{ideia}`,
                                                        valProp: _mod.permissoes ? _mod.permissoes.ideia : 'teste',
                                                        onChange: that.updatePlataforma })
                                                ),
                                                React.createElement(
                                                    'td',
                                                    { className: 'text-center' },
                                                    React.createElement(SwitchIcon, {
                                                        value: 'true',
                                                        icon: 'pesquisa',
                                                        id: `permissoes_moderadores{${_mod_id}}{permissoes}{pesquisa}`,
                                                        name: `permissoes_moderadores{${_mod_id}}{permissoes}{pesquisa}`,
                                                        valProp: _mod.permissoes ? _mod.permissoes.pesquisa : 'teste',
                                                        onChange: that.updatePlataforma })
                                                ),
                                                React.createElement(
                                                    'td',
                                                    { className: 'text-center' },
                                                    React.createElement(SwitchIcon, {
                                                        value: 'true',
                                                        icon: 'inovacao',
                                                        id: `permissoes_moderadores{${_mod_id}}{permissoes}{inovacao}`,
                                                        name: `permissoes_moderadores{${_mod_id}}{permissoes}{inovacao}`,
                                                        valProp: _mod.permissoes ? _mod.permissoes.inovacao : 'teste',
                                                        onChange: that.updatePlataforma })
                                                ),
                                                React.createElement(
                                                    'td',
                                                    { className: 'text-center' },
                                                    _mod._id === that.state.plataforma.autor._id ? null : React.createElement(
                                                        'button',
                                                        { className: 'btn btn-raised btn-danger', 'data-id': _mod._id, onClick: that.removeModerador },
                                                        'Remover'
                                                    )
                                                )
                                            );
                                        }, this) : React.createElement('div', null)
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'h5',
                            null,
                            React.createElement(FaIcon, { icon: 'ideia', className: 'mr-2' }),
                            ' Ideias ',
                            React.createElement(Switch, {
                                value: 'true',
                                name: 'fase_ideias',
                                text: '',
                                className: 'switch-inline ml-2',
                                valProp: this.state.plataforma.fase_ideias,
                                onChange: this.updatePlataforma })
                        ),
                        !this.state.plataforma.fase_ideias || this.state.plataforma.fase_ideias === "false" ? React.createElement('div', { className: 'mb-5' }) : React.createElement(
                            'div',
                            { className: 'mb-5 ml-4 mt-4' },
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(Switch, {
                                    value: 'true',
                                    valProp: this.state.plataforma.fase_ideias_votos,
                                    name: 'fase_ideias_votos',
                                    text: 'Votos',
                                    onChange: this.updatePlataforma })
                            ),
                            !this.state.plataforma.fase_ideias_votos ? null : React.createElement(
                                'div',
                                { className: 'form-group row' },
                                React.createElement(
                                    'div',
                                    { className: 'col-12 col-md-6' },
                                    React.createElement(Range, {
                                        min: '10',
                                        max: '60',
                                        step: '10',
                                        unit: '%',
                                        id: 'fase_ideias_votos_valor',
                                        name: 'fase_ideias_votos_valor',
                                        value: this.state.plataforma.fase_ideias_votos_valor,
                                        onChange: this.updatePlataforma })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-12 col-md-6' },
                                    '% de votos dispon\xEDveis/quantidade de ideias na plataforma'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(Switch, {
                                    value: 'true',
                                    valProp: this.state.plataforma.fase_ideias_investimento,
                                    name: 'fase_ideias_investimento',
                                    text: 'Investimentos',
                                    onChange: this.updatePlataforma
                                })
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(Switch, {
                                    value: 'true',
                                    valProp: this.state.plataforma.fase_ideias_comentarios,
                                    name: 'fase_ideias_comentarios',
                                    text: 'Coment\xE1rios',
                                    onChange: this.updatePlataforma
                                })
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(Switch, {
                                    value: 'true',
                                    valProp: this.state.plataforma.fase_ideias_conexoes,
                                    name: 'fase_ideias_conexoes',
                                    text: 'Conex\xF5es',
                                    onChange: this.updatePlataforma
                                })
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(Switch, {
                                    value: 'true',
                                    valProp: this.state.plataforma.fase_ideias_modelo_de_negocios,
                                    name: 'fase_ideias_modelo_de_negocios',
                                    text: 'Modelo de Neg\xF3cios',
                                    onChange: this.updatePlataforma
                                })
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(Switch, {
                                    value: 'true',
                                    valProp: this.state.plataforma.fase_ideias_perguntas_e_respostas,
                                    onChange: this.updatePlataforma, name: 'fase_ideias_perguntas_e_respostas', text: 'Perguntas e Respostas' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(Switch, {
                                    value: 'true',
                                    valProp: this.state.plataforma.fase_ideias_big_data_parallaxis,
                                    onChange: this.updatePlataforma, name: 'fase_ideias_big_data_parallaxis', text: 'Big Data' })
                            )
                        ),
                        React.createElement(
                            'h5',
                            null,
                            React.createElement(FaIcon, { icon: 'pesquisa' }),
                            ' Pesquisas ',
                            React.createElement(Switch, {
                                value: 'true',
                                valProp: this.state.plataforma.fase_pesquisas,
                                name: 'fase_pesquisas',
                                text: '',
                                className: 'switch-inline ml-2',
                                onChange: this.updatePlataforma
                            })
                        ),
                        !this.state.plataforma.fase_pesquisas ? React.createElement('div', { className: 'mb-5' }) : React.createElement(
                            'div',
                            { className: 'mb-5 ml-4 mt-4' },
                            '...'
                        ),
                        React.createElement(
                            'h5',
                            null,
                            React.createElement(FaIcon, { icon: 'inovacao' }),
                            ' Inovações ',
                            React.createElement(Switch, {
                                value: 'true',
                                valProp: this.state.plataforma.fase_inovacoes,
                                name: 'fase_inovacoes',
                                text: '',
                                onChange: this.updatePlataforma,
                                className: 'switch-inline ml-2'
                            })
                        ),
                        !this.state.plataforma.fase_inovacoes ? React.createElement('div', { className: 'mb-5' }) : React.createElement(
                            'div',
                            { className: 'mb-5 ml-4 mt-4' },
                            '...'
                        )
                    ),
                    this.formWizardFooter(true, true, false)
                ),
                React.createElement(
                    'fieldset',
                    null,
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'h5',
                            null,
                            React.createElement(FaIcon, { icon: 'fa-clipboard-list', className: 'mr-2' }),
                            ` Formato da Coleta de Ideias `
                        ),
                        React.createElement(
                            'div',
                            { className: 'ml-4 mt-4' },
                            React.createElement(Radio, { name: 'encerrarFaseManualmente',
                                value: 'true',
                                valProp: this.state.plataforma.encerrarFaseManualmente,
                                onChange: this.updatePlataforma,
                                text: 'Encerrar a fase de ideias apenas manualmente' }),
                            React.createElement(
                                'div',
                                { className: 'radio' },
                                React.createElement(
                                    'label',
                                    null,
                                    React.createElement('input', { type: 'radio', name: 'encerrarFaseManualmente', id: 'encerrarFaseManualmente',
                                        value: 'false',
                                        checked: this.state.plataforma.encerrarFaseManualmente === "false",
                                        onChange: this.updatePlataforma }),
                                    React.createElement(
                                        'span',
                                        { className: 'bmd-radio' },
                                        React.createElement('div', { className: 'ripple-container' })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'checkbox disabled' },
                                        React.createElement(
                                            'label',
                                            null,
                                            React.createElement('input', { type: 'checkbox', name: 'encerrarFasePeriodoTempo',
                                                value: 'true',
                                                disabled: this.state.plataforma.encerrarFaseManualmente !== "false",
                                                checked: this.state.plataforma.encerrarFaseManualmente === "false" && this.state.plataforma.encerrarFasePeriodoTempo === "true",
                                                onChange: this.updatePlataforma }),
                                            React.createElement(
                                                'span',
                                                { className: 'checkbox-decorator' },
                                                React.createElement('span', { className: 'check' })
                                            ),
                                            'Encerrar a fase de ideias ap\xF3s um per\xEDodo de tempo'
                                        ),
                                        this.state.plataforma.encerrarFasePeriodoTempo === "true" ? React.createElement(Range, {
                                            min: '7',
                                            max: '180',
                                            step: '1',
                                            values: [7, 15, 30, 60, 90, 180],
                                            unit: '',
                                            id: 'encerrarFasePeriodoTempo_valor',
                                            name: 'encerrarFasePeriodoTempo_valor',
                                            value: this.state.plataforma.encerrarFasePeriodoTempo_valor,
                                            onChange: this.updatePlataforma }) : null
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'checkbox disabled' },
                                        React.createElement(
                                            'label',
                                            null,
                                            React.createElement('input', { type: 'checkbox', name: 'encerrarFaseLimiteIdeia',
                                                value: 'true',
                                                disabled: this.state.plataforma.encerrarFaseManualmente !== "false",
                                                checked: this.state.plataforma.encerrarFaseManualmente === "false" && this.state.plataforma.encerrarFaseLimiteIdeia === "true",
                                                onChange: this.updatePlataforma }),
                                            React.createElement(
                                                'span',
                                                { className: 'checkbox-decorator' },
                                                React.createElement('span', { className: 'check' })
                                            ),
                                            'Encerrar a fase de ideias ap\xF3s a plataforma atingir um n\xFAmero definido de ideias'
                                        ),
                                        this.state.plataforma.encerrarFaseLimiteIdeia === "true" ? React.createElement(Range, {
                                            min: '100',
                                            max: '1100',
                                            step: '500',
                                            values: [100, 500, 1000],
                                            unit: '',
                                            id: 'encerrarFaseLimiteIdeia_valor',
                                            name: 'encerrarFaseLimiteIdeia_valor',
                                            value: this.state.plataforma.encerrarFaseLimiteIdeia_valor,
                                            onChange: this.updatePlataforma }) : null
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'h5',
                            null,
                            React.createElement(FaIcon, { icon: 'fa-edit', className: 'mr-2' }),
                            ` Templates para coleta de Ideias `
                        ),
                        React.createElement(
                            'div',
                            { className: 'ml-4 mt-4' },
                            React.createElement(
                                'div',
                                { className: 'p-2 mb-2 col-12 col-xl-8' },
                                React.createElement(
                                    'div',
                                    { className: '' },
                                    React.createElement(Radio, { name: 'template_coleta_ideias',
                                        onChange: this.updatePlataforma,
                                        value: 'em_branco',
                                        valProp: this.state.plataforma.template_coleta_ideias,
                                        text: 'Em branco' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'card p-2 mb-2 col-12 col-xl-8' },
                                React.createElement(
                                    'div',
                                    { className: 'border-bottom' },
                                    React.createElement(Radio, { name: 'template_coleta_ideias',
                                        className: 'd-inline',
                                        onChange: this.updatePlataforma,
                                        value: 'design_thinking',
                                        valProp: this.state.plataforma.template_coleta_ideias,
                                        text: 'Design Thinking' }),
                                    React.createElement(
                                        'button',
                                        { type: 'button', className: 'close ml-auto', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                                        React.createElement('i', { className: 'fa fa-ellipsis-h' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'template-coleta-ideias template-design-thinking' },
                                    React.createElement(
                                        'div',
                                        { className: 'template-coleta-ideias-content' },
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse assumenda eius provident porro quas neque nihil, deserunt quos placeat consectetur ad voluptas, nostrum mollitia fugiat veniam excepturi doloribus vero sunt?'
                                    )
                                ),
                                React.createElement(
                                    'button',
                                    { className: 'btn btn-primary' },
                                    'Ver formul\xE1rio'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'card p-2 mb-2 col-12 col-xl-8' },
                                React.createElement(
                                    'div',
                                    { className: 'border-bottom' },
                                    React.createElement(Radio, { name: 'template_coleta_ideias',
                                        className: 'd-inline',
                                        onChange: this.updatePlataforma,
                                        value: 'evidence_planning',
                                        valProp: this.state.plataforma.template_coleta_ideias,
                                        text: 'Evidence Planning' }),
                                    React.createElement(
                                        'button',
                                        { type: 'button', className: 'close ml-auto', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                                        React.createElement('i', { className: 'fa fa-ellipsis-h' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'template-coleta-ideias template-evidence-planning' },
                                    React.createElement(
                                        'div',
                                        { className: 'template-coleta-ideias-content' },
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse assumenda eius provident porro quas neque nihil, deserunt quos placeat consectetur ad voluptas, nostrum mollitia fugiat veniam excepturi doloribus vero sunt?'
                                    )
                                ),
                                React.createElement(
                                    'button',
                                    { className: 'btn btn-primary' },
                                    'Ver formul\xE1rio'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'card p-2 mb-2 col-12 col-xl-8' },
                                React.createElement(
                                    'div',
                                    { className: 'border-bottom' },
                                    React.createElement(Radio, { name: 'template_coleta_ideias',
                                        className: 'd-inline',
                                        onChange: this.updatePlataforma,
                                        value: 'change_management',
                                        valProp: this.state.plataforma.template_coleta_ideias,
                                        text: 'Change Management' }),
                                    React.createElement(
                                        'button',
                                        { type: 'button', className: 'close ml-auto', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                                        React.createElement('i', { className: 'fa fa-ellipsis-h' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'template-coleta-ideias template-change-management' },
                                    React.createElement(
                                        'div',
                                        { className: 'template-coleta-ideias-content' },
                                        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse assumenda eius provident porro quas neque nihil, deserunt quos placeat consectetur ad voluptas, nostrum mollitia fugiat veniam excepturi doloribus vero sunt?'
                                    )
                                ),
                                React.createElement(
                                    'button',
                                    { className: 'btn btn-primary' },
                                    'Ver formul\xE1rio'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'form-group' },
                        React.createElement(
                            'h5',
                            null,
                            React.createElement(FaIcon, { icon: 'fa-clipboard-check', className: 'mr-2' }),
                            'Crit\xE9rios para Avalia\xE7\xE3o'
                        ),
                        React.createElement(
                            'div',
                            { className: 'ml-4 mt-4' },
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-6 col-sm-3' },
                                        React.createElement(FaIcon, { icon: 'fa-atom' }),
                                        ' Disrupção '
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-6 col-sm-9' },
                                        React.createElement(Switch, {
                                            value: 'true',
                                            valProp: this.state.plataforma.criterio_avaliacao_disrupcao,
                                            name: 'criterio_avaliacao_disrupcao',
                                            text: '',
                                            className: 'switch-inline ml-2',
                                            onChange: this.updatePlataforma
                                        })
                                    )
                                )
                            ),
                            this.state.plataforma.criterio_avaliacao_disrupcao ? React.createElement(
                                'div',
                                { className: 'form-group ml-2' },
                                React.createElement(
                                    'div',
                                    { className: 'd-inline-block' },
                                    React.createElement(Radio, {
                                        name: 'criterio_avaliacao_disrupcao_avaliacao',
                                        onChange: this.updatePlataforma,
                                        value: 'formulario',
                                        valProp: this.state.plataforma.criterio_avaliacao_disrupcao_avaliacao,
                                        className: 'd-inline-block',
                                        text: 'Utilizar formul\xE1rio para avaliar' }),
                                    React.createElement(
                                        'button',
                                        { className: 'ml-2 btn btn-primary btn-sm' },
                                        'Formul\xE1rio'
                                    )
                                ),
                                React.createElement(Radio, {
                                    name: 'criterio_avaliacao_disrupcao_avaliacao',
                                    onChange: this.updatePlataforma,
                                    value: 'livre',
                                    valProp: this.state.plataforma.criterio_avaliacao_disrupcao_avaliacao,
                                    text: 'Avalia\xE7\xE3o Livre' })
                            ) : null,
                            React.createElement(
                                'div',
                                { className: `form-group position-relative form-group-dificuldade-impacto ${this.state.plataforma.criterio_avaliacao_dificuldade_impacto ? `open` : ``} ` },
                                React.createElement(
                                    'div',
                                    { className: 'form-group row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-6 col-sm-3' },
                                        React.createElement(FaIcon, { icon: 'fa-sign' }),
                                        ' Dificuldade '
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-6 col-sm-9' },
                                        React.createElement(Switch, {
                                            value: 'true',
                                            valProp: this.state.plataforma.criterio_avaliacao_dificuldade_impacto,
                                            name: 'criterio_avaliacao_dificuldade_impacto', text: '', className: 'switch-inline ml-2', onChange: this.updatePlataforma })
                                    )
                                ),
                                this.state.plataforma.criterio_avaliacao_dificuldade_impacto ? React.createElement(
                                    'div',
                                    { className: 'form-group ml-2' },
                                    React.createElement(
                                        'div',
                                        { className: 'd-inline-block' },
                                        React.createElement(Radio, { name: 'criterio_avaliacao_dificuldade_avaliacao',
                                            onChange: this.updatePlataforma,
                                            value: 'formulario',
                                            valProp: this.state.plataforma.criterio_avaliacao_dificuldade_avaliacao,
                                            className: 'd-inline-block',
                                            text: 'Utilizar formul\xE1rio para avaliar' }),
                                        React.createElement(
                                            'button',
                                            { className: 'ml-2 btn btn-primary btn-sm' },
                                            'Formul\xE1rio'
                                        )
                                    ),
                                    React.createElement(Radio, { name: 'criterio_avaliacao_dificuldade_avaliacao',
                                        onChange: this.updatePlataforma,
                                        value: 'livre',
                                        valProp: this.state.plataforma.criterio_avaliacao_dificuldade_avaliacao,
                                        text: 'Avalia\xE7\xE3o Livre' })
                                ) : null,
                                React.createElement(
                                    'div',
                                    { className: 'form-group row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-6 col-sm-3' },
                                        React.createElement(FaIcon, { icon: 'fa-bomb' }),
                                        ' Impacto '
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-6 col-sm-9' },
                                        React.createElement(Switch, {
                                            value: 'true',
                                            valProp: this.state.plataforma.criterio_avaliacao_dificuldade_impacto,
                                            name: 'criterio_avaliacao_dificuldade_impacto', text: '', className: 'switch-inline ml-2', onChange: this.updatePlataforma })
                                    )
                                ),
                                this.state.plataforma.criterio_avaliacao_dificuldade_impacto ? React.createElement(
                                    'div',
                                    { className: 'form-group ml-2' },
                                    React.createElement(
                                        'div',
                                        { className: 'd-inline-block' },
                                        React.createElement(Radio, { name: 'criterio_avaliacao_impacto_avaliacao',
                                            onChange: this.updatePlataforma,
                                            value: 'formulario',
                                            valProp: this.state.plataforma.criterio_avaliacao_impacto_avaliacao,
                                            className: 'd-inline-block',
                                            text: 'Utilizar formul\xE1rio para avaliar' }),
                                        React.createElement(
                                            'button',
                                            { className: 'ml-2 btn btn-primary btn-sm' },
                                            'Formul\xE1rio'
                                        )
                                    ),
                                    React.createElement(Radio, { name: 'criterio_avaliacao_impacto_avaliacao',
                                        onChange: this.updatePlataforma,
                                        value: 'livre',
                                        valProp: this.state.plataforma.criterio_avaliacao_impacto_avaliacao,
                                        text: 'Avalia\xE7\xE3o Livre' })
                                ) : null,
                                React.createElement(
                                    'div',
                                    { style: { "position": "absolute", "top": "calc(50%)", "left": "-30px", "transform": "translateY(-50%)" } },
                                    React.createElement('i', { className: 'fa fa-lock' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'div',
                                    { className: 'form-group row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-6 col-sm-3' },
                                        React.createElement(FaIcon, { icon: 'fa-money-bill' }),
                                        ' Retorno '
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-6 col-sm-9' },
                                        React.createElement(Switch, {
                                            value: 'true',
                                            valProp: this.state.plataforma.criterio_avaliacao_retorno,
                                            name: 'criterio_avaliacao_retorno', text: '', className: 'switch-inline ml-2', onChange: this.updatePlataforma })
                                    )
                                )
                            ),
                            this.state.plataforma.criterio_avaliacao_retorno ? React.createElement(
                                'div',
                                { className: 'form-group ml-2' },
                                React.createElement(
                                    'div',
                                    { className: 'd-inline-block' },
                                    React.createElement(Radio, { name: 'criterio_avaliacao_retorno_avaliacao',
                                        onChange: this.updatePlataforma,
                                        value: 'formulario',
                                        valProp: this.state.plataforma.criterio_avaliacao_retorno_avaliacao,
                                        className: 'd-inline-block',
                                        text: 'Utilizar formul\xE1rio para avaliar' }),
                                    React.createElement(
                                        'button',
                                        { className: 'ml-2 btn btn-primary btn-sm' },
                                        'Formul\xE1rio'
                                    )
                                ),
                                React.createElement(Radio, { name: 'criterio_avaliacao_retorno_avaliacao',
                                    onChange: this.updatePlataforma,
                                    value: 'livre',
                                    valProp: this.state.plataforma.criterio_avaliacao_retorno_avaliacao,
                                    text: 'Avalia\xE7\xE3o Livre' })
                            ) : null,
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'div',
                                    { className: 'form-group row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-6 col-sm-3' },
                                        React.createElement(FaIcon, { icon: 'fa-hourglass' }),
                                        ' Tempo '
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-6 col-sm-9' },
                                        React.createElement(Switch, {
                                            value: 'true',
                                            valProp: this.state.plataforma.criterio_avaliacao_tempo,
                                            name: 'criterio_avaliacao_tempo', text: '', className: 'switch-inline ml-2', onChange: this.updatePlataforma })
                                    )
                                )
                            ),
                            this.state.plataforma.criterio_avaliacao_tempo ? React.createElement(
                                'div',
                                { className: 'form-group ml-2' },
                                React.createElement(
                                    'div',
                                    { className: 'd-inline-block' },
                                    React.createElement(Radio, { name: 'criterio_avaliacao_tempo_avaliacao',
                                        onChange: this.updatePlataforma,
                                        value: 'formulario',
                                        valProp: this.state.plataforma.criterio_avaliacao_tempo_avaliacao,
                                        className: 'd-inline-block',
                                        text: 'Utilizar formul\xE1rio para avaliar' }),
                                    React.createElement(
                                        'button',
                                        { className: 'ml-2 btn btn-primary btn-sm' },
                                        'Formul\xE1rio'
                                    )
                                ),
                                React.createElement(Radio, { name: 'criterio_avaliacao_tempo_avaliacao',
                                    onChange: this.updatePlataforma,
                                    value: 'livre',
                                    valProp: this.state.plataforma.criterio_avaliacao_tempo_avaliacao,
                                    text: 'Avalia\xE7\xE3o Livre' })
                            ) : null
                        )
                    ),
                    this.formWizardFooter(true, true, false)
                ),
                React.createElement(
                    'fieldset',
                    null,
                    React.createElement(
                        'div',
                        { className: 'mb-5' },
                        React.createElement(
                            'div',
                            { className: 'form-group' },
                            React.createElement(Switch, {
                                value: 'true',
                                valProp: this.state.plataforma.destaque_home,
                                name: 'destaque_home',
                                text: 'Destaque na Home',
                                onChange: this.updatePlataforma })
                        ),
                        !this.state.plataforma.destaque_home ? null : React.createElement(
                            'div',
                            { className: 'form-group row' },
                            React.createElement(
                                'div',
                                { className: 'col-12 col-md-6' },
                                React.createElement(Range, {
                                    min: '12',
                                    max: '96',
                                    step: '12',
                                    unit: 'h',
                                    id: 'destaque_home_valor',
                                    name: 'destaque_home_valor',
                                    value: this.state.plataforma.destaque_home_valor,
                                    onChange: this.updatePlataforma })
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-12 col-md-6' },
                                'horas em destaque'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'mb-5' },
                        React.createElement(
                            'div',
                            { className: 'form-group' },
                            React.createElement(Switch, {
                                value: 'true',
                                valProp: this.state.plataforma.publicacao_programada,
                                name: 'publicacao_programada',
                                text: 'Publica\xE7\xE3o Programada',
                                onChange: this.updatePlataforma })
                        ),
                        !this.state.plataforma.publicacao_programada ? null : React.createElement(
                            'div',
                            { className: 'form-group row' },
                            React.createElement(
                                'div',
                                { className: 'col-12 col-md-6' },
                                React.createElement(DateTimeField, { name: 'publicacao_programada_valor', onChange: this.handleDate, inputFormat: 'DD/MM/YYYY HH:mm ZZ', dateTime: this.state.plataforma.publicacao_programada_valor ? new Date(this.state.plataforma.publicacao_programada_valor).getTime() : new Date() })
                            )
                        )
                    ),
                    this.formWizardFooter(true, false, true)
                )
            ),
            React.createElement(ModalNovaMedalha, { plataforma_id: this.state.plataforma._id }),
            React.createElement(ModalConvidarGrupo, { plataforma_id: this.state.plataforma._id }),
            React.createElement(ModalConvidarModerador, { plataforma_id: this.state.plataforma._id, onShow: this.convidarModeradorOnShow, onSubmit: this.convidarModeradorOnSubmit, leftList: this.state.moderadoresLeftList, rightList: this.state.moderadoresRightList }),
            React.createElement(ModalConvidarSponsor, { plataforma_id: this.state.plataforma._id })
        );
    }

}
import React from 'react';
import FaIcon from './react_faicon';

export default class PlataformaIconPermissao extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            permissao: props.permissao
        };
    }
    render() {
        let permissao = this.state.permissao;

        if (typeof permissao != "undefined") {
            if (permissao === "livre") {
                return React.createElement(
                    'div',
                    { style: { "color": "darkgreen" } },
                    React.createElement(FaIcon, { icon: 'fa-lock-open' }),
                    ` ${permissao.capitalizeFirstLetter()}`
                );
            }
            if (permissao === "restrita") {
                return React.createElement(
                    'div',
                    { style: { "color": "darkorange" } },
                    React.createElement(FaIcon, { icon: 'fa-lock' }),
                    ` ${permissao.capitalizeFirstLetter()}`
                );
            }
            if (permissao === "secreta") {
                return React.createElement(
                    'div',
                    { style: { "color": "darkred" } },
                    React.createElement(FaIcon, { icon: 'fa-lock' }),
                    ` ${permissao.capitalizeFirstLetter()}`
                );
            }
        }

        return React.createElement('div', null);
    }
}
import React from 'react';
import Input from './react_input';

export default class PlataformaMiniCard extends Input {
    constructor(props) {
        super(props);
    }

    render() {
        let plataforma = this.props.plataforma;
        return React.createElement(
            'div',
            {
                key: `${plataforma._id}`,
                'data-id': plataforma._id,
                className: `${this.props.popover ? 'popover' : null} popover-card d-inline-block popover-author mr-2 mb-2 d-flex flex-column justify-content-between`, role: 'tooltip',
                'data-slide': 'true',
                clickable: '',
                onClick: this.props.onClick },
            this.props.popover ? React.createElement('div', { className: 'arrow' }) : null,
            React.createElement(
                'h3',
                { className: 'senno-popover-header' },
                React.createElement(
                    'div',
                    { className: 'popover-autor text-center' },
                    React.createElement(
                        'div',
                        { className: 'popover-autor-avatar' },
                        React.createElement('img', { className: 'avatar popover-autor-avatar', src: plataforma.cover })
                    ),
                    React.createElement(
                        'div',
                        { className: 'popover-autor-info p-2' },
                        React.createElement(
                            'div',
                            { className: 'popover-autor-info-name p-1 text-subheader', style: { "borderBottom": "1px solid black" } },
                            plataforma.nome
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'senno-popover-body' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-lightbulb ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '3.678'
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-bullseye ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '1.366'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-flask ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '3.200'
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-rocket ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '248'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-fire ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '424'
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-fire ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '424'
                    )
                )
            )
        );
    }
}
import React from 'react';
import { initModules } from '../utils/ModulesUtils';
import { showSocketError, showSocketMessage, showSocketSuccessMessage, serializeDataContainer, charts, h } from '../main';
import IdeiaBox from './react_ideia_box';
import InovacaoBox from './react_inovacao_box';
import PlataformaCover from './react_plataforma_cover';
import PlataformaIconPermissao from './react_plataforma_icon_permissao';
import FaIcon from './react_faicon';
import MedalhaBoxShow from './react_medalha_box_show';
import GrupoBoxShow from './react_grupo_box_show';
import ModeradorBoxShow from './react_moderador_box_show';
import SponsorBoxShow from './react_sponsor_box_show';
import Slider from './react_slider';
import Comentarios from './react_comentarios';
import ModalTempoRestante from './react_modal_tempo_restante';
import ModalPlataformaQuantidadeIdeias from './react_modal_plataforma_quantidade_ideias';
import ModalParticipar from './react_modal_participar';
import ModalModeradores from './react_modal_moderadores';
import ModalGrupos from './react_modal_grupos';
import ModalCoautores from './react_modal_coautores';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';

export default class PlataformaPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            plataforma: null,
            user: null,
            user_id: null,
            plataforma_id: null
        };

        this.state.user_id = this.props.user_id;
        this.state.user = this.props.user;
        this.state.plataforma_id = this.props.plataforma_id;

        this.participar = this.participar.bind(this);
        this.comentar = this.comentar.bind(this);
        this.curtir_comentario = this.curtir_comentario.bind(this);
        this.descurtir_comentario = this.descurtir_comentario.bind(this);

        this.socket = io.connect(WS_NAMESPACES.PLATAFORMAS);

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            this.emit('join', that.room);

            this.on(WS_EVENTS.GET_OK, function (data) {
                if (!data.type) return;

                switch (data.type) {
                    case "plataforma":
                        that.state.plataforma = data.data;
                        that.setState({
                            plataforma: that.state.plataforma
                        });
                        break;
                    default:
                        break;
                }
            });

            this.on(WS_EVENTS.POST_ERROR, function (data) {
                // if(!data.type) return;
                // switch (data.type) {
                //     case "participar":
                //         this.emit(WS_EVENTS.GET, {
                //             type: 'plataforma'
                //             , _id: that.state.plataforma_id
                //         });
                //         break;
                //     default:
                //         break;
                // }
                showSocketError(data.message);
            });

            this.on(WS_EVENTS.POST_OK, function (data) {
                if (!data.type) return;

                switch (data.type) {
                    case "participar":
                        if (data.data.status === 'pedido_enviado') showSocketMessage('Seu pedido foi enviado com sucesso. Aguarde a aprovação de um dos moderadores.');
                        if (data.data.status === 'ok') showSocketSuccessMessage('Participação aprovada!');
                        this.emit(WS_EVENTS.GET, {
                            type: 'plataforma',
                            _id: that.state.plataforma_id
                        });
                        window.$('#modal_participar').modal('hide');
                        break;
                    case "comentar":
                        this.emit(WS_EVENTS.GET, {
                            type: 'plataforma',
                            _id: that.state.plataforma_id
                        });
                        break;
                    case "curtir_comentario":
                        this.emit(WS_EVENTS.GET, {
                            type: 'plataforma',
                            _id: that.state.plataforma_id
                        });
                        break;
                    case "descurtir_comentario":
                        this.emit(WS_EVENTS.GET, {
                            type: 'plataforma',
                            _id: that.state.plataforma_id
                        });
                        break;
                    default:
                        break;
                }
            });

            this.on('disconnect', function (data) {
                log('Disconnected');

                let events = Object.keys(this._callbacks);
                for (let i in events) {
                    let event = events[i];
                    if (event === '$connecting' || event === '$connect' || event === '$disconnect') continue;
                    if(event.replace) this.removeAllListeners(event.replace(/\$/g, ''));
                }
            });
        });
    }

    participar(e) {
        e.preventDefault();
        let form = serializeDataContainer('#modal_participar_form');
        if (!form) form = {};
        this.socket.emit(WS_EVENTS.POST, {
            type: 'participar',
            _id: this.state.plataforma_id,
            justificativa: form.justificativa,
            senha: form.senha
        });
    }

    comentar(id = null, comentario = "") {
        this.socket.emit(WS_EVENTS.POST, {
            type: 'comentar',
            _id: this.state.plataforma_id,
            comentario: comentario,
            comentario_id: id
        });
    }

    curtir_comentario(comentario_id = null) {
        this.socket.emit(WS_EVENTS.POST, {
            type: 'curtir_comentario',
            _id: this.state.plataforma_id,
            user_id: this.state.user_id,
            comentario_id: comentario_id
        });
    }

    descurtir_comentario(comentario_id = null) {
        this.socket.emit(WS_EVENTS.POST, {
            type: 'descurtir_comentario',
            _id: this.state.plataforma_id,
            user_id: this.state.user_id,
            comentario_id: comentario_id
        });
    }

    componentDidMount() {
        this.setState({
            loadingIdeias: true,
            loadingPlataformas: true
        });
        this.socket.emit(WS_EVENTS.GET, {
            type: 'plataforma',
            _id: this.state.plataforma_id
        });
    }

    componentDidUpdate() {
        initModules();
        let theme = 'light';
        let chartRef = document.getElementById('tester');
        let chartRef2 = document.getElementById('tester2');
        let chartRef3 = document.getElementById('tester3');
        let chartRef4 = document.getElementById('tester4');
        let chartRef5 = document.getElementById('tester5');
        let chartRef6 = document.getElementById('tester6');
        let chartRef7 = document.getElementById('tester7');
        if (!chartRef) return;
        let myChart = echarts.init(chartRef, theme);
        let myChart2 = echarts.init(chartRef2, theme);
        let myChart3 = echarts.init(chartRef3, theme);
        let myChart4 = echarts.init(chartRef4, theme);
        let myChart5 = echarts.init(chartRef5, theme);
        let myChart6 = echarts.init(chartRef6, theme);
        let myChart7 = echarts.init(chartRef7, theme);

        let toolboxOpts = {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                magicType: {
                    show: true,
                    type: ['pie', 'funnel']
                },
                restore: { show: true, title: 'Restaurar' },
                saveAsImage: { show: true, title: 'Salvar\nImagem' }
            }
            // {
            //     feature: {
            //         restore: {
            //             title: 'Reset'
            //         },
            //         saveAsImage: {
            //             title: 'Salvar\nImagem'
            //         }
            //     }
            // }

        };let option = {
            title: {
                text: 'Perfil'
            },
            tooltip: {},
            toolbox: toolboxOpts,
            legend: {
                data: ['Agentes', 'Moderadores']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                    }
                },
                indicator: [{ name: 'Ativadores', max: 6500 }, { name: 'Facilitadores', max: 16000 }, { name: 'Executores', max: 30000 }, { name: 'Desenvolvedores', max: 38000 }, { name: 'Criadores', max: 52000 }, { name: 'Buscadores', max: 25000 }]
            },
            series: [{
                name: 'Budget vs spending',
                type: 'radar',
                // areaStyle: {normal: {}},
                data: [{
                    value: [4300, 10000, 28000, 35000, 50000, 19000],
                    name: 'Agentes',
                    areaStyle: {}
                }, {
                    value: [5000, 14000, 28000, 31000, 42000, 21000],
                    name: 'Moderadores',
                    areaStyle: {}
                }]
            }]
        };
        // use configuration item and data specified to show chart
        myChart.setOption(option, true);

        let option2 = {
            title: {
                text: 'Conteúdo gerado na plataforma',
                padding: "200"
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        color: 'rgba(0,0,0,0.2)',
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            toolbox: toolboxOpts,
            legend: {
                data: ['DQ', 'TY', 'SS', 'QG', 'SY', 'DD'],
                orient: 'vertical',
                right: -20,
                top: 20
            },

            singleAxis: {
                top: 50,
                bottom: 50,
                axisTick: {},
                axisLabel: {},
                type: 'time',
                axisPointer: {
                    animation: true,
                    label: {
                        show: true
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        opacity: 0.2
                    }
                }
            },

            series: [{
                type: 'themeRiver',
                itemStyle: {
                    emphasis: {
                        shadowBlur: 20,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                    }
                },
                data: [['2015/11/08', 10, 'DQ'], ['2015/11/09', 15, 'DQ'], ['2015/11/10', 35, 'DQ'], ['2015/11/11', 38, 'DQ'], ['2015/11/12', 22, 'DQ'], ['2015/11/13', 16, 'DQ'], ['2015/11/14', 7, 'DQ'], ['2015/11/15', 2, 'DQ'], ['2015/11/16', 17, 'DQ'], ['2015/11/17', 33, 'DQ'], ['2015/11/18', 40, 'DQ'], ['2015/11/19', 32, 'DQ'], ['2015/11/20', 26, 'DQ'], ['2015/11/21', 35, 'DQ'], ['2015/11/22', 40, 'DQ'], ['2015/11/23', 32, 'DQ'], ['2015/11/24', 26, 'DQ'], ['2015/11/25', 22, 'DQ'], ['2015/11/26', 16, 'DQ'], ['2015/11/27', 22, 'DQ'], ['2015/11/28', 10, 'DQ'], ['2015/11/08', 35, 'TY'], ['2015/11/09', 36, 'TY'], ['2015/11/10', 37, 'TY'], ['2015/11/11', 22, 'TY'], ['2015/11/12', 24, 'TY'], ['2015/11/13', 26, 'TY'], ['2015/11/14', 34, 'TY'], ['2015/11/15', 21, 'TY'], ['2015/11/16', 18, 'TY'], ['2015/11/17', 45, 'TY'], ['2015/11/18', 32, 'TY'], ['2015/11/19', 35, 'TY'], ['2015/11/20', 30, 'TY'], ['2015/11/21', 28, 'TY'], ['2015/11/22', 27, 'TY'], ['2015/11/23', 26, 'TY'], ['2015/11/24', 15, 'TY'], ['2015/11/25', 30, 'TY'], ['2015/11/26', 35, 'TY'], ['2015/11/27', 42, 'TY'], ['2015/11/28', 42, 'TY'], ['2015/11/08', 21, 'SS'], ['2015/11/09', 25, 'SS'], ['2015/11/10', 27, 'SS'], ['2015/11/11', 23, 'SS'], ['2015/11/12', 24, 'SS'], ['2015/11/13', 21, 'SS'], ['2015/11/14', 35, 'SS'], ['2015/11/15', 39, 'SS'], ['2015/11/16', 40, 'SS'], ['2015/11/17', 36, 'SS'], ['2015/11/18', 33, 'SS'], ['2015/11/19', 43, 'SS'], ['2015/11/20', 40, 'SS'], ['2015/11/21', 34, 'SS'], ['2015/11/22', 28, 'SS'], ['2015/11/23', 26, 'SS'], ['2015/11/24', 37, 'SS'], ['2015/11/25', 41, 'SS'], ['2015/11/26', 46, 'SS'], ['2015/11/27', 47, 'SS'], ['2015/11/28', 41, 'SS'], ['2015/11/08', 10, 'QG'], ['2015/11/09', 15, 'QG'], ['2015/11/10', 35, 'QG'], ['2015/11/11', 38, 'QG'], ['2015/11/12', 22, 'QG'], ['2015/11/13', 16, 'QG'], ['2015/11/14', 7, 'QG'], ['2015/11/15', 2, 'QG'], ['2015/11/16', 17, 'QG'], ['2015/11/17', 33, 'QG'], ['2015/11/18', 40, 'QG'], ['2015/11/19', 32, 'QG'], ['2015/11/20', 26, 'QG'], ['2015/11/21', 35, 'QG'], ['2015/11/22', 40, 'QG'], ['2015/11/23', 32, 'QG'], ['2015/11/24', 26, 'QG'], ['2015/11/25', 22, 'QG'], ['2015/11/26', 16, 'QG'], ['2015/11/27', 22, 'QG'], ['2015/11/28', 10, 'QG'], ['2015/11/08', 10, 'SY'], ['2015/11/09', 15, 'SY'], ['2015/11/10', 35, 'SY'], ['2015/11/11', 38, 'SY'], ['2015/11/12', 22, 'SY'], ['2015/11/13', 16, 'SY'], ['2015/11/14', 7, 'SY'], ['2015/11/15', 2, 'SY'], ['2015/11/16', 17, 'SY'], ['2015/11/17', 33, 'SY'], ['2015/11/18', 40, 'SY'], ['2015/11/19', 32, 'SY'], ['2015/11/20', 26, 'SY'], ['2015/11/21', 35, 'SY'], ['2015/11/22', 4, 'SY'], ['2015/11/23', 32, 'SY'], ['2015/11/24', 26, 'SY'], ['2015/11/25', 22, 'SY'], ['2015/11/26', 16, 'SY'], ['2015/11/27', 22, 'SY'], ['2015/11/28', 10, 'SY'], ['2015/11/08', 10, 'DD'], ['2015/11/09', 15, 'DD'], ['2015/11/10', 35, 'DD'], ['2015/11/11', 38, 'DD'], ['2015/11/12', 22, 'DD'], ['2015/11/13', 16, 'DD'], ['2015/11/14', 7, 'DD'], ['2015/11/15', 2, 'DD'], ['2015/11/16', 17, 'DD'], ['2015/11/17', 33, 'DD'], ['2015/11/18', 4, 'DD'], ['2015/11/19', 32, 'DD'], ['2015/11/20', 26, 'DD'], ['2015/11/21', 35, 'DD'], ['2015/11/22', 40, 'DD'], ['2015/11/23', 32, 'DD'], ['2015/11/24', 26, 'DD'], ['2015/11/25', 22, 'DD'], ['2015/11/26', 16, 'DD'], ['2015/11/27', 22, 'DD'], ['2015/11/28', 10, 'DD']]
            }]
        };
        // use configuration item and data specified to show chart
        myChart2.setOption(option2, true);

        let option3 = {
            title: {
                text: 'Ideias Avaliadas'
            },
            tooltip: {
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: toolboxOpts,
            series: [{
                name: '业务指标',
                type: 'gauge',
                detail: { formatter: '{value}%' },
                data: [{ value: 50, name: '完成率' }],
                axisLine: { // 坐标轴线
                    lineStyle: { // 属性lineStyle控制线条样式
                        color: [[0.29, '#9FE6B8'], [0.69, '#37A2DA'], [1, '#fd7b5f']],
                        width: 4,
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                }
            }]
        };

        // use configuration item and data specified to show chart
        myChart3.setOption(option3, true);

        var data = [[[-5, 12, 56943299, 'Investir em inteligência de mercado', 'Ideias'], [-11, 4, 56943299, 'Documentar as atividades de cada função', 'Ideias'], [-11, 6, 56943299, 'Desenvolver um plano estratégico', 'Ideias'], [-5, 0, 56943299, 'Criar processos para gestão dos recursos humanos', 'Ideias'], [-1, 3, 56943299, 'Ampliar a pauta de conteúdo autoral no canal MOVA', 'Ideias'], [-7, 6, 56943299, 'Aumentar a relevância da marca MOVA', 'Ideias']]];

        let maxX = 17;
        let maxY = 15;
        let minX = -1 * maxX;
        let minY = -1 * maxY;

        let option4 = {
            title: {
                text: 'Matriz de Disrupção'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            toolbox: toolboxOpts,
            legend: {
                // right: 10,
                x: 'center',
                y: 'bottom',
                data: ['Ideias', 'Major Projects', 'Quick Wins', 'Fill Ins', 'Hard Slogs']
            },
            xAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                }
            },
            yAxis: {
                splitLine: {
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                scale: true
            },
            series: [{
                // data: [[0, 100], [10000, 100], [20000, 100], [30000, 100], [40000, 100], [50000, 100], [60000, 100]],
                data: [[0, maxY], [maxX, maxY]],
                name: 'Major Projects',
                type: 'line',
                color: 'lightsalmon',
                areaStyle: {
                    color: 'lightsalmon'
                }
            }, {
                // data: [[0, 100], [-10000, 100], [-20000, 100], [-30000, 100], [-40000, 100], [-50000, 100], [-60000, 100]],
                data: [[0, maxY], [minX, maxY]],
                name: 'Quick Wins',
                type: 'line',
                color: 'lightblue',
                areaStyle: {
                    color: 'lightblue'
                }
            }, {
                // data: [[0, -100], [-10000, -100], [-20000, -100], [-30000, -100], [-40000, -100], [-50000, -100], [-60000, -100]],
                data: [[0, minY], [minX, minY]],
                name: 'Fill Ins',
                type: 'line',
                color: 'lightyellow',
                areaStyle: {
                    color: 'lightyellow'
                }
            }, {
                // data: [[0, -100], [10000, -100], [20000, -100], [30000, -100], [40000, -100], [50000, -100], [60000, -100]],
                data: [[0, minY], [maxX, minY]],
                name: 'Hard Slogs',
                type: 'line',
                color: 'lightgreen',
                areaStyle: {
                    color: 'lightgreen'
                }
            }, {
                name: 'Ideias',
                data: data[0],
                type: 'scatter',
                symbolSize: function (data) {
                    return Math.sqrt(data[2]) / 5e2;
                },
                label: {
                    emphasis: {
                        show: true,
                        formatter: function (param) {
                            return param.data[3];
                        },
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(120, 36, 50, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(251, 118, 123)'
                        }, {
                            offset: 1,
                            color: 'rgb(204, 46, 72)'
                        }])
                    }
                }
            }]
        };

        // use configuration item and data specified to show chart
        myChart4.setOption(option4, true);

        let option5 = {
            title: {
                text: 'Perfil das Inovações',
                subtext: 'Ideias',
                x: 'left'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x: 'right',
                y: 'middle',
                orient: 'vertical',
                data: ['Produtos/Serviços', 'Processos', 'Marketing', 'Modelo de Negócios']
            },
            toolbox: toolboxOpts,
            calculable: true,
            series: [{
                name: 'Perfil das Inovações',
                type: 'pie',
                roseType: 'radius',
                label: {
                    normal: {
                        show: true,
                        formatter: '{b}\n{c}\n{d}%'
                    },
                    emphasis: {
                        show: true
                    }
                },
                data: [{ value: 426, name: 'Produtos/Serviços' }, { value: 397, name: 'Processos' }, { value: 345, name: 'Marketing' }, { value: 239, name: 'Modelo de Negócios' }]
            }]
        };

        // use configuration item and data specified to show chart
        myChart5.setOption(option5, true);

        var countries = ['Brazil', 'Canada', 'United States', 'India', 'Australia', 'China', 'Russia', 'South Africa'];

        var data6 = [{ name: 'Brazil', value: 9 }, { name: 'Canada', value: 12 }, { name: 'United States', value: 12 }, { name: 'India', value: 12 }, { name: 'Australia', value: 14 }, { name: 'China', value: 15 }, { name: 'Russia', value: 16 }, { name: 'South Africa', value: 18 }];

        var geoCoordMap = {
            'Brazil': [-47.8645, -15.7998],
            'Canada': [-106.3468, 56.1304],
            'United States': [-95.7129, 37.0902],
            'India': [78.9629, 20.5937],
            'Australia': [133.7751, -25.2744],
            'China': [116.363625, 39.913818],
            'Russia': [105.3188, 61.5240],
            'South Africa': [22.9375, -30.5595]
        };

        function convertData(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        }

        function randomValue() {
            return Math.round(Math.random() * 1000);
        }

        let option6 = {
            tooltip: {},
            toolbox: toolboxOpts,
            visualMap: {
                min: 0,
                max: 1500,
                left: 'left',
                top: 'bottom',
                text: ['High', 'Low'],
                seriesIndex: [1],
                inRange: {
                    color: ['#e0ffff', '#006edd']
                },
                calculable: true
            },
            geo: {
                map: 'world',
                roam: true,
                label: {
                    normal: {
                        show: false,
                        textStyle: {
                            color: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(0, 0, 0, 0.2)'
                    },
                    emphasis: {
                        areaColor: null,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        shadowBlur: 20,
                        borderWidth: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            series: [{
                type: 'scatter',
                coordinateSystem: 'geo',
                data: convertData(data6),
                symbolSize: 20,
                symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z',
                symbolRotate: 35,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    emphasis: {
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#F06C00'
                    }
                }
            }, {
                name: 'categoryA',
                type: 'map',
                geoIndex: 0,
                // tooltip: {show: false},
                data: [{ name: 'Brazil', value: randomValue() }, { name: 'Canada', value: randomValue() }, { name: 'United States', value: randomValue() }, { name: 'India', value: randomValue() }, { name: 'Australia', value: randomValue() }, { name: 'China', value: randomValue() }, { name: 'Russia', value: randomValue() }, { name: 'South Africa', value: randomValue() }]
            }]
        };

        // use configuration item and data specified to show chart
        myChart6.setOption(option6, true);

        // Generate data
        var category = [];
        var dottedBase = +new Date();
        var lineData = [];
        var barData = [];

        for (var i = 0; i < 20; i++) {
            var date = new Date(dottedBase += 3600 * 24 * 1000);
            category.push([date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-'));
            var b = Math.random() * 200;
            var d = Math.random() * 200;
            barData.push(b);
            lineData.push(d + b);
        }

        // option
        let option7 = {
            title: {
                text: 'Ideias Coletadas'
            },
            backgroundColor: '#fff',
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['line', 'bar'],
                textStyle: {
                    color: '#ccc'
                }
            },
            xAxis: {
                data: category,
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },
            yAxis: {
                splitLine: { show: false },
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                }
            },
            series: [{
                name: 'line',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 15,
                data: lineData
            }, {
                name: 'bar',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        barBorderRadius: 5,
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: '#14c8d4' }, { offset: 1, color: '#43eec6' }])
                    }
                },
                data: barData
            }, {
                name: 'line',
                type: 'bar',
                barGap: '-100%',
                barWidth: 10,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: 'rgba(20,200,212,0.5)' }, { offset: 0.2, color: 'rgba(20,200,212,0.2)' }, { offset: 1, color: 'rgba(20,200,212,0)' }])
                    }
                },
                z: -12,
                data: lineData
            }, {
                name: 'dotted',
                type: 'pictorialBar',
                symbol: 'rect',
                itemStyle: {
                    normal: {
                        color: '#fff'
                    }
                },
                symbolRepeat: true,
                symbolSize: [12, 4],
                symbolMargin: 1,
                z: -10,
                data: lineData
            }]
        };

        // use configuration item and data specified to show chart
        myChart7.setOption(option7, true);

        if (charts) {
            charts.push(myChart);
            charts.push(myChart2);
            charts.push(myChart3);
            charts.push(myChart4);
            charts.push(myChart5);
            charts.push(myChart6);
            charts.push(myChart7);
        }
    }

    render() {
        let plataforma = this.state.plataforma;
        let user_id = this.state.user_id;
        let user = this.state.user;

        if (!plataforma) {
            return React.createElement('div', null);
        }

        let _tags = plataforma.tags ? plataforma.tags.map(function (tag) {
            return React.createElement(
                'p',
                {
                    key: tag,
                    className: 'chip' },
                tag
            );
        }) : null;

        let _ideias = plataforma.ideias && plataforma.usuarioParticipa ? plataforma.ideias.map(function (ideia, ideiaIndex) {
            return React.createElement(IdeiaBox, { ideia: ideia, ideiaIndex: ideiaIndex });
        }) : null;

        let _inovacoes = plataforma.ideias && plataforma.usuarioParticipa ? plataforma.ideias.map(function (ideia, ideiaIndex) {
            if (ideia.inovacao) {
                return React.createElement(InovacaoBox, { inovacao: ideia.inovacao, inovacaoIndex: ideiaIndex });
            }
            return null;
        }) : null;

        let _pedidos_participacao = plataforma.pedidos_participacao ? plataforma.pedidos_participacao.map(function (pedido, pedidoIndex) {
            return React.createElement(
                'div',
                { key: pedido._id },
                React.createElement(
                    'p',
                    null,
                    pedido.autor.nome
                ),
                React.createElement(
                    'p',
                    null,
                    pedido.justificativa
                )
            );
        }) : null;

        return React.createElement(
            'div',
            null,
            React.createElement(PlataformaCover, { plataforma: this.state.plataforma }),
            React.createElement(
                'div',
                { className: 'plataforma-summary m-auto' },
                React.createElement(
                    'div',
                    { style: {
                            "textAlign": "center",
                            "width": "100%",
                            "color": "black",
                            "fontWeight": "bold"
                        } },
                    'Resumo'
                ),
                React.createElement(
                    'div',
                    { className: 'plataforma-resumo' },
                    React.createElement('p', { dangerouslySetInnerHTML: { "__html": plataforma.resumo } })
                ),
                React.createElement(
                    'div',
                    { className: 'plataforma-tags' },
                    _tags
                ),
                React.createElement(
                    'div',
                    { className: 'plataforma-permissao ml-auto' },
                    React.createElement(PlataformaIconPermissao, { permissao: plataforma.permissao })
                ),
                React.createElement(
                    'div',
                    { className: 'plataforma-actions ml-auto' },
                    plataforma.autor._id == user_id ? React.createElement(
                        'div',
                        { className: 'plataforma-action' },
                        React.createElement(
                            'button',
                            { className: 'btn btn-danger btn-block', 'data-module': 'button', 'data-url': `/plataformas/editar/${plataforma._id}` },
                            'Editar'
                        )
                    ) : !plataforma.usuarioParticipa && !plataforma.possuiPedidoParticipacao ? React.createElement(
                        'div',
                        { className: 'plataforma-action' },
                        React.createElement(
                            'button',
                            { className: 'btn btn-danger btn-block', 'data-toggle': 'modal', 'data-target': '#modal_participar' },
                            'Participar'
                        )
                    ) : plataforma.possuiPedidoParticipacao ? React.createElement(
                        'div',
                        { className: 'plataforma-action' },
                        React.createElement(
                            'button',
                            { className: 'btn btn-info btn-block' },
                            'Pedido Pendente'
                        )
                    ) : null
                )
            ),
            React.createElement(
                'nav',
                { id: '', className: 'navbar navbar-expand-lg navbar-light bg-white second-navbar' },
                React.createElement(
                    'button',
                    { className: 'navbar-toggler navbar-toggler-fullwidth', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNavDropdownPlataformaDetails', 'aria-controls': 'navbarNavDropdownPlataformaDetails', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
                    React.createElement('span', { className: 'navbar-toggler-icon' })
                ),
                React.createElement(
                    'div',
                    { className: 'collapse navbar-collapse', id: 'navbarNavDropdownPlataformaDetails' },
                    React.createElement(
                        'ul',
                        { className: 'navbar-nav nav nav-tabs d-flex justify-content-center', id: 'plataforma-tabs' },
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border active', id: 'nav-descricao-tab', 'data-toggle': 'tab', href: '#nav-descricao', role: 'tab', 'aria-controls': 'nav-descricao', 'aria-selected': 'true' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Descri\xE7\xE3o'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-anexos-tab', 'data-toggle': 'tab', href: '#nav-anexos', role: 'tab', 'aria-controls': 'nav-anexos', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Anexos'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-swot-tab', 'data-toggle': 'tab', href: '#nav-swot', role: 'tab', 'aria-controls': 'nav-swot', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'SWOT'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-kpis-tab', 'data-toggle': 'tab', href: '#nav-kpis', role: 'tab', 'aria-controls': 'nav-kpis', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link', href: '#' },
                                'KPIs'
                            )
                        ),
                        plataforma.usuarioModera ? React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-moderador-tab', 'data-toggle': 'tab', href: '#nav-moderador', role: 'tab', 'aria-controls': 'nav-moderador', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link', href: '#' },
                                'Moderador'
                            )
                        ) : null,
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-raw-tab', 'data-toggle': 'tab', href: '#nav-raw', role: 'tab', 'aria-controls': 'nav-raw', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link', href: '#' },
                                'Raw'
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { id: 'content', className: `m-auto ${!plataforma.usuarioParticipa ? 'blur' : ''}` },
                React.createElement(
                    'div',
                    { className: 'plataforma-page' },
                    React.createElement(
                        'div',
                        { className: 'tab-content', id: 'nav-tabContent' },
                        React.createElement(
                            'div',
                            { className: 'd-flex flex-row align-items-center mb-5 row' },
                            React.createElement(
                                'div',
                                { className: 'd-flex flex-row align-items-center  col-12 col-md-6' },
                                React.createElement(
                                    'div',
                                    { className: 'mr-2' },
                                    React.createElement(FaIcon, { icon: 'plataforma' }),
                                    ` ${plataforma.nome}`
                                ),
                                plataforma.encerrarFasePeriodoTempo && plataforma.encerrarFasePeriodoTempo_valor && h.getTimeRemainingStringFromDays(plataforma.createdAt, plataforma.encerrarFasePeriodoTempo_valor) != null ? React.createElement(
                                    'div',
                                    { className: 'plataforma-timespan border-black mr-2', 'data-toggle': 'modal', 'data-target': '#modal_tempo_restante', clickable: true },
                                    React.createElement(FaIcon, { icon: 'fa-stopwatch' }),
                                    ` ${h.getTimeRemainingStringFromDays(plataforma.createdAt, plataforma.encerrarFasePeriodoTempo_valor)}`
                                ) : null,
                                plataforma.encerrarFaseLimiteIdeia && plataforma.encerrarFaseLimiteIdeia_valor ? React.createElement(
                                    'div',
                                    { className: 'plataforma-timespan border-black mr-2', 'data-toggle': 'modal', 'data-target': '', clickable: true },
                                    React.createElement(FaIcon, { icon: 'fa-infinity' }),
                                    ` ${plataforma.ideias.length}/${plataforma.encerrarFaseLimiteIdeia_valor}`
                                ) : null
                            ),
                            React.createElement(
                                'div',
                                { className: 'd-flex flex-row align-items-center ml-auto justify-content-end col-12 col-md-6' },
                                React.createElement(
                                    'div',
                                    { className: 'plataforma-timespan border-black mr-2' },
                                    ` ${h.short_date(plataforma.data)}`
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'circle-border circle-border-black mr-2', clickable: '' },
                                    React.createElement(FaIcon, { icon: 'fa-print' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'circle-border circle-border-black mr-2', clickable: '' },
                                    React.createElement(FaIcon, { icon: 'fa-file-pdf' })
                                ),
                                React.createElement(
                                    'div',
                                    { href: '#', className: 'circle-border circle-border-black mr-2', clickable: '', 'data-toggle': 'modal', 'data-target': '#modal_salvar_favorito' },
                                    React.createElement(FaIcon, { icon: 'fa-thumbtack' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'circle-border circle-border-black mr-2', clickable: '', href: '#', 'data-toggle': 'modal', 'data-target': '#modal_compartilhar' },
                                    React.createElement(FaIcon, { icon: 'fa-share-alt' })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade show active', id: 'nav-descricao', role: 'tabpanel', 'aria-labelledby': 'nav-descricao-tab' },
                            React.createElement('div', { dangerouslySetInnerHTML: { "__html": plataforma.descricao } }),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'p',
                                    { className: 'text-subheader' },
                                    React.createElement(FaIcon, { icon: 'medalha' }),
                                    ' ',
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Medalhas'
                                    )
                                )
                            ),
                            React.createElement(MedalhaBoxShow, { plataforma_id: plataforma._id, medalhas: plataforma.medalhas }),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'p',
                                    { className: 'text-subheader' },
                                    React.createElement(FaIcon, { icon: 'grupo' }),
                                    ' ',
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Grupos'
                                    )
                                )
                            ),
                            React.createElement(GrupoBoxShow, { plataforma_id: plataforma._id, grupos: plataforma.membros.grupos }),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'p',
                                    { className: 'text-subheader' },
                                    React.createElement(FaIcon, { icon: 'moderador' }),
                                    ' ',
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Moderadores'
                                    )
                                )
                            ),
                            React.createElement(ModeradorBoxShow, { plataforma_id: plataforma._id, moderadores: plataforma.membros.moderadores }),
                            React.createElement(
                                'div',
                                { className: 'form-group' },
                                React.createElement(
                                    'p',
                                    { className: 'text-subheader' },
                                    React.createElement(FaIcon, { icon: 'sponsor' }),
                                    ' ',
                                    React.createElement(
                                        'strong',
                                        null,
                                        'Sponsors'
                                    )
                                )
                            ),
                            React.createElement(SponsorBoxShow, { plataforma_id: plataforma._id, sponsors: plataforma.membros.sponsors })
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-anexos', role: 'tabpanel', 'aria-labelledby': 'nav-anexos-tab' },
                            React.createElement('div', { className: 'content m-auto' })
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-swot', role: 'tabpanel', 'aria-labelledby': 'nav-swot-tab' },
                            React.createElement(
                                'div',
                                { className: 'content m-auto' },
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-8' },
                                        React.createElement(
                                            'div',
                                            { className: 'card swot swot-forcas' },
                                            React.createElement('div', { className: 'swot-content', dangerouslySetInnerHTML: { "__html": plataforma.swot_forcas } })
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'tip-box' },
                                            React.createElement(
                                                'div',
                                                { className: 'header' },
                                                'Tip'
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'body' },
                                                React.createElement(
                                                    'p',
                                                    null,
                                                    'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-8' },
                                        React.createElement(
                                            'div',
                                            { className: 'card swot swot-fraquezas' },
                                            React.createElement('div', { className: 'swot-content', dangerouslySetInnerHTML: { "__html": plataforma.swot_fraquezas } })
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'tip-box' },
                                            React.createElement(
                                                'div',
                                                { className: 'header' },
                                                'Tip'
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'body' },
                                                React.createElement(
                                                    'p',
                                                    null,
                                                    'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-8' },
                                        React.createElement(
                                            'div',
                                            { className: 'card swot swot-oportunidades' },
                                            React.createElement('div', { className: 'swot-content', dangerouslySetInnerHTML: { "__html": plataforma.swot_oportunidades } })
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'tip-box' },
                                            React.createElement(
                                                'div',
                                                { className: 'header' },
                                                'Tip'
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'body' },
                                                React.createElement(
                                                    'p',
                                                    null,
                                                    'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                                )
                                            )
                                        )
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-8' },
                                        React.createElement(
                                            'div',
                                            { className: 'card swot swot-ameacas' },
                                            React.createElement('div', { className: 'swot-content', dangerouslySetInnerHTML: { "__html": plataforma.swot_ameacas } })
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 col-md-4' },
                                        React.createElement(
                                            'div',
                                            { className: 'tip-box' },
                                            React.createElement(
                                                'div',
                                                { className: 'header' },
                                                'Tip'
                                            ),
                                            React.createElement(
                                                'div',
                                                { className: 'body' },
                                                React.createElement(
                                                    'p',
                                                    null,
                                                    'How many responses will need to accurately represent your issue? How many will be reasonable to collect within the time frame of your campaign?'
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-kpis', role: 'tabpanel', 'aria-labelledby': 'nav-kpis-tab' },
                            React.createElement(
                                'div',
                                { className: 'content m-auto' },
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-400', style: { width: "790px" }, id: 'tester' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-400', style: { width: "790px" }, id: 'tester2' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-400', style: { width: "790px" }, id: 'tester3' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-500', style: { width: "790px" }, id: 'tester4' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-500', style: { width: "790px" }, id: 'tester5' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-500', style: { width: "790px" }, id: 'tester6' })
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'mb-5' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-12 card d-flex align-items-center' },
                                        React.createElement('div', { className: 'chart-500', style: { width: "790px" }, id: 'tester7' })
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-moderador', role: 'tabpanel', 'aria-labelledby': 'nav-moderador-tab' },
                            React.createElement(
                                'div',
                                { className: 'content m-auto' },
                                React.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    React.createElement(
                                        'p',
                                        null,
                                        React.createElement(FaIcon, { icon: 'ideia' }),
                                        ' ',
                                        React.createElement(
                                            'strong',
                                            null,
                                            'Pedidos de Participacao'
                                        )
                                    )
                                ),
                                _pedidos_participacao,
                                React.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    React.createElement(
                                        'p',
                                        null,
                                        React.createElement(FaIcon, { icon: 'ideia' }),
                                        ' ',
                                        React.createElement(
                                            'strong',
                                            null,
                                            'Ideias Avaliadas'
                                        )
                                    )
                                ),
                                React.createElement(Slider, null),
                                React.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    React.createElement(
                                        'p',
                                        null,
                                        React.createElement(FaIcon, { icon: 'inovacao' }),
                                        ' ',
                                        React.createElement(
                                            'strong',
                                            null,
                                            'Inovacoes Avaliadas'
                                        )
                                    )
                                ),
                                React.createElement(Slider, null),
                                React.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    React.createElement(
                                        'p',
                                        null,
                                        React.createElement(FaIcon, { icon: 'agente' }),
                                        ' ',
                                        React.createElement(
                                            'strong',
                                            null,
                                            'Agentes Avaliados'
                                        )
                                    )
                                ),
                                React.createElement(Slider, null),
                                React.createElement(
                                    'div',
                                    { className: 'form-group' },
                                    React.createElement(
                                        'p',
                                        null,
                                        React.createElement(FaIcon, { icon: 'agente' }),
                                        ' ',
                                        React.createElement(
                                            'strong',
                                            null,
                                            'Agentes Pendentes'
                                        )
                                    )
                                ),
                                React.createElement(Slider, null)
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-raw', role: 'tabpanel', 'aria-labelledby': 'nav-raw-tab' },
                            React.createElement(
                                'pre',
                                null,
                                JSON.stringify(plataforma, undefined, 4)
                            )
                        )
                    )
                ),
                !plataforma.usuarioParticipa ? React.createElement('div', { className: 'blur', style: { width: "100%", height: "100%", position: "absolute", top: "0", left: "0", zIndex: "100" } }) : null
            ),
            plataforma.usuarioParticipa ? React.createElement(
                'nav',
                { id: '', className: 'navbar navbar-expand-lg navbar-light bg-white second-navbar' },
                React.createElement(
                    'button',
                    { className: 'navbar-toggler navbar-toggler-fullwidth', type: 'button', 'data-toggle': 'collapse', 'data-target': '#navbarNavDropdownPlataformaRelated', 'aria-controls': 'navbarNavDropdownPlataformaRelated', 'aria-expanded': 'false', 'aria-label': 'Toggle navigation' },
                    React.createElement('span', { className: 'navbar-toggler-icon' })
                ),
                React.createElement(
                    'div',
                    { className: 'collapse navbar-collapse', id: 'navbarNavDropdownPlataformaRelated' },
                    React.createElement(
                        'ul',
                        { className: 'navbar-nav nav nav-tabs d-flex', id: 'plataforma-tabs' },
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border active show', id: 'nav-ideias-tab', 'data-toggle': 'tab', href: '#nav-ideias', role: 'tab', 'aria-controls': 'nav-ideias', 'aria-selected': 'true' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Ideias'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-inovacoes-tab', 'data-toggle': 'tab', href: '#nav-inovacoes', role: 'tab', 'aria-controls': 'nav-inovacoes', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Inova\xE7\xF5es'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-investimentos-tab', 'data-toggle': 'tab', href: '#nav-investimentos', role: 'tab', 'aria-controls': 'nav-investimentos', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Investimentos'
                            )
                        ),
                        React.createElement(
                            'li',
                            { className: 'nav-item bottom_border ', id: 'nav-comentarios-tab', 'data-toggle': 'tab', href: '#nav-comentarios', role: 'tab', 'aria-controls': 'nav-comentarios', 'aria-selected': 'false' },
                            React.createElement(
                                'a',
                                { className: 'nav-link' },
                                'Coment\xE1rios'
                            )
                        )
                    )
                )
            ) : null,
            plataforma.usuarioParticipa ? React.createElement(
                'div',
                { className: `content m-auto ${!plataforma.usuarioParticipa ? 'blur' : ''}` },
                React.createElement(
                    'div',
                    { className: 'plataforma-page-lower' },
                    React.createElement(
                        'div',
                        { className: 'tab-content', id: 'nav-tabContent' },
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade show active', id: 'nav-ideias', role: 'tabpanel', 'aria-labelledby': 'nav-descricao-tab' },
                            React.createElement(
                                'div',
                                { className: 'tile-grid' },
                                _ideias
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-inovacoes', role: 'tabpanel', 'aria-labelledby': 'nav-inovacoes-tab' },
                            React.createElement(
                                'div',
                                { className: 'tile-grid' },
                                _inovacoes
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-investimentos', role: 'tabpanel', 'aria-labelledby': 'nav-investimentos-tab' },
                            React.createElement(
                                'div',
                                { className: 'plataforma-page' },
                                React.createElement(
                                    'div',
                                    { className: 'card p-2 mb-2 col-12 col-xl-8' },
                                    React.createElement(
                                        'div',
                                        { className: 'border-bottom' },
                                        React.createElement(
                                            'div',
                                            { className: 'd-inline' },
                                            React.createElement(
                                                'label',
                                                null,
                                                plataforma.nome
                                            )
                                        ),
                                        React.createElement(
                                            'button',
                                            { type: 'button', className: 'close ml-auto', 'data-container': 'body', 'data-toggle': 'popover', 'data-trigger': 'focus', 'data-placement': 'bottom', 'data-content': ' ', 'data-template': '<div class=\'popover\' role=\'tooltip\'> <div class=\'arrow\'></div> <div class=\'senno-popover-body p-0\'> <div class=\'list-group\'> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-question\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Ajuda </a> <a href=\'#\' class=\'list-group-item list-group-item-action menu-user-item\'> <i class=\'fa fa-traffic-light\'></i> <span class=\'badge-sm badge-pill badge-danger badge-up-sm invisible\'>\xA0</span> Sysop </a> </div> </div> </div>' },
                                            React.createElement('i', { className: 'fa fa-ellipsis-h' })
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'template-coleta-ideias template-design-thinking' },
                                        React.createElement(
                                            'div',
                                            { className: 'template-coleta-ideias-content' },
                                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse assumenda eius provident porro quas neque nihil, deserunt quos placeat consectetur ad voluptas, nostrum mollitia fugiat veniam excepturi doloribus vero sunt?'
                                        )
                                    ),
                                    React.createElement(
                                        'button',
                                        { className: 'btn btn-primary' },
                                        'Ver formul\xE1rio'
                                    )
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'tab-pane fade', id: 'nav-comentarios', role: 'tabpanel', 'aria-labelledby': 'nav-comentarios-tab' },
                            React.createElement(
                                'div',
                                { className: 'plataforma-page' },
                                React.createElement(
                                    'div',
                                    { className: 'container' },
                                    React.createElement(
                                        'div',
                                        { className: 'row' },
                                        React.createElement(
                                            'div',
                                            { className: 'col-12' },
                                            React.createElement(
                                                'section',
                                                { className: 'comment-list' },
                                                plataforma.usuarioParticipa ? React.createElement(Comentarios, { comentarios: plataforma.comentarios, user: user, comentar: this.comentar, curtir_comentario: this.curtir_comentario, descurtir_comentario: this.descurtir_comentario }) : null
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            ) : null,
            React.createElement(ModalTempoRestante, { plataforma_id: plataforma._id }),
            React.createElement(ModalPlataformaQuantidadeIdeias, { plataforma_id: plataforma._id }),
            React.createElement(ModalParticipar, { plataforma_id: plataforma._id, onSubmit: this.participar }),
            React.createElement(ModalModeradores, null),
            React.createElement(ModalGrupos, null),
            React.createElement(ModalCoautores, null)
        );
    }
}
import React from 'react';
import Input from './react_input';

export default class PortfolioMiniCard extends Input {
    constructor(props) {
        super(props);
    }

    render() {
        let portfolio = this.props.portfolio;
        return React.createElement(
            'div',
            {
                key: `${portfolio._id}`,
                'data-id': portfolio._id,
                className: `${this.props.popover ? 'popover' : null} popover-card d-inline-block popover-author mr-2 mb-2 d-flex flex-column justify-content-between`, role: 'tooltip',
                'data-slide': 'true',
                clickable: '',
                onClick: this.props.onClick },
            this.props.popover ? React.createElement('div', { className: 'arrow' }) : null,
            React.createElement(
                'h3',
                { className: 'senno-popover-header' },
                React.createElement(
                    'div',
                    { className: 'popover-autor text-center' },
                    React.createElement(
                        'div',
                        { 'class': 'popover-autor-avatar' },
                        React.createElement('img', { 'class': 'avatar popover-autor-avatar', src: portfolio.cover })
                    ),
                    React.createElement(
                        'div',
                        { className: 'popover-autor-info p-2' },
                        React.createElement(
                            'div',
                            { className: 'popover-autor-info-name p-1 text-subheader', style: { "borderBottom": "1px solid black" } },
                            portfolio.nome
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'senno-popover-body' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-lightbulb ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '3.678'
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-bullseye ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '1.366'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-flask ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '3.200'
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-rocket ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '248'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-fire ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '424'
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-fire ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '424'
                    )
                )
            )
        );
    }
}
import React from 'react';
import Input from './react_input';

export default class Radio extends Input {
    constructor(props) {
        super(props);

        this.state.valProp = props.valProp || "";
    }

    render() {
        return React.createElement(
            'div',
            { className: `radio ${this.state.className}` },
            React.createElement(
                'label',
                null,
                React.createElement('input', { type: 'radio', name: this.state.name, id: this.state.id,
                    value: this.state.value,
                    checked: this.props.valProp === this.state.value,
                    onChange: this.onChange }),
                React.createElement(
                    'span',
                    { className: 'bmd-radio' },
                    React.createElement('div', { className: 'ripple-container' })
                ),
                this.state.text
            )
        );
    }
}
import React from 'react';
import Input from './react_input';

export default class Range extends Input {
    constructor(props) {
        super(props);

        // Methods
        this.getInitialState = this.getInitialState.bind(this);
        this._calcRangeOffset = this._calcRangeOffset.bind(this);
        this.updateThumbPosition = this.updateThumbPosition.bind(this);

        // Initial State
        this.state.step = props.step || 1;
        this.state.min = props.min || 0;
        this.state.max = props.max || 100;

        // State from props

        // Refs
        this.range = React.createRef();
        this.thumb = React.createRef();
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        let _state = prevState;
        if (lodash.isEmpty(nextProps.value)) return _state;
        _state.value = nextProps.value;
        return _state;
    }

    componentDidUpdate() {
        this.updateThumbPosition();
    }

    componentDidMount() {
        this.updateThumbPosition();
        if (!this.props.value) {
            this.setState({
                value: this.range.current.value
            });
        }
        window.addEventListener("resize", this.updateThumbPosition);
    }

    updateThumbPosition() {
        window.$(this.thumb.current).css({ "left": `${this._calcRangeOffset()}px` });
    }

    _calcRangeOffset() {
        let $el = window.$(this.range.current);
        var width = $el.width() - 15;
        var max = parseFloat(this.props.max || 100);
        var min = parseFloat(this.props.min || 0);
        var val = parseFloat($el.val() || (max - min) / 2 + min);
        var percent = (parseFloat(val) - min) / (max - min);
        return percent * width;
    }

    render() {
        let _ticksQty = (this.props.max - this.props.min) / this.props.step + 1;
        let _ticks = [];
        for (let i = 0; i < _ticksQty; i++) {
            _ticks.push(function () {
                return React.createElement('li', { className: 'tick' });
            }());
        }
        return React.createElement(
            'div',
            { style: { "position": "relative" } },
            React.createElement('input', {
                ref: this.range,
                type: 'range',
                min: this.state.min,
                max: this.state.max,
                step: this.state.step,
                id: this.state.id,
                name: this.state.name,
                style: { "marginTop": "40px" },
                value: this.state.value,
                onChange: this.onChange }),
            React.createElement(
                'span',
                {
                    ref: this.thumb,
                    className: 'thumb active',
                    style: { "height": "30px", "width": "30px", "top": "-5px", "marginLeft": "-7px", "left": `0px` } },
                React.createElement(
                    'span',
                    { className: 'value' },
                    this.state.value,
                    this.props.unit
                )
            )
        );
    }
}
import React from 'react';
import FaIcon from './react_faicon';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            boxes: props.boxes ? props.boxes : [],
            goToLastSlideOnUpdate: props.goToLastSlideOnUpdate
        };

        this.slider = React.createRef();

        // Methods
        this.getInitialState = this.getInitialState.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.lastSlide = this.lastSlide.bind(this);
        this._onDragStart = this._onDragStart.bind(this);
        this._onDragMove = this._onDragMove.bind(this);
        this._onDragEnd = this._onDragEnd.bind(this);
        this._xPos = this._xPos.bind(this);
    }

    getInitialState() {
        return [];
    }

    prevSlide() {
        let $slider = window.$(this.slider.current).find('.slider');
        let $firstSlide = $slider.find('[data-slide]').first();
        let $lastSlide = $slider.find('[data-slide]').last();
        let $activeSlide = $slider.children('[data-slide].active');
        if ($activeSlide.length < 1) {
            $activeSlide = $firstSlide;
        }
        let $nextSlide = $activeSlide.prev('[data-slide]');
        if ($nextSlide.length < 1) {
            // Reach end
            return;
        }
        $slider.children('[data-slide]').removeClass('active');
        $nextSlide.addClass('active');
        $slider.css({ "transform": `translate3d(-${$nextSlide.position().left}px, 0, 0)` });
    }

    nextSlide() {
        let $slider = window.$(this.slider.current).find('.slider');
        let $firstSlide = $slider.find('[data-slide]').first();
        let $lastSlide = $slider.find('[data-slide]').last();
        let $activeSlide = $slider.children('[data-slide].active');
        if ($activeSlide.length < 1) {
            $activeSlide = $firstSlide;
        }
        let $nextSlide = $activeSlide.next('[data-slide]');
        if ($nextSlide.length < 1) {
            // Reach end
            return;
        }
        $slider.children('[data-slide]').removeClass('active');
        $nextSlide.addClass('active');
        if ($nextSlide.width() + $nextSlide.position().left < $slider.get(0).scrollWidth) {
            $slider.css({ "transform": `translate3d(-${$nextSlide.position().left}px, 0, 0)` });
        }
    }

    lastSlide() {
        let $slider = window.$(this.slider.current).find('.slider');
        let $firstSlide = $slider.find('[data-slide]').first();
        let $lastSlide = $slider.find('[data-slide]').last();
        let $activeSlide = $slider.children('[data-slide].active');
        if ($activeSlide.length < 1) {
            $activeSlide = $firstSlide;
        }
        let $nextSlide = $lastSlide;
        if ($nextSlide.length < 1) {
            // Reach end
            return;
        }
        $slider.children('[data-slide]').removeClass('active');
        $nextSlide.addClass('active');
        if ($nextSlide.width() + $nextSlide.position().left < $slider.get(0).scrollWidth) {
            $slider.css({ "transform": `translate3d(-${$nextSlide.position().left}px, 0, 0)` });
        }
    }

    componentDidMount() {
        console.log('DidMount');

        let ticking = false;
        let lastScrollLeft = 0;
        let that = this;
        this.slider.current.addEventListener('wheel', function (e) {
            if (e.shiftKey) {
                e.preventDefault();
                let $slider = window.$(that.slider.current).find('.slider');
                let $lastSlide = $slider.find('[data-slide]').last();
                let rightBoundary = $slider.get(0).scrollWidth;
                rightBoundary = $slider.get(0).scrollWidth - $slider.outerWidth(true) + parseInt($lastSlide.css('margin-right').replace(/[a-z]/g, ''));

                let slidesWidth = $slider.find('[data-slide]').map(function (index, slide) {
                    return slide.scrollWidth;
                }).toArray().reduce(function (a, b) {
                    return a + b;
                }, 0);

                if (slidesWidth < rightBoundary) {
                    rightBoundary = slidesWidth;
                }
                if (!that.slider.current.movedX) {
                    that.slider.current.movedX = 0;
                }
                if (that.slider.current.movedX + e.deltaY >= 0) {
                    if (that.slider.current.movedX + e.deltaY <= rightBoundary) {
                        that.slider.current.movedX = that.slider.current.movedX + e.deltaY;
                    } else {
                        that.slider.current.movedX = rightBoundary;
                    }
                } else {
                    that.slider.current.movedX = 0;
                }
                $slider.css({ "transform": `translate3d(-${that.slider.current.movedX}px, 0, 0)` });
            }
        });

        this.slider.current.addEventListener('touchstart', this._onDragStart);

        this.slider.current.addEventListener('touchmove', this._onDragMove);

        this.slider.current.addEventListener('touchend', this._onDragEnd);
    }

    _xPos(e) {
        if (e.targetTouches && e.targetTouches.length >= 1) {
            return e.targetTouches[0].clientX;
        }
        // mouse event
        return e.clientX;
    }

    _onDragStart(e) {
        console.log("_onDragStart");
        let $slide = $(e.target).closest('[data-slide]');
        if (e.target && $slide.length) {
            this._draggedSlide = $slide;

            this._draggedSlide.panning = true;

            this._draggedSlide.get(0).classList.add('panning');
            this._draggedSlide.get(0).style.transition = '';
            this._draggedSlide.startingXPos = this._xPos(e);
            this._draggedSlide.time = Date.now();
            this._draggedSlide.xPos = this._xPos(e);
            this._draggedSlide.slider = window.$(this.slider.current).find('.slider').get(0);

            console.log(this._draggedSlide);
            console.log(this._xPos(e));
        }
    }

    _onDragMove(e) {
        console.log("_onDragMove");
        if (!!this._draggedSlide) {
            e.preventDefault();
            this._draggedSlide.deltaX = Math.abs(this._draggedSlide.xPos - this._xPos(e));
            this._draggedSlide.xPos = this._xPos(e);
            this._draggedSlide.velocityX = this._draggedSlide.deltaX / (Date.now() - this._draggedSlide.time);
            this._draggedSlide.time = Date.now();

            var totalDeltaX = this._draggedSlide.xPos - this._draggedSlide.startingXPos;
            var activationDistance = this._draggedSlide.slider.offsetWidth * 1; //toast.options.activationPercent;
            if (false) {
                console.log(`deltaX: ${this._draggedSlide.deltaX}`);
                console.log(`xPos: ${this._draggedSlide.xPos}`);
                console.log(`velocityX: ${this._draggedSlide.velocityX}`);
                console.log(`time: ${this._draggedSlide.time}`);
                console.log(`totalDeltaX: ${totalDeltaX}`);
                console.log(`activationDistance: ${activationDistance}`);
            }
            this._draggedSlide.slider.style.transform = "translateX(" + totalDeltaX + "px)";
            // this._draggedSlide.slider.style.opacity = 1 - Math.abs(totalDeltaX / activationDistance);
        }
    }

    _onDragEnd() {
        console.log("_onDragEnd");
        if (!!this._draggedSlide) {

            this._draggedSlide.panning = false;
            this._draggedSlide.get(0).classList.remove('panning');

            var totalDeltaX = this._draggedSlide.xPos - this._draggedSlide.startingXPos;
            var activationDistance = this._draggedSlide.get(0).offsetWidth * 1; //this._draggedSlide.options.activationPercent;
            var shouldBeDismissed = Math.abs(totalDeltaX) > activationDistance || this._draggedSlide.velocityX > 1;

            // Remove toast
            if (false && shouldBeDismissed) {
                // this._draggedSlide.wasSwiped = true;
                // this._draggedSlide.dismiss();

                // Animate toast back to original position
            } else {
                    // this._draggedSlide.slider.style.transition = 'transform .2s, opacity .2s';
                    // this._draggedSlide.slider.style.transform = '';
                    // this._draggedSlide.slider.style.opacity = '';
                }
            this._draggedSlide = null;
        }
    }

    componentDidUpdate() {
        if (this.state.goToLastSlideOnUpdate_do) {
            this.lastSlide();
            this.state.goToLastSlideOnUpdate_do = null;
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        let goToLastSlideOnUpdate_do;
        if (prevState.boxes && nextProps.boxes && prevState.boxes.length !== nextProps.boxes.length) {
            if (prevState.goToLastSlideOnUpdate) {
                goToLastSlideOnUpdate_do = true;
            }
        }
        return {
            boxes: nextProps.boxes,
            goToLastSlideOnUpdate_do: goToLastSlideOnUpdate_do
        };
    }

    render() {
        return React.createElement(
            'div',
            { ref: this.slider, id: this.props.id || 'slider', className: 'position-relative' },
            this.state.boxes && this.state.boxes.length > 0 ? React.createElement(
                'div',
                { className: 'slider-prev', onClick: this.prevSlide },
                React.createElement(FaIcon, { icon: 'fa-chevron-left' })
            ) : void 0,
            this.state.boxes && this.state.boxes.length > 0 ? React.createElement(
                'div',
                { className: 'slider-next', onClick: this.nextSlide },
                React.createElement(FaIcon, { icon: 'fa-chevron-right' })
            ) : void 0,
            React.createElement(
                'div',
                { className: 'form-group slider-container' },
                React.createElement(
                    'div',
                    { className: 'slider' },
                    this.state.boxes
                )
            )
        );
    }
}
import React from 'react';

export const SocketContext = React.createContext();
import React from 'react';

export default class SpinnerLDSRipple extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "lds-ripple" },
            React.createElement("div", null),
            React.createElement("div", null)
        );
    }
}
import React from 'react';
import SponsorMiniCard from './react_sponsor_minicard';
import Slider from './react_slider';
import { WS_NAMESPACES } from '../constants/ws_namespaces';
import { WS_EVENTS } from '../constants/ws_events';
import { comparaPorNome } from '../main';

export default class SponsorBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            _id: props.object_id ? props.object_id : "",
            sponsors: props.sponsors ? props.sponsors : []
        };

        this.getInitialState = this.getInitialState.bind(this);

        this.socket = io.connect(WS_NAMESPACES.PLATAFORMAS);
        this.room = 'asd';

        let that = this;
        this.socket.on('connect', function (data) {
            // this = socket
            // that = this do React
            log('SocketPlataformas client connected ' + that.room);
            this.emit('join', that.room);

            this.on(WS_EVENTS.POST_OK, function (data) {
                log(WS_EVENTS.POST_OK);
                if (data.type !== 'sponsors') return;

                that.state.sponsors = data.data;
                that.setState({
                    sponsors: that.state.sponsors
                });
            });
        });
    }

    getInitialState() {
        return [];
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            _id: nextProps.object_id,
            sponsors: nextProps.sponsors
        };
    }

    render() {

        var _boxes = this.state.sponsors.sort(comparaPorNome).map(function (sponsor) {
            return React.createElement(SponsorMiniCard, { sponsor: sponsor });
        }, this);

        _boxes.push(function () {
            return React.createElement(
                'div',
                {
                    key: _boxes.length + 1,
                    'data-slide': 'true',
                    className: 'popover-card d-inline-block popover-author mr-2 mb-2 d-flex justify-content-around align-items-center align-content-center flex-column',
                    'data-toggle': 'modal',
                    'data-target': '#modal_convidar_sponsor',
                    clickable: '' },
                React.createElement(
                    'h3',
                    { className: 'senno-popover-header', style: { "borderBottom": "none" } },
                    React.createElement(
                        'div',
                        { className: 'circle-border circle-border-black w-5em_i h-5em_i' },
                        React.createElement('i', { className: 'fa fa-plus' })
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'senno-popover-body text-center' },
                    'CONVIDAR',
                    React.createElement('br', null),
                    'SPONSOR'
                )
            );
        }());

        return React.createElement(
            'div',
            null,
            React.createElement(Slider, { boxes: _boxes })
        );
    }
}
import React from 'react';
import SponsorMiniCard from './react_sponsor_minicard';
import Slider from './react_slider';
import { comparaPorNome } from '../main';

export default class SponsorBoxShow extends React.Component {
    constructor(props) {
        super(props);

        this.modal = React.createRef();
        this.showModal = this.showModal.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
        this.renderBoxes = this.renderBoxes.bind(this);

        this.state = {
            plataforma_id: props.plataforma_id ? props.plataforma_id : "",
            sponsors: props.sponsors ? props.sponsors : [],
            selected_id: null
        };

        this.state._boxes = this.renderBoxes();
    }

    getInitialState() {
        return [];
    }

    showModal(e) {
        alert('Clicou!');
        // let $this = window.$(e.currentTarget);
        // this.setState({
        //     selected_id: $this.data('id')
        // })
    }

    componentDidUpdate() {
        if (!this.modal.current || !this.state.selected_id) {
            return;
        }
        let $modal = window.$(this.modal.current.modal.current);
        $modal.modal('show');
    }

    renderBoxes() {
        return this.state.sponsors.sort(comparaPorNome).map(function (sponsor) {
            return React.createElement(SponsorMiniCard, { sponsor: sponsor, onClick: this.showModal });
        }, this);
    }

    render() {

        return React.createElement(
            'div',
            null,
            React.createElement(Slider, { boxes: this.state._boxes })
        );
    }
}
import React from 'react';
import Input from './react_input';

export default class SponsorMiniCard extends Input {
    constructor(props) {
        super(props);
    }

    render() {
        let sponsor = this.props.sponsor;
        return React.createElement(
            'div',
            {
                key: `${sponsor._id}`,
                'data-id': sponsor._id,
                className: `${this.props.popover ? 'popover' : null} popover-card d-inline-block popover-author mr-2 mb-2 d-flex flex-column justify-content-between`, role: 'tooltip',
                'data-slide': 'true',
                clickable: '',
                onClick: this.props.onClick },
            this.props.popover ? React.createElement('div', { className: 'arrow' }) : null,
            React.createElement(
                'h3',
                { className: 'senno-popover-header pt-0 pr-0 pl-0' },
                React.createElement(
                    'div',
                    { className: 'popover-autor text-center' },
                    React.createElement(
                        'div',
                        { className: 'popover-autor-avatar', style: { position: "relative" } },
                        React.createElement('div', { style: { backgroundColor: sponsor.cor, height: "55px", width: "100%", borderRadius: ".3em .3em 0 0" } }),
                        React.createElement(
                            'div',
                            { style: { position: "relative", top: "-50px" } },
                            React.createElement('img', { className: 'avatar popover-autor-avatar', src: sponsor.image }),
                            React.createElement(
                                'div',
                                { className: 'popover-autor-info' },
                                React.createElement(
                                    'div',
                                    { className: 'popover-autor-info-name font-weight-bold' },
                                    sponsor.nome
                                ),
                                React.createElement(
                                    'div',
                                    {
                                        className: 'popover-autor-info-cargo text-uppercase' },
                                    sponsor.funcao.nome
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'senno-popover-body' },
                React.createElement(
                    'div',
                    { className: 'row' },
                    React.createElement(
                        'div',
                        { className: 'offset-3 col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-lightbulb ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '3.678'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'offset-3 col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-flask ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '3.200'
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'row mt-2' },
                    React.createElement(
                        'div',
                        { className: 'offset-3 col-2 d-inline' },
                        React.createElement('i', { className: 'fa fa-fire ' })
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-4 d-inline' },
                        '424'
                    )
                )
            )
        );
    }
}
import React from 'react';

export default class SponsorRibbon extends React.Component {
    render() {
        return React.createElement(
            "div",
            { className: "award" },
            React.createElement(
                "div",
                { className: "ribbon1 top" },
                React.createElement(
                    "span",
                    null,
                    "Esta ",
                    React.createElement(
                        "strong",
                        null,
                        "Ideia"
                    )
                )
            ),
            React.createElement(
                "div",
                { className: "ribbon1 bottom" },
                React.createElement(
                    "span",
                    null,
                    "\xE9 ",
                    React.createElement(
                        "strong",
                        null,
                        "apoiada"
                    )
                )
            )
        );
    }
}
import React from 'react';
import Input from './react_input';

export default class Switch extends Input {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            { className: `switch ${this.state.className}` },
            React.createElement(
                'label',
                null,
                React.createElement('input', { type: 'checkbox', value: 'true', id: this.state.id, name: this.state.name, onChange: this.onChange, checked: this.props.valProp === this.state.value }),
                React.createElement(
                    'span',
                    { className: 'bmd-switch-track' },
                    React.createElement('div', { className: 'ripple-container' })
                ),
                this.state.text
            )
        );
    }
}
import React from 'react';
import Input from './react_input';
import FaIcon from './react_faicon';

export default class SwitchIcon extends Input {
    constructor(props) {
        super(props);

        this.state.icon = props.icon || '';
    }

    render() {
        return React.createElement(
            'div',
            { className: `switch switch-icon ${this.state.className}` },
            React.createElement(
                'label',
                { htmlFor: this.state.id },
                React.createElement('input', { type: 'checkbox', value: 'true', id: this.state.id, name: this.state.name, onChange: this.onChange, checked: this.props.valProp === this.state.value }),
                React.createElement(FaIcon, { icon: this.state.icon }),
                this.state.text
            )
        );
    }
}
import React from 'react';
import ModalSalvarFavorito from './react_modal_salvar_favorito';
import ModalCompartilhar from './react_modal_compartilhar';
import ModalDenunciar from './react_modal_denunciar';
// Estruturar melhor. Workaround para os modais EJS inicializarem os componentes
import { setModuleInputFile, setModuleRedactor, setModulePopover } from '../utils/ModulesUtils';

export default class TemplateModals extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setModuleInputFile();
        setModuleRedactor();
        setModulePopover();
    }

    render() {

        return React.createElement(
            'div',
            null,
            React.createElement(ModalSalvarFavorito, null),
            React.createElement(ModalCompartilhar, null),
            React.createElement(ModalDenunciar, null)
        );
    }
}
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { AutorMiniCard } from './react_autor_minicard';

export default class TileBoxAutor extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let autor = this.props.autor;
        let moderadores = this.props.moderadores;
        if (moderadores && Array.isArray(moderadores)) {
            moderadores = moderadores.filter(function (mod) {
                return mod != autor._id;
            });
        }
        let _id = this.props._id;

        var _template_popover_autor = autor ? React.createElement(AutorMiniCard, { autor: autor, popover: true }) : null;

        let _moderadores = function (moderadores) {
            if (!moderadores || moderadores.length < 1) {
                return null;
            }
            return React.createElement(
                'a',
                { className: 'tile-group mr-2',
                    'data-id': _id,
                    'data-toggle': 'modal',
                    'data-target': '#modal_moderadores' },
                React.createElement(
                    'div',
                    {
                        className: 'circle-avatar circle-avatar-sm grupo-more',
                        style: { "backgroundColor": "transparent", border: "1px solid black", "width": "27px", "height": "27px" },
                        'data-toggle': 'tooltip',
                        'data-placement': 'right',
                        title: `+${moderadores.length} moderadores` },
                    React.createElement(
                        'div',
                        { style: { "fontSize": "11px" } },
                        `+${moderadores.length}`
                    )
                )
            );
        }(moderadores);

        var _by = function (state) {
            if (typeof state.only_avatar == "undefined") {
                return React.createElement(
                    'div',
                    { className: 'd-inline' },
                    React.createElement(
                        'strong',
                        null,
                        state.autor.nome
                    )
                );
            }
            return null;
        }(this.props);

        return React.createElement(
            'div',
            { className: 'tile-author' },
            React.createElement('img', { className: 'avatar tile-author-avatar mr-2', src: autor.image, style: { "width": "27px", "height": "27px" },
                'data-toggle': 'popover-hover',
                'data-placement': 'bottom',
                'data-template': ReactDOMServer.renderToString(_template_popover_autor),
                'data-content': ' ' }),
            _moderadores,
            _by
        );
    }

}
import React from 'react';
import TileBoxAutor from './react_tile_box_autor';

export default class TileBoxCoautores extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.coautores = props.coautores || [];
    }

    getInitialState() {
        return {
            coautores: []
        };
    }

    render() {
        let _id = this.props._id;

        let _coautores = this.state.coautores.map(function (autor, index) {
            if (index > 2) return;
            return React.createElement(TileBoxAutor, { key: autor._id, autor: autor, only_avatar: true });
        });

        let _more = this.state.coautores.length > 3 ? function (coautores) {
            return React.createElement(
                'a',
                { className: 'tile-group',
                    'data-id': _id,
                    'data-toggle': 'modal',
                    'data-target': '#modal_coautores' },
                React.createElement(
                    'div',
                    {
                        className: 'circle-avatar circle-avatar-sm coautores-more',
                        style: { "backgroundColor": "transparent", border: "1px solid black", "width": "27px", "height": "27px" },
                        'data-toggle': 'tooltip',
                        'data-placement': 'right',
                        title: `+${coautores.length - 3} coautores` },
                    React.createElement(
                        'div',
                        { style: { "fontSize": "11px" } },
                        `+${coautores.length - 3}`
                    )
                )
            );
        }(this.state.coautores) : '';

        return React.createElement(
            'div',
            { className: 'tile-coautores' },
            _coautores,
            _more
        );
    }

}
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import GrupoMiniCard from './react_grupo_minicard';

export default class TileBoxGrupo extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.grupo = props.grupo || [];
    }

    getInitialState() {
        return {
            grupo: null
        };
    }

    render() {
        var template_popover_grupo = this.state.grupo ? React.createElement(GrupoMiniCard, { grupo: this.state.grupo, popover: true }) : null;
        return React.createElement(
            'div',
            { className: 'tile-group' },
            React.createElement(
                'div',
                {
                    className: 'circle-avatar circle-avatar-sm border-0 mr-2',
                    style: { "backgroundColor": this.state.grupo.cor, "width": "27px", "height": "27px" },
                    'data-toggle': 'popover-hover',
                    'data-placement': 'bottom',
                    'data-template': ReactDOMServer.renderToString(template_popover_grupo),
                    'data-content': ' ' },
                React.createElement(
                    'div',
                    { style: { "fontSize": "11px" } },
                    this.state.grupo.nome.getInitials()
                )
            )
        );
    }

}
import React from 'react';
import TileBoxGrupo from './react_tile_box_grupo';

export default class TileBoxGrupos extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.grupos = props.grupos || [];
    }

    getInitialState() {
        return {
            grupos: []
        };
    }

    render() {

        let _id = this.props._id;

        var _grupos = this.state.grupos.map(function (grupo, index) {
            if (index > 2) return;
            return React.createElement(TileBoxGrupo, { key: grupo._id, grupo: grupo });
        });

        var _more = this.state.grupos.length > 3 ? function (grupos) {
            return React.createElement(
                'a',
                { className: 'tile-group',
                    'data-id': _id,
                    'data-toggle': 'modal',
                    'data-target': '#modal_grupos' },
                React.createElement(
                    'div',
                    {
                        className: 'circle-avatar circle-avatar-sm grupo-more',
                        style: { "backgroundColor": "transparent", border: "1px solid black", "width": "27px", "height": "27px" },
                        'data-toggle': 'tooltip',
                        'data-placement': 'right',
                        title: `+${grupos.length - 3} grupos` },
                    React.createElement(
                        'div',
                        { style: { "fontSize": "11px" } },
                        `+${grupos.length - 3}`
                    )
                )
            );
        }(this.state.grupos) : '';

        return React.createElement(
            'div',
            { className: 'tile-groups' },
            _grupos,
            _more
        );
    }

}
import React from 'react';
import TileBoxAutor from './react_tile_box_autor';

export default class TileBoxMembros extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.membros = props.membros || [];
    }

    getInitialState() {
        return {
            membros: []
        };
    }

    render() {
        var _membros = this.state.membros.map(function (autor, index) {
            if (index > 2) return;
            return React.createElement(TileBoxAutor, { key: autor._id, autor: autor, only_avatar: true });
        });

        var _more = this.state.membros.length > 3 ? function (membros) {
            return React.createElement(
                'div',
                { className: 'tile-group' },
                React.createElement(
                    'div',
                    {
                        className: 'circle-avatar circle-avatar-sm coautores-more',
                        style: { "backgroundColor": "transparent", border: "1px solid black", "width": "27px", "height": "27px" },
                        'data-toggle': 'tooltip',
                        'data-placement': 'right',
                        title: `+${membros.length - 3} membros` },
                    React.createElement(
                        'div',
                        { style: { "fontSize": "11px" } },
                        `+${membros.length - 3}`
                    )
                )
            );
        }(this.state.membros) : '';

        return React.createElement(
            'div',
            { className: 'tile-coautores' },
            _membros,
            _more
        );
    }

}
import React from 'react';
import FaIcon from './react_faicon';

export default class TileBoxPlataformaIdeiasInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.quantidade = props.quantidade;
    }

    getInitialState() {
        return {
            quantidade: 0
        };
    }

    render() {
        return React.createElement(
            'a',
            { className: 'info tile-plataforma-ideias', href: 'javascript:void(0)', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Ideias' },
            React.createElement(FaIcon, { icon: 'ideia' }),
            React.createElement(
                'div',
                null,
                this.state.quantidade
            )
        );
    }

}
import React from 'react';
import FaIcon from './react_faicon';

export default class TileBoxPlataformaInovacoesInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.quantidade = props.quantidade;
    }

    getInitialState() {
        return {
            quantidade: 0
        };
    }

    render() {
        return React.createElement(
            'a',
            { className: 'info tile-plataforma-inovacoes', href: 'javascript:void(0)', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Inova\xE7\xF5es' },
            React.createElement(FaIcon, { icon: 'inovacao' }),
            React.createElement(
                'div',
                null,
                this.state.quantidade
            )
        );
    }

}
import React from 'react';
import FaIcon from './react_faicon';

export default class TileBoxPlataformaPesquisasInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = this.getInitialState();
        this.state.quantidade = props.quantidade;
    }

    getInitialState() {
        return {
            quantidade: 0
        };
    }

    render() {
        return React.createElement(
            'a',
            { className: 'info tile-plataforma-pesquisas', href: 'javascript:void(0)', 'data-toggle': 'tooltip', 'data-placement': 'top', title: 'Pesquisas' },
            React.createElement(FaIcon, { icon: 'pesquisa' }),
            React.createElement(
                'div',
                null,
                this.state.quantidade
            )
        );
    }

}
import React from 'react';

export default class TransparentTiles extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let _tiles = function () {
            return null;
        }();
        if (this.props.length) {
            let _index = [3, 2].indexOf(this.props.length % 4);
            if (_index > -1) {
                let qty = new Array(_index + 1).fill(0);
                _tiles = qty.map(function (el) {
                    return React.createElement("div", { key: el, className: "tile tile-portfolio tile-transparent" });
                });
            }
        }
        return _tiles;
    }
}
