import React, { Component } from "react";

export default class EventHandlerBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  hadelclick = () => {
    console.log("ekjakdf");
  };

  render() {
    return (
      <div>
        <p>Count= {this.state.count}</p>
        <button onClick={this.state.hadelclick}>incnment+</button>
      </div>
    );
  }
}
