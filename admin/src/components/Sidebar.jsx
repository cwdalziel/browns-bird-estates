import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@mui/icons-material";
//import { Link } from "react-router-dom";
import styled from "styled-components";

const Link = styled.div``;

const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, 251, 255);
  position: sticky;
  top: 50px;
`;

const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Menu = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

const List = styled.ul`
  list-style: none;
  padding: 5px;
`;

const ListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background-color: rgb(240, 240, 255);
  }
`;

export default function Sidebar() {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <Link to="/">
              <ListItem style={{ backgroundColor: "#f0f0ff" }}>
                <LineStyle style={{ marginRight: 5, fontSize: 20 }} />
                Home
              </ListItem>
            </Link>
            <ListItem>
              <Timeline style={{ marginRight: 5, fontSize: 20 }} />
              Analytics
            </ListItem>
            <ListItem>
              <TrendingUp style={{ marginRight: 5, fontSize: 20 }} />
              Sales
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <Link to="/users">
              <ListItem>
                <PermIdentity style={{ marginRight: 5, fontSize: 20 }} />
                Users
              </ListItem>
            </Link>
            <Link to="/products">
              <ListItem>
                <Storefront style={{ marginRight: 5, fontSize: 20 }} />
                Products
              </ListItem>
            </Link>
            <ListItem>
              <AttachMoney style={{ marginRight: 5, fontSize: 20 }} />
              Transactions
            </ListItem>
            <ListItem>
              <BarChart style={{ marginRight: 5, fontSize: 20 }} />
              Reports
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <ListItem>
              <MailOutline style={{ marginRight: 5, fontSize: 20 }} />
              Mail
            </ListItem>
            <ListItem>
              <DynamicFeed style={{ marginRight: 5, fontSize: 20 }} />
              Feedback
            </ListItem>
            <ListItem>
              <ChatBubbleOutline style={{ marginRight: 5, fontSize: 20 }} />
              Messages
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <ListItem>
              <WorkOutline style={{ marginRight: 5, fontSize: 20 }} />
              Manage
            </ListItem>
            <ListItem>
              <Timeline style={{ marginRight: 5, fontSize: 20 }} />
              Analytics
            </ListItem>
            <ListItem>
              <Report style={{ marginRight: 5, fontSize: 20 }} />
              Reports
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </Container>
  );
}
