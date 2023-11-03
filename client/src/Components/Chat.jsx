import { useState } from "react";
import ChatInput from "./ChatInput.jsx";
import styled from "styled-components";

const botMessages = [
  "Message received!",
  "Wow!",
  "Heard.",
  "Okay.",
  "Alright.",
  "Interesting.",
  "Tell me more.",
  "Oh, really?",
  "I see.",
];

function Chat() {
  const getBotMessage = () =>
    botMessages[Math.floor(Math.random() * botMessages.length)];


  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]); // [{message: "Hello!", sender: "user"}, {message: "Hi!", sender: "bot"}]

  function handleMessageInputChange(e) {
    setMessageInput(e.target.value);
  }

  function onSend(e) {
    e.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: messageInput, sender: "user" },
      { text: getBotMessage(), sender: "bot" },
    ]);
    setMessageInput("");
  }

  return (
    <ChatWrap className="chat-container">
      <Display className="messages-container">
        {messages.map((message, index) => {
          return (
            <Message key={index} className={`message ${message.sender}`}>
              {message.text}
            </Message>
          );
        })}
      </Display>
      <InputWrap>
        <ChatInput
          messageInput={messageInput}
          handleMessageInputChange={handleMessageInputChange}
          onSend={onSend}
        />
      </InputWrap>
    </ChatWrap>
  );

}

export default Chat;

const ChatWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: gray;
`;

const Display = styled.div`
  height: 100%;
  width: 100%;
`;

const InputWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

const Message = styled.div`
  height: fit-content;
`;
