import styled from "styled-components";
import { Icon } from "@blueprintjs/core";

// eslint-disable-next-line react/prop-types
const ChatInput = ({
  messageInput,
  handleMessageInputChange,
  onSend,
  gptComplete,
}) => {
  return (
    <MainWrap>
      <SearchWrapper>
        <SearchInput>
          <Search
            type="text"
            onChange={handleMessageInputChange}
            placeholder="Ask a question"
            value={messageInput}
          />
          {!messageInput || !gptComplete ? (
            <SubmitBtn disabled={true}>
              <DisabledIcon icon="send-message" size={20} />
            </SubmitBtn>
          ) : (
            <SubmitBtn onClick={onSend}>
              <SubmitIcon icon="send-message" size={20} />
            </SubmitBtn>
          )}
        </SearchInput>
      </SearchWrapper>
      <Foot>
        <p>Powered by GPT</p>
      </Foot>
    </MainWrap>
  );
};

export default ChatInput;
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px 20px 5px;
  @media only screen and (max-width: 940px) {
    width: 100%;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid gray;
  color: white !important;
  padding: 5px 10px;
  width: 900px;
  @media only screen and (max-width: 940px) {
    width: 100%;
  }
  &:focus-within {
    border: 1px solid gray;
  }
`;

const Search = styled.input`
  padding: 5px 10px;
  font-size: 16px;
  border: 0;
  height: inherit;
  text-overflow: ellipsis;
  width: 100%;
  &::placeholder {
    color: gray;
  }
  &:focus {
    outline: none;
  }
`;

const DisabledIcon = styled(Icon)`
  fill: white;
  display: flex;
  align-items: center;
  fill: gray;
`;

const SubmitIcon = styled(Icon)`
  fill: white;
  display: flex;
  align-items: center;
  fill: #0157f9;
  cursor: pointer;
  &:hover {
    fill: #93bcf5;
  }
`;

const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: none;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  background-color: white;
`;

const Foot = styled.div`
  width: 100%;
  text-align: center;
  color: gray;
  font-size: 13px;
`;
