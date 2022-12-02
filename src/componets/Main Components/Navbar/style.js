import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 25px;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .bar {
    display: none;
    @media (max-width: 650px) {
      display: block;
      font-size: 30px;
    }
  }
`;

Wrapper.Logo = styled.img`
  width: 100px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Items = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 15px;
  color: black;
  @media (max-width: 650px) {
    display: none;
  }
`;
