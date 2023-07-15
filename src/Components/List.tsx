import { styled } from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { DevJob } from "../types";

interface Props {
  data: DevJob[] | [];
  setData: (data: DevJob[]) => void;
}

const List = ({ data, setData }: Props) => {
  const link = "http://localhost:3000/api/get/6/1";

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(link);
      const data = response.data;
      setData(data);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <Container>
      {data.map((data, index) => (
        <div className="card" key={index}>
          <Logo bgColor={data.logoBackground}>
            <img src={data.logo} alt="Company Logo" />
          </Logo>
          <div className="postedAtAndContract">
            <h1 className="postedAt">{data.postedAt}</h1>
            <div className="dot"></div>
            <h1 className="contract">{data.contract}</h1>
          </div>
          <h1 className="position">{data.position}</h1>
          <h1 className="company">{data.company}</h1>
          <h1 className="location">{data.location}</h1>
        </div>
      ))}
    </Container>
  );
};

export default List;

const Logo = styled.div<{ bgColor: string }>`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -25px;
  left: 32px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 327px;
  gap: 49px;
  padding-top: 57px;

  .card {
    width: 100%;
    background-color: #fff;
    padding: 49px 32px 36px 32px;
    position: relative;
    border-radius: 6px;

    .postedAtAndContract {
      display: flex;
      gap: 12px;
      align-items: center;
      margin-bottom: 16px;

      .dot {
        background-color: #6e8098;
        width: 4px;
        height: 4px;
        border-radius: 50%;
      }

      .postedAt,
      .contract {
        color: #6e8098;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
    }

    .position {
      color: #19202d;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      margin-bottom: 17px;
    }

    .company {
      color: #6e8098;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 44px;
    }

    .location {
      color: #5964e0;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`;
