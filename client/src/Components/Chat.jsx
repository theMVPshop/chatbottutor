import { useState, useEffect } from "react";
import ChatInput from "./ChatInput.jsx";
import styled from "styled-components";
import { Icon } from "@blueprintjs/core";
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
      { text: messageInput, sender: "Me" },
      { text: getBotMessage(), sender: "Chatbot Tutor" },
    ]);
    setMessageInput("");
  }

  return (
    <ChatWrap className="chat-container">
      <AppBar>
        <Content>
          <Logo>
            <StyledIcon icon="comment" size={20} />
          </Logo>
          <Title>
            <h1>Chatbot Tutor</h1>
            <StatusWrapper>
              <div></div>
              <p>Online</p>
            </StatusWrapper>
          </Title>
        </Content>
      </AppBar>
      <Display className="messages-container">
        {messages.map((message, index) => {
          return (
            <Message key={index} className={`${message.sender}`}>
              <p>{message.sender}</p>
              <TextBubble className={`${message.sender}`}>
                <p>{message.text}</p>
              </TextBubble>
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
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #eaeef3;
`;

const AppBar = styled.div`
  display: flex;
  justify-content: center;
  height: 60px;
  width: 100%;
  background-color: white;
  position: fixed;
`;

const Content = styled.div`
  padding: 0 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  width: 940px;
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0157f9;
  border-radius: 5px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 20px;
    margin: 0;
    padding: 0;
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
    font-size: 15px;
    margin: 0;
    padding: 0;
  }
`;

const Display = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  width: 940px;
  padding: 20px;
  margin: 60px 0 91px;
  overflow-y: auto;
  @media only screen and (max-width: 980px) {
    width: 100%;
  }
  .Me {
    align-items: flex-end;
  }
  .Chatbot {
    text-align: flex-start;
  }
`;

const InputWrap = styled.div`
  width: 100%;
  padding: 5px 20px 5px;
  height: fit-content;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  color: gray;
  p {
    margin: 0;
  }
  .Me {
    border-radius: 10px 10px 0px 10px;
    background-color: #0157f9;
    color: white;
  }
  .Chatbot {
    border-radius: 10px 10px 10px 0px;
    background-color: white;
    color: black;
  }
`;
const TextBubble = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 10px 20px;
`;

const StyledIcon = styled(Icon)`
  fill: white;
  display: flex;
  align-items: center;
`;


//   <>
//       <div>
//         <label style={{ display: "flex", flexDirection: "column", height: "20rem" }}>
//           Ask GPT
//           <input value={gptPrompt} onChange={handlePromptChange} type="text" /> <br />
//           <button onClick={sendGPTRequest}>Submit</button>
//         </label>
//         {currentResponse}
//       </div>
//       <ChatWrap className="chat-container">
//         <Display className="messages-container">
//           {messages.map((message, index) => {
//             return (
//               <Message key={index} className={`message ${message.sender}`}>
//                 {message.text}
//               </Message>
//             );
//           })}
//         </Display>
//         <InputWrap>
//           <ChatInput
//             messageInput={messageInput}
//             handleMessageInputChange={handleMessageInputChange}
//             onSend={onSend}
//           />
//         </InputWrap>
//       </ChatWrap>
//     </>
