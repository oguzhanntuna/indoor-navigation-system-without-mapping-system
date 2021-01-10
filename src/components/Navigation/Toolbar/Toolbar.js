import React from 'react';

import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const toolbar = props => {
    return (
        <header className={classes.Header}>
            <nav>
                <NavigationItems language={props.language} clicked={props.clicked} />
            </nav>
        </header>
    );
}

export default toolbar;