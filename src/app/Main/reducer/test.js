import Immutable, { Map, List } from 'immutable'

export const testAction = {
    getTestData: () => (dispatch, getState) => {
        // console.log('getTestData')
        dispatch({
            type: 'main_test_data',
            data: 'this is a test data'
        })
    },
    updatestate: () => (dispatch, getState) => {
        dispatch({
            type: 'update_state'
        })
    },
    getAtest:() => (dispatch) => {
        var test = Immutable.fromJS({
            formList: [
                {
                    type: 'select',
                    dispLabel: '订单类型',
                    value: '',
                    param: 'poType=6',
                    list: [],
                    trigger: 'selectChange'
                },{
                    type: 'select',
                    dispLabel: '订单类型',
                    value: '',
                    param: 'poType=6',
                    list: List(),
                    trigger: 'selectChange'
                }],
            simpleList: [{
                    type: '1',
                    list: [{
                        item1: [{
                            item2: '1'
                        }]
                    }, {
                        item1: [{
                            item2: '2'
                        }]
                    }]
                }]
        })
        var LIST = List([
                {
                    list: [{
                        item1: [{
                            item2: '1'
                        }]
                    }]
                },
                {
                    list: List()
                }
            ])
        var Maps = Map({
            list: [{
                type: '11',
                list1: [{
                    item1: [{
                        item2: '1'
                    }]
                }]
            }, {
                type: '12',
                list: List()
            }]
        })
        // 测试fromJS是深度转换
        // var test0 = test.get('simpleList')
        // var test1 = test.getIn(['simpleList', 0])
        // var test2 = test.getIn(['simpleList', 0, 'list'])
        // var test3 = test.getIn(['simpleList', 0, 'list', 0, 'item1'])
        // var test4 = test.getIn(['simpleList', 0, 'list', 0, 'item1', 0,'item2'])
        // console.log(test)  // ===>Map
        // console.log(test0) // ===> List
        // console.log(test1) // ===> Map
        // console.log(test2) // 
        // console.log(test3) // 
        // console.log(test4) // 

        // 测试List Map 仅转换一层  
        // var test0 = LIST.get(0) // ==> List
        // var test1 = LIST.getIn([0, 'list']) //===> obj
        // var test2 = LIST.getIn([0, 'list', 0]) // ===> undefined setIn ==> invalid keypath
        // var test3 = LIST.getIn([0, 'list', 0, 'item1'])
        // var test4 = LIST.getIn([0, 'list', 0, 'item1', 0])
        // var test5 = LIST.getIn([0, 'list', 0, 'item1', 0, 'item2'])
        // console.log(LIST)  //
        // console.log(test0) //
        // console.log(test1) //
        // console.log(test2)
        // console.log(test3)
        // console.log(test4)
        // console.log(test5)
        var test0 = Maps.get('list')
        var test1 = Maps.getIn(['list', 0]) // ===> obj
        var test2 = Maps.getIn(['list', 0, 'list1']) // ===> 
        var test3 = Maps.getIn(['list', 0, 'list1', 0, 'item1'])
        var test4 = Maps.getIn(['list', 0, 'list1', 0, 'item1', 0, 'item2'])
        console.log(Maps)  // 
        console.log(test0)  //
        console.log(test1) // 
        console.log(test2)
        console.log(test3)
        console.log(test4)
    },
    testReturnNewData: () =>(dispatch) => {
        var test = Immutable.fromJS({
            data: '121',
            list: [{
                key: 'info1'
            }, {
                key: 'info2'
            }]
        })
        // var test1 = test.set('data', '223')
        // var test2 = test.set('data', '223')
        // console.log(test1 === test2)

        // var test1 = test.update('data', (item)=> item + 'wang')
        // var test2 = test.update('data', (item)=> item + 'wang')
        // console.log(test1 === test2)

        // var test1 = test.get('data')
        // var test2 = test.get('data')
        // console.log(test1 === test2)

        // var test1 = test.toJS()
        // var test2 = test.toJS()
        // console.log(test1 === test2)

    },
    TestNotUpdate:()=> (dispatch)=> {
        let data = [{
            info: 'update1'
        }, {
            info: 'update2'
        }, {
            info: 'update3'
        }]
        var test = [{
            key: 'value1',
            list: [{
                test: 'update1'
            }, {
                test: 'update2'
            }]
        }, {
            key: 'value2'
        }, {
            key: 'value3'
        }]
        // var test = data.setIn([0, 'info', 0, 'key'], '111212')
        dispatch({
            type: 'test_not_update',
            data: test
        })

    }
}

export default function reducer (state = inistialState, action) {
    let ret = state
    switch(action.type) {
        case 'main_test_data':
            return state.set('testData', action.data)

        case 'update_state':
            return state.setIn(['formList', 1, 'list'], List([1, 2,3]))

        case 'test_not_update':
            return state.set('testNotUpdate', action.data)
        default: return state
    }
}

const inistialState = Immutable.fromJS({
    isFecthing: false,
    testData: '',
    testNotUpdate: [{
        key: 'value1',
        list: [{
            test: 'test1'
        }, {
            test: 'test2'
        }]
    }, {
        key: 'value2'
    }, {
        key: 'value3'
    }],
    formList: [{
        type: 'select',
        dispLabel: '订单类型',
        list: List()
    }, {
        type: 'suggest',
        dispLabel: '订单编号',
        list: List()
    }, {
        type: 'select',
        dispLabel: '确认状态',
        list: List()
    }, {
        type: 'select',
        dispLabel: '标记状态',
        list: List()
    }]
})