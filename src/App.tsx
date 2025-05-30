import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { useCentralizedAuth, CentralizedAuthProvider } from '@/contexts/CentralizedAuthContext';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import TravelerLogin from './pages/TravelerLogin';
import TravelerSignup from './pages/TravelerSignup';
import TravelerForgotPassword from './pages/TravelerForgotPassword';
import TravelerDashboard from './pages/TravelerDashboard';
import PartnerLogin from './pages/PartnerLogin';
import PartnerSignup from './pages/PartnerSignup';
import PartnerForgotPassword from './pages/PartnerForgotPassword';
import PartnerLogout from './pages/PartnerLogout';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import EmailVerification from './pages/EmailVerification';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';
import Unauthorized from './pages/Unauthorized';
import PartnerDashboard from './pages/PartnerDashboard';
import PartnerListings from './pages/PartnerListings';
import PartnerPayouts from './pages/PartnerPayouts';

const ProtectedRoute = ({ children, allowedRoles }: { children: React.ReactNode, allowedRoles: string[] }) => {
  const { isAuthenticated, user } = useCentralizedAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (user && !allowedRoles.includes(user.userType)) {
    return <Navigate to="/unauthorized" />;
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
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/email-verification" element={<EmailVerification />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Traveler routes */}
            <Route path="/traveler/login" element={<TravelerLogin />} />
            <Route path="/traveler/signup" element={<TravelerSignup />} />
            <Route path="/traveler/forgot-password" element={<TravelerForgotPassword />} />
            <Route
              path="/trips/dashboard"
              element={
                <ProtectedRoute allowedRoles={['traveler']}>
                  <TravelerDashboard />
                </ProtectedRoute>
              }
            />

            {/* Partner routes */}
            <Route path="/partner/login" element={<PartnerLogin />} />
            <Route path="/partner/signup" element={<PartnerSignup />} />
            <Route path="/partner/forgot-password" element={<PartnerForgotPassword />} />
            <Route path="/partner/logout" element={<PartnerLogout />} />
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

            {/* Not Found route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </CentralizedAuthProvider>
  );
}

export default App;
