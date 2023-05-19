// Todo-Item을 추가할 수 있도록 input과 button으로 구성
// createTodo(inputValue)를 통해, todoListState atom 값을 업데이트하여 새로운 Todo-Item을 추가
import React, { useState } from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { BsFillCameraFill } from "react-icons/Bs";
import { IoIosAppstore } from "react-icons/Io";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoListState } from "~/src/states/todoAtoms";
import { FaArrowCircleUp } from "react-icons/Fa";
import { createTodo } from "~/src/lib";

function TodoItemCreator() {
  const setTodoList = useSetRecoilState(todoListState);
  const [todoList] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);

  const addItem = async () => {
    const newTodo = await createTodo({
      title: inputValue,
      order: todoList.length,
    });
    setTodoList([...todoList, newTodo]);
    setInputValue("");
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <>
      <Div>
        <BsFillCameraFill className="camera-Icon gray-Icon" />
        <IoIosAppstore className="appStore-Icon gray-Icon" />
        <Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          placeholder="할일 입력"
        />
        <FaArrowCircleUp
          className="submitButton-Icon"
          type="submit"
          onClick={addItem}
        />
      </Div>
    </>
  );
}

const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  .gray-Icon {
    color: ${colors.gray[0]};
    font-size: 2.5rem;
  }

  .submitButton-Icon {
    position: absolute;
    right: 0;
    cursor: pointer;
    font-size: 2rem;
    color: ${colors.blue[5]};
    right: 0.3rem;
  }
`;
const Input = styled.input`
  border-radius: 10px;
  border-color: ${colors.gray[0]};
  height: 40px;
  width: 22rem;
`;

export default TodoItemCreator;
