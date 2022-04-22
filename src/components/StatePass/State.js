import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 2,
    };
  }
  handelincrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        Count={count}
        <br></br>
        <button onClick={this.handelincrement}> Incerment +</button>
        <br></br>
        <button onClick={this.decrement}> dectement -</button>
      </div>
    );
  }
}

export default State;
