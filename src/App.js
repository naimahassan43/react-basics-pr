import React, { useState } from "react";

import ShowXY from "./components/ShowXY";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show ? <ShowXY /> : <h1>No Data</h1>}
      <button onChange={() => setShow(!show)}>Toggle</button>
    </div>
  );
}

export default App;
