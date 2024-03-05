import Stopwatch from "./Stopwatch"

export default function DurationExercise({name, setMenuScreen}) {
  return(
    <>
      <h1>{name}</h1>
      <Stopwatch />
      <br />
      <button onClick={() => setMenuScreen()}>Return to Menu</button>
    </>
  )
}