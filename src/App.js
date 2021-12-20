import React, { useState } from "react";
import { Products } from "./components/Products";

export function App() {
  const [isAdmin, setIsAdmin] = useState(true);

  const inputChangeHandler = (e) => {
    setIsAdmin(e.target.checked);
  };
  return (
    <div className="App">
      <input type="checkbox" onChange={inputChangeHandler} /> Is Admin
      <hr />
      <Products isAdmin={isAdmin} />
    </div>
  );
}

export default App;
