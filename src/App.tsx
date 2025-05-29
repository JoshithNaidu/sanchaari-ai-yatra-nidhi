
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FloatingChatbot from "./components/FloatingChatbot";
import TripsDashboard from "./pages/TripsDashboard";
import CreateNewTrip from "./pages/CreateNewTrip";
import ItineraryDetails from "./pages/ItineraryDetails";
import CollaborativePlanning from "./pages/CollaborativePlanning";
import BudgetTracker from "./pages/BudgetTracker";
import PackingList from "./pages/PackingList";

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
          <Route path="/trips/dashboard" element={<TripsDashboard />} />
          <Route path="/trips/new" element={<CreateNewTrip />} />
          <Route path="/trips/:tripId" element={<ItineraryDetails />} />
          <Route path="/trips/:tripId/collaborate" element={<CollaborativePlanning />} />
          <Route path="/trips/:tripId/budget" element={<BudgetTracker />} />
          <Route path="/trips/:tripId/packing" element={<PackingList />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FloatingChatbot />
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
