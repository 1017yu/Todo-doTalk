import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { useSetRecoilState, useRecoilState } from "recoil";
import { todoListState } from "~/src/states/todoAtoms";
import { createTodo, getTodo } from "~/src/lib";
import { FaArrowCircleUp } from "react-icons/Fa";

function TodoInput({ method, keyPress }) {
  // input 상태 관리
  const [inputValue, setInputValue] = useState("");
  // todoListState atom을 setTodoList 변수에 할당, List 추가 시 atom(recoil)값을 업데이트하여 리렌더링
  const setTodoList = useSetRecoilState(todoListState);

  const updateTodoList = async () => {
    const todoListData = await getTodo();
    // const sortedTodoList = todoListData.map((todoItem, index) => ({
    //   ...todoItem,
    //   order: index,
    // }));

    setTodoList(todoListData);
  };

  const handleChange = (e) => setInputValue(e.target.value);

  return (
    <>
      <Input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={keyPress}
        placeholder="할일 입력"
      />
      <FaArrowCircleUp
        className="submitButton-Icon"
        type="submit"
        onClick={method}
      />
    </>
  );
}

const Input = styled.input`
  border-radius: 10px;
  border-color: ${colors.gray[0]};
  height: 40px;
  width: 22rem;
`;

export default TodoInput;
