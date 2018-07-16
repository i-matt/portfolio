import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import App from '../src/views/App';

const Routes = () =>(
    <Router>
        <div id="topDiv">
            <Switch>
                <Route exact path = "/" component = {App}/>
                <Route path = "/app" component = {App}/>
            </Switch>
        </div>
    </Router>
);

export default Routes;