import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 1400px) {
    justify-content: center;
  }
`;

Container.Title = styled.h1`
  padding-top: 20px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  align-items: center;
  justify-content: center;
  @media (max-width: 1400px) {
    flex-wrap: wrap;
  }
`;
