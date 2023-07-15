import { styled } from "styled-components";
import { logo, sun, moon } from "../assets/index";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <div className="switcher">
        <img src={sun} alt="Sun Icon" />
        <div className="button">
          <div className="circle"></div>
        </div>
        <img src={moon} alt="Moon Icon" />
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 375px;
  padding: 32px 24px;
  justify-content: space-between;

  .switcher {
    display: flex;
    align-items: center;
    gap: 16px;

    .button {
      width: 48px;
      height: 24px;
      background-color: white;
      border-radius: 12px;
      display: flex;
      padding: 0 5px;
      align-items: center;

      .circle {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: #5964e0;
      }
    }
  }
`;
