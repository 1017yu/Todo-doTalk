// Todo-Item을 추가할 수 있도록 input과 button으로 구성
// createTodo(inputValue)를 통해, todoListState atom 값을 업데이트하여 새로운 Todo-Item을 추가
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "~/src/states/todoAtoms";
import { createTodo } from "~/src/lib";

function TodoItemCreator({ onClose }) {
  // input 상태 관리
  const [inputValue, setInputValue] = useState("");

  // todoListState atom을 setTodoList 변수에 할당, List 추가 시 atom(recoil)값을 업데이트하여 리렌더링
  const setTodoList = useSetRecoilState(todoListState);

  const handleChange = (e) => setInputValue(e.target.value);

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      const newTodo = await createTodo(inputValue);
      setTodoList((oldTodoList) => [newTodo, ...oldTodoList]);

      // Item add 후 input value 초기화
      setInputValue("");

      // AddModal의 props로 전달받은 handleClose()를 호출하여 modal close
      onClose();
    }
  };

  const addItem = async () => {
    setInputValue("");
    const newTodo = await createTodo(inputValue);
    setTodoList((oldTodoList) => [newTodo, ...oldTodoList]);

    onClose();
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={() => addItem(inputValue)}>추가</button>
      </div>
    </>
  );
}

export default TodoItemCreator;
