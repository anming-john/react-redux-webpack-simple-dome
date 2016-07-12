import { createStore, compose, applyMiddleware } from 'redux'
import { reduxReactRouter } from 'redux-router'
import thunk from 'redux-thunk'
import { createHistory } from 'history'
// import rootReducer from '../reducers'
import { createReducer } from '../reducers'

const middleware = [thunk]

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  reduxReactRouter({ createHistory })
)(createStore)

export default function configureStore(initialState) {
  // const store = finalCreateStore(rootReducer, initialState)
  const store = finalCreateStore(createReducer(), initialState)
  store.asyncReducers = {}
  
  return store
}

export function injectAsyncReducer(store, name, reducer) {
  store.asyncReducers[name] = reducer
  store.replaceReducer(createReducer(store.asyncReducers))
}