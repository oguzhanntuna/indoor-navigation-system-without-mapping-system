import React from 'react';

import classes from './Floor1.module.css';
import floor1Image from './floor1.jpg';

const floor1 = props => {
    return (
        <div className={classes.ImageContainer}>
            <img src={floor1Image} alt="floor-1"/>
        </div>
    );
}

export default floor1;