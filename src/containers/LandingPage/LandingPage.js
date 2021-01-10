import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'; 

import classes from './LandingPage.module.css';
import Campaigns from '../../components/Campaigns/Campaigns';
import SearchBar from '../../components/SearchBar/SearchBar';
import Floor0 from '../../components/Floors/Floor0/Floor0';
import Floor1 from '../../components/Floors/Floor1/Floor1';
import Floor2 from '../../components/Floors/Floor2/Floor2';
import Floor3 from '../../components/Floors/Floor3/Floor3';

const LandingPage = props => {
    const routes = (
        <Switch>
            <Route path="/0" component={() => <Floor0 />} />
            <Route path="/1" component={() => <Floor1 />} />
            <Route path="/2" component={() => <Floor2 />} />
            <Route path="/3" component={() => <Floor3 />} />
            <Redirect to="/0" />
        </Switch>
    );

    return (
        <div className={classes.LandingPage}>
            <div className={classes.Aside}>
                <Campaigns language={props.language}/>
            </div>
            <div className={classes.Main}>
                <SearchBar language={props.language}/>
                {routes}
            </div>
        </div>
    );
}

export default withRouter(LandingPage);