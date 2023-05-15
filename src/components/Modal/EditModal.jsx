// BiEdit Icon 클릭 시, Edit Modal이 open, input의 value 값으로
// todoListState를 업데이트하여 todoItem을 Edit하는 컴포넌트

import React from "react";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "~/src/states/todoAtoms";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BiEdit } from "react-icons/Bi";
import { editTodo } from "~/src/lib";
// import colors from "~/src/styles/colors";

const EditModal = ({ item }) => {
  // input 상태 관리
  const [inputValue, setInputValue] = useState("");

  // todoListState atom을 setTodoList 변수에 할당, 추가 시 todoListState(atom) 값을 업데이트하여 리렌더링
  const setTodoList = useSetRecoilState(todoListState);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // 요청 데이터 타입
  const todo = {
    id: item.id,
    title: inputValue,
    done: item.done,
    order: item.order,
  };

  const handleChange = (e) => setInputValue(e.target.value);

  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      // todo 업데이트
      const editedTodo = await editTodo(todo);

      // useSetRecoilState로 가져온 todoListState(atom)값 업데이트
      setTodoList((oldTodoList) =>
        // id 값이 일치했을 때, Edit할 todo를 Update된 todo로 변경
        oldTodoList.map((todoItem) =>
          todoItem.id === todo.id ? editedTodo : todoItem
        )
      );
      // Item add 후 input value 초기화
      setInputValue("");
      // Modal Close
      handleClose();
    }
  };

  const updateItem = async () => {
    const editedTodo = await editTodo(todo);
    setTodoList((oldTodoList) =>
      oldTodoList.map((todoItem) =>
        todoItem.id === todo.id ? editedTodo : todoItem
      )
    );
    // Item add 후 input value 초기화
    setInputValue("");
    // Modal Close
    handleClose();
  };

  return (
    <>
      {/* 아이콘 클릭 시, Modal Open */}
      <BiEdit onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={updateItem}>수정</button>
        </StyledBox>
      </Modal>
    </>
  );
};

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border: 2px solid #000;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

export default EditModal;
