import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { CentralizedAuthProvider } from "./contexts/CentralizedAuthContext";
import { WorkflowProvider } from "./contexts/WorkflowContext";
import WorkflowDashboard from "./pages/WorkflowDashboard";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FloatingChatbot from "./components/FloatingChatbot";
import TripsDashboard from "./pages/TripsDashboard";
import CreateNewTrip from "./pages/CreateNewTrip";
import ItineraryDetails from "./pages/ItineraryDetails";
import CollaborativePlanning from "./pages/CollaborativePlanning";
import BudgetTracker from "./pages/BudgetTracker";
import PackingList from "./pages/PackingList";
import Search from "./pages/Search";
import FlightSearchResults from "./pages/FlightSearchResults";
import HotelSearchResults from "./pages/HotelSearchResults";
import ActivitySearchResults from "./pages/ActivitySearchResults";
import PackageSearchResults from "./pages/PackageSearchResults";
import Checkout from "./pages/Checkout";
import BookingConfirmation from "./pages/BookingConfirmation";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import EmailVerification from "./pages/EmailVerification";
import Logout from "./pages/Logout";
import UserProfile from "./pages/UserProfile";
import TravelPreferences from "./pages/TravelPreferences";
import TravelHistory from "./pages/TravelHistory";
import SavedTrips from "./pages/SavedTrips";
import Notifications from "./pages/Notifications";
import LoyaltyRewards from "./pages/LoyaltyRewards";
import PaymentMethods from "./pages/PaymentMethods";
import DestinationGuides from "./pages/DestinationGuides";
import TravelThemes from "./pages/TravelThemes";
import TravelBlog from "./pages/TravelBlog";
import Community from "./pages/Community";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import GrievanceRedressal from "./pages/GrievanceRedressal";
import Safety from "./pages/Safety";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import About from "./pages/About";
import Careers from "./pages/Careers";
import ServerError from "./pages/ServerError";
import Maintenance from "./pages/Maintenance";

// Partner Pages
import PartnerSignup from "./pages/PartnerSignup";
import PartnerLogin from "./pages/PartnerLogin";
import PartnerLogout from "./pages/PartnerLogout";
import PartnerForgotPassword from "./pages/PartnerForgotPassword";
import PartnerDashboard from "./pages/PartnerDashboard";
import PartnerListings from "./pages/PartnerListings";
import PartnerAvailability from "./pages/PartnerAvailability";
import PartnerBookings from "./pages/PartnerBookings";
import PartnerPayouts from "./pages/PartnerPayouts";

// New Partner Pages
import BookingVolumeReports from "./pages/BookingVolumeReports";
import CustomerFeedbackReports from "./pages/CustomerFeedbackReports";
import RevenueReports from "./pages/RevenueReports";
import CompanyProfile from "./pages/CompanyProfile";
import ApiCredentials from "./pages/ApiCredentials";
import TaxCompliance from "./pages/TaxCompliance";
import PartnerHelpCenter from "./pages/PartnerHelpCenter";
import PartnerContactSupport from "./pages/PartnerContactSupport";
import PartnerMessages from "./pages/PartnerMessages";

// Admin Pages
import AdminLogin from "./pages/AdminLogin";
import AdminLogout from "./pages/AdminLogout";
import AdminForgotPassword from "./pages/AdminForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUserList from "./pages/AdminUserList";
import AdminBookings from "./pages/AdminBookings";
import AdminIntegrations from "./pages/AdminIntegrations";
import AdminPricing from "./pages/AdminPricing";
import AdminAIAnalytics from "./pages/AdminAIAnalytics";
import AdminAIModels from "./pages/AdminAIModels";
import AdminAIFlows from "./pages/AdminAIFlows";
import AdminAIHandoffs from "./pages/AdminAIHandoffs";
import AdminAIKnowledgeBase from "./pages/AdminAIKnowledgeBase";
import AdminAITrainingData from "./pages/AdminAITrainingData";

