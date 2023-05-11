import { useRecoilValue } from "recoil";
import TodoItemCreator from "~/src/components/TodoItemCreator";
import { todoListState } from "~/src/states/todoAtoms";
import TodoItem from "~/src/components/TodoItem";

function TodoList() {
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
