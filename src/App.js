import React, { useState } from "react";

export function App() {
  const [persInfo, setPersInfo] = useState({
    fname: "",
    lname: "",
    phone: "",
  });

  const inputChangeHandler = (e) => {
    setPersInfo({ ...persInfo, [e.target.name]: e.target.value });
  };
  const showData = (e) => {
    e.preventDefault();
    // setPersInfo(fname + " " + lname + "," + phone);
  };
  return (
    <div className="App">
      <form action="" onSubmit={showData}>
        <input
          type="text"
          placeholder="First Name"
          onChange={inputChangeHandler}
          name="fname"
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          onChange={inputChangeHandler}
          name="lname"
        />
        <br />
        <input
          type="text"
          placeholder="Phone Number"
          onChange={inputChangeHandler}
          name="phone"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {JSON.stringify(persInfo)}
    </div>
  );
}

export default App;
