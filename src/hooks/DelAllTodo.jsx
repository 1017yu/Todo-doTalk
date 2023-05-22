// 선택된 항목(done: true)들을 일괄 삭제하는 Custom Hook
// 삭제한 후 나머지 todoItem만을 반환해 다시 atom state에 업데이트
import { useSetRecoilState } from "recoil";
import { todoListState } from "~/src/states/todoAtoms";
import { deleteTodo, getTodo, reorderTodo } from "~/src/lib";

const DelAllTodo = () => {
  // `useSetRecoilState` -> `todoListState` atom 업데이트
  const setTodoList = useSetRecoilState(todoListState);

  // done: true인 todoItem 추출 후 삭제
  // `todoListState` atom은 TodoList로 업데이트
  const deleteAll = async () => {
    try {
      const todoListData = await getTodo();
      const doneTodoList = todoListData.filter((item) => item.done === true);
      const doneTodoIds = doneTodoList.map((item) => item.id);

      // Promise.all 함수를 사용하여 API 요청을 병렬로 처리, 배열로 반환
      await Promise.all(
        doneTodoIds.map(async (doneTodoId) => await deleteTodo(doneTodoId))
      );
      // GET 통신
      const updatedTodoList = await getTodo();
      setTodoList(updatedTodoList);

      // order값 정렬
      const ids = [];
      setTodoList((todoList) => {
        todoList.forEach((item) => ids.push(item.id));
        return todoList;
      });

      // reorder 통신
      await reorderTodo(ids);

      //  업데이트된 데이터를 recoil atom인 `todoListState`에 업데이트합
      setTodoList(updatedTodoList);
    } catch (e) {
      console.error(e);
    }
  };

  return [deleteAll];
};

export default DelAllTodo;
