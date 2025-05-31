
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { 
  Search, Plane, MapPin, Calendar, Package, Users, Map, BookOpen, 
  BarChart3, Building2, List, Building, DollarSign, ArrowRight, 
  ArrowLeft, Clock, TrendingUp, MessageSquare, Star, Key, FileText,
  Settings, HelpCircle, MessageCircle, Mail, Ban, Shield, Brain,
  Cpu, GitBranch, ArrowRightLeft, Database, GraduationCap, Tag,
  Flag, Eye, Megaphone, MousePointer, UserCheck, Filter, Lock,
  Server, Globe, Puzzle, User, History, Bookmark, Gift, CreditCard,
  Bell, ChevronDown
} from 'lucide-react';
import { NavigationItem } from '@/config/navigation';

const iconMap = {
  Search, Plane, MapPin, Calendar, Package, Users, Map, BookOpen,
  BarChart3, Building2, List, Building, DollarSign, ArrowRight,
  ArrowLeft, Clock, TrendingUp, MessageSquare, Star, Key, FileText,
  Settings, HelpCircle, MessageCircle, Mail, Ban, Shield, Brain,
  Cpu, GitBranch, ArrowRightLeft, Database, GraduationCap, Tag,
  Flag, Eye, Megaphone, MousePointer, UserCheck, Filter, Lock,
  Server, Globe, Puzzle, User, History, Bookmark, Gift, CreditCard,
  Bell
};

interface NavigationMenuProps {
  items: NavigationItem[];
  className?: string;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({ items, className = "" }) => {
  const location = useLocation();

  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="h-4 w-4" /> : null;
  };

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
    <nav className={`flex items-center space-x-6 ${className}`}>
      {items.map((item) => {
        if (item.children && item.children.length > 0) {
          return (
            <DropdownMenu key={item.path}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`flex items-center space-x-1 ${
                    isActive(item.path) ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {getIcon(item.icon)}
                  <span>{item.label}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border shadow-lg z-50">
                <DropdownMenuLabel>{item.label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {item.children.map((child) => (
                  <DropdownMenuItem key={child.path} asChild>
                    <Link to={child.path} className="flex items-center">
                      {getIcon(child.icon)}
                      <span className="ml-2">{child.label}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        }

        return (
          <Link 
            key={item.path}
            to={item.path} 
            className={`flex items-center space-x-1 ${
              isActive(item.path) ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            {getIcon(item.icon)}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

interface MobileNavigationMenuProps {
  items: NavigationItem[];
  onItemClick?: () => void;
}

export const MobileNavigationMenu: React.FC<MobileNavigationMenuProps> = ({ items, onItemClick }) => {
  return (
    <>
      {items.map((item) => {
        if (item.children && item.children.length > 0) {
          return (
            <React.Fragment key={item.path}>
              <DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold">
                {item.label}
              </DropdownMenuLabel>
              {item.children.map((child) => (
                <DropdownMenuItem key={child.path} asChild>
                  <Link 
                    to={child.path} 
                    className="flex items-center px-2 py-1.5"
                    onClick={onItemClick}
                  >
                    {child.icon && (
                      <span className="mr-2">
                        {React.createElement(iconMap[child.icon as keyof typeof iconMap] || 'div', { className: "h-4 w-4" })}
                      </span>
                    )}
                    <span>{child.label}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
            </React.Fragment>
          );
        }

        return (
          <DropdownMenuItem key={item.path} asChild>
            <Link 
              to={item.path} 
              className="flex items-center px-2 py-1.5"
              onClick={onItemClick}
            >
              {item.icon && (
                <span className="mr-2">
                  {React.createElement(iconMap[item.icon as keyof typeof iconMap] || 'div', { className: "h-4 w-4" })}
                </span>
              )}
              <span>{item.label}</span>
            </Link>
          </DropdownMenuItem>
        );
      })}
    </>
  );
};
