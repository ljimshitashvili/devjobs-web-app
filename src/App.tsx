import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { Filter, Header } from "./Components";
import { bgMobileHeader } from "./assets";

function App() {
  return (
    <Container>
      <Header />
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
  background-image: url(${bgMobileHeader});
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 100% auto;
  background-color: #f4f6f8;
`;
