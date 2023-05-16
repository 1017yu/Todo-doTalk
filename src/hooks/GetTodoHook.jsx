// Component가 mount되면 getTodo 함수를 호출
// API 호출, TodoList를 받아온 후 todoListState Atom에 값을 할당
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "~/src/states/todoAtoms";
import { getTodo } from "~/src/lib";

function GetTodoHook() {
  // `useSetRecoilState` -> `todoListState` atom 업데이트
  const setTodoList = useSetRecoilState(todoListState);

  // 컴포넌트가 마운트되면 `getTodo` 호출, 서버에서 TodoList GET
  // `todoListState` atom은 TodoList로 업데이트
  useEffect(() => {
    const fetchTodoList = async () => {
      // GET 요청,
      const todoListData = await getTodo();

      // order 프로퍼티의 value를 배열 내 index 번호와 일치시키는 작업
      const sortedTodoList = todoListData.map((todoItem, index) => ({
        ...todoItem,
        order: index,
      }));

      console.log(sortedTodoList);

      // setTodoList를 통해 GET 요청으로 반환된 todoListData로 todoListState atom 업데이트
      setTodoList(sortedTodoList);
    };

    fetchTodoList();
  }, [setTodoList]);
}

export default GetTodoHook;
