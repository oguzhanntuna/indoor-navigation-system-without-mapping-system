import React from 'react';

import classes from './Floor0.module.css';
import floor0Image from './floor0.jpg';

const Floor0 = props => {  
    return (
        <div className={classes.ImageContainer}>
            <img src={floor0Image} alt="floor-0"/>
        </div>
    );
}

export default Floor0;