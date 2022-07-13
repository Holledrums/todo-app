import "./Post.scss";
function Post(props) {
  return (
    <div className="row">
      <div className="col-1">{props.post.urgency}</div>
      <div className="col-4">{props.post.task}</div>
      <div className="col-3">{props.post.doneBy}</div>
      <div className="col-3">{props.post.date}</div>
      <div className="col-1">
        <div className="input-group-text">
          <input
            className="form-check-input mt-0"
            type="checkbox"
            value={props.post.done}
            aria-label="Checkbox for following text input"
          />
        </div>
      </div>
    </div>
  );
}
export default Post;
