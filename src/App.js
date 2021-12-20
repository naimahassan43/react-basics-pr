import React, { useState } from "react";

export function App() {
  const [persInfo, setPersInfo] = useState({
    fname: "",
    lname: "",
    phone: true,
  });

  const inputChangeHandler = (e) => {
    setPersInfo((persInfo) => {
      return { ...persInfo, [e.target.name]: e.target.value };
    });
  };
  const inputCheckHandler = (e) => {
    setPersInfo((persInfo) => {
      return { ...persInfo, [e.target.name]: e.target.checked };
    });
  };
  const showData = (e) => {
    e.preventDefault();
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
          type="checkbox"
          placeholder="Phone Number"
          onChange={inputCheckHandler}
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
