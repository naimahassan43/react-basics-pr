import React from "react";

export function App() {
  const getData = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };
  return (
    <div className="App">
      <form action="" onSubmit={getData}>
        <input type="text" />

        <input type="text" />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
