import React, { Component } from 'react'
import { Route, Router, browserHistory } from 'react-router'
import { ReduxRouter } from 'redux-router'
// import { browserHistory } from 'react-router'

/*------------import ------------------ */
import App from './App'
import Main from './Main'


export default class AppRouter extends Component {
    render() {
        return (
            <Router history={browserHistory} >
                <Route path="/" component={App}>
                    <Route path="main" component={Main} />
                    <Route path="*" component={Main} />
                </Route>
            </Router>
        )
    }
}