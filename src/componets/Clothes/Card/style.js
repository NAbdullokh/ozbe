import styled from "styled-components";
import { ReactComponent as X } from "../../../assets/x.svg";

export const Wrapper = styled.div`
  width: 400px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 30px;
  flex-wrap: ${(props) => (props.active >= 3 ? "wrap" : "wrap")};
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 650px) {
    height: 350px;
  }

  @media (max-width: 460px) {
    width: 90%;
    height: 300px;
  }
`;

Card.Img = styled.img`
  width: 100%;
  height: 90%;
  border-radius: 8px;
`;

Card.Title = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 17px;
  font-weight: 400;
`;

Card.Price = styled.p`
  line-height: 4px;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
`;

export const Buyed = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Buyed.Title = styled.p`
  font-size: 25px;
  color: #496bd5;
  @media (max-width: 460px) {
    font-size: 15px;
  }
`;

//

export const Wrap = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 888;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(22px);
  transform: scale(${(props) => (props.active == null ? "0" : "1")});
`;
export const ModalDes = styled.div`
  position: relative;
  width: 1070px;
  height: 680px;
  background-color: #ffffff;
  z-index: 999;
  display: flex;
  border-radius: 24px;
  @media (max-width: 650px) {
    flex-direction: column;
    width: 100%;
    height: 100vh;
  }
`;

export const Box1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  @media (max-width: 650px) {
    padding-top: 20px;
  }
`;

Box1.Img = styled.img`
  width: 80%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  @media (max-width: 650px) {
    width: 40%;
  }
`;

export const Box2 = styled.div`
  padding: 30px 20px;
  flex: 1;
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 650px) {
    flex: 2;
  }
  p {
    :active {
      color: red;
    }
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

TitleWrapper.Title = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #191919;
`;

export const Close = styled(X)`
  position: absolute;
  width: 30px;
  top: 20px;
  right: 30px;
  && path {
    fill: black;
  }
  cursor: pointer;
`;
