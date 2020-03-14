import React from 'react';

export default class RedactorText extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let html = this.props.html;
        let classes = this.props.className || '';
        return (
            <div className={"redactor_editor p-0px " + classes} style={ {padding: '0px'} } dangerouslySetInnerHTML={ { "__html": html } }></div>
        )
    }
}