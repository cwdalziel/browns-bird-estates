import { Visibility } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
`;

const Username = styled.span`
  font-weight: 600;
`;

const UserTitle = styled.span`
  font-weight: 300;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 7px 10px;
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;

export default function WidgetSm() {
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        <ListItem>
          <Img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <User>
            <Username>Anna Keller</Username>
            <UserTitle>Software Engineer</UserTitle>
          </User>
          <Button>
            <Visibility style={{ fontSize: 16, marginRight: 5 }} />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <User>
            <Username>Anna Keller</Username>
            <UserTitle>Software Engineer</UserTitle>
          </User>
          <Button>
            <Visibility style={{ fontSize: 16, marginRight: 5 }} />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <User>
            <Username>Anna Keller</Username>
            <UserTitle>Software Engineer</UserTitle>
          </User>
          <Button>
            <Visibility style={{ fontSize: 16, marginRight: 5 }} />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <User>
            <Username>Anna Keller</Username>
            <UserTitle>Software Engineer</UserTitle>
          </User>
          <Button>
            <Visibility style={{ fontSize: 16, marginRight: 5 }} />
            Display
          </Button>
        </ListItem>
        <ListItem>
          <Img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <User>
            <Username>Anna Keller</Username>
            <UserTitle>Software Engineer</UserTitle>
          </User>
          <Button>
            <Visibility style={{ fontSize: 16, marginRight: 5 }} />
            Display
          </Button>
        </ListItem>
      </List>
    </Container>
  );
}
