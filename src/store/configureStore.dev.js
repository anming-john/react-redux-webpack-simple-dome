import { createStore, compose, applyMiddleware } from 'redux'
import { reduxReactRouter } from 'redux-router'
import thunk from 'redux-thunk'
import { createHistory } from 'history'
import rootReducer from '../reducers'

const middleware = [thunk]
const createAppStore = compose( applyMiddleware(...middleware), reduxReactRouter({ createHistory }))(createStore)

export default function configureStore(initialState) {
    const store = createAppStore(rootReducer, initialState)
    if (module.hot) {
        module.hot.accept('../reducers', ()=> store.replaceReducer(require('../reducers')))
    }
    return store
}
