import { useState } from "react";

const botMessages = ["Message received!", "Wow!", "Heard.", "Okay.", "Alright.", "Interesting.", "Tell me more.", "Oh, really?", "I see."];

function Chat() {

    const getBotMessage = () => botMessages[Math.floor(Math.random() * botMessages.length)];

    const [messageInput, setMessageInput] = useState("");
    const [messages, setMessages] = useState([]); // [{message: "Hello!", sender: "user"}, {message: "Hi!", sender: "bot"}]

    function handleMessageInputChange(e) {
        setMessageInput(e.target.value);
    }

    function onSend(e) {
        e.preventDefault();
        setMessages(prevMessages => [...prevMessages, { text: messageInput, sender: "user" }, { text: getBotMessage(), sender: "bot" }]);
        setMessageInput("");
    }

    return (
        <div className="chat-container">
            <div className="messages-container">
                {messages.map((message, index) => {
                    return (
                        <div key={index} className={`message ${message.sender}`}>
                            {message.text}
                        </div>
                    )
                })}
            </div>
            <form>
                <input value={messageInput} onChange={handleMessageInputChange} className="message" type="text" />
                <button onClick={onSend} className="send-button" type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chat;