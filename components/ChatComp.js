
import React, { useState, useRef } from "react";
import ChatBubble from "./ChatBubble";
import { mathParse } from "./brains/mathParse";
import { introMessages } from "./introMessages";
import { FiSend, FiDownload, FiCopy } from "react-icons/fi";



const ChatBox = ({ author }) => {
  const [messages, setMessages] = useState(introMessages);
  const inputRef = useRef(null);

  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    const amPm = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    minutes = minutes < 10 ? '0' + minutes : minutes; // Add leading zero if minutes < 10
    return `${hours}:${minutes} ${amPm}`;
  }


  const handleAgentResponse = (message) => {
    const response = mathParse(message.text);
    const res = response.ans
    const isMath = response.math
    const newMessage = { author: "Agent", text: res, time: getCurrentTime(), math:isMath };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    return [newMessage];
  };

  const handleMessageSubmit = (text) => {
    const newMessage = { author: "You", text, time: getCurrentTime(), math:false};
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    handleAgentResponse(newMessage);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value.trim(); // Get input value and remove any leading/trailing white space
    if (inputValue) { // Check if input value is not empty
      handleMessageSubmit(inputValue);
      inputRef.current.value = ""; // Clear input field
    }
  };


  const handleCopy = () => {
    let textToCopy = "";
    messages.forEach((message) => {
      textToCopy += `${message.author}: ${message.text}\n`;
    });
    navigator.clipboard.writeText(textToCopy);
  };

  const handleDownload = () => {
    let textToDownload = "";
    messages.forEach((message) => {
      textToDownload += `${message.author}: ${message.text}\n`;
    });
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(textToDownload)
    );
    element.setAttribute("download", "chat.txt");
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index}>
            <ChatBubble
              message={message}
              author={author}

            />
          </div>
        ))}
      </div>


      <div className="flex items-center">

        <form onSubmit={handleSubmit}>
          <div className="chat-input">
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a message..."
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleMessageSubmit(e.target.value);
                  e.target.value = "";
                }
              }}
            /><div className="btn-group bg-transparent">
  <button className="btn bg-transparent btn-outline-primary text-blue-700 border-0 hover:scale-110" type="submit">
    <FiSend size={16} />
  </button>
  <button className="btn bg-transparent btn-outline-primary text-blue-700 border-0 hover:scale-110" onClick={handleCopy}>
    <FiCopy />
  </button>
  <button className="btn bg-transparent btn-outline-primary text-blue-700 border-0 hover:scale-110" onClick={handleDownload}>
    <FiDownload />
  </button>
</div>

          </div>
        </form>

      </div>
    </div>
  );
};

export default ChatBox;
