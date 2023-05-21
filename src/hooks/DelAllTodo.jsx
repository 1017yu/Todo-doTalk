// Component가 mount되면 getTodo 함수를 호출
// API 호출, TodoList를 받아온 후 todoListState Atom에 값을 할당
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

      // reorder 통신으로 order값 정렬
      const ids = [];
      setTodoList((todoList) => {
        todoList.forEach((item) => ids.push(item.id));
        return todoList;
      });

      await reorderTodo(ids);
      setTodoList(updatedTodoList);
    } catch (e) {
      console.error(e);
    }
  };

  return [deleteAll];
};

export default DelAllTodo;
