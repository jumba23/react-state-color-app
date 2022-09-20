import "./App.css";
import { useState } from "react";
import Boxes from "./components/Boxes/boxes";
// import Buttons from "./components/Buttons/buttons";

function App() {
  const [start, setStart] = useState("false");

  const onClickToPlay = () => {
    return setStart(true);
  };

  return (
    <div className="App">
      <h1>Square Box Challenge</h1>
      {start === true ? (
        <Boxes />
      ) : (
        <button onClick={onClickToPlay}>Do you want to play?</button>
      )}
    </div>
  );
}

export default App;
