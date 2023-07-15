import { styled } from "styled-components";
import { logo, sun, moon } from "../assets/index";

interface Props {
  light: boolean;
  setLight: (light: boolean) => void;
}

const Header = ({ light, setLight }: Props) => {
  const changeTheme = () => {
    setLight(!light);
  };

  return (
    <Container light={light}>
      <img src={logo} alt="Logo" />
      <div className="switcher">
        <img src={sun} alt="Sun Icon" />
        <div onClick={changeTheme} className="button">
          <div className="circle"></div>
        </div>
        <img src={moon} alt="Moon Icon" />
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div<{ light: boolean }>`
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
      position: relative;

      .circle {
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: #5964e0;
        position: absolute;
        left: ${(props) => (props.light ? "5px" : "30px")};
        transition: all 0.2s;
      }
    }
  }
`;
