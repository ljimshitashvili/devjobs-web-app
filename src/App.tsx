import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { Filter, Header, List } from "./Components";
import { bgMobileHeader } from "./assets/index";
import { useState } from "react";
import { DevJob } from "./types";

function App() {
  const [data, setData] = useState<DevJob[] | []>([]);

  return (
    <Container>
      <Header />
      <Filter />
      <List data={data} setData={setData} />
      <GlobalStyle />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  align-items: center;
  background-image: url(${bgMobileHeader});
  background-repeat: no-repeat;
  background-position-x: center;
  background-size: 100% auto;
  background-color: #f4f6f8;
  padding-bottom: 50px;
`;
