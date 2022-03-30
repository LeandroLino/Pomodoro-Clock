import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Time from "./components/Time";
import Home from "./pages/Home";

function App() {
  const TIME = 25 * 60;

  const [secondsTime, setSecondsTime] = useState(TIME);
  const [paused, setState] = useState(true);

  const minutes = Math.floor(secondsTime / 60);
  const seconds = secondsTime % 60;

  useEffect(() => {
    if (!paused) {
      setTimeout(() => {
        setSecondsTime((state) => state - 1);
      }, 1000);
    }
  }, [secondsTime, paused]);

  return (
    <div className="App-header">
      <Button onClick={() => setState(!paused)}>
        <Time time={minutes} />
        :
        <Time time={seconds} />
      </Button>
    </div>
  );
}

export default App;
