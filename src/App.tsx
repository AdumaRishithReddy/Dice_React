import { useState } from "react";
import MainPage from "./components/MainPage/mainpage";
import GamePage from "./components/GamePage/GamePage";
import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  const toggleState = () => {
    setStarted((prev) => !prev);
  };
  return <>{started ? <GamePage /> : <MainPage toggle={toggleState} />}</>;
}

export default App;
