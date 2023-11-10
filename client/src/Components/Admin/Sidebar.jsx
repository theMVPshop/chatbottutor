import styled from "styled-components";
import logo from "../../Assets/logo-dark.webp";
import { Icon } from "@blueprintjs/core";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ selectedTab, setSelectedTab }) => {
  const navlink = ["Overview", "Insights", "Ect"];
  const navIcon = ["eye-open", "clean", "automatic-updates"];

  const handleClick = (event) => {
    let newTab = event.currentTarget.id;
    setSelectedTab(newTab);
  };

  return (
    <Wrapper>
      <Tag>
        <Logo>
          <img style={{ height: "100%" }} src={logo} />
        </Logo>
        <Title>
          <h1>AI Tutor</h1>
        </Title>
      </Tag>
      <ul>
        {navlink.map((link, index) => {
          return (
            <li key={link}>
              <NavWrap
                id={link}
                onClick={handleClick}
                className={selectedTab === link ? "selected" : "unselected"}
              >
                <Navbtn>
                  <StyledIcon icon={navIcon[index]} size={24} />
                  <h4 className="selectedTitle">{link}</h4>
                </Navbtn>
                <Decal></Decal>
              </NavWrap>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 20px 0;
  height: 100vh;
  width: 250px;
  min-width: 250px;
  background-color: #fff;
  @media only screen and (max-width: 1097px) {
  min-width: fit-content;
  width: fit-content;
}
  ul {
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 30px;
    li {
      display: flex;
      align-items: center;
      .selected {
        color: #0157f9;
        :first-child {
          fill: #0157f9;
        }
        :last-child {
          display: block;
        }
      }
      .unselected {
        color: gray;
        :first-child {
          fill: gray;
          }
        }
        .selectedTitle {
          @media only screen and (max-width: 1097px) {
            display: none !important;
          }
        }
      }
    }
  }
`;

const Tag = styled.div`
  height: fit-content;
  display: flex;
  gap: 10px;
  padding: 0 20px;
  align-items: center;
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
  @media only screen and (max-width: 1097px) {
    display: none;
  }
  h1 {
    font-size: 25px;
    margin: 0;
    padding: 0;
    line-height: 0.75;
  }
`;

const NavWrap = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0;
  gap: 15px;
  color: gray;
  cursor: pointer;
`;

const Navbtn = styled.div`
  display: flex;
  gap: 15px;
  margin: 0 20px;
  h4 {
    @media only screen and (max-width: 1097px) {
      display: none;
    }
  }
`;

const StyledIcon = styled(Icon)`
  fill: white;
  display: flex;
  align-items: center;
  fill: gray;
  cursor: pointer;
`;

const Decal = styled.div`
  display: none;
  width: 5px;
  height: 24px;
  margin: 0;
  border-radius: 25px 0 0 25px;
  background-color: #0157f9;
`;
