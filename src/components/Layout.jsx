import styled from "styled-components";

function Layout({ children }) {
  return <StyledLayout>{children}</StyledLayout>;
}

const StyledLayout = styled.div`
  border: 0.4rem solid black;
  margin: auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  text-align: center;
  border-radius: 2rem;
  background-color: white;
`;

export default Layout;
