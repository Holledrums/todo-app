import "./Todoplan.scss";
import todos from "../../todos.js";
import Post from "../Todoplan/Post/Post.js";
import Newtask from "./Newtask/Newtask";

function Todoplan() {
  const posts = todos.map((post, index) => {
    return <Post key={index} post={post} />;
  });

  return (
    <div className="container">
      <div>
        <Newtask />
      </div>
      <h2>Was noch ansteht:</h2>
      <div className="row">
        <div className="col-1">#</div>
        <div className="col-4">Task</div>
        <div className="col-3">Who?</div>
        <div className="col-3">until?</div>
        <div className="col-1">done?</div>
        <div>{posts}</div>
      </div>
    </div>
  );
}
export default Todoplan;
