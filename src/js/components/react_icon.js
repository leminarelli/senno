import React from 'react';
import { IconsMap } from './iconsmap';

export default class Icon extends React.Component {

    static getMappedIcon(icon) {
        return IconsMap[icon] || icon;
    }
    
    constructor(props) {
        super(props);
    }
    render() {
        let onClick = this.props.onClick;
        let _style = this.props.style || {};
        _style = JSON.parse(JSON.stringify(_style));
        _style.fontSize = this.props.fontSize || null;
        return (
            <i className={`fa ${Icon.getMappedIcon(this.props.icon)} ${this.props.className || ''}`}
                style={ _style } onClick={ onClick ? onClick : () => {} }
                clickable={ onClick ? "true" : null }></i>
        )
    }
}