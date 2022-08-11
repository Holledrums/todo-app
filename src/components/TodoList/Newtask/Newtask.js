import "./Newtask.scss";
import React, { useState, useReducer } from "react";
import SetDate from "./SetDate/SetDate";

const initState = {
  date: "",
  task: "",
  urgency: "",
  doneBy: "",
  status: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "updateChange":
      const updatedState = { ...state };
      updatedState[action.name] = action.payload;

      return updatedState;
  }
};

function Newtask(props) {
  const [state, dispatch] = useReducer(reducer, initState);

  const createNewTodo = () => {
    props.dispatch({ type: "createNewTodo", payload: state });
  };

  return (
    <div className="newtask">
      <div className="row g-3">
        <div className="col-sm-7">
          <input
            type="text"
            className="form-control"
            placeholder="add new task"
            aria-label=""
            value={state.task}
            name="task"
            onChange={(e) => {
              dispatch({
                type: "updateChange",
                payload: e.target.value,
                name: e.target.name,
              });
            }}
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Name who should do it?"
            aria-label=""
            value={state.doneBy}
            name="doneBy"
            onChange={(e) => {
              dispatch({
                type: "updateChange",
                payload: e.target.value,
                name: e.target.name,
              });
            }}
          />
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <div className="input-group date" id="datetimepicker1">
              <SetDate dispatch={dispatch} value={state.date} />
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <label className="visually-hidden" htmlFor="specificSizeSelect">
            Preference
          </label>
          <select
            className="form-select"
            id="specificSizeSelect"
            defaultValue="urgency"
            value={state.urgency}
            name="urgency"
            onChange={(e) => {
              dispatch({
                type: "updateChange",
                payload: e.target.value,
                name: e.target.name,
              });
            }}
          >
            <option hidden>urgency...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
          </select>
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              createNewTodo();
            }}
          >
            Add New Task
          </button>
        </div>
      </div>
    </div>
  );
}
export default Newtask;
