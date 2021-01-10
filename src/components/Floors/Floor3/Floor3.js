import React from 'react';

import classes from './Floor3.module.css';
import floor3Image from './floor3.jpg';

const floor3 = props => {
    return (
        <div className={classes.ImageContainer}>
            <img src={floor3Image} alt="floor-3"/>
        </div>
    );
}

export default floor3;