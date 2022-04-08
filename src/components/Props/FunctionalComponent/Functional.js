import React from "react";

function Functional(props) {
  return (
    <div>
      <h1>This is Functional Componet data passsing preant to child</h1>

      <h2>{props.name}</h2>
    </div>
  );
}

export default Functional;
