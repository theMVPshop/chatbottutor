import { useState, useEffect } from "react";
import ChatInput from "./ChatInput.jsx";
import styled from "styled-components";
import { socket } from "../socket.js";

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

const getBotMessage = () =>
  botMessages[Math.floor(Math.random() * botMessages.length)];

function Chat() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  const [currentResponse, setCurrentResponse] = useState("");

  function sendGPTRequest() {
    socket.emit('gpt-request', { prompt: gptPrompt });
  }

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }

    function onGptResponse(data) {
      console.log('Received a GPT response:', data);
      setCurrentResponse(prevResponse => prevResponse + data);
    }

    socket.on('gpt-response', onGptResponse);
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    // Listen for an error event
    socket.on('gpt-error', (error) => {
      console.error('Received a GPT error:', error);
      // Handle error (show error message to the user, etc.)
    });

    return () => {
      socket.off('gpt-response', onGptResponse);
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  const [gptPrompt, setGptPrompt] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]); // [{message: "Hello!", sender: "user"}, {message: "Hi!", sender: "bot"}]


  function handlePromptChange(e) {
    setGptPrompt(e.target.value);
  }

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
    <>
      <div>
        <label style={{ display: "flex", flexDirection: "column", height: "20rem" }}>
          Ask GPT
          <input value={gptPrompt} onChange={handlePromptChange} type="text" /> <br />
          <button onClick={sendGPTRequest}>Submit</button>
        </label>
        {currentResponse}
      </div>
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
    </>
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
