import React from "react";
import styled from "styled-components";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";
import { BiCart } from "react-icons/bi";

const card = () => {
  return (
    <Container>
      <ImageHold>
        <Top>
          <ArrowHold>
            <BsArrowLeftCircleFill color="#A8A7A2" size="30px" />
          </ArrowHold>
          <Btn>New</Btn>
          <Cart>
            <Count>2</Count>
            <BiCart size="25" />
          </Cart>
        </Top>
        <ImageDiv>
          <img src="/assets/couch1.png" />
        </ImageDiv>
        <Icon>
          <FaCircle color="#A8A7A2" size="35" />
          <FaCircle color="#5C5954" size="35" />
          <FaCircle color="#E5913A" size="35" />
          <FaCircle color="#63858C" size="35" />
        </Icon>
        <Icon2>
          <Sub>-</Sub>
          <QTY>4</QTY>
          <Increase>+</Increase>
        </Icon2>
      </ImageHold>
      <DescHolder>
        <Title>Fanbyl</Title>
        <Text>
          Learn how to create a complete responsive multi-page education/school
          website using HTML, CSS, and javascript. This is a step-by-step
          beginner web development project tutorial on how to build a modern
          school or education website using html5, css3, and ES6 javascript.
        </Text>
        <AddToCart>
          <Btn2>+</Btn2>
          <Add>Add To Cart</Add>
          <Price>$1000</Price>
        </AddToCart>
      </DescHolder>
    </Container>
  );
};

export default card;

const Icon2 = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  align-items: center;
`;
const Sub = styled.button`
  height: 35px;
  background-color: #020201;
  width: 35px;
  border-radius: 100%;
  color: white;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Increase = styled.button`
  height: 35px;
  background-color: #020201;
  width: 35px;
  border-radius: 100%;
  color: white;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const QTY = styled.div`
  font-size: 17px;
`;
const Price = styled.div`
  color: white;
  margin-left: 50px;
`;
const Add = styled.div`
  color: white;
  margin-left: 20px;
`;
const Btn2 = styled.button`
  height: 35px;
  width: 35px;
  border: none;
  background-color: white;
  outline: none;
  font-size: 30px;
  border-radius: 5px;
  font-weight: 500;
`;
const Count = styled.div`
  position: absolute;
  width: 15px;
  height: 14px;
  border-radius: 100%;
  background-color: red;
  display: flex;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-left: 13px;
  display: flex;
  top: 0;
  bottom: 0;
  font-size: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  font-weight: 700;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 20px;
  margin-top: 50px;
`;
const AddToCart = styled.div`
  height: 50px;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #132229;
  border-radius: 5px;
  margin: 50px 0;
`;
const Text = styled.div`
  width: 95%;
  margin-top: 30px;
  border-radius: 5px;
  @media (max-width: 1000px) {
    text-align: center;
  }
`;
const Cart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 20px;
  justify-content: space-between;
  /* flex-direction: column; */
  margin-bottom: 18px;
  margin-top: 18px;
`;
const Btn = styled.button`
  background-color: white;

  font-size: 15px;
  text-transform: uppercase;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.6);
`;
const ArrowHold = styled.div``;
const Icon = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImageDiv = styled.div`
  height: 300px;
  width: 90%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  img: {
    object-fit: cover;
    height: 400px;
    width: 70%;
    position: center;
  }
`;
const Top = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-bottom: 20px;
  margin-right: 10px;
`;
const DescHolder = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    width: 90%;
    align-items: center;
  }
`;
const ImageHold = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;
const Container = styled.div`
  /* height: 90%; */
  height: 100%;
  min-height: 80vh;
  width: 90%;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 30px 0;
`;
