import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataInfo } from "../../context";
import { Products } from "../../mock/products";
import { Box1, Box2, Container, Description, Wrapper } from "./style";

export const Generic = ({ category }) => {
  const { id } = useParams();
  const [data, setData] = useContext(DataInfo);

  const findedProduct = Products[category].find((product) => product.id == id);
  //
  const [title, setTitle] = useState(findedProduct.title);
  const [img, setImg] = useState(findedProduct.img);
  const [price, setPrice] = useState(findedProduct.price);
  //

  const navigate = useNavigate();

  const getSave = () => {
    const newData = [
      ...data,
      {
        id: data.length + 1,
        title: title,
        img: img,
        price: price,
      },
    ];
    alert("Товар добавлен в корзину");

    setData(newData);
    localStorage.setItem('cart', newData)

    navigate("/cart");
  };
  console.log(data);
  return (
    <Wrapper>
      <Container>
        <Box1>
          <Box1.Img src={findedProduct.img} alt={findedProduct.categoryPath} />
        </Box1>
        <Box2>
          <Box2.Title>{findedProduct.title}</Box2.Title>
          <Box2.Price>{findedProduct.price} сум</Box2.Price>
          <Description>
            Унисекс шорты с вышивкой «Ozbе planet». Доступны в коричневом цвете.
            Материал: микровельвет, приятный материал. Доставка по всему
            Узбекистану 25.000 сум. Количество ограничено.
          </Description>
          <Box2.OverSize>Все размеры стандарт оверсайз.</Box2.OverSize>
          <Box2.Btn>
            <Box2.Btn onClick={getSave}>Добавить в корзину</Box2.Btn>
          </Box2.Btn>
        </Box2>
      </Container>
    </Wrapper>
  );
};

export default Generic;
