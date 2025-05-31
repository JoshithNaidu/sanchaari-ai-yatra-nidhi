
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
import About from "./pages/About";
import ActivitySearchResults from "./pages/ActivitySearchResults";
import AdminBookings from "./pages/AdminBookings";
import AdminBookingsAll from "./pages/AdminBookingsAll";
import AdminContentBlog from "./pages/AdminContentBlog";
import AdminContentDestinations from "./pages/AdminContentDestinations";
import AdminContentFlagged from "./pages/AdminContentFlagged";
import AdminContentPromotions from "./pages/AdminContentPromotions";
import AdminDestinations from "./pages/AdminDestinations";
import AdminFlaggedContent from "./pages/AdminFlaggedContent";
import AdminForgotPassword from "./pages/AdminForgotPassword";
import AdminHomepage from "./pages/AdminHomepage";
import AdminIntegrations from "./pages/AdminIntegrations";
import AdminLogout from "./pages/AdminLogout";
import AdminPricing from "./pages/AdminPricing";
import AdminReports from "./pages/AdminReports";
import AdminReportsCustom from "./pages/AdminReportsCustom";
import AdminReportsFunnel from "./pages/AdminReportsFunnel";
import AdminReportsGroupCollaboration from "./pages/AdminReportsGroupCollaboration";
import AdminReportsMarketing from "./pages/AdminReportsMarketing";
import AdminReportsRetention from "./pages/AdminReportsRetention";
import AdminReportsRevenue from "./pages/AdminReportsRevenue";
import AdminReportsUserBehavior from "./pages/AdminReportsUserBehavior";
import AdminReviews from "./pages/AdminReviews";
import AdminSettingsApiKeys from "./pages/AdminSettingsApiKeys";
import AdminSettingsLocalization from "./pages/AdminSettingsLocalization";
import AdminSettingsNotifications from "./pages/AdminSettingsNotifications";
import AdminSettingsPrivacy from "./pages/AdminSettingsPrivacy";
import AdminSettingsRoles from "./pages/AdminSettingsRoles";
import AdminSettingsSecurity from "./pages/AdminSettingsSecurity";
import AdminSettingsSystem from "./pages/AdminSettingsSystem";
import AdminTrips from "./pages/AdminTrips";
import AdminUGC from "./pages/AdminUGC";
import AdminUserBlacklist from "./pages/AdminUserBlacklist";
import AdminUserFeedback from "./pages/AdminUserFeedback";
import AdminUserKyc from "./pages/AdminUserKyc";
import AdminUserList from "./pages/AdminUserList";
import AdminUserPreferences from "./pages/AdminUserPreferences";
import AdminUserProfile from "./pages/AdminUserProfile";
import AdminUsers from "./pages/AdminUsers";
import AdminUsersList from "./pages/AdminUsersList";
import ApiCredentials from "./pages/ApiCredentials";
import BookingConfirmation from "./pages/BookingConfirmation";
import BookingVolumeReports from "./pages/BookingVolumeReports";
import BudgetTracker from "./pages/BudgetTracker";
import Careers from "./pages/Careers";
import Chat from "./pages/Chat";
import Checkout from "./pages/Checkout";
import CollaborativePlanning from "./pages/CollaborativePlanning";
import Community from "./pages/Community";
import CompanyProfile from "./pages/CompanyProfile";
import ContactUs from "./pages/ContactUs";
import Cookies from "./pages/Cookies";
import CreateNewTrip from "./pages/CreateNewTrip";
import CustomerFeedbackReports from "./pages/CustomerFeedbackReports";
import DestinationGuide from "./pages/DestinationGuide";
import DestinationGuides from "./pages/DestinationGuides";
import EmailVerification from "./pages/EmailVerification";
import FlightSearchResults from "./pages/FlightSearchResults";
import ForgotPassword from "./pages/ForgotPassword";
import GrievanceRedressal from "./pages/GrievanceRedressal";
import HelpCenter from "./pages/HelpCenter";
import HeroSection from "./pages/HeroSection";
import HotelSearchResults from "./pages/HotelSearchResults";
import ItineraryDetails from "./pages/ItineraryDetails";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import LoyaltyRewards from "./pages/LoyaltyRewards";
import Maintenance from "./pages/Maintenance";
import NotFound from "./pages/NotFound";
import Notifications from "./pages/Notifications";
import PackageSearchResults from "./pages/PackageSearchResults";
import PackingList from "./pages/PackingList";
import PartnerAccountSettings from "./pages/PartnerAccountSettings";
import PartnerApiCredentials from "./pages/PartnerApiCredentials";
import PartnerAvailability from "./pages/PartnerAvailability";
import PartnerBookingRequests from "./pages/PartnerBookingRequests";
import PartnerBookingVolumeReports from "./pages/PartnerBookingVolumeReports";
import PartnerBookings from "./pages/PartnerBookings";
import PartnerCheckInsToday from "./pages/PartnerCheckInsToday";
import PartnerCheckOutsToday from "./pages/PartnerCheckOutsToday";
import PartnerCompanyProfile from "./pages/PartnerCompanyProfile";
import PartnerContactSupport from "./pages/PartnerContactSupport";
import PartnerCustomerFeedbackReports from "./pages/PartnerCustomerFeedbackReports";
import PartnerDashboard from "./pages/PartnerDashboard";
import PartnerForgotPassword from "./pages/PartnerForgotPassword";
import PartnerHelpCenter from "./pages/PartnerHelpCenter";
import PartnerHomepage from "./pages/PartnerHomepage";
import PartnerListings from "./pages/PartnerListings";
import PartnerLogin from "./pages/PartnerLogin";
import PartnerLogout from "./pages/PartnerLogout";
import PartnerMessages from "./pages/PartnerMessages";
import PartnerPayouts from "./pages/PartnerPayouts";
import PartnerPricingManagement from "./pages/PartnerPricingManagement";
import PartnerPropertyDetails from "./pages/PartnerPropertyDetails";
import PartnerRevenueReports from "./pages/PartnerRevenueReports";
import PartnerReviews from "./pages/PartnerReviews";
import PartnerSignup from "./pages/PartnerSignup";
import PartnerTaxCompliance from "./pages/PartnerTaxCompliance";
import PaymentMethods from "./pages/PaymentMethods";
import Privacy from "./pages/Privacy";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import RevenueReports from "./pages/RevenueReports";
import Reviews from "./pages/Reviews";
import Safety from "./pages/Safety";
import SavedTrips from "./pages/SavedTrips";
import Search from "./pages/Search";
import SearchActivities from "./pages/SearchActivities";
import SearchFlights from "./pages/SearchFlights";
import SearchHotels from "./pages/SearchHotels";
import SearchPackages from "./pages/SearchPackages";
import ServerError from "./pages/ServerError";
import Settings from "./pages/Settings";
import TaxCompliance from "./pages/TaxCompliance";
import Terms from "./pages/Terms";
import TravelBlog from "./pages/TravelBlog";
import TravelHistory from "./pages/TravelHistory";
import TravelPreferences from "./pages/TravelPreferences";
import TravelThemes from "./pages/TravelThemes";
import TripsDashboard from "./pages/TripsDashboard";
import UserProfile from "./pages/UserProfile";
import WorkflowDashboard from "./pages/WorkflowDashboard";

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
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/safety" element={<Safety />} />
            <Route path="/grievance" element={<GrievanceRedressal />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/error" element={<ServerError />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/email-verification" element={<EmailVerification />} />

            {/* User Routes */}
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/travel-preferences" element={<TravelPreferences />} />
            <Route path="/saved-trips" element={<SavedTrips />} />
            <Route path="/travel-history" element={<TravelHistory />} />
            <Route path="/loyalty-rewards" element={<LoyaltyRewards />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/api-credentials" element={<ApiCredentials />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
            <Route path="/tax-compliance" element={<TaxCompliance />} />

            {/* Search & Discovery */}
            <Route path="/search" element={<Search />} />
            <Route path="/search/flights" element={<SearchFlights />} />
            <Route path="/search/hotels" element={<SearchHotels />} />
            <Route path="/search/activities" element={<SearchActivities />} />
            <Route path="/search/packages" element={<SearchPackages />} />
            <Route path="/search-results/flights" element={<FlightSearchResults />} />
            <Route path="/search-results/hotels" element={<HotelSearchResults />} />
            <Route path="/search-results/activities" element={<ActivitySearchResults />} />
            <Route path="/search-results/packages" element={<PackageSearchResults />} />

            {/* Travel Planning */}
            <Route path="/trips" element={<TripsDashboard />} />
            <Route path="/create-trip" element={<CreateNewTrip />} />
            <Route path="/itinerary/:id" element={<ItineraryDetails />} />
            <Route path="/collaborative-planning" element={<CollaborativePlanning />} />
            <Route path="/budget-tracker" element={<BudgetTracker />} />
            <Route path="/packing-list" element={<PackingList />} />
            <Route path="/workflow" element={<WorkflowDashboard />} />

            {/* Content */}
            <Route path="/destinations" element={<DestinationGuides />} />
            <Route path="/destination/:id" element={<DestinationGuide />} />
            <Route path="/travel-themes" element={<TravelThemes />} />
            <Route path="/blog" element={<TravelBlog />} />
            <Route path="/reviews" element={<Reviews />} />

            {/* Booking & Checkout */}
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/booking-confirmation" element={<BookingConfirmation />} />
            <Route path="/chat" element={<Chat />} />

            {/* Partner Routes */}
            <Route path="/partner" element={<PartnerHomepage />} />
            <Route path="/partner/login" element={<PartnerLogin />} />
            <Route path="/partner/signup" element={<PartnerSignup />} />
            <Route path="/partner/logout" element={<PartnerLogout />} />
            <Route path="/partner/forgot-password" element={<PartnerForgotPassword />} />
            <Route path="/partner/dashboard" element={<PartnerDashboard />} />
            <Route path="/partner/listings" element={<PartnerListings />} />
            <Route path="/partner/property/:id" element={<PartnerPropertyDetails />} />
            <Route path="/partner/bookings" element={<PartnerBookings />} />
            <Route path="/partner/booking-requests" element={<PartnerBookingRequests />} />
            <Route path="/partner/checkins-today" element={<PartnerCheckInsToday />} />
            <Route path="/partner/checkouts-today" element={<PartnerCheckOutsToday />} />
            <Route path="/partner/availability" element={<PartnerAvailability />} />
            <Route path="/partner/pricing" element={<PartnerPricingManagement />} />
            <Route path="/partner/reviews" element={<PartnerReviews />} />
            <Route path="/partner/messages" element={<PartnerMessages />} />
            <Route path="/partner/payouts" element={<PartnerPayouts />} />
            <Route path="/partner/reports/revenue" element={<PartnerRevenueReports />} />
            <Route path="/partner/reports/booking-volume" element={<PartnerBookingVolumeReports />} />
            <Route path="/partner/reports/customer-feedback" element={<PartnerCustomerFeedbackReports />} />
            <Route path="/partner/account-settings" element={<PartnerAccountSettings />} />
            <Route path="/partner/company-profile" element={<PartnerCompanyProfile />} />
            <Route path="/partner/api-credentials" element={<PartnerApiCredentials />} />
            <Route path="/partner/tax-compliance" element={<PartnerTaxCompliance />} />
            <Route path="/partner/help" element={<PartnerHelpCenter />} />
            <Route path="/partner/contact-support" element={<PartnerContactSupport />} />

            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/logout" element={<AdminLogout />} />
            <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
            <Route path="/admin/homepage" element={<AdminHomepage />} />
            
            {/* Admin AI Routes */}
            <Route path="/admin/ai/analytics" element={<AdminAIAnalytics />} />
            <Route path="/admin/ai/models" element={<AdminAIModels />} />
            <Route path="/admin/ai/knowledge-base" element={<AdminAIKnowledgeBase />} />
            <Route path="/admin/ai/flows" element={<AdminAIFlows />} />
            <Route path="/admin/ai/handoffs" element={<AdminAIHandoffs />} />
            <Route path="/admin/ai/training-data" element={<AdminAITrainingData />} />
            
            {/* Admin User Management */}
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/users/list" element={<AdminUsersList />} />
            <Route path="/admin/users/profile" element={<AdminUserProfile />} />
            <Route path="/admin/users/feedback" element={<AdminUserFeedback />} />
            <Route path="/admin/users/preferences" element={<AdminUserPreferences />} />
            <Route path="/admin/users/kyc" element={<AdminUserKyc />} />
            <Route path="/admin/users/blacklist" element={<AdminUserBlacklist />} />
            
            {/* Admin Content Management */}
            <Route path="/admin/destinations" element={<AdminDestinations />} />
            <Route path="/admin/content/blog" element={<AdminContentBlog />} />
            <Route path="/admin/content/destinations" element={<AdminContentDestinations />} />
            <Route path="/admin/content/promotions" element={<AdminContentPromotions />} />
            <Route path="/admin/content/flagged" element={<AdminContentFlagged />} />
            <Route path="/admin/flagged-content" element={<AdminFlaggedContent />} />
            <Route path="/admin/ugc" element={<AdminUGC />} />
            <Route path="/admin/reviews" element={<AdminReviews />} />
            
            {/* Admin Booking Management */}
            <Route path="/admin/bookings" element={<AdminBookings />} />
            <Route path="/admin/bookings/all" element={<AdminBookingsAll />} />
            <Route path="/admin/trips" element={<AdminTrips />} />
            
            {/* Admin Reports */}
            <Route path="/admin/reports" element={<AdminReports />} />
            <Route path="/admin/reports/overview" element={<AdminReportsOverview />} />
            <Route path="/admin/reports/revenue" element={<AdminReportsRevenue />} />
            <Route path="/admin/reports/user-behavior" element={<AdminReportsUserBehavior />} />
            <Route path="/admin/reports/marketing" element={<AdminReportsMarketing />} />
            <Route path="/admin/reports/retention" element={<AdminReportsRetention />} />
            <Route path="/admin/reports/funnel" element={<AdminReportsFunnel />} />
            <Route path="/admin/reports/custom" element={<AdminReportsCustom />} />
            <Route path="/admin/reports/group-collaboration" element={<AdminReportsGroupCollaboration />} />
            
            {/* Admin Settings */}
            <Route path="/admin/settings/system" element={<AdminSettingsSystem />} />
            <Route path="/admin/settings/security" element={<AdminSettingsSecurity />} />
            <Route path="/admin/settings/privacy" element={<AdminSettingsPrivacy />} />
            <Route path="/admin/settings/notifications" element={<AdminSettingsNotifications />} />
            <Route path="/admin/settings/localization" element={<AdminSettingsLocalization />} />
            <Route path="/admin/settings/roles" element={<AdminSettingsRoles />} />
            <Route path="/admin/settings/api-keys" element={<AdminSettingsApiKeys />} />
            
            {/* Admin Other */}
            <Route path="/admin/pricing" element={<AdminPricing />} />
            <Route path="/admin/integrations" element={<AdminIntegrations />} />
            <Route path="/admin/group-collaboration" element={<AdminGroupCollaboration />} />
            <Route path="/admin/trip-management" element={<AdminTripManagement />} />
            <Route path="/admin/chatbot-analytics" element={<AdminChatbotAnalytics />} />

            {/* Reports Routes */}
            <Route path="/reports/revenue" element={<RevenueReports />} />
            <Route path="/reports/booking-volume" element={<BookingVolumeReports />} />
            <Route path="/reports/customer-feedback" element={<CustomerFeedbackReports />} />

            {/* Catch all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CentralizedAuthProvider>
  </QueryClientProvider>
);

export default App;
