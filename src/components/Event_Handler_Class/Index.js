import React, { Component } from "react";

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changeValue: "",
    };
  }
  hancelOneClick = (e) => {
    // console.log(e.target.value);
    this.setState(
      {
        changeValue: e.target.value,
      },
      () => {
        console.log(this.state.changeValue);
      }
    );
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.hancelOneClick} />
        <h1>{this.state.changeValue}</h1>
      </div>
    );
  }
}
