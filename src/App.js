import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Time from "./components/Time";
import Home from "./pages/Home";
import Times from "./components/Times";

function App() {
  const [userMinutes, setMinutes] = useState(0.1);

  const [secondsTime, setSecondsTime] = useState((userMinutes || 25) * 60);
  const [paused, setState] = useState(true);

  const minutes = Math.floor(secondsTime / 60);
  const seconds = secondsTime % 60;

  useEffect(() => {
    setSecondsTime(userMinutes * 60);
  }, [userMinutes]);

  useEffect(() => {
    if (secondsTime == 0) {
      alert("Que tal uma pausa?");
      return;
    }
    setTimeout(() => {
      if (!paused) {
        setSecondsTime((state) => state - 1);
      }
    }, 1000);
  }, [secondsTime, paused]);

  return (
    <Home>
      <Times setMinutes={setMinutes} canChangeTimes={!paused} />
      <Button onClick={() => setState(!paused)}>
        <Time time={minutes} />
        :
        <Time time={seconds} />
      </Button>
    </Home>
  );
}

export default App;
