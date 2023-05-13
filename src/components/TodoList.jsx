import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import TodoItemCreator from "~/src/components/TodoItemCreator";
import TodoItem from "~/src/components/TodoItem";
import { todoListState } from "~/src/states/todoAtoms";
import { getTodo } from "~/src/lib";

function TodoList() {
  // `useSetRecoilState` todoListState recoil atom 상태 값 업데이트
  const setTodoList = useSetRecoilState(todoListState);

  // `useRecoilState` todoListState recoil 상태 값 동적 관리
  const [todoList] = useRecoilState(todoListState);

  // 컴포넌트가 마운트 될 때, getTodo를 호출하여 최초 렌더링 시
  // GET으로 가져온 TodoList를 recoil 상태 값에 업데이트
  useEffect(() => {
    const fetchTodo = async () => {
      // GET 요청
      const data = await getTodo();
      // setTodoList를 통해 GET 요청으로 반환된 data를 todoListState atom에 저장
      setTodoList(data);
    };

    fetchTodo();
  }, []);

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
