import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
  };
  return (
    <div className="container my-2" style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3>
      <div className="cntr text-center">
        {props.todos.length === 0
          ? "No Todos Here"
          : props.todos.map((todo) => {
              return (
                <TodoItem
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
              );
            })}
      </div>
    </div>
  );
};
