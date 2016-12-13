import React from 'react';

class CreateClassOrClass1 extends React.Component {
    constructor(props) {
        super(props);
        // initialState
        // this.state = {
        //     text: props.initialValue || 'placeholder'
        // };

        this.handleChange = this.handleChange.bind(this);
        // this.reset = this.reset.bind(this);
        this.displayName = 'CreateClassOrClass';
        console.log('constructor')
    }
    // static propTypes = {
    //     initialValue: React.PropTypes.string
    // };
    // static defaultProps = {
    //     initialValue: ''
    // }

    componentWillMount() {
        console.log('wiil mount')
    }

    state = {
            text: this.props.initialValue || 'placeholder'
    }
    handleChange (event) {
        // console.log(event.target.value)
        // console.log(param)
        this.setState({
            text: event.target.value
        });
    }
    reset = () => {
       this.setState({
            text: this.props.initialValue || 'placeholder'
        }); 
    }
    render() {
        return (
            <div>
                Type something:
                <input onChange={this.handleChange} value={this.state.text} />
                <p>{this.state.text}</p>
                <button onClick={ this.reset}>reset</button>
            </div>
        );
    }
}

CreateClassOrClass1.propTypes = {
    initialValue: React.PropTypes.string
};
CreateClassOrClass1.defaultProps = {
    initialValue: ''
};

// var someMixin = {
//     doSomething() {
//         console.log('i am mix')
//     }
// };
/*
* 会生产一个构造函数
**/ 
var CreateClassOrClass2 = React.createClass({
    // mixins: [someMixin],
    propTypes: {
        initialValue: React.PropTypes.string
    },
    defaultProps: {
        initialValue: ''
    },
    getInitialState: function() {
        // this.doSomething()
        return {
            text: this.props.initialValue || 'placeholder'
        };
    },
    handleChange: function(event) {
        console.log(this) // ===> 指向构造函数，这个构造函数包含所有自定义的方法
        this.setState({
            text: event.target.value
        });
    },
    reset: function() {
        this.setState({
            text: this.props.initialValue || 'placeholder'
        });  
    },
    render: function() {
        return (
            <div>
                Type something:
                <input onChange={this.handleChange} value={this.state.text} />
                <p>{this.state.text}</p>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
})
// console.log(CreateClassOrClass2)
export default CreateClassOrClass1; 






/*
    component 的createClass
*/
var  _createClass= function () { 
    function defineProperties(target, props) { 
        for (var i = 0; i < props.length; i++) { 
            var descriptor = props[i]; 
            descriptor.enumerable = descriptor.enumerable || false; 
            descriptor.configurable = true; 
            if ("value" in descriptor) descriptor.writable = true; 
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    } 
    return function (Constructor, protoProps, staticProps) { 
        if (protoProps) {
            defineProperties(Constructor.prototype, protoProps); 
        }
        if (staticProps) {
            defineProperties(Constructor, staticProps); 
        }
        return Constructor; 
    }; 
}();
