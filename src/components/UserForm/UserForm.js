import React, { useReducer } from "react";

import UserList from "../UserList/UserList";
import '../../App.css';

const UserForm = (props) => {
    
    const todos = [];

    const reducer = (state, action) => {
        switch (action.type) {
          case 'ADD':
            todos.push({name: action.val, key: action.id})
            return { value: '', todos: todos };
          case 'DELETE':
            return {  };
          default:
            return state;
        }
      };
    
    const [state, dispatch] = useReducer(reducer, {
        type: '',
        value: '',
        todos: todos,
      });
    
      const todoChangeHandler = (event) => {
        dispatch({type: 'ADD', val: event.target.value, id: Math.random().toString()});
      };
    
      const submitHandler = (event) => {
        event.preventDefault();
        console.log(state.todos);
      }
    
    return (
        <>
            <div className="Container">
                <form onSubmit={submitHandler}>
                    <label>TO-DO name:</label>
                    <input 
                        type="text" 
                        id="todo" 
                        placeholder="Add a task" 
                        onChange={todoChangeHandler}>
                    </input>
                    <button type="submit">Add Task</button>
                </form>
            </div>
            
        </>
    );
};

export default UserForm;