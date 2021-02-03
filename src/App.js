import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState("none");

  const handleDisplay = () => {
    display === "none" ? setDisplay("block") : setDisplay("none");
  };
  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <div className="App">
      <h1>{show && "Hi"}</h1>
      <button onClick={handleToggle}>Toggle</button>
      <h1 style={{ display: `${display}` }}>Hello</h1>
      <button onClick={handleDisplay}>Toggle Text</button>
    </div>
  );
}
