// TodoList 값을 표기, 변경, 삭제 Component
import React from "react";

function TodoItem({ item }) {
  const { completed, title } = item;
  return (
    <li>
      <input type="checkbox" checked={completed} readOnly />
      {title}
    </li>
  );
}

export default TodoItem;
