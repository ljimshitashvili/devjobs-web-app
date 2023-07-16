import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { Filter, Header, List } from "./Components";
import { bgMobileHeader, locationIcon } from "./assets/index";
import { useState, useEffect } from "react";
import { DevJob } from "./types";

function App() {
  const [data, setData] = useState<DevJob[] | []>([]);
  const [light, setLight] = useState<boolean>(true);
  const [filterString, setString] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [window, setWindow] = useState<boolean>(false);

  useEffect(() => {
    if (window) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [window]);

  const switchFilter = () => {
    setWindow(!window);
  };

  return (
    <Container>
      <Overlay window={window} onClick={switchFilter} />
      <Window window={window}>
        <div>
          <img src={locationIcon} alt="Location Icon" />
          <input type="text" placeholder="Filter by location..." />
        </div>
        <hr />
        <label>
          <input type="checkbox" /> Full Time Only
        </label>
        <button>Search</button>
      </Window>
      <GlobalStyle />
      <Header light={light} setLight={setLight} />
      <Filter setString={setString} switchFilter={switchFilter} />
      <List
        data={data}
        setData={setData}
        filterString={filterString}
        page={page}
        setPage={setPage}
      />
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

const Overlay = styled.div<{ window: boolean }>`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: black;
  opacity: 0.2;
  z-index: 1;
  display: ${(p) => (p.window ? "flex" : "none")};
`;

const Window = styled.form<{ window: boolean }>`
  width: 100%;
  max-width: 327px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;
  display: ${(p) => (p.window ? "flex" : "none")};
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  align-items: start;
  div {
    display: flex;
    align-items: center;
    gap: 16px;
    width: 100%;
    height: 24px;

    input {
      height: 100%;
      width: 100%;
      border: none;
    }
  }

  hr {
    width: 327px;
    border: none;
    height: 1px;
    opacity: 0.20000000298023224;
    background: #6e8098;
    margin-left: -24px;
  }

  label {
    display: flex;
    align-items: center;
    gap: 16px;
    color: #19202d;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

    input {
      width: 24px;
      height: 24px;
      border-radius: 3px;
    }
  }

  button {
    width: 100%;
    height: 48px;
    border-radius: 5px;
    background: #5964e0;
    color: #fff;
    text-align: center;
    font-size: 16px;
    border: none;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
