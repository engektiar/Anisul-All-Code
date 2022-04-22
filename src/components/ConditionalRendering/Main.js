import React, { Component } from "react";
import HomePage from "./HomePage";
import Loginpage from "./LoginPage";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
    };
  }
  render() {
    const { isLogin } = this.state;

    // if (isLogin) {
    //   element = <HomePage />;
    // } else {
    //   element = <Loginpage />;
    // }

    return <div> {isLogin ? <HomePage /> : <Loginpage />}</div>;
  }
}
