import { Motion, spring } from "react-motion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
        {(value) => <div>{value.x}</div>}
      </Motion>
    </div>
  );
}

export default App;
