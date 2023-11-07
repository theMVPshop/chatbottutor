import { useState, useEffect, useRef } from "react";
import ChatInput from "./ChatInput.jsx";
import styled from "styled-components";
import { socket } from "../socket.js";
import "../App.css";
import AppBar from "./AppBar.jsx";

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
    socket.emit("gpt-request", { prompt: gptPrompt });
  }

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents((previous) => [...previous, value]);
    }

    function onGptResponse(data) {
      console.log("Received a GPT response:", data);
      setCurrentResponse((prevResponse) => prevResponse + data);
    }

    socket.on("gpt-response", onGptResponse);
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);
    socket.on("foo", onFooEvent);

    // Listen for an error event
    socket.on("gpt-error", (error) => {
      console.error("Received a GPT error:", error);
      // Handle error (show error message to the user, etc.)
    });

    return () => {
      socket.off("gpt-response", onGptResponse);
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
      socket.off("foo", onFooEvent);
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
      { text: getBotMessage(), sender: "AI Tutor" },
    ]);
    setMessageInput("");
  }

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <ChatWrap className="chat-container">
      <AppBar />
      <Display className="messages-container">
        {messages.map((message, index) => {
          return (
            <Message key={index} className={`${message.sender}`}>
              <User>
                <p>{message.sender}</p>
              </User>

              <TextBubble className={`${message.sender}`}>
                <p>{message.text}</p>
              </TextBubble>
            </Message>
          );
        })}
        <div ref={messagesEndRef} />
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
`;

const Display = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  width: 100%;
  align-items: center;
  padding: 20px;
  margin: 0 0 81px;
  overflow-y: auto;
  .Me {
    align-items: flex-end;
  }
  .AI {
    text-align: flex-start;
  }
`;

const InputWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  background-image: linear-gradient(to top, white, white, transparent);
  @media only screen and (max-width: 940px) {
    width: 100%;
  }
`;

const Message = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  color: gray;
  width: 900px;
  padding-left: 8px;
  @media only screen and (max-width: 940px) {
    width: 100%;
  }
  p {
    margin: 0;
  }
  .Me {
    border-radius: 25px 25px 5px 25px;
    background-color: #0157f9;
    color: white;
  }
  .AI {
    border-radius: 25px 25px 25px 5px;
    background-color: #ffffff;
    color: black;
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const TextBubble = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 10px 20px;
`;

//       <div>
//         <label style={{ display: "flex", flexDirection: "column", height: "20rem" }}>
//           Ask GPT
//           <input value={gptPrompt} onChange={handlePromptChange} type="text" /> <br />
//           <button onClick={sendGPTRequest}>Submit</button>
//         </label>
//         {currentResponse}
//       </div>
