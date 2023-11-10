import styled from "styled-components";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import { useState } from "react";

function Admin() {
  const [selectedTab, setSelectedTab] = useState("Overview");
  return (
    <Wrapper>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Dashboard selectedTab={selectedTab} />
    </Wrapper>
  );
}

export default Admin;

const Wrapper = styled.div`
  display: flex;
`;
