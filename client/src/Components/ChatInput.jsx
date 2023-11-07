import styled from "styled-components";
import { Icon } from "@blueprintjs/core";

const ChatInput = ({ messageInput, handleMessageInputChange, onSend }) => {
  return (
    <MainWrap>
      <SearchWrapper>
        <SearchInput>
          <Search
            type="text"
            onChange={handleMessageInputChange}
            placeholder="How can I help you?"
            value={messageInput}
          />
          {!messageInput ? (
            <DisabledBtn disabled={true}>
              <StyledIcon icon="send-message" size={20} />
            </DisabledBtn>
          ) : (
            <SubmitBtn onClick={onSend}>
              <StyledIcon icon="send-message" size={20} />
            </SubmitBtn>
          )}
        </SearchInput>
      </SearchWrapper>
      <Foot>
        <p>Powered by ChatGPT</p>
      </Foot>
    </MainWrap>
  );
};

export default ChatInput;
const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  /* padding: 15px; */
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;

const SearchInput = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  /* margin: 10px; */
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  color: white !important;
  padding: 5px 10px;
  width: 940px;
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
  /* height: 30px; */
  &:focus-within {
    border: 1px solid gray;
  }
`;

const Search = styled.input`
  padding: 5px 10px;
  font-size: 14px;
  border: 0;
  height: inherit;
  text-overflow: ellipsis;
  width: 100%;
  &::placeholder {
    color: inherit;
  }
  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled(Icon)`
  fill: white;
  display: flex;
  align-items: center;
`;

const DisabledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border: none;
  border-radius: 5px;
  width: 40px;
  height: 40px;
  background-color: #eaeef3;
  &:hover {
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
  background-color: #0157f9;
  cursor: pointer;
  &:hover {
    background-color: #93bcf5;
  }
`;

const Foot = styled.div`
  width: 100%;
  text-align: center;
`;
