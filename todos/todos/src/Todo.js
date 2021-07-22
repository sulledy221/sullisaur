import React, { Component } from "react";
 
class Todo extends Component {
  render() {
    return (
      <div className="todoMain">
        <div className="header">
          <form>
            <input placeholder="enter something to do">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}
 
export default Todo;