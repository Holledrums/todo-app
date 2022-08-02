import "./TodoItem.scss";
import React, { useState } from "react";
import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/js/all.min.js";
import { SaveFilled, EditFilled, DeleteFilled } from "@ant-design/icons";

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
              <SaveFilled
                type="button"
                onClick={toggleEditMode}
                className="symbolSave"
                title="save task"
              />
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
              <EditFilled
                className="symbolpen"
                type="button"
                onClick={toggleEditMode}
                title="edit task"
              />
            </div>
            <div className="col-1">
              {todo.status && (
                <DeleteFilled
                  className="symboltrash"
                  type="button"
                  title="delete task"
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
export default TodoItem;
