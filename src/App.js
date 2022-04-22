import React from "react";
import ClassCopment from "./components/Props/ClassComp/ClassCopment";
import Functional from "./components/Props/FunctionalComponent/Functional";
import List from "./components/Unice/list";
import "bootstrap/dist/css/bootstrap.min.css";
import State from "./components/StatePass/State";

function App() {
  return (
    <div>
      <List />
      <Functional name="This is functional component" />
      <h1>This is class componet data passin preant to child</h1>
      <ClassCopment name="This is class components " />
      <State count="0" />
    </div>
  );
}

export default App;
