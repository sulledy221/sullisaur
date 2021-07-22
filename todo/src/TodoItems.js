import React, { Component } from "react";
import './TodoItems.css';
 
class TodoItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    const todoEntries = (props) => this.props.entries(this.props); // * Only has a value if you are passing the prop to it.
    const todoItems = (props) => todoEntries.map(this.createTasks); // * Can't do undefined.map
 
    return (
      <ul className="theTodo">
          {todoItems}
      </ul>
    );
  }
};
 
export default TodoItems;