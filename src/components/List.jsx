function TodoList({ todo, removeTodo, toggleCompletion }) {
  function handleRemove(id) {
    removeTodo(id);
  }
  function handleToggle(id) {
    toggleCompletion(id)
  }
  const todoItems = (
    <div>
      {todo.map((item) => (
        <li
          key={item.id}
          className={item.completed ? "task-complete" : "task-pending"}
          onClick={(e)=>handleToggle(item.id)}
        >
          {item.todoNote}{" "}
          <button onClick={(e) => handleRemove(item.id)}>Delete</button>
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
