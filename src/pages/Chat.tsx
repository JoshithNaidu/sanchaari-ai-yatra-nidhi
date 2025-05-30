
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home page where the floating chatbot is available
    navigate('/');
    
    // Trigger the floating chatbot to open
    setTimeout(() => {
      const chatbotTrigger = document.querySelector('[data-floating-chatbot-trigger]') as HTMLButtonElement;
      if (chatbotTrigger) {
        chatbotTrigger.click();
      }
    }, 100);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600">Redirecting to chat...</p>
      </div>
    </div>
  );
};

export default Chat;
