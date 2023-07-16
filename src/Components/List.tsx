import { styled } from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { DevJob } from "../types";

interface Props {
  data: DevJob[] | [];
  setData: (data: DevJob[]) => void;
  filterString: string;
  page: number;
  setPage: (page: number) => void;
  filterLocation: string;
}

const List = ({
  data,
  setData,
  filterString,
  page,
  setPage,
  filterLocation,
}: Props) => {
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://devjobs-web-app-api-production.up.railway.app/api/get/6/${page}`
      );
      const data = response.data;
      setData(data);
    };
    getData();
  }, [page]);

  useEffect(() => {
    if (filterString === "" && filterLocation === "") {
      setPage(1);
    } else {
      setPage(3);
    }
  }, [filterString, filterLocation]);

  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <Container>
      {data
        .filter((data) =>
          data.position.toLowerCase().includes(filterString.toLowerCase())
        )
        .filter((data) =>
          data.location.toLowerCase().includes(filterLocation.toLowerCase())
        )
        .map((data, index) => (
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
      <More onClick={loadMore}>Load More</More>
    </Container>
  );
};

export default List;

const More = styled.button`
  margin-top: 32px;
  padding: 16px 30px;
  border-radius: 5px;
  background: #5964e0;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

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
