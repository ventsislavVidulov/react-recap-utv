import React, { Component } from 'react'

export default class ClassCounter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        this.logThis()
    }

    handleIncrement = (state) => {
        return {
            count: state.count + 1
        }
    };

    handleDecrement = (state) => {
        return {
            count: state.count - 1
        }
    };

    logThis() {
        console.log(this.state);
    }

    render() {
        return (
            <>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.setState(this.handleIncrement(this.state))}>Increment</button>
                <button onClick={() => this.setState(this.handleDecrement(this.state))}>Decrement</button>
            </>
        )
    }
}
