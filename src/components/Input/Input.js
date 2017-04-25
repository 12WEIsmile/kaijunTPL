import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.handle_change = this.handle_change.bind(this);
        this.state = {
            text: ""
        }
    }

    handle_change(e) {
        this.setState({
            text: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input onChange={this.handle_change} />
                <button onClick={this.props.actions.testAction.bind(this, this.state.text)}>Add</button>
            </div>
        )
    }
}


export default Input;