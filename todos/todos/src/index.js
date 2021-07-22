import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './Todo/Todo';


const destination = document.querySelector("#container");
  
ReactDOM.render(
    <div>
        <Todo />
    </div>,
    destination
);
