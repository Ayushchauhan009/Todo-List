import React from "react";

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div className="text-center">
        <h4 className="my-3">{todo.title}</h4>
        <p>{todo.desc}</p>
        <button
          className="btn btn-sm btn-danger my-1"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};
