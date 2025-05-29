
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FloatingChatbot from "./components/FloatingChatbot";

const queryClient = new QueryClient();

const ChatRedirectHandler = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === '/chat') {
      // Trigger the floating chatbot to open
      const chatbotButton = document.querySelector('[data-floating-chatbot-trigger]') as HTMLButtonElement;
      if (chatbotButton) {
        chatbotButton.click();
      }
    }
  }, [location.pathname]);
  
  return <Navigate to="/" replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/chat" element={<ChatRedirectHandler />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingChatbot />
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
