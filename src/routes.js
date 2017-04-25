import React from 'react';
import { Provider } from 'react-redux';
import { Router, Switch, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'
import { App, NotFound } from './components/index.js';
import { Test } from './containers/index.js';
import configureStore from './store/configureStore.js';


const store = configureStore();
const history = createBrowserHistory();

const Root = () => (
    <Provider store={store}>
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Test} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>
)

export default Root;