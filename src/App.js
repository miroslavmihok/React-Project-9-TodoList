import React, { useReducer } from "react";

import './App.css';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), text: action.text }];
    case 'DELETE':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};
  
const App = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
  
  const addTodoHandler = (text) => {
      dispatch({ type: 'ADD', text });
  };
  
  const deleteTodoHandler = (id) => {
      dispatch({ type: 'DELETE', id });
  };
  
  return (
    <div className="App">
      <div className="Container">
          <form onSubmit={(e) => {
            e.preventDefault();
            const todoText = e.target.todo.value;
            if (todoText === "") {
              return;
            }
            addTodoHandler(todoText);
            e.target.todo.value = '';
          }}>
            <label>TO-DO name:</label>
            <input type="text" name="todo" />
            <button type="submit">Add Todo</button>
          </form>
      </div>
      <div className="todos">
          <ul>
            {todos.map(todo => (
              <li key={todo.id}>
                {todo.text}
                <button onClick={() => deleteTodoHandler(todo.id)}>x</button>
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
}

export default App;
