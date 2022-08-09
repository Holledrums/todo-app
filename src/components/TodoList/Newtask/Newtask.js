import "./Newtask.scss";
import SetDate from "./SetDate/SetDate";

function Newtask() {
  return (
    <div className="newtask">
      <div className="row g-3">
        <div className="col-sm-7">
          <input
            type="text"
            className="form-control"
            placeholder="add new task"
            aria-label=""
          />
        </div>
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Name who should do it?"
            aria-label=""
          />
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <div className="input-group date" id="datetimepicker1">
              <SetDate />
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
          <button type="submit" className="btn btn-primary">
            Add New Task
          </button>
        </div>
      </div>
    </div>
  );
}
export default Newtask;
