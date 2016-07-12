import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { testAction } from './reducer/test'
class Main extends Component {

    render() {
        const {maintest, ...props} = this.props
        // console.log(maintest.toJS())
        var test = maintest.toJS()
        return (
            <div className="mainPage">
                <h1>Hello world!</h1>
                <p>{test.testData}</p>
            </div>
        )
    }
    componentWillMount() {
        this.props.getTestData()
    }
}
function mapStateToProps(state) {
    console.log(state)
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