import "./TodoItem.scss";
import React, { useState } from "react";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js";

function TodoItem(props) {
  const [todo, setTodo] = useState(props.todo);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (event) => {
    setTodo({
      ...todo,
      [event.target.name]: event.target.value,
    });
  };

  const markDone = () => {
    setTodo({
      ...todo,
      status: !todo.status,
    });
  };
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      <div className={`row ${todo.status ? "completed" : null}`}>
        {editMode ? (
          <>
            <div className="col-1">
              {" "}
              <input
                type="text"
                value={props.todo.urgency}
                name="urgency"
                onChange={handleChange}
              />
            </div>
            <div className="col-3">
              <input
                type="text"
                value={props.todo.task}
                name="task"
                onChange={handleChange}
              />
            </div>
            <div className="col-2">
              <input
                type="text"
                value={props.todo.doneBy}
                name="doneBy"
                onChange={handleChange}
              />
            </div>
            <div className="col-2">
              <input
                type="text"
                value={props.todo.date}
                name="date"
                onChange={handleChange}
              />
            </div>
            <div className="col-1">
              <i
                type="button"
                onClick={toggleEditMode}
                class="fa-solid fa-floppy-disk symbolSave"
              ></i>
            </div>
          </>
        ) : (
          <>
            <div className="col-1">{props.todo.urgency}</div>
            <div className="col-3">{props.todo.task}</div>
            <div className="col-2">{props.todo.doneBy}</div>
            <div className="col-2">{props.todo.date}</div>
          </>
        )}
        <div className="col-1">
          <div className="input-group-text ">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              checked={todo.status}
              onChange={markDone}
              aria-label="Checkbox for following text input"
            />
          </div>
        </div>
        <div className="col-1">
          <i
            type="button"
            onClick={toggleEditMode}
            className="fa-solid fa-pen symbolpen"
          ></i>
        </div>
        <div className="col-1">
          {todo.status && (
            <span>
              <i className="fa-solid fa-trash-can symboltrash"></i>
            </span>
          )}
        </div>
      </div>
    </>
  );
}
export default TodoItem;
