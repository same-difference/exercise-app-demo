import { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import InspirationExercise from "./components/InspirationExercise"

function App() {

  let screen;
  let [currentScreen, setCurrentScreen] = useState("menu");
  let [currentExercise, setCurrentExerice] = useState("none");
  
  if (currentScreen === "menu") {
    screen = 
    <>
    <h1>Menu</h1>
    <ul>
      <li><button onClick={() => {setCurrentExerice("Jogging"); setCurrentScreen("timer")}}>Jogging</button></li>
      <li><button onClick={() => {setCurrentExerice("Yoga"); setCurrentScreen("timer")}}>Yoga</button></li>
      <li><button onClick={() => {setCurrentExerice("Jump Rope"); setCurrentScreen("timer")}}>Jump Rope</button></li>
      <li><button onClick={() => {setCurrentExerice("Situps"); setCurrentScreen("reps")}}>Situps</button></li>
      <li><button onClick={() => {setCurrentExerice("Pushups"); setCurrentScreen("reps")}}>Pushups</button></li>
      <li><button onClick={() => {setCurrentExerice("Bench Presses"); setCurrentScreen("reps")}}>Bench Presses</button></li>
      <li><button onClick={() => {setCurrentExerice("Burpees"); setCurrentScreen("inspire")}}>Burpees</button></li>
      <li><button onClick={() => {setCurrentExerice("Deadlifts"); setCurrentScreen("inspire")}}>Deadlifts</button></li>
    </ul>
      
    </>
  }
  else if (currentScreen === "timer") {
    screen = <DurationExercise name={currentExercise} setMenuScreen={() => setCurrentScreen("menu")} />
  }
  else if (currentScreen === "reps") {
    screen = <RepetitionExercise name={currentExercise} setMenuScreen={() => setCurrentScreen("menu")} />
  }
  else if (currentScreen === "inspire") {
    screen = <InspirationExercise name={currentExercise} setMenuScreen={() => setCurrentScreen("menu")} />
  }

  return (
    <>
      {screen}
    </>
  );
}

export default App;
