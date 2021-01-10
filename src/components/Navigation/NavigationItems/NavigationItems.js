import React, { useState } from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import SiteSettings from '../../SiteSettings/SiteSettings';
import classes from './NavigationItems.module.css';

const NavigationItems = props => {
    const textContainer = useState({
        'nav-title': {tr: 'Katlar', en: 'Floors', de: 'Fußböden'}
    })[0];

    return (
        <div className={classes.NavigationItems}>
            <ul>
                <h2>{textContainer['nav-title'][props.language]}/</h2>
                <NavigationItem link="/0">0</NavigationItem>
                <NavigationItem link="/1">1</NavigationItem>
                <NavigationItem link="/2">2</NavigationItem>
                <NavigationItem link="/3">3</NavigationItem>
                <SiteSettings language={props.language} clicked={props.clicked} />
            </ul>
        </div>
    );
}

export default NavigationItems;