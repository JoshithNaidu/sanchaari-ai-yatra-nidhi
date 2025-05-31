
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Bell, LogOut } from 'lucide-react';
import { useCentralizedAuth } from '@/contexts/CentralizedAuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';
import { NavigationMenu, MobileNavigationMenu } from '@/components/NavigationMenu';
import { 
  travelerNavigation, 
  travelerProfileNavigation,
  partnerNavigation, 
  partnerProfileNavigation,
  adminNavigation,
  getNotificationPath
} from '@/config/navigation';

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useCentralizedAuth();
  const isMobile = useIsMobile();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const handleNotificationClick = () => {
    const notificationPath = getNotificationPath(user?.userType || 'traveler');
    navigate(notificationPath);
  };

  const getLogoRedirect = () => {
    if (!user) return '/';
    switch (user.userType) {
      case 'admin':
        return '/admin';
      case 'partner':
        return '/partner';
      default:
        return '/';
    }
  };

  const getUserDisplayName = () => {
    if (!user) return 'User';
    return user.companyName || user.fullName || user.email || 'User';
  };

  const renderAdminHeader = () => (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Admin Logo */}
          <Link to={getLogoRedirect()} className="flex items-center space-x-2 lg:space-x-3">
            <img 
              src="/lovable-uploads/3cf89503-eca7-4713-bdd0-55ba1176c477.png" 
              alt="Sanchaari Admin" 
              className="h-10 lg:h-12 w-auto"
            />
            {!isMobile && (
              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 font-semibold text-xs lg:text-sm">
                ADMIN
              </Badge>
            )}
          </Link>

          {/* Admin Navigation - Desktop */}
          {!isMobile && (
            <NavigationMenu items={adminNavigation} className="hidden lg:flex" />
          )}

          {/* Admin User Menu */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={handleNotificationClick}>
              <Bell className="h-4 w-4" />
            </Button>
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    {!isMobile && <span className="hidden sm:inline text-sm">{getUserDisplayName()}</span>}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 max-h-96 overflow-y-auto bg-white border shadow-lg z-50">
                  <DropdownMenuLabel>Admin Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {isMobile && (
                    <>
                      <MobileNavigationMenu items={adminNavigation} />
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/admin/login">
                <Button size={isMobile ? "sm" : "default"}>Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );

  const renderPartnerHeader = () => (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Partner Logo */}
          <Link to={getLogoRedirect()} className="flex items-center space-x-2 lg:space-x-3">
            <img 
              src="/lovable-uploads/3cf89503-eca7-4713-bdd0-55ba1176c477.png" 
              alt="Sanchaari Partner" 
              className="h-10 lg:h-12 w-auto"
            />
            {!isMobile && (
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 font-semibold text-xs lg:text-sm">
                PARTNER
              </Badge>
            )}
          </Link>

          {/* Partner Navigation - Desktop */}
          {!isMobile && (
            <NavigationMenu items={partnerNavigation} className="hidden lg:flex" />
          )}

          {/* Partner User Menu */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={handleNotificationClick}>
              <Bell className="h-4 w-4" />
            </Button>
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    {!isMobile && <span className="hidden sm:inline text-sm">{getUserDisplayName()}</span>}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 max-h-96 overflow-y-auto bg-white border shadow-lg z-50">
                  <DropdownMenuLabel>Partner Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {isMobile && (
                    <>
                      <MobileNavigationMenu items={partnerNavigation} />
                      <DropdownMenuSeparator />
                      <DropdownMenuLabel>Account</DropdownMenuLabel>
                      <MobileNavigationMenu items={partnerProfileNavigation} />
                      <DropdownMenuSeparator />
                    </>
                  )}
                  {!isMobile && (
                    <>
                      <MobileNavigationMenu items={partnerProfileNavigation} />
                      <DropdownMenuSeparator />
                    </>
                  )}
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/partner/login">
                <Button size={isMobile ? "sm" : "default"}>Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );

  const renderTravelerHeader = () => (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/3cf89503-eca7-4713-bdd0-55ba1176c477.png" 
              alt="Sanchaari" 
              className="h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Navigation - Desktop */}
          {!isMobile && (
            <NavigationMenu items={travelerNavigation} className="hidden lg:flex" />
          )}

          {/* User Menu */}
          <div className="flex items-center space-x-2">
            {isAuthenticated && (
              <Button variant="ghost" size="sm" onClick={handleNotificationClick}>
                <Bell className="h-4 w-4" />
              </Button>
            )}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    {!isMobile && <span className="hidden sm:inline text-sm">{getUserDisplayName()}</span>}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-72 max-h-96 overflow-y-auto bg-white border shadow-lg z-50">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {isMobile && (
                    <>
                      <MobileNavigationMenu items={travelerNavigation} />
                      <DropdownMenuSeparator />
                      <DropdownMenuLabel>Profile</DropdownMenuLabel>
                    </>
                  )}
                  <MobileNavigationMenu items={travelerProfileNavigation} />
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/auth/login">
                <Button size={isMobile ? "sm" : "default"}>Login</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );

  // Render appropriate header based on user type
  if (user?.userType === 'admin') {
    return renderAdminHeader();
  }
  
  if (user?.userType === 'partner') {
    return renderPartnerHeader();
  }
  
  return renderTravelerHeader();
};

export default Header;
