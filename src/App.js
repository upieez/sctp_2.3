import "./App.css";
import { useState } from "react";
import Counter from "./components/Counter";
import Discount from "./components/Discount";
import Counter2 from "./components/Counter2";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      {/* <Discount /> */}
      {/* <Counter2 /> */}
    </div>
  );
}

export default App;
