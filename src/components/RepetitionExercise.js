import { useState } from "react";

export default function RepetitionExercise({name, setMenuScreen}) {
  
  let [repCount, setRepCount] = useState(0);

  function newRep() {
    setRepCount(repCount + 1);
  }

  function resetReps() {
    setRepCount(0);
  } 
  
  return(
    <>
      <h1>{name}</h1>
      <h2>{repCount} Reps</h2>
      <button onClick={newRep}>New Rep</button>
      <button onClick={resetReps}>Reset</button>
      <br />
      <button onClick={() => setMenuScreen()}>Return to Menu</button>
    </>
  )
}