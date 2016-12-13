import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { testAction } from './reducer/test'
import Es6 from './Es6'
// import Counter from './Counter'
// import ImmutableTest from './ImmutableTest'
import CreateClassOrClass from './CreateClassOrClass'
class Main extends Component {

    render() {
        const {maintest, ...props} = this.props
        // console.log(maintest.toJS())
        var test = maintest.toJS()
        return (
            <div className="mainPage">
                {/*<h1>Hello world!</h1>*/}
                {/*<p>{test.testData}</p>*/}
                {/*<Counter />*/}
                {/*<h2>Immutable Test</h2>*/}
                {/*<ImmutableTest />*/}
                {<h2>CreateClass or Class</h2>}
                {<CreateClassOrClass />}
                {/*<h2>es6 的箭头函数</h2>
                <Es6 />*/}
            </div>
        )
    }
    componentWillMount() {
        this.props.getTestData()
    }
}
function mapStateToProps(state) {
    // console.log(state)
    return {
        maintest: state.main.test
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...testAction
    }, dispatch)
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(Main)