import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Products from "../components/Products";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";

const Header = styled.h1`
  margin: 10px 0px;
  text-align: center;
`

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Header>Popular Products:</Header>
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
