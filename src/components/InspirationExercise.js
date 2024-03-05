import cat_image from "./cat_image.jpg"

export default function InspirationExercise({name, setMenuScreen}) {
  return(
    <>
    <h1>{name}</h1>
    <img src={cat_image} height="400px" />
    <br />
    <button onClick={() => setMenuScreen()}>Return to Menu</button>
    </>
  )
}