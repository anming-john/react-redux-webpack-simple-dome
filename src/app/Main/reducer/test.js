import Immutable, { Map, List } from 'immutable'

export const testAction = {
    getTestData: () => (dispatch, getstate) => {
        console.log('getTestData')
        dispatch({
            type: 'main_test_data',
            data: 'this is a test data'
        })
    }
}

export default function reducer (state = inistialState, action) {
    let ret = state
    switch(action.type) {
        case 'main_test_data':
            return state.set('testData', action.data)

        default: return state
    }
}

const inistialState = Immutable.fromJS({
    isFecthing: false,
    testData: ''
})