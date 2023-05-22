// TodoItem.jsx의 DeleteIcon에 반응하여 해당 항목 삭제하는 Custom Hook
//
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
      // 로딩 스피너 동작
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

      //  업데이트된 데이터를 recoil atom인 `todoListState`에 업데이트합
      setTodoList(updatedTodoList);

      // 로딩 스피너 동작
      setLoading(false);
    } catch (e) {
      console.error(e);
    }
  };

  return [deleteTodoList, loading];
};

export default DelTodo;
