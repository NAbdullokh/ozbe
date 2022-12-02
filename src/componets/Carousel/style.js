import styled from "styled-components";

export const Container = styled.div`
  user-select: none;
  padding-top: 50px;
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 90%;
  height: 80vh;
  position: relative;
  @media (max-width: 560px) {
    height: 60vh;
  }
`;

export const Img = styled.img`
  margin: auto;
  width: 90%;
  height: 80vh;
`;

export const Text = styled.p`
  position: absolute;
  top: 4%;
  left: 8%;
  color: white;
  font-size: 25px;
  font-weight: 500;
`;
