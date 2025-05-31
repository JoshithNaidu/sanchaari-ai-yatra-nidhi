
export interface NavigationItem {
  label: string;
  path: string;
  icon?: string;
  children?: NavigationItem[];
  roles?: ('traveler' | 'partner' | 'admin')[];
}

export const travelerNavigation: NavigationItem[] = [
  {
    label: 'Search',
    path: '/search',
    icon: 'Search',
    children: [
      { label: 'Flights', path: '/search/flights', icon: 'Plane' },
      { label: 'Hotels', path: '/search/hotels', icon: 'MapPin' },
      { label: 'Activities', path: '/search/activities', icon: 'Calendar' },
      { label: 'Packages', path: '/search/packages', icon: 'Package' }
    ]
  },
  {
    label: 'My Trips',
    path: '/trips/dashboard',
    icon: 'Calendar'
  },
  {
    label: 'Community',
    path: '/community',
    icon: 'Users'
  },
  {
    label: 'Explore',
    path: '/explore/themes',
    icon: 'Map'
  },
  {
    label: 'Blog',
    path: '/blog',
    icon: 'BookOpen'
  }
];

export const travelerProfileNavigation: NavigationItem[] = [
  { label: 'Profile', path: '/profile/me', icon: 'User' },
  { label: 'My Trips', path: '/trips/dashboard', icon: 'Calendar' },
  { label: 'Travel History', path: '/profile/history', icon: 'History' },
  { label: 'Saved Trips', path: '/profile/saved', icon: 'Bookmark' },
  { label: 'Preferences', path: '/profile/preferences', icon: 'Settings' },
  { label: 'Rewards', path: '/profile/rewards', icon: 'Gift' },
  { label: 'Payment Methods', path: '/profile/payments', icon: 'CreditCard' },
  { label: 'Notifications', path: '/profile/notifications', icon: 'Bell' }
];

export const partnerNavigation: NavigationItem[] = [
  {
    label: 'Dashboard',
    path: '/partner/dashboard',
    icon: 'BarChart3'
  },
  {
    label: 'Properties',
    path: '/partner/inventory/listings',
    icon: 'Building2',
    children: [
      { label: 'Listings', path: '/partner/inventory/listings', icon: 'List' },
      { label: 'Availability', path: '/partner/inventory/availability', icon: 'Calendar' },
      { label: 'Property Details', path: '/partner/inventory/details', icon: 'Building' },
      { label: 'Pricing', path: '/partner/inventory/pricing', icon: 'DollarSign' }
    ]
  },
  {
    label: 'Bookings',
    path: '/partner/bookings/list',
    icon: 'Calendar',
    children: [
      { label: 'All Bookings', path: '/partner/bookings/list', icon: 'List' },
      { label: 'Check-ins Today', path: '/partner/bookings/checkins', icon: 'ArrowRight' },
      { label: 'Check-outs Today', path: '/partner/bookings/checkouts', icon: 'ArrowLeft' },
      { label: 'Booking Requests', path: '/partner/bookings/requests', icon: 'Clock' }
    ]
  },
  {
    label: 'Reports',
    path: '/partner/reports/revenue',
    icon: 'BarChart3',
    children: [
      { label: 'Revenue', path: '/partner/reports/revenue', icon: 'DollarSign' },
      { label: 'Booking Volume', path: '/partner/reports/booking-volume', icon: 'TrendingUp' },
      { label: 'Customer Feedback', path: '/partner/reports/customer-feedback', icon: 'MessageSquare' }
    ]
  },
  {
    label: 'Payouts',
    path: '/partner/payouts',
    icon: 'DollarSign'
  },
  {
    label: 'Reviews',
    path: '/partner/reviews',
    icon: 'Star'
  }
];

export const partnerProfileNavigation: NavigationItem[] = [
  { label: 'Company Profile', path: '/partner/profile/company', icon: 'Building2' },
  { label: 'API Credentials', path: '/partner/api-credentials', icon: 'Key' },
  { label: 'Tax Compliance', path: '/partner/tax-compliance', icon: 'FileText' },
  { label: 'Account Settings', path: '/partner/settings', icon: 'Settings' },
  { label: 'Help Center', path: '/partner/help', icon: 'HelpCircle' },
  { label: 'Contact Support', path: '/partner/contact-support', icon: 'MessageCircle' },
  { label: 'Messages', path: '/partner/messages', icon: 'Mail' }
];

