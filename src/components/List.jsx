function TodoList({ todo, removeTodo }) {
  function handleRemove(id) {
    removeTodo(id)      
  }
  const todoItems = (
    <div>
      {todo.map((item) => (
        <li key={item.id}>
          {item.todoNote} <button onClick={(e)=>handleRemove(item.id)}>Delete</button>
        </li>
      ))}
    </div>
  );

  return (
    <>
      <p>You currently have {todo.length} items in the list</p>
      <ul>{todoItems}</ul>
    </>
  );
}

export default TodoList;
