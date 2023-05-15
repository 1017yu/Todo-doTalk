//  Todo-item을 나열하는 TodoList 컴포넌트
import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import TodoItem from "~/src/components/TodoItem";
import { todoListState } from "~/src/states/todoAtoms";
import GetTodoHook from "~/src/hooks/GetTodoHook";
import AddModal from "~/src/components/Modal/AddModal";

function TodoList() {
  GetTodoHook();
  // `useRecoilState` -> `todoListState` atom 참조
  const [todoList] = useRecoilState(todoListState);

  // spread - reverse를 통해, 오래된 순부터 최신 순으로 map
  return (
    <StyledMain>
      <StyledSection>
        <StyledSpan>2DO 💪🏼 LIST</StyledSpan>
        <AddModal />
      </StyledSection>
      <StyledDiv>
        <StyledUl>
          {[...todoList].reverse().map((todoItem) => (
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
  width: 50vw;
  margin: auto;
  padding: 2rem;
  text-align: center;
  border-radius: 1.5rem;
  background-color: white;
`;

const StyledSection = styled.section`
  display: flex;
`;

const StyledSpan = styled.span`
  display: flex;
  font-size: 3rem;
  margin-right: auto;
`;

const StyledDiv = styled.div``;

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
`;

export default TodoList;
