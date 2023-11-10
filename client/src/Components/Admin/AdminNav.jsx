import styled from "styled-components";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const AdminNav = (props) => {
  return (
    <Wrapper>
      <Container>
        <h3>{props.selectedTab}</h3>
        <SearchBar props={props} />
      </Container>
      <Menu></Menu>
    </Wrapper>
  );
};

export default AdminNav;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px;
  height: 100px;
  width: 100%;
  @media only screen and (max-width: 700px) {
    height: fit-content;
  }
  h3 {
    height: fit-content;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 800px;
  @media only screen and (max-width: 1097px) {
    width: 100%;
  }
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
`;
