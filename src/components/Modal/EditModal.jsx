// BiEdit Icon 클릭 시, Edit Modal이 open, input의 value 값으로
// todoListState를 업데이트하여 todoItem을 Edit하는 컴포넌트
import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "~/src/states/todoAtoms";
import { formattedDate } from "~/src/lib/dateUtils";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BiEdit } from "react-icons/Bi";
import { editTodo, getTodo, reorderTodo } from "~/src/lib";
import { BsFillCameraFill } from "react-icons/Bs";
import { FaArrowCircleUp } from "react-icons/Fa";
import { IoIosAppstore } from "react-icons/Io";
import colors from "~/src/styles/colors";

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
      // Edit 후 onClose를 호출하여 atom 업데이트
      updateItem();
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

    // reorder 통신으로 order값 정렬
    const ids = [];
    setTodoList((oldTodoList) => {
      oldTodoList.forEach((item) => ids.push(item.id));
      return oldTodoList;
    });
    await reorderTodo(ids);

    getTodo();
  };

  return (
    <>
      {/* 아이콘 클릭 시, Modal Open */}
      <EditIcon onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <StyledDiv>
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
                onClick={updateItem}
              />
            </Div>
          </StyledDiv>
          <span>생성일: {formattedDate(item.createdAt)}</span>
          <span>수정일: {formattedDate(item.updatedAt)}</span>
        </StyledBox>
      </Modal>
    </>
  );
};

const EditIcon = styled(BiEdit)`
  font-size: 1.3rem;
  color: ${colors.gray[1]};
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 1rem;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  gap: 1rem;
`;

const StyledDiv = styled.div`
  display: block;
`;

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

export default EditModal;
