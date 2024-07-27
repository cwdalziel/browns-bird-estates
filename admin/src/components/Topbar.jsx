import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopLeft = styled.div``;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-right: 10px;
  color: #555;
`;

const IconBadge = styled.span`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -5px;
  right: 0px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export default function Topbar() {
  return (
    <Container>
      <Wrapper>
        <TopLeft>
          <Logo>Browns Bird Estates Admin</Logo>
        </TopLeft>
        <TopRight>
          <IconContainer>
            <NotificationsNone />
            <IconBadge>2</IconBadge>
          </IconContainer>
          <IconContainer>
            <Language />
            <IconBadge>2</IconBadge>
          </IconContainer>
          <IconContainer>
            <Settings />
          </IconContainer>
          <Avatar
            src="https://scontent-sjc3-1.xx.fbcdn.net/v/t39.30808-6/448590429_1002573251874317_5672547289734110556_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=ETG8t5sO-rIQ7kNvgHPGNGq&_nc_ht=scontent-sjc3-1.xx&oh=00_AYBXudDE5dRT6qTtxJKJT9W85BRNLsJ_tbCPoc4-_Ncqyw&oe=66A7390C"
            alt=""
          />
        </TopRight>
      </Wrapper>
    </Container>
  );
}
