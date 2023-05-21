//  Todo-item을 나열하는 TodoList 컴포넌트
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import TodoItem from "~/src/components/Main/TodoItem";
import { todoListState } from "~/src/states/todoAtoms";
import { getTodo } from "~/src/lib";
import quotes from "~/src/lib/quotes";

function TodoList() {
  // `useRecoilState` -> `todoListState` atom 참조
  const [todoList] = useRecoilState(todoListState);
  const setTodoList = useSetRecoilState(todoListState);
  const [scrollBottom, setScrollBottom] = useState(0);
  const [quote, setQuote] = useState("");
  const mainRef = useRef();

  // 최초 렌더링
  useEffect(() => {
    const fetchTodoList = async () => {
      // GET 요청,
      const todoListData = await getTodo();
      // setTodoList를 통해 GET 요청으로 반환된 todoListData로 todoListState atom 업데이트
      setTodoList(todoListData);
      setQuote(quotes[Math.floor(Math.random() * 10)]);
    };
    fetchTodoList();
  }, []);

  // TodoList의 가장 아래쪽으로 포커스
  useEffect(() => {
    // Main 참조
    const listEl = mainRef.current;
    // 사용자가 시각적으로 볼 수 없는 영역도 포함한 전체 높이
    const scrollHeight = listEl.scrollHeight;
    // scrollTop에 scrollHeight 값을 대입하여, 리스트의 가장 아래쪽으로 스크롤링
    listEl.scrollTop = scrollHeight;
    // 스크롤 위치값 state 동적 관리
    setScrollBottom(scrollHeight);
  }, [todoList]);

  return (
    <Main ref={mainRef}>
      <Quote>{quote}</Quote>
      <div>
        <Ul>
          {[...todoList].map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
        </Ul>
      </div>
    </Main>
  );
}

const Main = styled.main`
  padding: 1rem;
  height: 30rem;
  overflow-y: scroll;
`;

const Quote = styled.span`
  font-style: italic;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 0;
`;

export default TodoList;
