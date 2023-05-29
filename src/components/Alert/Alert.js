import React, { useState, useRef, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const messageRef = useRef(null);

  const handleSendMessage = (newAlert) => {
    const newMessage = newAlert;
    setMessages(prevMessages => [...prevMessages, newMessage]);
  };

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="chat-message">
            {message}
          </div>
        ))}
        <div ref={messageRef} />
      </div>
      <div className="chat-input">
        <input type="text" placeholder="메시지를 입력하세요..." />
        <button onClick={handleSendMessage}>전송</button>
      </div>
    </div>
  );
};

export default Chat;