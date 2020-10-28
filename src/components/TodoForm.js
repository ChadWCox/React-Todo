import React, { Component } from 'react';

class ListFrom extends Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChanges = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleAddTodo(this.state.input)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChanges} type='text' name='todo'/>
                <button>Add</button>
            </form>
        )
    }
}

export default ListFrom;