
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { useCentralizedAuth, CentralizedAuthProvider } from '@/contexts/CentralizedAuthContext';
import PartnerLogin from './pages/PartnerLogin';
import PartnerSignup from './pages/PartnerSignup';
import PartnerForgotPassword from './pages/PartnerForgotPassword';
import PartnerLogout from './pages/PartnerLogout';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import EmailVerification from './pages/EmailVerification';
import NotFound from './pages/NotFound';
import PartnerDashboard from './pages/PartnerDashboard';
import PartnerListings from './pages/PartnerListings';
import PartnerPayouts from './pages/PartnerPayouts';
import PartnerHomepage from './pages/PartnerHomepage';
import Settings from './pages/Settings';
import PartnerBookingVolumeReports from './pages/PartnerBookingVolumeReports';
import PartnerCustomerFeedbackReports from './pages/PartnerCustomerFeedbackReports';
import PartnerRevenueReports from './pages/PartnerRevenueReports';
import PartnerCompanyProfile from './pages/PartnerCompanyProfile';
import PartnerApiCredentials from './pages/PartnerApiCredentials';
import PartnerTaxCompliance from './pages/PartnerTaxCompliance';
import PartnerHelpCenter from './pages/PartnerHelpCenter';
import PartnerContactSupport from './pages/PartnerContactSupport';
import PartnerMessages from './pages/PartnerMessages';

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
    return <Navigate to="/partner/login" />;
  }

  if (user && !allowedRoles.includes(user.userType)) {
    return <Navigate to="/partner/login" />;
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
            {/* Redirect root to partner login for now */}
            <Route path="/" element={<Navigate to="/partner/login" />} />
            
            {/* Email verification */}
            <Route path="/email-verification" element={<EmailVerification />} />

            {/* Partner routes */}
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
            <Route 
              path="/partner/dashboard" 
              element={
                <ProtectedRoute allowedRoles={['partner']}>
                  <PartnerDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/partner/inventory/listings" 
              element={
                <ProtectedRoute allowedRoles={['partner']}>
                  <PartnerListings />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/partner/payouts" 
              element={
                <ProtectedRoute allowedRoles={['partner']}>
                  <PartnerPayouts />
                </ProtectedRoute>
              } 
            />

            {/* Partner Reports */}
            <Route 
              path="/partner/reports/volume" 
              element={
                <ProtectedRoute allowedRoles={['partner']}>
                  <PartnerBookingVolumeReports />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/partner/reports/feedback" 
              element={
                <ProtectedRoute allowedRoles={['partner']}>
                  <PartnerCustomerFeedbackReports />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/partner/reports/revenue" 
              element={
                <ProtectedRoute allowedRoles={['partner']}>
                  <PartnerRevenueReports />
                </ProtectedRoute>
              } 
            />

            {/* Partner Profile */}
            <Route 
              path="/partner/profile/company" 
              element={
                <ProtectedRoute allowedRoles={['partner']}>
                  <PartnerCompanyProfile />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/partner/profile/api-credentials" 
              element={
                <ProtectedRoute allowedRoles={['partner']}>
                  <PartnerApiCredentials />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/partner/profile/compliance" 
              element={
                <ProtectedRoute allowedRoles={['partner']}>
                  <PartnerTaxCompliance />
                </ProtectedRoute>
              } 
            />

            {/* Partner Support */}
            <Route 
              path="/partner/help/center" 
              element={
                <ProtectedRoute allowedRoles={['partner']}>
                  <PartnerHelpCenter />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/partner/help/contact" 
              element={
                <ProtectedRoute allowedRoles={['partner']}>
                  <PartnerContactSupport />
                </ProtectedRoute>
              } 
            />

            {/* Partner Communication */}
            <Route 
              path="/partner/messages" 
              element={
                <ProtectedRoute allowedRoles={['partner']}>
                  <PartnerMessages />
                </ProtectedRoute>
              } 
            />

            {/* Admin routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            {/* Settings route - accessible to all authenticated users */}
            <Route
              path="/settings"
              element={
                <ProtectedRoute allowedRoles={['traveler', 'partner', 'admin']}>
                  <Settings />
                </ProtectedRoute>
              }
            />

            {/* Not Found route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CentralizedAuthProvider>
  );
}

export default App;
