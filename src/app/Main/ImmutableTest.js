import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { testAction } from './reducer/test'
// import './test.scss'
class immutableTest extends React.Component {
    state = {
        show: false
    }
    render() {
        const { test, ...props} = this.props
        let testForm = test.getIn(['formList', 1])
        // console.log(testForm.toJS())
        let data = test.toJS()
        let testNotUpdatedata = data.testNotUpdate
        let style = {
            display: this.state.show ? 'block' : 'none' 
        }
        return(
            <div className="immutableTest">
                <div className="edit-btn-groups">
                    <button onClick={this.test.bind(this)}>test</button>
                    <button onClick={this.update.bind(this)}>update</button>
                    <button onClick={this.show.bind(this)}>show</button>
                </div>
                {<span>{testNotUpdatedata[0].list.map((item, index)=> {
                    return <span key={index}>{item.test}</span>
                })}</span>}
                <div className="hide" style={style}>
                    <h4>结论</h4>
                    <p>
                        1，immutabel 中的fromJS 会进行深编译，把所有json对象全部编译成immutable的格式<br/>
                        2，List, Map 只编译一层
                    </p>
                </div>
            </div>
        )
    }
    show() {
        this.state.show = !this.state.show
        this.setState(this.state)
    }
    componentDidMount() {
        // this.props.updatestate()
        this.props.getAtest()
        // this.props.testReturnNewData()
    }
    test() {
        this.props.getAtest()
    }
    update() {
        this.props.TestNotUpdate()
    }
}
function mapStateToProps(state, nowProps) {
    return {
        test: state.main.test
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        ...testAction
    }, dispatch)
}
module.exports = connect(mapStateToProps, mapDispatchToProps)(immutableTest)