import React from 'react';
import './Lightbox.scss';

const Lightbox = (props) => {
    return (
        (props.show === "true") &&
        <div 
        className={ 'Lightbox' }
        onClick={ props.turnLightOff }
        >
            <div className={ 'Light' }>
                <img src={ props.imageURL } alt={ props.imageAlt } style={{ width: "500px", height: "500px" }}/>
            </div>
        </div>
    );
}

export default Lightbox;