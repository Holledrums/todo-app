import "./App.scss";

const cleanBathroom = {
  date: "10-07-2022",
  task_name: "Bad putzen",
  done: false,
};

const buyGroceries = {
  date: "12-07-2022",
  task_name: "Lebensmittel kaufen",
  done: true,
};

function App() {
  return (
    <div className="App">
      <h1>hello du Schmutzfink </h1>
      <h2>was steht an</h2>
      heute: {buyGroceries.date}
      <br />
      <ul>
        <h3>einkaufen</h3>
        <li>
          {buyGroceries.task_name}
          <input type="checkbox" defaultChecked={buyGroceries.done} />
        </li>
      </ul>
      <ul>
        <h3>putzen</h3>
        <li>
          {cleanBathroom.task_name}
          <input type="checkbox" defaultChecked={cleanBathrom.done} />
        </li>
      </ul>
      <br />
    </div>
  );
}

export default App;
