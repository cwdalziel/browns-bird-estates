import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  background-color: #e9e9e9;
  border-radius: 5px;
  margin-top: 10px;
  ${mobile({flexDirection: "column", padding: "10px" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
  object-fit: cover;
  border-radius: 5px;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  margin: 0px 0px 0px 50px;
  padding: 0px 50px;
  background-color: white;
  border-radius: 5px;
  ${mobile({ margin: "0px", marginTop: "10px", padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  ${mobile({ marginTop: "0px" })}
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #d3ac8b;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  font-size: 1.2rem;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #d3ac8b;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  border-radius: 10px;
  &:hover{
    background-color: #ececec;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.redd.it/gk45grax5w061.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Gangster Sponge</Title>
          <Desc>
            dwad h dhwhu ahu huiduihw aiuhh uiahuwi hud hh hui hduwlahd liuaw
            hdu hawhlaiw duaw uilhluh dawhdh uilhdawudh awu dhil
            dwbyhdagdywkgdkagw dgy ygukag uykwdgawgyuk dgykuawd gygyudaw gyuak
            gwu dygkawdg gawy gykadw ygukawd gyukdawgkyu
          </Desc>
          <Price>$ 20</Price>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
