import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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

// Partner Pages
import PartnerHomepage from "./pages/PartnerHomepage";
import PartnerLogin from "./pages/PartnerLogin";
import PartnerLogout from "./pages/PartnerLogout";
import PartnerForgotPassword from "./pages/PartnerForgotPassword";

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
import Settings from "./pages/Settings";

// Admin Pages
import AdminHomepage from "./pages/AdminHomepage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import AdminLogout from "./pages/AdminLogout";
import AdminForgotPassword from "./pages/AdminForgotPassword";
import AdminUsers from "./pages/AdminUsers";
import AdminUsersList from "./pages/AdminUsersList";
import AdminUserProfile from "./pages/AdminUserProfile";
import AdminUserFeedback from "./pages/AdminUserFeedback";
import AdminUserPreferences from "./pages/AdminUserPreferences";
import AdminUserBlacklist from "./pages/AdminUserBlacklist";
import AdminUserKyc from "./pages/AdminUserKyc";
import AdminTrips from "./pages/AdminTrips";
import AdminDestinations from "./pages/AdminDestinations";
import AdminChatbotAnalytics from "./pages/AdminChatbotAnalytics";
import AdminBookings from "./pages/AdminBookings";
import AdminIntegrations from "./pages/AdminIntegrations";
import AdminPricing from "./pages/AdminPricing";
import AdminUGC from "./pages/AdminUGC";
import AdminReports from "./pages/AdminReports";

// New Admin Pages
import AdminBookingsAll from "./pages/AdminBookingsAll";
import AdminAIAnalytics from "./pages/AdminAIAnalytics";
import AdminAIModels from "./pages/AdminAIModels";
import AdminAIFlows from "./pages/AdminAIFlows";
import AdminAIHandoffs from "./pages/AdminAIHandoffs";
import AdminAIKnowledgeBase from "./pages/AdminAIKnowledgeBase";
import AdminAITrainingData from "./pages/AdminAITrainingData";

// Admin Content Management Pages
import AdminContentDestinations from "./pages/AdminContentDestinations";
import AdminContentBlog from "./pages/AdminContentBlog";
import AdminContentPromotions from "./pages/AdminContentPromotions";
import AdminContentFlagged from "./pages/AdminContentFlagged";

// Admin Reporting Pages
import AdminReportsOverview from "./pages/AdminReportsOverview";
import AdminReportsRevenue from "./pages/AdminReportsRevenue";
import AdminReportsMarketing from "./pages/AdminReportsMarketing";
import AdminReportsUserBehavior from "./pages/AdminReportsUserBehavior";
import AdminReportsRetention from "./pages/AdminReportsRetention";
import AdminReportsFunnel from "./pages/AdminReportsFunnel";
import AdminReportsGroupCollaboration from "./pages/AdminReportsGroupCollaboration";
import AdminReportsCustom from "./pages/AdminReportsCustom";

