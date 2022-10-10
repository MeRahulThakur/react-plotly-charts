import React,{useState, useReducer} from 'react'
import { ACTIONS } from './actions/todo_action';
import todoReducer from './reducers/todo';
import Todo from './components/Todo';

const TodoContainer = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }

  return (
    <div id="container" className="App wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  )
}

export default TodoContainer