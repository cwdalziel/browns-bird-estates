import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "10px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  padding: 10px;
  margin-left: 20px;
  ${mobile({ margin: "5px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [sort, setSort] = useState("newest");

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{category}</Title>
      <FilterContainer>
        {/* <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              {" "}
              Color{" "}
            </Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              {" "}
              Size{" "}
            </Option>
            <Option>xs</Option>
            <Option>s</Option>
            <Option>m</Option>
            <Option>l</Option>
          </Select>
        </Filter> */}
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest"> Newest </Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} sort={sort}/>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;