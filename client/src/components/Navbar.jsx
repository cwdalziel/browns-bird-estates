import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  height: 100px;
  background-color: #d3ac8b;
  border-radius: 5px;
  margin-top: 10px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  height: 80px;
  padding: 10px 20px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    height: "30px",
    padding: "10px 0px",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: white;
  ${mobile({ padding: "4px", marginLeft: "10px" })}
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
  margin-right: 5px;
  ${mobile({ width: "40px", padding: "0px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 50px;
  ${mobile({ fontSize: "1rem" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 110%;
  ${mobile({
    justifyContent: "flex-start",
    flex: "1.5",
    flexDirection: "column",
    flexWrap: "wrap",
  })}
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "4px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  const navigate = useNavigate();

  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 20 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Browns Bird Estates</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem
            onClick={() => {
              navigate("/cart");
            }}
          >
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
