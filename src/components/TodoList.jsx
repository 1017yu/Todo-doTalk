import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import TodoItem from "~/src/components/TodoItem";
import { todoListState } from "~/src/states/todoAtoms";
import { getTodo } from "~/src/lib";
import TodoModal from "./TodoModal";

function TodoList() {
  // `useSetRecoilState` -> `todoListState` atom 업데이트
  const setTodoList = useSetRecoilState(todoListState);

  // `useRecoilState` -> `todoListState` atom 참조
  const [todoList] = useRecoilState(todoListState);

  // 컴포넌트가 마운트되면 `getTodo` 호출, 서버에서 TodoList GET
  // `todoListState` atom은 TodoList로 업데이트
  useEffect(() => {
    const fetchTodo = async () => {
      // GET 요청,
      const data = await getTodo();
      // setTodoList를 통해 GET 요청으로 반환된 data로 todoListState atom 업데이트
      setTodoList(data);
    };

    fetchTodo();
    // 최초 마운트될 때만 실행되어야 하므로 의존성 배열에 전달할 필요 없음.
  }, []);

  // spread - reverse를 통해, 오래된 순부터 최신 순으로 map
  return (
    <>
      <TodoModal />
      <ul>
        {[...todoList].reverse().map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
