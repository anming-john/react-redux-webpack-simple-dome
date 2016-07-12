import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { pushState, route } from 'redux-router'

class App extends Component {
    render() {
        const {...props } = this.props
        return (
            <div>
                <div className="pageContainer">
                    {this.props.children}
                </div>
            </div>
        )
    }
    componentWillMount () {

    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        // pushState
    }, dispatch)
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(App)