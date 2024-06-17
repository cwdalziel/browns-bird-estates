import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: #588764;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  ${mobile({ fontSize: "12px" })}
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free shipping on Orders Over $50
    </Container>
  )
};

export default Announcement;
