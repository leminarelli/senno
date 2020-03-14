import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Component that alerts if you click outside of it
 */
export default class OutsideAlerter extends Component {
    constructor(props) {
        super(props);

        this.wrapperRef            = React.createRef();
        this.setWrapperRef         = this.setWrapperRef.bind(this);
        this.handleClickOutside    = this.handleClickOutside.bind(this);
        this.handleClickOutsideOut = this.props.handleClickOutside;
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    /**
     * Set the wrapper ref
     */
    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            // console.log('You clicked outside of me!');
            // console.log(this.wrapperRef);
            if(typeof this.handleClickOutsideOut === 'function') {
                this.handleClickOutsideOut(event);
            }
        }
    }

    render() {

        return <div className={`outside-alerter ${ this.props.className || '' }`} ref={ this.setWrapperRef }>{ this.props.children }</div>;
    }
}
