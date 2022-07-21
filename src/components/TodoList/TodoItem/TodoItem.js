import "./TodoItem.scss";
import React, { useState } from "react";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js";

function TodoItem(props) {
  const [checked, setChecked] = useState(props.todo.done);

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className={`row ${checked ? "completed" : null}`}>
      <div className="col-1">{props.todo.urgency}</div>
      <div className="col-3">{props.todo.task}</div>
      <div className="col-2">{props.todo.doneBy}</div>
      <div className="col-2">{props.todo.date}</div>
      <div className="col-1">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
            aria-label="Checkbox for following text input"
          />
        </div>
      </div>
      <div className="col-1">
        <i className="fa-solid fa-pen symbolpen"></i>
      </div>
      <div className="col-1">
        {checked && (
          <span>
            <i className="fa-solid fa-trash-can symboltrash"></i>
          </span>
        )}
      </div>
    </div>
  );
}
export default TodoItem;
