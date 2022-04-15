function TodoList({ todo, removeTodo, toggleCompletion }) {
  function handleRemove(id) {
    removeTodo(id);
  }
  function handleToggle(id) {
    toggleCompletion(id);
  }
  const todoItems = (
    <div>
      {todo.map((item) => (
        <li key={item.id} className="list-item">
          <span
            className={item.completed ? "task-complete" : "task-pending"}
            onClick={(e) => handleToggle(item.id)}
          >
            {item.todoNote}
          </span>
          <button className="remove-button" onClick={(e) => handleRemove(item.id)}>Delete</button>
        </li>
      ))}
    </div>
  );

  return (
    <>
      <p className="item-counter">You currently have {todo.length} items in the list</p>
      <ul className="list-container">{todoItems}</ul>
    </>
  );
}

export default TodoList;
