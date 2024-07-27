import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

const Th = styled.th`
  text-align: left;
`;

const User = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Info = styled.td`
  font-weight: 300;
`;

const Button = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => {
    if (props.type === "Approved") {
      return "#e5faf2";
    } else if (props.type === "Declined") {
      return "#fff0f1";
    } else {
      return "#ebf1fe";
    }
  }};
  background-color: ${(props) => {
    if (props.type === "Approved") {
      return "#e5faf2";
    } else if (props.type === "Declined") {
      return "#fff0f1";
    } else {
      return "#ebf1fe";
    }
  }};
  color: ${(props) => {
    if (props.type === "Approved") {
      return "#3bb077";
    } else if (props.type === "Declined") {
      return "#d95087";
    } else {
      return "#2a7ade";
    }
  }};
`;

const Tr = styled.tr``;

const Status = styled.td``;

const Name = styled.span``;

export default function WidgetLg() {
  return (
    <Container>
      <Title>Latest transactions</Title>
      <Table>
        <Tr>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Status</Th>
        </Tr>
        <Tr>
          <User>
            <Img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <Name>Susan Carol</Name>
          </User>
          <Info>2 Jun 2021</Info>
          <Info>$122.00</Info>
          <Status>
            <Button type="Approved">Approved</Button>
          </Status>
        </Tr>
        <Tr>
          <User>
            <Img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <Name>Susan Carol</Name>
          </User>
          <Info>2 Jun 2021</Info>
          <Info>$122.00</Info>
          <Status>
            <Button type="Declined">Declined</Button>
          </Status>
        </Tr>
        <Tr>
          <User>
            <Img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <Name>Susan Carol</Name>
          </User>
          <Info>2 Jun 2021</Info>
          <Info>$122.00</Info>
          <Status>
            <Button type="Pending">Pending</Button>
          </Status>
        </Tr>
        <Tr>
          <User>
            <Img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <Name>Susan Carol</Name>
          </User>
          <Info>2 Jun 2021</Info>
          <Info>$122.00</Info>
          <Status>
            <Button type="Approved">Approved</Button>
          </Status>
        </Tr>
      </Table>
    </Container>
  );
}
