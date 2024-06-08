import React, { useState } from "react";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  margin-top: 10px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  visibility: ${(props) => {
    if (
      (props.direction === "right" && props.slideIndex === 0) ||
      (props.direction === "left" && props.slideIndex === 1)
    ) {
      return "visible";
    } else {
      return "hidden";
    }
  }};
  opacity: ${(props) => {
    if (
      (props.direction === "right" && props.slideIndex === 0) ||
      (props.direction === "left" && props.slideIndex === 1)
    ) {
      return "1";
    } else {
      return "0";
    }
  }};
  transition: all 1s ease;
  margin: auto;
  cursor: pointer;
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transition: all 1s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Image = styled.img`
  width: 100vw;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin: 0;
  color: white;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 500px;
  background-color: white;
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = () => {
    setSlideIndex(slideIndex === 0 ? 1 : 0);
  };

  return (
    <Container>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <Image src={item.img} />
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow
        slideIndex={slideIndex}
        direction="left"
        onClick={() => handleClick()}
      >
        <ArrowBackIosNewOutlined />
      </Arrow>
      <Arrow
        slideIndex={slideIndex}
        direction="right"
        onClick={() => handleClick()}
      >
        <ArrowForwardIosOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
