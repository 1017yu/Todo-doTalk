import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "~/src/states/todoAtoms";

function TodoItemCreator() {
  // input 상태 관리
  const [inputValue, setInputValue] = useState("");

  // input value를 구독하고 있는 atom 배열 값에 추가하기 위해(Update) useSetRecoilState() Hook 사용
  const setTodoList = useSetRecoilState(todoListState);

  // input 값 변경
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      // 기존 todoList를 유지
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);

    // Item 추가 후, input value 초기화
    setInputValue("");
  };

  // id 생성 함수
  function getId(id = 0) {
    return id++;
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addItem}>ADD</button>
    </div>
  );
}

export default TodoItemCreator;
