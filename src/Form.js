import React, { useState } from "react";

function Form({ addTodo }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }

  function change(e) {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <h1>My list to-do</h1>
      <form onSubmit={handleSubmit}>
        <label>Add to-do</label>
        <br />
        <input
          className="rounded-1 m-1 border-0 shadow"
          type="text"
          placeholder="Add new todo"
          value={value}
          onChange={change}
        />
        <button
          type="submit"
          className="rounded-1 m-1 border-0 btn btn-success p-1"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
