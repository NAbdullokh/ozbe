import styled from "styled-components";

export const Wrapper = styled.div`
  width: 70%;
  height: 800px;
  margin: 100px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: #ffffff;
  border-radius: 24px;
  @media (max-width: 930px) {
    flex-direction: column;
  } ;
`;

export const Box1 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

Box1.Img = styled.img`
  width: 100%;
  height: 800px;
  border-radius: 15px;
  @media (max-width: 930px) {
    width: 100%;
    height: 700px;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 400px;
  }
`;

export const Box2 = styled.div`
  padding-left: 20px;
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 930px) {
    margin-top: 10px;
    padding: 0;
  }
`;

Box2.Title = styled.p`
  font-size: 1.25rem;
  font-weight: 400;
  @media (max-width: 420px) {
    font-size: 1rem;
  }
`;

Box2.Price = styled.p`
  line-height: 5px;
  font-size: 16px;
`;

export const Description = styled.div`
  margin-top: 20px;
  line-height: 30px;
  color: gray;
  width: 100%;
  font-size: 16px;
  padding-right: 80px;
  @media (max-width: 600px) {
    font-size: 12px;
    padding: 0;
  }
`;

Box2.OverSize = styled.p`
  color: red;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 30px;
  padding-top: 1rem;
`;

Box2.Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  color: #2165d5;
  width: 170px;
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
