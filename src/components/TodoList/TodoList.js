import "./TodoList.scss";
import todos from "../../todos.js";
import TodoItem from "./TodoItem/TodoItem.js";
import Newtask from "./Newtask/Newtask";
import React, { useReducer } from "react";

const initState = {
  todos: todos,
  newTodo: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "createNewTodo":
      const updatedTodos = [action.payload, ...state.todos];
      console.log(updatedTodos);
      return {
        ...state,
        todos: updatedTodos,
      };
    default:
      return state;
  }
};

function TodoList() {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="container">
      <div>
        <Newtask dispatch={dispatch} />
      </div>
      <h2>Was noch ansteht:</h2>
      <div className="row">
        <div className="col-1">#</div>
        <div className="col-3">Task</div>
        <div className="col-2">Who?</div>
        <div className="col-2">until?</div>
        <div className="col-1">done?</div>
        <div className="col-2"></div>

        <div>
          {state.todos.map((todo, index) => {
            console.log(todo);
            return <TodoItem key={index} todo={todo} />;
          })}
        </div>
      </div>
    </div>
  );
}
export default TodoList;
