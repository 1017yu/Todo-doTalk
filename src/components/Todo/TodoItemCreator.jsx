// Todo-Item을 추가할 수 있도록 input과 button으로 구성
// createTodo(inputValue)를 통해, todoListState atom 값을 업데이트하여 새로운 Todo-Item을 추가
import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import { BsFillCameraFill } from "react-icons/Bs";
import { IoIosAppstore } from "react-icons/Io";
import TodoInput from "~/src/components/Todo/TodoInput";
import { useRecoilState } from "recoil";
import { todoListState } from "~/src/states/todoAtoms";

function TodoItemCreator() {
  const [todoList] = useRecoilState(todoListState);

  const addItem = async () => {
    const newTodo = await createTodo({
      title: inputValue,
      order: todoList.length,
    });
    updateTodoList(newTodo);
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
        <TodoInput
          method={() => addItem(inputValue)}
          keyPress={handleKeyPress}
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

export default TodoItemCreator;
