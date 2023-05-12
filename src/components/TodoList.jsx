import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { todoListState } from "~/src/states/todoAtoms";
import TodoItemCreator from "~/src/components/TodoItemCreator";
import TodoItem from "~/src/components/TodoItem";
import { fetchTodos } from "../lib";

function TodoList() {
  const setTodoList = useSetRecoilState(todoListState);

  const initList = async () => {
    const oldTodo = await fetchTodos();
    setTodoList((state) => [...state, oldTodo]);
  };

  const todoList = useRecoilValue(todoListState);

  console.log(todoList);

  return (
    <>
      <TodoItemCreator />
      <ul>
        {todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
