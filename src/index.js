import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.dev'
import AppRouter from './app/AppRouter'

class Root extends Component {

    render() {
        const {store} = this.props
        return(
            <Provider store={store}>
                <div className='Provider'>
                    <AppRouter />
                </div>
            </Provider>
        )
    }
}

let initialState = {}
ReactDOM.render(
    <Root store={configureStore(initialState)} />,
    document.getElementById('root')
)
