import styled from "styled-components";

function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  margin: auto;
  padding-top: 100px;
`;

export default Layout;
