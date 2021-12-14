import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <input type="text" />
        <hr />
        <input type="text" ref={(elem) => (this.iElem = elem)} />
        <hr />
        <button onClick={() => this.iElem.focus()}>Set Focus</button>
      </div>
    );
  }
}

export default App;
