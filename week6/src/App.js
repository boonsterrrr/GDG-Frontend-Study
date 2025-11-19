import { useEffect, useState } from "react";

import EmptyData from "./components/EmptyData";

import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => response.json())

      .then((json) => setTodos(json));
  }, []);

  if (todos.length === 0) {
    return <EmptyData />;
  }

  return (
    <div>
      {todos.map((todo) => (
        <Todo id={todo.id} title={todo.title} />
      ))}
    </div>
  );
}

export default App;
