import { useState } from 'react';
import EmitAddTodo from './EmitAddTodo';
import EmitTodoItems from './EmitTodoItems';
import '../App.css';

function App() {
  const [items, setItems] = useState([]);
  const addItem = item => setItems([...items, item]);
  return (
    <div className="App">
      <EmitAddTodo addItem={addItem} />
      <EmitTodoItems items={items} />
    </div>
  );
}

export default App;
