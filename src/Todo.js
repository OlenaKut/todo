import React from "react";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div>
      <span
        style={{
          textDecoration: todo.isDone ? "line-through" : "",
        }}
      >
        {" "}
        {todo.text}
      </span>

      <div>
        <button
          onClick={() => markTodo(index)}
          className="btn rounded-1 m-1 shadow"
        >
          ✅
        </button>
        <button
          onClick={() => removeTodo(index)}
          className="btn rounded-1 m-1 shadow"
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default Todo;
