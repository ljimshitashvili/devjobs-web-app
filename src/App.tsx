import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { Filter } from "./Components";

function App() {
  return (
    <Container>
      <Filter />
      <GlobalStyle />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
