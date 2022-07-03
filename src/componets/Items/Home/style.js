import styled from "styled-components";

export const Wrapper = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Img = styled.img`
  margin: auto;
  width: 160px;
  @media (max-width: 450px) {
    width: 100px;
    padding: 4px 0;
  }
`;
