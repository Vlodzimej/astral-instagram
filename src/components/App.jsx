import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './header';
import Feed from './feed';
import Frame from './frame';
import './App.scss';
import frames from './store/reducer';

const store = createStore(
    frames,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
    <div className="container">
        <Header />
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route path="/frame/:id/">
                        <Frame />
                    </Route>
                    <Route path="/">
                        <Feed />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    </div>
);

export default App;
