
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { useCentralizedAuth, CentralizedAuthProvider } from '@/contexts/CentralizedAuthContext';

// User/Traveler Pages
import Index from './pages/Index';
import Chat from './pages/Chat';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import TripsDashboard from './pages/TripsDashboard';
import CreateNewTrip from './pages/CreateNewTrip';
import ItineraryDetails from './pages/ItineraryDetails';
import CollaborativePlanning from './pages/CollaborativePlanning';
import BudgetTracker from './pages/BudgetTracker';
import PackingList from './pages/PackingList';
import Search from './pages/Search';
import SearchFlights from './pages/SearchFlights';
import SearchHotels from './pages/SearchHotels';
import SearchActivities from './pages/SearchActivities';
import SearchPackages from './pages/SearchPackages';
import Checkout from './pages/Checkout';
import BookingConfirmation from './pages/BookingConfirmation';
import UserProfile from './pages/UserProfile';
import TravelPreferences from './pages/TravelPreferences';
import TravelHistory from './pages/TravelHistory';
import SavedTrips from './pages/SavedTrips';
import Notifications from './pages/Notifications';
import LoyaltyRewards from './pages/LoyaltyRewards';
import PaymentMethods from './pages/PaymentMethods';
import DestinationGuide from './pages/DestinationGuide';
import TravelThemes from './pages/TravelThemes';
import TravelBlog from './pages/TravelBlog';
import Community from './pages/Community';
import HelpCenter from './pages/HelpCenter';
import ContactUs from './pages/ContactUs';
import GrievanceRedressal from './pages/GrievanceRedressal';
import Safety from './pages/Safety';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import About from './pages/About';
import Careers from './pages/Careers';
import ServerError from './pages/ServerError';
import Maintenance from './pages/Maintenance';

// Partner Pages
import PartnerLogin from './pages/PartnerLogin';
import PartnerSignup from './pages/PartnerSignup';
import PartnerForgotPassword from './pages/PartnerForgotPassword';
import PartnerLogout from './pages/PartnerLogout';
import PartnerHomepage from './pages/PartnerHomepage';
import PartnerDashboard from './pages/PartnerDashboard';
import PartnerListings from './pages/PartnerListings';
import PartnerAvailability from './pages/PartnerAvailability';
import PartnerBookings from './pages/PartnerBookings';
import PartnerPayouts from './pages/PartnerPayouts';
import PartnerBookingVolumeReports from './pages/PartnerBookingVolumeReports';
import PartnerCustomerFeedbackReports from './pages/PartnerCustomerFeedbackReports';
import PartnerRevenueReports from './pages/PartnerRevenueReports';
import PartnerCompanyProfile from './pages/PartnerCompanyProfile';
import PartnerApiCredentials from './pages/PartnerApiCredentials';
import PartnerTaxCompliance from './pages/PartnerTaxCompliance';
import PartnerHelpCenter from './pages/PartnerHelpCenter';
import PartnerContactSupport from './pages/PartnerContactSupport';
import PartnerMessages from './pages/PartnerMessages';

// Admin Pages
import AdminLogin from './pages/AdminLogin';
import AdminLogout from './pages/AdminLogout';
import AdminForgotPassword from './pages/AdminForgotPassword';
import AdminHomepage from './pages/AdminHomepage';
import AdminDashboard from './pages/AdminDashboard';
import AdminUsersList from './pages/AdminUsersList';
import AdminUserProfile from './pages/AdminUserProfile';
import AdminUserFeedback from './pages/AdminUserFeedback';
import AdminUserPreferences from './pages/AdminUserPreferences';
import AdminUserBlacklist from './pages/AdminUserBlacklist';
import AdminUserKyc from './pages/AdminUserKyc';
import AdminBookingsAll from './pages/AdminBookingsAll';
import AdminIntegrations from './pages/AdminIntegrations';
import AdminPricing from './pages/AdminPricing';
import AdminAIAnalytics from './pages/AdminAIAnalytics';
import AdminAIModels from './pages/AdminAIModels';
import AdminAIFlows from './pages/AdminAIFlows';
import AdminAIHandoffs from './pages/AdminAIHandoffs';
import AdminAIKnowledgeBase from './pages/AdminAIKnowledgeBase';
import AdminAITrainingData from './pages/AdminAITrainingData';
import AdminContentDestinations from './pages/AdminContentDestinations';
import AdminContentBlog from './pages/AdminContentBlog';
import AdminContentPromotions from './pages/AdminContentPromotions';
import AdminUGC from './pages/AdminUGC';
import AdminContentFlagged from './pages/AdminContentFlagged';
import AdminReportsOverview from './pages/AdminReportsOverview';
import AdminReportsRevenue from './pages/AdminReportsRevenue';
import AdminReportsMarketing from './pages/AdminReportsMarketing';
import AdminReportsUserBehavior from './pages/AdminReportsUserBehavior';
import AdminReportsRetention from './pages/AdminReportsRetention';
import AdminReportsFunnel from './pages/AdminReportsFunnel';
import AdminReportsGroupCollaboration from './pages/AdminReportsGroupCollaboration';
import AdminReportsCustom from './pages/AdminReportsCustom';
import AdminSettingsApiKeys from './pages/AdminSettingsApiKeys';
import AdminSettingsSecurity from './pages/AdminSettingsSecurity';
import AdminSettingsPrivacy from './pages/AdminSettingsPrivacy';
import AdminSettingsRoles from './pages/AdminSettingsRoles';
import AdminSettingsSystem from './pages/AdminSettingsSystem';
import AdminSettingsNotifications from './pages/AdminSettingsNotifications';
import AdminSettingsLocalization from './pages/AdminSettingsLocalization';

