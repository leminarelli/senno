import React from 'react';

export default class SennoLoading extends React.Component {
    render() {
        return (
            <div className="page-loader">
                <div className="loader-logo"><img src="/images/sennoLogo-blue.png"/></div>
                <div className="loader-bar">
                    <div className="loader-indicator"></div>
                </div>
            </div>
        )
    }
}