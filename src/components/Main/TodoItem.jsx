// Todo 항목을 나타내는 TodoItem 컴포넌트
// 삭제와 수정 기능이 있고, 수정을 위한 EditModal 컴포넌트 사용
import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { MdDelete } from "react-icons/Md";
import { editTodo, getTodo } from "~/src/lib";
import { todoListState } from "~/src/states/todoAtoms";
import { formattedDate } from "../../lib/dateUtils";
import EditModal from "~/src/components/Modal/EditModal";
import DelTodo from "~/src/hooks/DelTodo";
import colors from "~/src/styles/colors";

function TodoItem({ item }) {
  // `todoListState` atom 업데이트
  const setTodoList = useSetRecoilState(todoListState);
  const [delTodo] = DelTodo({ item });

  // 요청 데이터 타입
  const todo = {
    id: item.id,
    title: item.title,
    done: !item.done,
    order: item.order,
  };

  const handleChange = async () => {
    const editedTodo = await editTodo(todo);
    setTodoList((oldTodoList) =>
      oldTodoList.map((todoItem) =>
        todoItem.id === todo.id ? editedTodo : todoItem
      )
    );
    getTodo(editedTodo);
  };

  // const updateTodoList = async () => {
  //   const todoListData = await getTodo();
  //   const sortedTodoList = todoListData.map((todoItem) => ({
  //     ...todoItem,
  //     done: !item.done,
  //   }));

  //   setTodoList(sortedTodoList);
  // };

  return (
    <Li>
      <DateWrapper>{formattedDate(item.createdAt)}</DateWrapper>
      <ItemContainer>
        <ItemLabel checked={item.done}>
          <StyledInput
            type="checkbox"
            checked={item.done}
            onChange={handleChange}
          />
          {item.title}
        </ItemLabel>
        <Button>
          <Delete onClick={() => delTodo()} />
          <EditModal item={item} />
        </Button>
      </ItemContainer>
    </Li>
  );
}

const Li = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  font-size: 1.3rem;
`;

const DateWrapper = styled.div`
  text-align: center;
  font-size: 0.8rem;
  color: ${colors.gray[1]};
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ItemLabel = styled.label`
  display: flex;
  background-color: ${({ checked }) =>
    checked ? colors.green[0] : colors.blue[5]};
  padding: 0.4rem 1rem 0.4rem 0.3rem;
  border-radius: 1rem;
  color: white;
  align-items: center;
  gap: 0.2rem;
`;

const StyledInput = styled.input`
  appearance: none;
  width: 0.9rem;
  height: 0.9rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMi4yNSAxMi4zMjEgNy4yNyA2LjQ5MWMuMTQzLjEyNy4zMjEuMTkuNDk5LjE5LjIwNiAwIC40MS0uMDg0LjU1OS0uMjQ5bDExLjIzLTEyLjUwMWMuMTI5LS4xNDMuMTkyLS4zMjEuMTkyLS41IDAtLjQxOS0uMzM4LS43NS0uNzQ5LS43NS0uMjA2IDAtLjQxMS4wODQtLjU1OS4yNDlsLTEwLjczMSAxMS45NDUtNi43MTEtNS45OTRjLS4xNDQtLjEyNy0uMzIyLS4xOS0uNS0uMTktLjQxNyAwLS43NS4zMzYtLjc1Ljc0OSAwIC4yMDYuMDg0LjQxMi4yNS41NiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
  }
`;

const Button = styled.button`
  background-color: white;
  border: none;
  cursor: pointer;
`;

const Delete = styled(MdDelete)`
  font-size: 1.5rem;
`;

export default TodoItem;
