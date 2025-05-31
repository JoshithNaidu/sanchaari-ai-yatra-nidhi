
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Chat = () => {
  const navigate = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(true);

  useEffect(() => {
    // Redirect to home page where the floating chatbot is available
    const timer = setTimeout(() => {
      navigate('/');
      
      // Trigger the floating chatbot to open after navigation
      setTimeout(() => {
        const chatbotTrigger = document.querySelector('[data-floating-chatbot-trigger]') as HTMLButtonElement;
        if (chatbotTrigger) {
          chatbotTrigger.click();
        }
      }, 500); // Increased delay to ensure page is loaded
      
      setIsRedirecting(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">
          {isRedirecting ? 'Opening chat assistant...' : 'Chat opened!'}
        </p>
      </div>
    </div>
  );
};

export default Chat;
