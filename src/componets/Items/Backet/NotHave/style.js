import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  padding-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Gif = styled.img`
  width: 200px;
  height: 200px;
`;

export const Empty = styled.h1`
  font-weight: 500;
  margin-top: 20px;
  line-height: 1.2;
`;

export const Btn = styled.button`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #2165d5;
  width: 120px;
  height: 40px;
  outline: none;
  border: 1px solid #2165d5;
  cursor: pointer;
  user-select: none;
  font-size: 16px;
  background-color: white;
  transition: 0.5s;
  :hover {
    color: white;
    background-color: #2165d5;
  }
`;
