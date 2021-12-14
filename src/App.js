import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.iElem = React.createRef();
  }
  componentDidMount() {
    this.iElem.current.focus();
  }
  render() {
    return (
      <div className="App">
        <input type="text" />
        <hr />
        <input type="text" ref={this.iElem} />
        <hr />
        <button onClick={() => this.iElem.current.focus()}>Set Focus</button>
      </div>
    );
  }
}

export default App;
