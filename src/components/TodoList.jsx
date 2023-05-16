//  Todo-item을 나열하는 TodoList 컴포넌트
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import TodoItem from "~/src/components/TodoItem";
import { todoListState } from "~/src/states/todoAtoms";
import AddModal from "~/src/components/Modal/AddModal";
import colors from "~/src/styles/colors.js";
import { getTodo } from "../lib";

function TodoList() {
  // `useRecoilState` -> `todoListState` atom 참조
  const [todoList] = useRecoilState(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  useEffect(() => {
    const fetchTodoList = async () => {
      // GET 요청,
      const todoListData = await getTodo();
      // setTodoList를 통해 GET 요청으로 반환된 todoListData로 todoListState atom 업데이트
      setTodoList(todoListData);
    };

    fetchTodoList();
  }, []);

  // spread - reverse를 통해, 오래된 순부터 최신 순으로 map
  return (
    <StyledMain>
      <StyledSection>
        <StyledSpan>2DO 💪🏼 LIST</StyledSpan>
        <AddModal />
      </StyledSection>
      <StyledP>{`${todoList.length} tasks`}</StyledP>
      <StyledDiv>
        <StyledUl>
          {[...todoList].map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
          ))}
        </StyledUl>
      </StyledDiv>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  padding: 3rem;
  text-align: center;
  border-radius: 1.5rem;
  background-color: white;
`;

const StyledSection = styled.section`
  display: flex;
`;

const StyledSpan = styled.span`
  display: flex;
  font-size: 2.5rem;
  margin-right: auto;
`;

const StyledP = styled.p`
  text-align: left;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${colors.blue[4]};
`;
const StyledDiv = styled.div``;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
`;

export default TodoList;
