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
                className="inputField"
                type="text"
                value={todo.urgency}
                name="urgency"
                onChange={handleChange}
              />
            </div>
            <div className="col-3">
              <input
                className="inputField"
                type="text"
                value={todo.task}
                name="task"
                onChange={handleChange}
              />
            </div>
            <div className="col-2">
              <input
                className="inputField"
                type="text"
                value={todo.doneBy}
                name="doneBy"
                onChange={handleChange}
              />
            </div>
            <div className="col-2">
              <input
                className="inputField"
                type="text"
                value={todo.date}
                name="date"
                onChange={handleChange}
              />
            </div>
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
              <button type="button" onClick={toggleEditMode}>
                <i
                  className="fa-solid fa-floppy-disk symbolSave"
                  title="save task"
                ></i>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="col-1">{todo.urgency}</div>
            <div className="col-3">{todo.task}</div>
            <div className="col-2">{todo.doneBy}</div>
            <div className="col-2">{todo.date}</div>
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
              <button type="button" onClick={toggleEditMode}>
                <i className="fa-solid fa-pen symbolpen" title="edit task"></i>
              </button>
            </div>
            <div className="col-1">
              {todo.status && (
                <button type="button">
                  <i
                    className="fa-solid fa-trash-can symboltrash"
                    title="delete task"
                  ></i>
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default TodoItem;
