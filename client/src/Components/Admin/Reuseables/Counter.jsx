import styled from "styled-components";
import { Icon } from "@blueprintjs/core";

// eslint-disable-next-line react/prop-types
const Counter = ({ icon, title, data }) => {
  return (
    <Wrapper>
      <Border>
        <IconWrap>
          <StyledToken icon={icon} size={30} />
        </IconWrap>
        <Content>
          <p>{title}</p>
          <h1>{data}</h1>
        </Content>
      </Border>
    </Wrapper>
  );
};

export default Counter;

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  min-width: 350px;
  border-radius: 10px;
  background-color: white;
  .selected {
    border: 1px solid #0157f9;
  }
`;

const Border = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  min-width: 350px;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  max-width: 60px;
  margin: 0 20px;
  border-radius: 999px;
  background-color: #f2c4c4;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  p {
    color: gray;
    font-size: 14px;
  }
  h1 {
    line-height: 0.9;
  }
`;

const StyledToken = styled(Icon)`
  fill: #d58787 !important;
  display: flex;
  align-items: center;
  fill: gray;
  cursor: pointer;
`;
