import styled from "styled-components";
import logo from "../Assets/logo-dark.webp";
import { Link } from "react-router-dom";

function AppBar() {
  return (
    <AppWrap>
      <Content>
        <Tag>
          <Logo>
            <img src={logo} />
          </Logo>
          <Title>
            <h1>AI Tutor</h1>
            <StatusWrapper>
              <div></div>
              <p>Online</p>
            </StatusWrapper>
          </Title>
        </Tag>
        <Menu>
          <Link to="/admin" target="_blank">
            <AdminBtn>Admin</AdminBtn>
          </Link>
        </Menu>
      </Content>
    </AppWrap>
  );
}

export default AppBar;

const AppWrap = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  width: 100%;
  background-color: white;
  position: sticky;
  border-bottom: 1px solid #ebebeb;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
`;

const Content = styled.div`
  padding: 0 20px;
  display: flex;
  width: 940px;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 940px) {
    width: 100%;
  }
`;

const Tag = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const AdminBtn = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border: 1px solid #0157f9;
  border-radius: 5px;
  color: #0157f9;
  transition: ease-in-out 0.15s;
  &:hover {
    color: #fff;
    background-color: #0157f9;
  }
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  height: fit-content;
  h1 {
    font-size: 18px;
    margin: 0;
    padding: 0;
    line-height: 0.75;
  }
`;
const StatusWrapper = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  div {
    height: 10px;
    width: 10px;
    border-radius: 999px;
    background-color: #69de3f;
  }
  p {
    font-size: 14px;
    margin: 0;
    padding: 0;
    line-height: 0.75;
  }
`;
