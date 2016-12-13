import React from 'react';

class Es6 extends React.Component {

    render() {
        this.testone()
        return <div>Es6</div>;
    }
    testone() {
        var Person = (name) => {
            this.name = name
        }
        var person = new Person('wanganming')
    }
}

export default Es6;
