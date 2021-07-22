export default function EmitTodoItems({ items }) {
  console.log("what the items is?", items);
  const renderItems = items.map(item => <li key={item}>{item}</li>)
  return (
    <ul>
      {renderItems}
    </ul>
  )
}