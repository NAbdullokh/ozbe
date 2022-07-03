import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 20px 80px;
  display: flex;
  background-color: #fcfcfc;
  flex-wrap: wrap;
  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

export const Box1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0px 10px 10px 10px;
`;

Box1.Img = styled.img`
  width: 100px;
  margin-bottom: 10px;
`;

export const IconWrapper = styled.div`
  display: flex;
`;
IconWrapper.Icons = styled.div`
  margin: 0 10px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
`;

export const Box2 = styled.div`
  flex: 1;
  padding: 20px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

Box2.Items = styled.p`
  color: black;
  :hover {
    border-bottom: 1px solid;
  }
`;

export const Box3 = styled.div`
  flex: 1;
  padding: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

Box3.Number = styled.a`
  color: #2165d5;
  font-size: 25px;
  @media (max-width: 840px) {
    font-size: 16px;
  }
`;
