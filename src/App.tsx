
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CentralizedAuthProvider } from "./contexts/CentralizedAuthContext";
import Index from "./pages/Index";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAIAnalytics from "./pages/AdminAIAnalytics";
import AdminAIModels from "./pages/AdminAIModels";
import AdminAIKnowledgeBase from "./pages/AdminAIKnowledgeBase";
import AdminAIFlows from "./pages/AdminAIFlows";
import AdminAIHandoffs from "./pages/AdminAIHandoffs";
import AdminAITrainingData from "./pages/AdminAITrainingData";
import AdminReportsOverview from "./pages/AdminReportsOverview";
import AdminGroupCollaboration from "./pages/AdminGroupCollaboration";
import AdminTripManagement from "./pages/AdminTripManagement";
import AdminChatbotAnalytics from "./pages/AdminChatbotAnalytics";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CentralizedAuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Index />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            
            {/* Admin AI Routes */}
            <Route path="/admin/ai/analytics" element={<AdminAIAnalytics />} />
            <Route path="/admin/ai/models" element={<AdminAIModels />} />
            <Route path="/admin/ai/knowledge-base" element={<AdminAIKnowledgeBase />} />
            <Route path="/admin/ai/flows" element={<AdminAIFlows />} />
            <Route path="/admin/ai/handoffs" element={<AdminAIHandoffs />} />
            <Route path="/admin/ai/training-data" element={<AdminAITrainingData />} />
            
            {/* Admin Reports */}
            <Route path="/admin/reports/overview" element={<AdminReportsOverview />} />
            
            {/* Admin Other */}
            <Route path="/admin/group-collaboration" element={<AdminGroupCollaboration />} />
            <Route path="/admin/trip-management" element={<AdminTripManagement />} />
            <Route path="/admin/chatbot-analytics" element={<AdminChatbotAnalytics />} />

            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CentralizedAuthProvider>
  </QueryClientProvider>
);

export default App;
