// Todo-Item을 추가할 수 있도록 input과 button으로 구성
// 입력값을 바탕으로 새로운 Todo-Item을 생성하여 todoListState atom 값을 업데이트
import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import colors from "../../styles/colors";
import { todoListState } from "~/src/states/todoAtoms";
import { FaArrowCircleUp } from "react-icons/fa";
import { createTodo, getTodo } from "~/src/lib";

function TodoItemCreator() {
  const setTodoList = useSetRecoilState(todoListState);
  const [todoList] = useRecoilState(todoListState);
  const [inputValue, setInputValue] = useState("");

  // input의 변화를 inputValue state에 저장
  const handleChange = (e) => setInputValue(e.target.value);

  // Todo-Item 생성 및 atom 업데이트 함수 (POST)
  const addItem = async () => {
    // 빈 값을 입력하였을 때, alert
    if (!inputValue.trim()) return window.alert("⌨️ 할 일을 입력하세요!");
    // POST 요청 데이터 (title: 입력값, order: 현재 atom 내 배열의 길이)
    const newTodo = await createTodo({
      title: inputValue,
      order: todoList.length,
    });
    setTodoList([...todoList, newTodo]);

    // 입력 창 초기화
    setInputValue("");
    // GET 통신
    getTodo();
  };

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  };

  return (
    <>
      <Div>
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
  border-radius: 1rem;
  border-color: ${colors.gray[0]};
  height: 40px;
  width: 22rem;
  padding-left: 0.5rem;
`;

export default TodoItemCreator;
