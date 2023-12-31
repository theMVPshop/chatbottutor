import styled from "styled-components";
import AdminNav from "./AdminNav";
import { useState } from "react";
import Overview from "./Overview";
import Insights from "./Insights";
import fakedata from "../../Data/FakeData.json";

// eslint-disable-next-line react/prop-types
const Dashboard = ({ selectedTab }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const data = fakedata;

  return (
    <Wrapper>
      <AdminNav
        selectedTab={selectedTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {selectedTab === "Overview" && (
        <Overview searchQuery={searchQuery} data={data} />
      )}
      {selectedTab === "Insights" && <Insights searchQuery={searchQuery} />}
    </Wrapper>
  );
};

export default Dashboard;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: #f7f8fa;
  overflow-y: auto;
`;
