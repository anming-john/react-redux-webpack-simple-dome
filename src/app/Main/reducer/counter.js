import Immutable, { Map, List } from 'immutable'

const CounterActons = {
    AddCounter: () => (dispatch, getState) => {
        dispatch({
            type: 'add_counter'
        })
    } 
}

export default function reducer( state = inistialState, action) {
    let ret = state
    switch(action.type) {
        case 'add_counter':
            return state.update('counter', value => value + 1)

        default: return state
    }
}

const inistialState = Immutable.fromJS({
    counter: 0
})