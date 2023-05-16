// Component가 mount되면 getTodo 함수를 호출
// API 호출, TodoList를 받아온 후 todoListState Atom에 값을 할당
import { useSetRecoilState } from "recoil";
import { todoListState } from "~/src/states/todoAtoms";
import { deleteTodo } from "~/src/lib";

const DelTodoHook = ({ item }) => {
  // `useSetRecoilState` -> `todoListState` atom 업데이트
  const setTodoList = useSetRecoilState(todoListState);

  // `deleteTodoList` 호출, 서버에서 TodoItem DELETE
  // `todoListState` atom은 TodoList로 업데이트
  const deleteTodoList = async () => {
    // DELETE 요청,
    await deleteTodo(item.id);

    // setTodoList를 통해 GET 요청으로 반환된 todoListData로 todoListState atom 업데이트
    setTodoList((oldTodoList) =>
      oldTodoList.filter((todoItem) => todoItem.id !== item.id)
    );
  };

  return [deleteTodoList];
};

export default DelTodoHook;