export const adminNavigation: NavigationItem[] = [
  {
    label: 'Dashboard',
    path: '/admin/dashboard',
    icon: 'BarChart3'
  },
  {
    label: 'Users',
    path: '/admin/users',
    icon: 'Users',
    children: [
      { label: 'User List', path: '/admin/users/list', icon: 'List' },
      { label: 'User Feedback', path: '/admin/users/feedback', icon: 'MessageSquare' },
      { label: 'User Preferences', path: '/admin/users/preferences', icon: 'Settings' },
      { label: 'Blacklist', path: '/admin/users/blacklist', icon: 'Ban' },
      { label: 'KYC Management', path: '/admin/users/kyc', icon: 'Shield' }
    ]
  },
  {
    label: 'Bookings',
    path: '/admin/bookings',
    icon: 'Calendar'
  },
  {
    label: 'Trip Management',
    path: '/admin/trips',
    icon: 'MapPin'
  },
  {
    label: 'AI Management',
    path: '/admin/ai/analytics',
    icon: 'Brain',
    children: [
      { label: 'AI Analytics', path: '/admin/ai/analytics', icon: 'BarChart3' },
      { label: 'AI Models', path: '/admin/ai/models', icon: 'Cpu' },
      { label: 'AI Flows', path: '/admin/ai/flows', icon: 'GitBranch' },
      { label: 'AI Handoffs', path: '/admin/ai/handoffs', icon: 'ArrowRightLeft' },
      { label: 'Knowledge Base', path: '/admin/ai/knowledge-base', icon: 'Database' },
      { label: 'Training Data', path: '/admin/ai/training-data', icon: 'GraduationCap' },
      { label: 'Chatbot Analytics', path: '/admin/analytics/chatbot', icon: 'MessageSquare' }
    ]
  },
  {
    label: 'Content',
    path: '/admin/content/destinations',
    icon: 'FileText',
    children: [
      { label: 'Destinations', path: '/admin/content/destinations', icon: 'MapPin' },
      { label: 'Blog Management', path: '/admin/content/blog', icon: 'BookOpen' },
      { label: 'Promotions', path: '/admin/content/promotions', icon: 'Tag' },
      { label: 'User Generated Content', path: '/admin/content/ugc', icon: 'Users' },
      { label: 'Flagged Content', path: '/admin/content/flagged', icon: 'Flag' }
    ]
  },
  {
    label: 'Reports',
    path: '/admin/reports',
    icon: 'BarChart3',
    children: [
      { label: 'Overview', path: '/admin/reports/overview', icon: 'Eye' },
      { label: 'Revenue', path: '/admin/reports/revenue', icon: 'DollarSign' },
      { label: 'Marketing', path: '/admin/reports/marketing', icon: 'Megaphone' },
      { label: 'User Behavior', path: '/admin/reports/user-behavior', icon: 'MousePointer' },
      { label: 'Retention', path: '/admin/reports/retention', icon: 'UserCheck' },
      { label: 'Funnel Analysis', path: '/admin/reports/funnel', icon: 'Filter' },
      { label: 'Group Collaboration', path: '/admin/reports/group-collaboration', icon: 'Users' },
      { label: 'Custom Reports', path: '/admin/reports/custom', icon: 'Settings' }
    ]
  },
  {
    label: 'Settings',
    path: '/admin/settings/system',
    icon: 'Settings',
    children: [
      { label: 'API Keys', path: '/admin/settings/api', icon: 'Key' },
      { label: 'Security', path: '/admin/settings/security', icon: 'Shield' },
      { label: 'Privacy', path: '/admin/settings/privacy', icon: 'Lock' },
      { label: 'Roles', path: '/admin/settings/roles', icon: 'Users' },
      { label: 'System', path: '/admin/settings/system', icon: 'Server' },
      { label: 'Notifications', path: '/admin/settings/notifications', icon: 'Bell' },
      { label: 'Localization', path: '/admin/settings/localization', icon: 'Globe' }
    ]
  },
  {
    label: 'Reviews',
    path: '/admin/reviews',
    icon: 'Star'
  },
  {
    label: 'Integrations',
    path: '/admin/integrations',
    icon: 'Puzzle'
  },
  {
    label: 'Pricing',
    path: '/admin/pricing',
    icon: 'DollarSign'
  }
];

export const getNotificationPath = (userType: string) => {
  switch (userType) {
    case 'admin':
      return '/admin/settings/notifications';
    case 'partner':
      return '/partner/messages';
    default:
      return '/profile/notifications';
  }
};
