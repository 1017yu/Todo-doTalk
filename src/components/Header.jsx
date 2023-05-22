import React from "react";
import styled from "styled-components";
import colors from "~/src/styles/colors";
import { formattedTime } from "~/src/lib/dateUtils";
import { BiWifi } from "react-icons/Bi";
import { GiNetworkBars } from "react-icons/Gi";
import { BsBatteryHalf } from "react-icons/Bs";
import { AiOutlineLeft, AiOutlineUser } from "react-icons/Ai";
import { todoListState } from "~/src/states/todoAtoms";
import { useRecoilState } from "recoil";
import DelAllTodo from "../hooks/DelAllTodo";

function Header() {
  const [todoList] = useRecoilState(todoListState);
  const [delAllTodo] = DelAllTodo();

  const tasks = todoList.filter((todo) => !todo.done).length;

  // 선택 항목 일괄 삭제 전, window.confirm을 통해 삭제 여부를 묻는다.
  const handleDelAll = () => {
    const confirm = window.confirm("⚠️ 정말 선택된 할 일을 삭제하시겠습니까?");

    // 확인 = true 이므로, 선택된 항목 삭제
    if (confirm) {
      delAllTodo();
    }
  };

  return (
    <StyledHeader>
      <Div>
        {formattedTime(new Date())}
        <IconsWrapper>
          <GiNetworkBars />
          <BiWifi />
          <BsBatteryHalf />
        </IconsWrapper>
      </Div>
      <Div>
        <LeftArrowWrapper>
          <AiOutlineLeft className="leftArrow-Icon" />
          <Span>{`${tasks} tasks`}</Span>
        </LeftArrowWrapper>
        <User href="https://github.com/1017yu" target="_blank">
          <Circle>
            <AiOutlineUser className="user-Icon" />
          </Circle>
          Kled
        </User>
        <AllDeleteButton onClick={handleDelAll}>
          <Span>선택 삭제</Span>
        </AllDeleteButton>
      </Div>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  position: relative;
  padding: 1rem 3rem;
  background-color: ${colors.gray[0]};
  border-radius: 1.5rem 1.5rem 0 0;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const AllDeleteButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 46px;
  cursor: pointer;
  border: none;
  background-color: inherit;
`;

const LeftArrowWrapper = styled.div`
  position: absolute;
  display: flex;
  left: 1rem;
  top: 46px;
  .leftArrow-Icon {
    font-size: 2rem;
    color: ${colors.blue[5]};
  }
`;

const Span = styled.span`
  display: flex;
  background-color: ${colors.blue[5]};
  border-radius: 1rem;
  align-items: center;
  text-align: left;
  padding: 0.4rem;
  color: white;
`;

const User = styled.a`
  .user-Icon {
    font-size: 2rem;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: auto;
`;

const Circle = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray[1]};
`;

export default Header;
