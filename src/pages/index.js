import { useState } from "react";
import TodoItemCreator from "../components/todoItemCreator";

function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <TodoItemCreator />
      <h1>Hello {counter}</h1>
      <button onClick={() => setCounter((prev) => (prev += 1))}>+</button>
    </div>
  );
}

export default Home;
