
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CentralizedAuthProvider } from "./contexts/CentralizedAuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TravelHistory from "./pages/TravelHistory";
import SavedTrips from "./pages/SavedTrips";
import SearchResults from "./pages/SearchResults";
import BookingConfirmation from "./pages/BookingConfirmation";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CentralizedAuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/search" element={<SearchResults />} />

            {/* Protected Traveler Routes */}
            <Route path="/travel-history" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <TravelHistory />
              </ProtectedRoute>
            } />
            <Route path="/saved-trips" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <SavedTrips />
              </ProtectedRoute>
            } />
            <Route path="/booking-confirmation" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <BookingConfirmation />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <Profile />
              </ProtectedRoute>
            } />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CentralizedAuthProvider>
  </QueryClientProvider>
);

export default App;
