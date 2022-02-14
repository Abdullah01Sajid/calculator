import "./App.css";
import { useState } from "react";
import Top from "./Components/Top/Top";
import Down from "./Components/Top/down/Down";
function App() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  return (
    <div className="App">
      <h2> Abdullah´s calculator</h2>
      <div className="calc">
        <Top first={first} second={second} />
        <Down
          setFirst={setFirst}
          first={first}
          second={second}
          setSecond={setSecond}
        />
      </div>
    </div>
  );
}

export default App;
