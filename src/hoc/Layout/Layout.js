import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = props => {
    return (
        <div className={classes.Layout}>
            <Toolbar language={props.language} clicked={props.clicked} />
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default layout;