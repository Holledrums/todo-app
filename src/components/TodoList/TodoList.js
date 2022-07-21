import "./TodoList.scss";
import todos from "../../todos.js";
import TodoItem from "./TodoItem/TodoItem.js";
import Newtask from "./Newtask/Newtask";

function TodoList() {
  const items = todos.map((todo, index) => {
    return <TodoItem key={index} todo={todo} />;
  });

  return (
    <div className="container">
      <div>
        <Newtask />
      </div>
      <h2>Was noch ansteht:</h2>
      <div className="row">
        <div className="col-1">#</div>
        <div className="col-3">Task</div>
        <div className="col-2">Who?</div>
        <div className="col-2">until?</div>
        <div className="col-1">done?</div>
        <div className="col-2"></div>

        <div>{items}</div>
      </div>
    </div>
  );
}
export default TodoList;
