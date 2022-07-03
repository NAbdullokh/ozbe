import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: ${(props) => (props.active >= 3 ? "wrap" : "nowrap")};
`;

export const Card = styled.div`
  width: 370px;
  height: 400px;
  margin: 15px;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 650px) {
    height: 320px;
  }

  @media (max-width: 460px) {
    width: 90%;
    height: 250px;
  }
`;

Card.Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

Card.Title = styled.p`
  text-align: center;
  font-size: 17px;
  font-weight: 400;
`;

Card.Price = styled.p`
  line-height: 4px;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
`;

export const Buyed = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Buyed.Title = styled.p`
  font-size: 25px;
  color: #496bd5;
  @media (max-width: 460px) {
    font-size: 15px;
  }
`;
