import styled from "styled-components";
import { bgFilter, searchIconMOB } from "../assets";

const Filter = () => {
  return (
    <FilterContainer>
      <input type="text" placeholder="Filter by title..." />
      <div>
        <img src={bgFilter} alt="Filter Icon" />
        <img src={searchIconMOB} alt="" />
      </div>
    </FilterContainer>
  );
};

export default Filter;

const FilterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  max-width: 375px;
  align-items: center;
  position: relative;
  justify-content: center;

  input {
    width: 100%;
    height: 100%;
    max-width: 327px;
    border-radius: 6px;
    border: none;
    padding-left: 24px;
  }

  ::placeholder {
    color: #19202d;
    font-family: Kumbh Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    right: 40px;
  }
`;
