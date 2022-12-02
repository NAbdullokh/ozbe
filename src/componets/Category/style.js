import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 80px auto;
  display: flex;
  justify-content: center;
  padding: 15px;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  position: relative;
  width: 600px;
  height: 350px;
  border-radius: 8px;
  margin: 25px;
  @media (max-width: 1490px) {
    width: 550px;
    height: 300px;
  }

  @media (max-width: 650px) {
    width: 300px;
    height: 350px;
  }
`;

Card.Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const TitleWrap = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  /* background: rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2.1px);
  -webkit-backdrop-filter: blur(2.1px);
  border: 1px solid rgba(255, 255, 255, 0.3); */
  display: flex;
  align-items: center;
  justify-content: center;
`;

Card.Title = styled.p`
  color: white;
  font-size: 28px;
  font-weight: 500;
`;
