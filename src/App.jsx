import { useState } from "react";
import "./App.css";

function App() {

  let [counter ,setCounter] =useState(0);
  const Increase = () => {
   setCounter(counter+1);
   console.log(counter)
  }

  const Decrease = () => {
    if(counter>0){  // Preventing decrement below 0
      setCounter(counter-1);
      console.log(counter)
    }
   }

   const Reset = () => {
    setCounter(0);
    console.log(counter)
   }
  return (
    <div className="main-container">
      <div>
        <h1>Counter</h1>
        <div className="counter-fun">
          <button className="Increase" onClick={Increase}>Increase</button>
          <button className="Decrease" onClick={Decrease}>Decrease</button>
        </div>
        <button className="Reset" onClick={Reset}>Reset</button>
        <p>Current count: {counter}</p>
      </div>
    </div>
  );
}

export default App;