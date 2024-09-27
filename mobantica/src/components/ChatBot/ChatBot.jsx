import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './chatbotConfig';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import './ChatBot.css';  // Custom CSS for styling

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control chatbot visibility

  // Function to toggle chatbot visibility
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Floating Button to Toggle Chatbot */}
      <button className="chatbot-toggle-btn" onClick={toggleChatbot}>
        <span role="img" aria-label="chat">💬</span>
      </button>

      {/* Conditionally render the chatbot */}
      {isOpen && (
        <div className="chatbot-container">
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>
      )}
    </div>
  );
};

export default ChatBot;
