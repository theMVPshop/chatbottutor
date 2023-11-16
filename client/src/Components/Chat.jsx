import { useState, useEffect, useRef } from "react";
import ChatInput from "./ChatInput.jsx";
import styled from "styled-components";
import { socket } from "../socket.js";
import "../App.css";
import AppBar from "./AppBar.jsx";
import { animateScroll as scroll } from "react-scroll";
import { debounce } from "lodash";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

function Chat() {
  const [currentResponse, setCurrentResponse] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [gptComplete, setGptComplete] = useState(true);

  function sendGPTRequest(prompt) {
    socket.emit("gpt-request", prompt);
    console.log(socket.connected);
  }

  function handleMessageInputChange(e) {
    setMessageInput(e.target.value);
  }

  function onSend(e) {
    e.preventDefault();
    const newMessage = { role: "user", content: messageInput };

    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setGptComplete(false);
    sendGPTRequest({
      message: messages,
      newMessage
    });
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
        newMessages[newMessages.length - 1].role === "assistant"
      ) {
        newMessages[newMessages.length - 1].content = currentResponse;
      } else {
        newMessages.push({ role: "assistant", content: currentResponse });
      }

      return newMessages;
    });
  }, [currentResponse]);

  useEffect(() => {
    if (gptComplete) {
      if (
        messages[messages.length - 1]?.content === currentResponse &&
        messages[messages.length - 1]?.role === "assistant"
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

    const isScrolledToBottom = scrollTop + clientHeight >= scrollHeight - 200;
    if (isScrolledToBottom) {
      scroll.scrollToBottom({ duration: 10 });
    }
  };

  const debouncedScrollToBottom = debounce(scrollToBottom, 100);

  useEffect(() => {
    if (!messagesRef.current) return;
    debouncedScrollToBottom();
  }, [messagesRef.current?.scrollHeight]);

  useEffect(() => {
    return () => {
      debouncedScrollToBottom.cancel();
    };
  }, []);

  const renderMessageContent = (message) => {
    if (!message) return;

    const segments = [];
    let inCodeBlock = false;
    let codeBlockContent = '';
    let language = 'text';

    message.split('\n').forEach((line, index) => {
      if (line.startsWith('```') && !inCodeBlock) {
        inCodeBlock = true;
        const match = line.match(/```(\w*)/);
        language = match[1] || 'text';
        codeBlockContent = '';
      } else if (line.startsWith('```') && inCodeBlock) {
        inCodeBlock = false;
        segments.push(
          <SyntaxHighlighter language={language} style={tomorrow} key={`code-${index}`}>
            {codeBlockContent}
          </SyntaxHighlighter>
        );
      } else if (inCodeBlock) {
        codeBlockContent += line + '\n';
      } else {
        segments.push(<span key={`text-${index}`}>{line}</span>, <br key={`br-${index}`} />);
      }
    });

    if (inCodeBlock) {
      segments.push(
        <SyntaxHighlighter language={language} style={tomorrow} key={`code-incomplete`}>
          {codeBlockContent}
        </SyntaxHighlighter>
      );
    }

    if (!inCodeBlock) {
      segments.pop();
    }

    return segments;
  };

  return (
    <ChatWrap className="chat-container">
      <AppBar />
      <Display ref={messagesRef} className="messages-container">
        {messages.map((message, index) => (
          <Message key={index} className={`${message.role}`}>
            <User>
              <p>{message.role === 'user' ? 'Me' : 'AI Tutor'}</p>
            </User>
            <TextBubble className={`${message.role}`}>
              <p>{renderMessageContent(message.content)}</p>
            </TextBubble>
          </Message>
        ))}
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
  .user {
    align-items: flex-end;
  }
  .assistant {
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
  .user {
    border-radius: 25px 25px 5px 25px;
    background-color: #0157f9;
    color: white;
  }
  .assistant {
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