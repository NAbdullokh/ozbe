import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  margin: auto;
`;

Container.Title = styled.h1``;

export const CardWrapper = styled.div``;

export const Card = styled.div`
  width: 100%;
  height: 120px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  :nth-child(1) {
    display: none;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 12px;
  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

Card.Img = styled.img`
  width: 120px;
  height: 100%;
  padding-right: 10px;
`;

Card.Title = styled.div`
  font-size: 18px;
  @media (max-width: 800px) {
    font-size: 15px;
  }
`;

export const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 10%;
  height: 50px;
  padding-left: 20px;
`;

Count.Counter = styled.h2`
  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

Count.Icon = styled.h1`
  color: #198754;
  cursor: pointer;
  user-select: none;
  margin-left: 5px;
`;

Card.Price = styled.h3``;

export const Footer = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 520px) {
    justify-content: center;
  }
`;

export const Btn1 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #2165d5;
  width: 150px;
  height: 40px;
  outline: none;
  border: 1px solid #2165d5;
  cursor: pointer;
  user-select: none;
  font-size: 16px;
  transition: 0.5s;
  background-color: white;
  margin-right: 20px;
  :hover {
    color: white;
    background-color: #2165d5;
  }
  @media (max-width: 520px) {
    display: none;
  }
`;

export const Btn2 = styled.button`
  display: flex;
  align-items: center;
  background-color: white;

  justify-content: center;
  border-radius: 5px;
  color: #2165d5;
  width: 190px;
  height: 40px;
  outline: none;
  border: 1px solid #2165d5;
  cursor: pointer;
  user-select: none;
  font-size: 16px;
  transition: 0.5s;
  :hover {
    color: white;
    background-color: #2165d5;
  }
`;
