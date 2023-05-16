// Todo 항목을 나타내는 TodoItem 컴포넌트
// 삭제와 수정 기능이 있고, 수정을 위한 EditModal 컴포넌트 사용
import React, { useState } from "react";
import styled from "styled-components";
import { MdDelete } from "react-icons/Md";
import { editTodo } from "~/src/lib";
import { todoListState } from "~/src/states/todoAtoms";
import { useSetRecoilState } from "recoil";
import EditModal from "~/src/components/Modal/EditModal";
import DelTodoHook from "~/src/hooks/DelTodoHook";
// import formattedTime from "../lib/formattedTime";

function TodoItem({ item }) {
  // `todoListState` atom 업데이트
  const setTodoList = useSetRecoilState(todoListState);

  const [isChecked, setIsChecked] = useState(false);
  const [delTodo] = DelTodoHook({ item });

  // const updatedDate = formattedTime(updatedAt);

  // 요청 데이터 타입
  const todo = {
    id: item.id,
    title: item.title,
    done: !isChecked,
    order: item.order,
  };

  // Item 삭제 구현을 위한 async function
  // const deleteItem = async () => {
  //   // onClick 메소드를 통해 항목 삭제 요청
  //   await deleteTodo(item.id);

  //   // recoil atom에서 해당 항목을 제외하는 필터링 (atom 업데이트가 진행된다.)
  //   setTodoList((oldTodoList) =>
  //     oldTodoList.filter((todoItem) => todoItem.id !== item.id)
  //   );
  // };

  const handleChange = async (e) => {
    setIsChecked(e.target.checked);

    const data = await editTodo(todo);
    setTodoList((oldTodoList) =>
      oldTodoList.map((item) => (item.id === todo.id ? data : item))
    );
  };

  return (
    <StyledLi>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      {item.title}
      <StyledButton>
        <StyledDelete onClick={() => delTodo()} />
        <EditModal item={item} />
      </StyledButton>
    </StyledLi>
  );
}

const StyledLi = styled.li`
  display: flex;
  width: 100%;
  margin-top: 20px;
  font-size: 1.3rem;
`;

const StyledButton = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
  margin-left: auto;
`;

const StyledDelete = styled(MdDelete)`
  font-size: 1.5rem;
`;

export default TodoItem;
