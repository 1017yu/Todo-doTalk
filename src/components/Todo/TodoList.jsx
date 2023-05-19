//  Todo-item을 나열하는 TodoList 컴포넌트
import React, { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import TodoItem from "~/src/components/Todo/TodoItem";
import { todoListState } from "~/src/states/todoAtoms";
import { getTodo } from "../../lib";

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
    <Main>
      <Section>
        <Span>2DO 💪🏼 LIST</Span>
        {/* <AddModal /> */}
      </Section>
      <Div>
        <Ul>
          {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
          ))}
        </Ul>
      </Div>
    </Main>
  );
}

const Main = styled.main`
  padding: 1rem;
`;

const Section = styled.section`
  display: flex;
`;

const Span = styled.span`
  display: flex;
  font-size: 2.5rem;
  margin-right: auto;
`;

const Div = styled.div``;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
`;

export default TodoList;