// Admin System Settings Pages
import AdminSettingsApiKeys from "./pages/AdminSettingsApiKeys";
import AdminSettingsSecurity from "./pages/AdminSettingsSecurity";
import AdminSettingsPrivacy from "./pages/AdminSettingsPrivacy";
import AdminSettingsRoles from "./pages/AdminSettingsRoles";
import AdminSettingsSystem from "./pages/AdminSettingsSystem";
import AdminSettingsNotifications from "./pages/AdminSettingsNotifications";
import AdminSettingsLocalization from "./pages/AdminSettingsLocalization";

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
            
            {/* Legacy route redirects */}
            <Route path="/login" element={<Navigate to="/auth/login" replace />} />
            
            {/* Auth Routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/logout" element={<Logout />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
            <Route path="/auth/verify-email" element={<EmailVerification />} />

            {/* Partner Routes */}
            <Route path="/partner" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerHomepage />
              </ProtectedRoute>
            } />
            <Route path="/partner/home" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerHomepage />
              </ProtectedRoute>
            } />
            <Route path="/partner/login" element={<PartnerLogin />} />
            <Route path="/partner/logout" element={<PartnerLogout />} />
            <Route path="/partner/forgot-password" element={<PartnerForgotPassword />} />

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

            {/* Settings Route - Available for all authenticated users */}
            <Route path="/settings" element={
              <ProtectedRoute allowedRoles={['traveler', 'admin', 'partner']}>
                <Settings />
              </ProtectedRoute>
            } />

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
            
            {/* Admin User Management Routes */}
            <Route path="/admin/users" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminUsers />
              </ProtectedRoute>
            } />
            <Route path="/admin/users/list" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminUsersList />
              </ProtectedRoute>
            } />
            <Route path="/admin/users/:userId" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminUserProfile />
              </ProtectedRoute>
            } />
            <Route path="/admin/users/feedback" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminUserFeedback />
              </ProtectedRoute>
            } />
            <Route path="/admin/users/preferences" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminUserPreferences />
              </ProtectedRoute>
            } />
            <Route path="/admin/users/blacklist" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminUserBlacklist />
              </ProtectedRoute>
            } />
            <Route path="/admin/users/kyc" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminUserKyc />
              </ProtectedRoute>
            } />
            
            {/* Admin Booking Management */}
            <Route path="/admin/bookings" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminBookings />
              </ProtectedRoute>
            } />
            <Route path="/admin/bookings/all" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminBookingsAll />
              </ProtectedRoute>
            } />
            
            {/* Admin System Management */}
            <Route path="/admin/integrations" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminIntegrations />
              </ProtectedRoute>
            } />
            <Route path="/admin/pricing" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminPricing />
              </ProtectedRoute>
            } />
            <Route path="/admin/ugc" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminUGC />
              </ProtectedRoute>
            } />
            <Route path="/admin/reports" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminReports />
              </ProtectedRoute>
            } />
            
            {/* Admin AI Management Routes */}
            <Route path="/admin/ai/analytics" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminAIAnalytics />
              </ProtectedRoute>
            } />
            <Route path="/admin/ai/models" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminAIModels />
              </ProtectedRoute>
            } />
            <Route path="/admin/ai/flows" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminAIFlows />
              </ProtectedRoute>
            } />
            <Route path="/admin/ai/handoffs" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminAIHandoffs />
              </ProtectedRoute>
            } />
            <Route path="/admin/ai/knowledge-base" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminAIKnowledgeBase />
              </ProtectedRoute>
            } />
            <Route path="/admin/ai/training-data" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminAITrainingData />
              </ProtectedRoute>
            } />
            
            {/* Admin Content Management Routes */}
            <Route path="/admin/content/destinations" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminContentDestinations />
              </ProtectedRoute>
            } />
            <Route path="/admin/content/blog" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminContentBlog />
              </ProtectedRoute>
            } />
            <Route path="/admin/content/promotions" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminContentPromotions />
              </ProtectedRoute>
            } />
            <Route path="/admin/content/ugc" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminUGC />
              </ProtectedRoute>
            } />
            <Route path="/admin/content/flagged" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminContentFlagged />
              </ProtectedRoute>
            } />
            
            {/* Admin Reporting Routes */}
            <Route path="/admin/reports/overview" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminReportsOverview />
              </ProtectedRoute>
            } />
            <Route path="/admin/reports/revenue" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminReportsRevenue />
              </ProtectedRoute>
            } />
            <Route path="/admin/reports/marketing" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminReportsMarketing />
              </ProtectedRoute>
            } />
            <Route path="/admin/reports/user-behavior" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminReportsUserBehavior />
              </ProtectedRoute>
            } />
            <Route path="/admin/reports/retention" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminReportsRetention />
              </ProtectedRoute>
            } />
            <Route path="/admin/reports/funnel" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminReportsFunnel />
              </ProtectedRoute>
            } />
            <Route path="/admin/reports/group-collaboration" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminReportsGroupCollaboration />
              </ProtectedRoute>
            } />
            <Route path="/admin/reports/custom" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminReportsCustom />
              </ProtectedRoute>
            } />
            
            {/* Admin System Settings Routes */}
            <Route path="/admin/settings/api-keys" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminSettingsApiKeys />
              </ProtectedRoute>
            } />
            <Route path="/admin/settings/security" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminSettingsSecurity />
              </ProtectedRoute>
            } />
            <Route path="/admin/settings/privacy" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminSettingsPrivacy />
              </ProtectedRoute>
            } />
            <Route path="/admin/settings/roles" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminSettingsRoles />
              </ProtectedRoute>
            } />
            <Route path="/admin/settings/system" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminSettingsSystem />
              </ProtectedRoute>
            } />
            <Route path="/admin/settings/notifications" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminSettingsNotifications />
              </ProtectedRoute>
            } />
            <Route path="/admin/settings/localization" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminSettingsLocalization />
              </ProtectedRoute>
            } />
            
            {/* Existing Admin Routes */}
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
