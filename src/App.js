import React from "react";

export function App() {
  const getData = (e) => {
    console.log(e.target.innerHTML);
  };
  return (
    <div className="App">
      <button onClick={getData}>Get Data</button>
    </div>
  );
}

export default App;
