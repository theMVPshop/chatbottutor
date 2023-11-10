import styled from "styled-components";

// eslint-disable-next-line react/prop-types
const Insights = () => {
  return (
    <Wrapper>
      <ul>
        <li>summary of session with starred solution + lesson + cohort?</li>
        <li>summary of reoccuring questions within lessons?</li>
      </ul>
      <IframeTestWrap>
        <iframe
          src="http://localhost:5173"
          style={{ width: "100%", height: "100%", border: "none" }}
        ></iframe>
      </IframeTestWrap>
    </Wrapper>
  );
};

export default Insights;

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

const IframeTestWrap = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  height: 500px;
  width: 350px;
  border: 1px solid lightgray;
`;
