import React from "react";
import styled from "styled-components";
import colors from "~/src/styles/colors";
import { formattedTime } from "~/src/lib/dateUtils";
import { BiWifi } from "react-icons/Bi";
import { GiNetworkBars } from "react-icons/Gi";
import { BsBatteryHalf, BsCameraVideo } from "react-icons/Bs";
import { AiOutlineLeft, AiOutlineUser } from "react-icons/Ai";
import { todoListState } from "~/src/states/todoAtoms";
import { useRecoilState } from "recoil";

function Header() {
  const [todoList] = useRecoilState(todoListState);

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
          <Span>{`${todoList.length} tasks`}</Span>
        </LeftArrowWrapper>
        <UserDiv>
          <Circle>
            <AiOutlineUser className="user-Icon" />
          </Circle>
          Kled
        </UserDiv>
        <BsCameraVideo className="videoCamera-Icon" />
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

  .videoCamera-Icon {
    position: absolute;
    right: 1rem;
    top: 46px;
    font-size: 2rem;
  }
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

const UserDiv = styled.div`
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
