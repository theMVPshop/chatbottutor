import { useState, useEffect } from "react";
import ChatInput from "./ChatInput.jsx";
import styled from "styled-components";
import { socket } from "../socket.js";

function Chat() {

  const [currentResponse, setCurrentResponse] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]); // [{message: "Hello!", sender: "user"}, {message: "Hi!", sender: "gpt"}]
  const [gptComplete, setGptComplete] = useState(true);

  function sendGPTRequest(prompt) {
    socket.emit('gpt-request', { prompt });
    console.log(socket.connected)
  }

  function handleMessageInputChange(e) {
    setMessageInput(e.target.value);
  }

  function onSend(e) {
    e.preventDefault();
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: messageInput, sender: "user" },
    ]);
    setGptComplete(false);
    sendGPTRequest(messageInput);
    setMessageInput("");
  }

  useEffect(() => {

    function onConnect() {
      console.log('Connected!');
    }

    function onDisconnect() {
      console.log('Disconnected!');
    }

    function onGptResponse(data) {
      console.log(data);
      setCurrentResponse(prevData => prevData + data);
    }

    function onGptComplete() {
      setGptComplete(true);
    }

    function onGptError(error) {
      console.error('Received a GPT error:', error);
    }

    socket.on('gpt-response', onGptResponse);
    socket.on('gpt-complete', onGptComplete);
    socket.on('gpt-error', onGptError);
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('gpt-response', onGptResponse);
      socket.off('connect', onConnect);
      socket.off('gpt-complete', onGptComplete);
      socket.off('gpt-error', onGptError);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  useEffect(() => {
    if (!currentResponse) {
      return;
    }
    setMessages(prevMessages => {
      const newMessages = [...prevMessages];

      if (newMessages.length > 0 && newMessages[newMessages.length - 1].sender === 'gpt') {
        newMessages[newMessages.length - 1].text = currentResponse;
      } else {
        newMessages.push({ text: currentResponse, sender: 'gpt' });
      }

      return newMessages;
    });
  }, [currentResponse]);

  useEffect(() => {
    if (gptComplete) {
      if (messages[messages.length - 1]?.text === currentResponse && messages[messages.length - 1]?.sender === 'gpt') {
        setCurrentResponse("");
      }
    }
  }, [gptComplete, messages, currentResponse]);

  return (
    <>
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
            gptComplete={gptComplete}
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