// Admin Content & Reports Pages
import AdminDestinations from "./pages/AdminDestinations";
import AdminBlog from "./pages/AdminBlog";
import AdminPromotions from "./pages/AdminPromotions";
import AdminUGC from "./pages/AdminUGC";
import AdminFlaggedContent from "./pages/AdminFlaggedContent";
import AdminReports from "./pages/AdminReports";

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
      <CentralizedAuthProvider>
        <WorkflowProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/chat" element={<ChatRedirectHandler />} />
              <Route path="/search" element={<Search />} />
              <Route path="/search/flights" element={<FlightSearchResults />} />
              <Route path="/search/hotels" element={<HotelSearchResults />} />
              <Route path="/search/activities" element={<ActivitySearchResults />} />
              <Route path="/search/packages" element={<PackageSearchResults />} />
              <Route path="/checkout/:bookingId" element={<Checkout />} />
              <Route path="/confirmation/:bookingId" element={<BookingConfirmation />} />
              <Route path="/trips/dashboard" element={<TripsDashboard />} />
              <Route path="/trips/new" element={<CreateNewTrip />} />
              <Route path="/trips/:tripId" element={<ItineraryDetails />} />
              <Route path="/trips/:tripId/collaborate" element={<CollaborativePlanning />} />
              <Route path="/trips/:tripId/budget" element={<BudgetTracker />} />
              <Route path="/trips/:tripId/packing" element={<PackingList />} />
              
              {/* Authentication Routes */}
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
              <Route path="/auth/forgot-password" element={<ForgotPassword />} />
              <Route path="/auth/reset-password" element={<ResetPassword />} />
              <Route path="/auth/verify-email" element={<EmailVerification />} />
              <Route path="/auth/logout" element={<Logout />} />
              
              {/* Partner Routes */}
              <Route path="/partner/signup" element={<PartnerSignup />} />
              <Route path="/partner/login" element={<PartnerLogin />} />
              <Route path="/partner/logout" element={<PartnerLogout />} />
              <Route path="/partner/forgot-password" element={<PartnerForgotPassword />} />
              <Route path="/partner/dashboard" element={<PartnerDashboard />} />
              <Route path="/partner/inventory/listings" element={<PartnerListings />} />
              <Route path="/partner/inventory/availability" element={<PartnerAvailability />} />
              <Route path="/partner/bookings/list" element={<PartnerBookings />} />
              <Route path="/partner/payouts" element={<PartnerPayouts />} />
              
              {/* New Partner Routes */}
              <Route path="/partner/reports/volume" element={<BookingVolumeReports />} />
              <Route path="/partner/reports/feedback" element={<CustomerFeedbackReports />} />
              <Route path="/partner/reports/revenue" element={<RevenueReports />} />
              <Route path="/partner/profile/company" element={<CompanyProfile />} />
              <Route path="/partner/profile/api-credentials" element={<ApiCredentials />} />
              <Route path="/partner/profile/compliance" element={<TaxCompliance />} />
              <Route path="/partner/help/center" element={<PartnerHelpCenter />} />
              <Route path="/partner/help/contact" element={<PartnerContactSupport />} />
              <Route path="/partner/messages" element={<PartnerMessages />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/logout" element={<AdminLogout />} />
              <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/users/list" element={<AdminUserList />} />
              <Route path="/admin/bookings/all" element={<AdminBookings />} />
              <Route path="/admin/integrations" element={<AdminIntegrations />} />
              <Route path="/admin/pricing" element={<AdminPricing />} />
              <Route path="/admin/ai/analytics" element={<AdminAIAnalytics />} />
              <Route path="/admin/ai/models" element={<AdminAIModels />} />
              <Route path="/admin/ai/flows" element={<AdminAIFlows />} />
              <Route path="/admin/ai/handoffs" element={<AdminAIHandoffs />} />
              <Route path="/admin/ai/knowledge-base" element={<AdminAIKnowledgeBase />} />
              <Route path="/admin/ai/training-data" element={<AdminAITrainingData />} />
              
              {/* Admin Content Management Routes */}
              <Route path="/admin/content/destinations" element={<AdminDestinations />} />
              <Route path="/admin/content/blog" element={<AdminBlog />} />
              <Route path="/admin/content/promotions" element={<AdminPromotions />} />
              <Route path="/admin/content/ugc" element={<AdminUGC />} />
              <Route path="/admin/content/flagged" element={<AdminFlaggedContent />} />
              
              {/* Admin Reports Routes */}
              <Route path="/admin/reports/overview" element={<AdminReports />} />
              
              {/* Profile Routes */}
              <Route path="/profile/me" element={<UserProfile />} />
              <Route path="/profile/preferences" element={<TravelPreferences />} />
              <Route path="/profile/history" element={<TravelHistory />} />
              <Route path="/profile/saved" element={<SavedTrips />} />
              <Route path="/profile/notifications" element={<Notifications />} />
              <Route path="/profile/rewards" element={<LoyaltyRewards />} />
              <Route path="/profile/payments" element={<PaymentMethods />} />
              
              {/* Content & Support Routes */}
              <Route path="/explore/destinations/:cityName" element={<DestinationGuides />} />
              <Route path="/explore/destinations" element={<DestinationGuides />} />
              <Route path="/explore/themes" element={<TravelThemes />} />
              <Route path="/blog" element={<TravelBlog />} />
              <Route path="/blog/:slug" element={<TravelBlog />} />
              <Route path="/community" element={<Community />} />
              <Route path="/community/:slug" element={<Community />} />
              <Route path="/help/center" element={<HelpCenter />} />
              <Route path="/help/contact" element={<ContactUs />} />
              <Route path="/help/grievance" element={<GrievanceRedressal />} />
              
              {/* Legal & System Routes */}
              <Route path="/safety" element={<Safety />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/500" element={<ServerError />} />
              <Route path="/maintenance" element={<Maintenance />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="/workflows" element={<WorkflowDashboard />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <FloatingChatbot />
          </TooltipProvider>
        </WorkflowProvider>
      </CentralizedAuthProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
