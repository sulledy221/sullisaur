import React, { Component } from "react";
import './index.css';
import TodoItems from './TodoItems';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        e.preventDefault();
        if (this._inputElement.value !== "") {
            const newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };

            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }

        console.log(this.state.items);
    }
    render() {
        return (
            <div className="todoMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input placeholder="enter task" />
                        <button type="submit">add task</button>
                    </form>
                </div>
                <TodoItems entries={this.state.items} />
            </div>
        );
    }
}

export default Todo;