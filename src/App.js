import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    { text: "Make a to-do list", isDone: false },
  ]);

  function addTodo(text) {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  function markTodo(index) {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App text-white rounded-3 shadow p-5">
      <Form addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <div key={index}>
            <Todo
              key={index}
              index={index}
              todo={todo}
              markTodo={markTodo}
              removeTodo={removeTodo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
