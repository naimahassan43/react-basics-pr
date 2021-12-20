import React, { useState } from "react";

export function App() {
  const [persInfo, setPersInfo] = useState({
    fname: "",
    lname: "",
    phone: "",
  });

  const fNameHandler = (e) => {
    setPersInfo({ ...persInfo, fname: e.target.value });
  };
  const lNameHandler = (e) => {
    setPersInfo({ ...persInfo, lname: e.target.value });
  };
  const phoneHandler = (e) => {
    setPersInfo({ ...persInfo, phone: e.target.value });
  };
  const showData = (e) => {
    e.preventDefault();
    // setPersInfo(fname + " " + lname + "," + phone);
  };
  return (
    <div className="App">
      <form action="" onSubmit={showData}>
        <input type="text" placeholder="First Name" onChange={fNameHandler} />
        <br />
        <input type="text" placeholder="Last Name" onChange={lNameHandler} />
        <br />
        <input type="text" placeholder="Phone Number" onChange={phoneHandler} />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {JSON.stringify(persInfo)}
    </div>
  );
}

export default App;
