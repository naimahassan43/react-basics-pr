import React, { useState, useEffect } from "react";
import ChangeState from "./components/ChangeState";
import DisplayCounter from "./components/DisplayCounter";
import DisplayFlag from "./components/DisplayFlag";
import Footer from "./components/Footer";
import Header from "./components/Header";

export function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  const onChangeCounter = () => {
    setCount(count + 1);
  };
  const onChangeFlag = () => {
    setFlag(!flag);
  };
  useEffect(() => {});
  return (
    <div className="App">
      <Header />
      <DisplayCounter counter={count} />
      <DisplayFlag flag={flag} />
      <ChangeState caption="Change Counter" click={onChangeCounter} />
      <ChangeState caption="Change Flag" click={onChangeFlag} />
      <Footer />
    </div>
  );
}

export default App;
