import React, { useState } from "react";
import axios from "axios";

function TestChat() {
  const [text, setText] = useState("");
  const [conversations, setConversations] = useState([]);

  const handleOpenaiSubmit = async (e) => {
    e.preventDefault();
    try {
      const newMessage = { role: "user", content: text };
      const response = await axios.post("http://localhost:3000/api/chat/openai", {
        conversation: conversations,
        newMessage,
      });
      setConversations([
        ...conversations,
        newMessage,
        { role: "assistant", content: response.data },
      ]);
      setText("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuestionChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="testChat">
      <p>The AI Tutor</p>
      <form onSubmit={handleOpenaiSubmit}>
        <input
          placeholder="Your Question"
          onChange={handleQuestionChange}
          value={text}
        />
        <button type="submit">Submit Question</button>
      </form>
      {conversations.map((message, index) => (
        <div key={index}>
          <h4>{index}</h4>
          {message.role === "user" ? (
            <p>User: {message.content}</p>
          ) : (
            <p>AI Response: {message.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default TestChat