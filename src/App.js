import React from "react";

export function App() {
  const getData = () => {
    console.log("Function called");
  };
  return (
    <div className="App">
      <button onClick={() => getData()}>Get Data</button>
    </div>
  );
}

export default App;
