import React, { useState } from "react";

export function App() {
  const [h, setH] = useState("Default");
  const getData = (e) => {
    setH(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="App">
      {/* <button onClick={getData}>Get Data</button> */}
      <h1>{h}</h1>
      <input onChange={getData} type="text" />
    </div>
  );
}

export default App;
