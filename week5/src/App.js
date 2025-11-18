import { useState, useEffect } from "react";
import EmptyData from "./EmptyData";
import Todo from "./Todo";
import Post from "./Post";
function App() {
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users1/1/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  if (todos.length === 0) {
    return <EmptyData />;
  }
  if (posts.length === 0) {
    return <EmptyData />;
  }
  return (
    <div>
      {todos.map((todo) => (
        <Todo id={todo.id} title={todo.title} />
      ))}
      {posts.map((post) => (
        <Post key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
}

export default App;
