import { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import TodoList from './components/List';
import {v4 as uuid} from 'uuid';

function App() {
  const [todo,setTodo] = useState([])

  function handleSubmit(input) {
    setTodo([...todo,{id:uuid(),todoNote:input,completed:false}])
  }

  function resetTodo() {
    setTodo([])
  }

  function removeTodo(id) {
    setTodo(todo.filter(item=> {
      if(item.id!==id)
        return item
      else
        return null
    }))
  }

  function toggleCompletion(id) {
    setTodo(todo.map(item=> {
      if(item.id===id)
        return {...item,completed:!item.completed}
      else
        return item
    }))
  }

  useEffect(() => {
    console.log(todo)
  },[todo])
  
  return (
    <div className="App">
      <h1>React Todo App</h1>
      <Form handleSubmit={handleSubmit}/>
      <TodoList todo={todo} removeTodo={removeTodo} toggleCompletion={toggleCompletion} />
      <button onClick={resetTodo}>reset</button>
    </div>
  );
}

export default App;
