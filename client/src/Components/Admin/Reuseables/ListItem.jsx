/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
import { useEffect, useState } from "react";

const ListItem = ({ index, content }) => {
  const [clr, setClr] = useState("");

  useEffect(() => {
    if (index === 0) {
      setClr("first");
    } else if (index === 1) {
      setClr("second");
    } else if (index === 2) {
      setClr("third");
    }
  }, [index]);

  return (
    <Wrapper>
      <IconWrap className={clr}>
        <h1>{index + 1}</h1>
      </IconWrap>
      <Content>
        <h3>{content.question}</h3>
      </Content>
    </Wrapper>
  );
};

export default ListItem;

const Wrapper = styled.div`
  display: flex;
  height: fit-content;
  gap: 20px;
  width: 100%;
  min-width: 350px;
  align-items: center;
  .first {
    background-color: #f96e6e;
    h1 {
      color: #b80303;
    }
  }
  .second {
    background-color: #fea768;
    h1 {
      color: #b84d00;
    }
  }
  .third {
    background-color: #ffec81;
    h1 {
      color: #a18900;
    }
  }
`;

const IconWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  max-width: 60px;
  /* margin: 0 20px; */
  border-radius: 10px;
  background-color: #e2e1e1;
  h1 {
    color: #888888;
    height: fit-content;
  }
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
    /* line-height: 0.9; */
  }
`;
