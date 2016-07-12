import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'

// import viewApplyPage from '../app/ViewApplyPage/reducer'
// import home from '../app/Home/reducer'
// import applyPage from '../app/ApplyPage/reducer'
import main from '../app/Main/reducer'


const rootReducer = combineReducers({
    // viewApplyPage,
    // home,
    // applyPage,
    main,
    router: routerStateReducer
})

export default rootReducer