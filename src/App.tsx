
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CentralizedAuthProvider } from "./contexts/CentralizedAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

// Public Pages
import Index from "./pages/Index";
import Chat from "./pages/Chat";
import Search from "./pages/Search";
import SearchFlights from "./pages/SearchFlights";
import SearchHotels from "./pages/SearchHotels";
import SearchActivities from "./pages/SearchActivities";
import SearchPackages from "./pages/SearchPackages";
import DestinationGuide from "./pages/DestinationGuide";
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
import NotFound from "./pages/NotFound";
import ServerError from "./pages/ServerError";
import Maintenance from "./pages/Maintenance";

// Auth Pages
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import EmailVerification from "./pages/EmailVerification";

// Protected Pages
import TripsDashboard from "./pages/TripsDashboard";
import CreateNewTrip from "./pages/CreateNewTrip";
import ItineraryDetails from "./pages/ItineraryDetails";
import CollaborativePlanning from "./pages/CollaborativePlanning";
import BudgetTracker from "./pages/BudgetTracker";
import PackingList from "./pages/PackingList";
import Checkout from "./pages/Checkout";
import BookingConfirmation from "./pages/BookingConfirmation";
import UserProfile from "./pages/UserProfile";
import TravelPreferences from "./pages/TravelPreferences";
import TravelHistory from "./pages/TravelHistory";
import SavedTrips from "./pages/SavedTrips";
import Notifications from "./pages/Notifications";
import LoyaltyRewards from "./pages/LoyaltyRewards";
import PaymentMethods from "./pages/PaymentMethods";

// Admin Pages
import AdminHomepage from "./pages/AdminHomepage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminLogout from "./pages/AdminLogout";
import AdminForgotPassword from "./pages/AdminForgotPassword";
import AdminUsers from "./pages/AdminUsers";
import AdminTrips from "./pages/AdminTrips";
import AdminDestinations from "./pages/AdminDestinations";
import AdminChatbotAnalytics from "./pages/AdminChatbotAnalytics";

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
            <Route path="/chat" element={<Chat />} />
            
            {/* Auth Routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/logout" element={<Logout />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            <Route path="/auth/verify-email" element={<EmailVerification />} />

            {/* Search Routes */}
            <Route path="/search" element={<Search />} />
            <Route path="/search/flights" element={<SearchFlights />} />
            <Route path="/search/hotels" element={<SearchHotels />} />
            <Route path="/search/activities" element={<SearchActivities />} />
            <Route path="/search/packages" element={<SearchPackages />} />

            {/* Explore Routes */}
            <Route path="/explore/destinations/:cityName" element={<DestinationGuide />} />
            <Route path="/explore/themes" element={<TravelThemes />} />

            {/* Content Routes */}
            <Route path="/blog" element={<TravelBlog />} />
            <Route path="/community" element={<Community />} />

            {/* Help Routes */}
            <Route path="/help/center" element={<HelpCenter />} />
            <Route path="/help/contact" element={<ContactUs />} />
            <Route path="/help/grievance" element={<GrievanceRedressal />} />

            {/* Legal Routes */}
            <Route path="/safety" element={<Safety />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />

            {/* Protected Trip Routes */}
            <Route path="/trips/dashboard" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <TripsDashboard />
              </ProtectedRoute>
            } />
            <Route path="/trips/new" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <CreateNewTrip />
              </ProtectedRoute>
            } />
            <Route path="/trips/:tripId" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <ItineraryDetails />
              </ProtectedRoute>
            } />
            <Route path="/trips/:tripId/collaborate" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <CollaborativePlanning />
              </ProtectedRoute>
            } />
            <Route path="/trips/:tripId/budget" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <BudgetTracker />
              </ProtectedRoute>
            } />
            <Route path="/trips/:tripId/packing" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <PackingList />
              </ProtectedRoute>
            } />

            {/* Protected Booking Routes */}
            <Route path="/checkout/:bookingId" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <Checkout />
              </ProtectedRoute>
            } />
            <Route path="/confirmation/:bookingId" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <BookingConfirmation />
              </ProtectedRoute>
            } />

            {/* Protected Profile Routes */}
            <Route path="/profile/me" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <UserProfile />
              </ProtectedRoute>
            } />
            <Route path="/profile/preferences" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <TravelPreferences />
              </ProtectedRoute>
            } />
            <Route path="/profile/history" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <TravelHistory />
              </ProtectedRoute>
            } />
            <Route path="/profile/saved" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <SavedTrips />
              </ProtectedRoute>
            } />
            <Route path="/profile/notifications" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <Notifications />
              </ProtectedRoute>
            } />
            <Route path="/profile/rewards" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <LoyaltyRewards />
              </ProtectedRoute>
            } />
            <Route path="/profile/payments" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <PaymentMethods />
              </ProtectedRoute>
            } />

            {/* Admin Routes */}
            <Route path="/admin" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminHomepage />
              </ProtectedRoute>
            } />
            <Route path="/admin/dashboard" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/logout" element={<AdminLogout />} />
            <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
            <Route path="/admin/users" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminUsers />
              </ProtectedRoute>
            } />
            <Route path="/admin/trips" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminTrips />
              </ProtectedRoute>
            } />
            <Route path="/admin/destinations" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDestinations />
              </ProtectedRoute>
            } />
            <Route path="/admin/analytics/chatbot" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminChatbotAnalytics />
              </ProtectedRoute>
            } />

            {/* Error Routes */}
            <Route path="/404" element={<NotFound />} />
            <Route path="/500" element={<ServerError />} />
            <Route path="/maintenance" element={<Maintenance />} />
            
            {/* Catch all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CentralizedAuthProvider>
  </QueryClientProvider>
);

export default App;
