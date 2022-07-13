import "./Newtask.scss";

export default function Newtask() {
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
              <input
                type="text"
                className="form-control"
                placeholder="done until .. "
              />
              <span className="input-group-addon">
                <span className="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <label class="visually-hidden" for="specificSizeSelect">
            Preference
          </label>
          <select class="form-select" id="specificSizeSelect">
            <option selected>urgency...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
          </select>
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary">
            Add New Task
          </button>
        </div>
      </div>
    </div>
  );
}
