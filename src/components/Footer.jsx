import React from "react";
import styled from "styled-components";
import TodoItemCreator from "~/src/components/Main/TodoItemCreator";

function Footer() {
  return (
    <StyledFooter>
      <TodoItemCreator />
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 1rem;
`;
export default Footer;
