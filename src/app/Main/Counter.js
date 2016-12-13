import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CounterActons } from './reducer/counter'
import { testAction } from './reducer/test'

class Counter extends React.Component {

    render() {
        const { count, test, ...props} = this.props
        let coun = count.toJS()
        let testForm = test.getIn(['formList', 1])
        // console.log(testForm.toJS())
        return(
            <div className="counter">
                <span>{coun.counter}</span>
                <button onClick={this.add.bind(this)}>Add</button>
                <button onClick={this.minus.bind(this)}>minus</button>
                <button onClick={this.update.bind(this)}>test</button>
                <div>

                </div>
            </div>
        )
    }
    componentDidMount() {
        // this.props.updatestate()
        // this.props.getAtest()
    }
    add() {
        this.props.AddCounter()
    }
    minus() {
        this.props.MinusCounter()
    }
    update() {
        this.props.getAtest()
    }
}
function mapStateToProps(state, nowProps) {
    return {
        count: state.main.counter,
        test: state.main.test
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...CounterActons,
        ...testAction
    }, dispatch)
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(Counter)