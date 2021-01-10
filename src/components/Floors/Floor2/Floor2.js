import React from 'react';

import classes from './Floor2.module.css'
import floor2Image from './floor2.jpg';

const floor2 = props => {
    return (
        <div className={classes.ImageContainer}>
            <img src={floor2Image} alt="floor-2"/>
        </div>
    );
}

export default floor2;