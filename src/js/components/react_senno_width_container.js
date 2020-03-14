import React from 'react';

let styles = {
    widthContainer: {
        __base: {
            display: "flex",
            "justify-content": "center"
        },
        fixedWidth: {
            __base: {
                maxWidth: "1192px",
                width: "100%"
            }
        }
    }
}

const SennoWidthContainer = (props) => {
    return (
        <div className={ props.outerClassName || ""} style={ styles.widthContainer.__base }>
            <div className={ props.innerClassName || "" } style={ styles.widthContainer.fixedWidth.__base }>
                { props.children }
            </div>
        </div>
    )
}

export default SennoWidthContainer;