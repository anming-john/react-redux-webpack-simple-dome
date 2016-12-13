import Immutable, { Map, List } from 'immutable'
import { combineReducers } from 'redux'

import test from './test'
import counter from './counter'

const main = combineReducers({
    counter,
    test
})

export default main
