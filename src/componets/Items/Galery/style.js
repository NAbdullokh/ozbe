import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  margin: auto;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

Container.Title = styled.p`
  font-size: 28px;
  cursor: pointer;
`;

export const ImgWrapper = styled.div`
  display: flex;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  width: 100%;
`;

ImgWrapper.Img = styled.img`
  width: 394px;
  height: 450px;
  border-radius: 10px;
  margin-right: 20px;
`;
