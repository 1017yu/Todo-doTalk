// TodoList 값을 표기, 변경, 삭제 Component
import React from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/Md";
import { BiEdit } from "react-icons/Bi";
import { deleteTodo } from "~/src/lib";
import { todoListState } from "~/src/states/todoAtoms";
import { useSetRecoilState } from "recoil";

function TodoItem({ item }) {
  const { done, title, createdAt } = item;

  // `todoListState` atom 업데이트
  const setTodoList = useSetRecoilState(todoListState);

  // 가독성 증진을 위해 연-월-일만 가공하여 사용
  const createdDate = createdAt.substring(0, 10);

  const deleteItem = async () => {
    // onClick 메소드를 통해 항목 삭제 요청
    await deleteTodo(item.id);

    // recoil atom에서 해당 항목을 제외하는 필터링 (atom 업데이트가 진행된다.)
    setTodoList((oldTodoList) =>
      oldTodoList.filter((todoItem) => todoItem.id !== item.id)
    );
  };

  return (
    <li>
      <input type="checkbox" checked={done} readOnly />
      {title} {createdDate}
      <StyleButton onClick={deleteItem}>
        <StyleDelete />
        <BiEdit />
      </StyleButton>
    </li>
  );
}

const StyleButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

const StyleDelete = styled(MdDelete)`
  font-size: 1.5rem;
`;

export default TodoItem;
