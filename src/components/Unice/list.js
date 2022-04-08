import React from "react";
import { v4 as uuidv4 } from "uuid";
const todos = [
  {
    id: uuidv4(),
    title: "todo1",
    dese: "tod1 description",
  },
  {
    id: uuidv4(),
    title: "todo1",
    dese: "tod1 description",
  },
  {
    id: uuidv4(),
    title: "todo1",
    dese: "tod1 description",
  },
  {
    id: uuidv4(),
    title: "todo1",
    dese: "tod1 description",
  },
  {
    title: "todo1",
    dese: "tod1 description",
  },
];
const List = () => {
  return (
    <div>
      {todos.map((todo, index) => {
        const { id, title, dese } = todo;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{dese}</p>
          </div>
        );
      })}
    </div>
  );
};

export default List;
