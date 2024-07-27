import styled from "styled-components";
import FeaturedInfo from "../components/FeaturedInfo";
import { userData } from "../fakeData";
import Chart from "../components/Chart";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";

const Container = styled.div`
  flex: 4;
`;

const Widgets = styled.div`
  display: flex;
  margin: 20px;
`;

const Home = () => {
  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <Widgets>
        <WidgetSm/>
        <WidgetLg/>
      </Widgets>
    </Container>
  );
};

export default Home;
