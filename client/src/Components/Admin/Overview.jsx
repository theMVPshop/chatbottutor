import styled from "styled-components";
import Counter from "./Reuseables/Counter";
import DataGraph from "./Reuseables/DataGraph";
import QuerryTopicList from "./Reuseables/QuerryTopicList";
import UnitGraph from "./Reuseables/UnitGraph";

// eslint-disable-next-line react/prop-types
const Overview = ({ searchQuery }) => {
  return (
    <Wrapper>
      <CounterContainer id="row1A">
        <CounterSubContainer>
          <Counter icon="help" title="Total Querries" data="25,976" />
          <Counter icon="user" title="Total Users" data="362" />
        </CounterSubContainer>
        <CounterSubContainer>
          <Counter
            icon="predictive-analysis"
            title="Total Sessions"
            data="2895"
          />
          <Counter icon="star" title="Starred solution" data="1546" />
        </CounterSubContainer>
      </CounterContainer>
      <GraphContainer id="row2A">
        <DataGraphContainer>
          <DataGraph />
        </DataGraphContainer>
        <UnitGraphContainer>
          <UnitGraph />
        </UnitGraphContainer>
      </GraphContainer>
      <ListContainer id="row3A">
        <QuerryTopicList searchQuery={searchQuery} />
      </ListContainer>
    </Wrapper>
  );
};

export default Overview;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  width: 100%;
  padding: 20px;
  gap: 20px;
  @media only screen and (min-width: 1614px) {
    height: calc(100vh - 100px);
  }
`;

const CounterContainer = styled.div`
  display: flex;
  height: fit-content;
  gap: 20px;
  width: 100%;
  @media only screen and (max-width: 1750px) {
    flex-direction: column;
  }
`;

const CounterSubContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  @media only screen and (max-width: 1009px) {
    flex-direction: column;
  }
`;

const GraphContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: fit-content;
  @media only screen and (max-width: 1301px) {
    flex-direction: column;
  }
`;

const DataGraphContainer = styled.div`
  width: 100%;
  min-width: 634px;
  aspect-ratio: 8/3;
  @media only screen and (max-width: 931px) {
    min-width: 350px;
  }
  @media only screen and (min-width: 1920px) {
    max-height: 455px;
  }
`;

const UnitGraphContainer = styled.div`
  width: 32.5%;
  min-width: 350px;
  aspect-ratio: 4/3;
  @media only screen and (max-width: 1301px) {
    width: 100%;
    aspect-ratio: 8/3;
  }
  @media only screen and (min-width: 1920px) {
    max-height: 455px;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  min-height: 325px;
  min-width: 350px;
  @media only screen and (max-width: 1301px) {
    padding-bottom: 20px;
  }
`;
