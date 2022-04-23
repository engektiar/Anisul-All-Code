import React from "react";
import { useState } from "react";
const FunctionOnchange = () => {
  const [name, setName] = useState("");

  function nameChange(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <input onChange={nameChange} type="text" />
      <p>{name}</p>
    </div>
  );
};

export default FunctionOnchange;
