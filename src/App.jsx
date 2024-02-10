import "./App.css";
import Card from "./components/Card";
import react, { useState } from "react";

function App() {
  const [colors, setColors] = useState(["Yellow", "Red", "Blue", "Orange"]);
  
  const clickHandler = (color) => {
    console.log(color);
  };

  const colorfulCards = colors.map((color) => {
    return (
      <Card
        key={color}
        color={color}
        style={{ backgroundColor: color }}
        clickHandler={(color) => clickHandler(color)}
      />
    );
  });
  


  return (
    <>
      <section className="container" onClick={() => clickHandler()}>
        <input type='text' placeholder='Color'></input>
          <button>Submit Color</button>
        {colorfulCards}
      </section>
    </>
  );
}

export default App;
