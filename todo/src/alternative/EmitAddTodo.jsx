import { useState } from 'react';
export default function EmitAddTodo({ addItem }) {
  const [text, setText] = useState('');
  return (
    <>
      <input value={text} onChange={({ target: { value } }) => setText(value)}/>
      <button onClick={() => addItem(text)}>PeepeePoopoo</button>
    </>
  )
}