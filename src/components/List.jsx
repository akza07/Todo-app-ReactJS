function TodoList({ todo, onStatusChange }) {
  // console.log(todo)

  const todoItems = (
    <div>
      {todo.map((item) => (
        <li key={item.id}>
          {item.todoNote}
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