// Common Pages
import EmailVerification from './pages/EmailVerification';
import NotFound from './pages/NotFound';
import Settings from './pages/Settings';

const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles: string[] }) => {
  const { isAuthenticated, user, isLoading } = useCentralizedAuth();

  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to appropriate login page based on intended access
    const isAdminRoute = allowedRoles.includes('admin');
    const isPartnerRoute = allowedRoles.includes('partner');
    
    if (isAdminRoute) {
      return <Navigate to="/admin/login" />;
    } else if (isPartnerRoute) {
      return <Navigate to="/partner/login" />;
    } else {
      return <Navigate to="/auth/login" />;
    }
  }

  if (user && !allowedRoles.includes(user.userType)) {
    // Redirect to user's appropriate homepage
    switch (user.userType) {
      case 'admin':
        return <Navigate to="/admin/dashboard" />;
      case 'partner':
        return <Navigate to="/partner/dashboard" />;
      case 'traveler':
      default:
        return <Navigate to="/" />;
    }
  }

  return <>{children}</>;
};

function App() {
  return (
    <CentralizedAuthProvider>
      <div className="App">
        <Toaster />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/search" element={<Search />} />
            <Route path="/search/flights" element={<SearchFlights />} />
            <Route path="/search/hotels" element={<SearchHotels />} />
            <Route path="/search/activities" element={<SearchActivities />} />
            <Route path="/search/packages" element={<SearchPackages />} />
            <Route path="/explore/destinations/:city_name" element={<DestinationGuide />} />
            <Route path="/explore/themes" element={<TravelThemes />} />
            <Route path="/blog" element={<TravelBlog />} />
            <Route path="/community" element={<Community />} />
            <Route path="/help/center" element={<HelpCenter />} />
            <Route path="/help/contact" element={<ContactUs />} />
            <Route path="/help/grievance" element={<GrievanceRedressal />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            
            {/* Email verification */}
            <Route path="/auth/verify-email" element={<EmailVerification />} />
            <Route path="/email-verification" element={<EmailVerification />} />

            {/* User/Traveler Auth Routes */}
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/logout" element={<Logout />} />
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />

            {/* Protected User/Traveler Routes */}
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
            <Route path="/trips/:trip_id" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <ItineraryDetails />
              </ProtectedRoute>
            } />
            <Route path="/trips/:trip_id/collaborate" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <CollaborativePlanning />
              </ProtectedRoute>
            } />
            <Route path="/trips/:trip_id/budget" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <BudgetTracker />
              </ProtectedRoute>
            } />
            <Route path="/trips/:trip_id/packing" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <PackingList />
              </ProtectedRoute>
            } />
            <Route path="/checkout/:booking_id" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <Checkout />
              </ProtectedRoute>
            } />
            <Route path="/confirmation/:booking_id" element={
              <ProtectedRoute allowedRoles={['traveler']}>
                <BookingConfirmation />
              </ProtectedRoute>
            } />
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

            {/* Partner Routes */}
            <Route path="/partner/login" element={<PartnerLogin />} />
            <Route path="/partner/signup" element={<PartnerSignup />} />
            <Route path="/partner/forgot-password" element={<PartnerForgotPassword />} />
            <Route path="/partner/logout" element={<PartnerLogout />} />
            <Route path="/partner/home" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerHomepage />
              </ProtectedRoute>
            } />
            <Route path="/partner" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerHomepage />
              </ProtectedRoute>
            } />
            <Route path="/partner/dashboard" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/partner/inventory/listings" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerListings />
              </ProtectedRoute>
            } />
            <Route path="/partner/inventory/availability" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerAvailability />
              </ProtectedRoute>
            } />
            <Route path="/partner/bookings/list" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerBookings />
              </ProtectedRoute>
            } />
            <Route path="/partner/bookings/manage" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerBookings />
              </ProtectedRoute>
            } />
            <Route path="/partner/payouts" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerPayouts />
              </ProtectedRoute>
            } />
            <Route path="/partner/reports/volume" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerBookingVolumeReports />
              </ProtectedRoute>
            } />
            <Route path="/partner/reports/feedback" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerCustomerFeedbackReports />
              </ProtectedRoute>
            } />
            <Route path="/partner/reports/revenue" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerRevenueReports />
              </ProtectedRoute>
            } />
            <Route path="/partner/profile/company" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerCompanyProfile />
              </ProtectedRoute>
            } />
            <Route path="/partner/profile/api-credentials" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerApiCredentials />
              </ProtectedRoute>
            } />
            <Route path="/partner/profile/compliance" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerTaxCompliance />
              </ProtectedRoute>
            } />
            <Route path="/partner/help/center" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerHelpCenter />
              </ProtectedRoute>
            } />
            <Route path="/partner/help/contact" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerContactSupport />
              </ProtectedRoute>
            } />
            <Route path="/partner/messages" element={
              <ProtectedRoute allowedRoles={['partner']}>
                <PartnerMessages />
              </ProtectedRoute>
            } />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/logout" element={<AdminLogout />} />
            <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
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
            <Route path="/admin/users/list" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminUsersList />
              </ProtectedRoute>
            } />
            <Route path="/admin/users/:user_id" element={
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
            <Route path="/admin/bookings/all" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminBookingsAll />
              </ProtectedRoute>
            } />
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

            {/* Settings route - accessible to all authenticated users */}
            <Route path="/settings" element={
              <ProtectedRoute allowedRoles={['traveler', 'partner', 'admin']}>
                <Settings />
              </ProtectedRoute>
            } />

            {/* Error Pages */}
            <Route path="/404" element={<NotFound />} />
            <Route path="/500" element={<ServerError />} />
            <Route path="/maintenance" element={<Maintenance />} />

            {/* Not Found route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CentralizedAuthProvider>
  );
}

export default App;
