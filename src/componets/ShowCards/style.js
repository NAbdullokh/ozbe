import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 80px 0px 0px 0px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 440px) {
    padding: 50px 0;
  }
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;
  color: #191919;
  font-family: "Source Sans Pro", "sans-serif";
  @media (max-width: 390px) {
    font-size: 28px;
    line-height: 32px;
    display: flex;
    align-items: center;
    margin: 10px auto;
  }
`;
