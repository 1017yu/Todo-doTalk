// Component가 mount되면 getTodo 함수를 호출
// API 호출, TodoList를 받아온 후 todoListState Atom에 값을 할당
import { useSetRecoilState } from "recoil";
import { todoListState } from "~/src/states/todoAtoms";
import { deleteTodo, getTodo, reorderTodo } from "~/src/lib";
import { useState } from "react";

const DelTodo = ({ item }) => {
  // `useSetRecoilState` -> `todoListState` atom 업데이트
  const setTodoList = useSetRecoilState(todoListState);
  const [loading, setLoading] = useState(false);

  // `deleteTodoList` 호출, 서버에서 TodoItem DELETE
  // `todoListState` atom은 TodoList로 업데이트
  const deleteTodoList = async () => {
    try {
      setLoading(true);
      // DELETE 요청,
      await deleteTodo(item.id);
      // setTodoList를 통해 GET 요청으로 반환된 todoListData로 todoListState atom 업데이트
      setTodoList((oldTodoList) =>
        oldTodoList.filter((todoItem) => todoItem.id !== item.id)
      );

      // reorder 통신으로 order값 정렬
      const ids = [];
      setTodoList((oldTodoList) => {
        oldTodoList.forEach((item) => ids.push(item.id));
        return oldTodoList;
      });

      await reorderTodo(ids);

      // GET 통신
      const updatedTodoList = await getTodo();
      setTodoList(updatedTodoList);
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  return [deleteTodoList, loading];
};

export default DelTodo;
