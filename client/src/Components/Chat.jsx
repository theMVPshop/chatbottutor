import { useState, useEffect, useRef } from "react";
import ChatInput from "./ChatInput.jsx";
import styled from "styled-components";
import { socket } from "../socket.js";
import "../App.css";
import AppBar from "./AppBar.jsx";
import { animateScroll as scroll } from "react-scroll";
import { debounce } from "lodash";

function Chat() {
  const [currentResponse, setCurrentResponse] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]); // [{message: "Hello!", sender: "user"}, {message: "Hi!", sender: "AI Tutor"}]
  const [gptComplete, setGptComplete] = useState(true);

  function sendGPTRequest(prompt) {
    socket.emit("gpt-request", { prompt });
    console.log(socket.connected);
  }

  function handleMessageInputChange(e) {
    setMessageInput(e.target.value);
  }

  function onSend(e) {
    e.preventDefault();
    scrollToBottom();
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: messageInput, sender: "Me" },
    ]);
    setGptComplete(false);
    sendGPTRequest(messageInput);
    setMessageInput("");
  }

  useEffect(() => {
    function onConnect() {
      console.log("Connected!");
    }

    function onDisconnect() {
      console.log("Disconnected!");
    }

    function onGptResponse(data) {
      setCurrentResponse((prevData) => prevData + data);
    }

    function onGptComplete() {
      setGptComplete(true);
    }

    function onGptError(error) {
      console.error("Received a GPT error:", error);
    }

    socket.on("gpt-response", onGptResponse);
    socket.on("gpt-complete", onGptComplete);
    socket.on("gpt-error", onGptError);
    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("gpt-response", onGptResponse);
      socket.off("connect", onConnect);
      socket.off("gpt-complete", onGptComplete);
      socket.off("gpt-error", onGptError);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  useEffect(() => {
    if (!currentResponse) {
      return;
    }
    setMessages((prevMessages) => {
      const newMessages = [...prevMessages];

      if (
        newMessages.length > 0 &&
        newMessages[newMessages.length - 1].sender === "AI Tutor"
      ) {
        newMessages[newMessages.length - 1].text = currentResponse;
      } else {
        newMessages.push({ text: currentResponse, sender: "AI Tutor" });
      }

      return newMessages;
    });
  }, [currentResponse]);

  useEffect(() => {
    if (gptComplete) {
      if (
        messages[messages.length - 1]?.text === currentResponse &&
        messages[messages.length - 1]?.sender === "AI Tutor"
      ) {
        setCurrentResponse("");
      }
    }
  }, [gptComplete, messages, currentResponse]);

  const messagesRef = useRef(null);

  const scrollToBottom = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;

    console.log(scrollHeight - (scrollTop + clientHeight));

    const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight - 75;
    if (isScrolledToBottom) {
      scroll.scrollToBottom({duration: 10});
    }
  };

  const debouncedScrollToBottom = debounce(scrollToBottom, 100);

  useEffect(() => {
    if (!messagesRef.current) return;
    console.log("scrolling")
    debouncedScrollToBottom();
  }, [messagesRef.current?.scrollHeight]);

  useEffect(() => {
    return () => {
      debouncedScrollToBottom.cancel();
    };
  }, []);

  return (
    <ChatWrap className="chat-container">
      <AppBar />
      <Display ref={messagesRef} className="messages-container">
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
