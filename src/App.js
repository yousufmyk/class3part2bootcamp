import React, { useState } from "react";
import { Message } from "./message.js";
import './App.css';


function App() {

  let [count, setCount] = useState(0) //this is used to make varable in react
  let [isMorning, setMorning] = useState(true)




  return (
    <div className={`box ${isMorning ? 'daylight' : ''}`}>
      <h1>Day time = {isMorning ? "Morning" : "Night"}</h1>
      <Message counter={count} />
      <button onClick={() => setCount(++count)}>Update counter</button>

      <button onClick={() => setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
