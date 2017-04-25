import React from 'react';
import { Router, Switch, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import { App, NotFound } from './components/index.js';

const history = createBrowserHistory();

const Root = () => (

    <Router history={history}>
        <Switch>
            <Route path="/" exact component={App} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

export default Root;