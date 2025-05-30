
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCentralizedAuth } from './CentralizedAuthContext';

export interface WorkflowItem {
  id: string;
  type: 'flight' | 'hotel' | 'activity' | 'package' | 'listing' | 'content' | 'user_verification' | 'payout_request';
  title: string;
  description: string;
  submittedBy: {
    id: string;
    name: string;
    type: 'traveler' | 'partner' | 'admin';
  };
  status: 'pending' | 'under_review' | 'approved' | 'rejected' | 'requires_changes';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  assignedTo?: {
    id: string;
    name: string;
    role: string;
  };
  data: any; // The actual content/data being reviewed
  comments: WorkflowComment[];
  attachments: string[];
  createdAt: string;
  updatedAt: string;
  dueDate?: string;
  tags: string[];
  approvalHistory: ApprovalAction[];
}

export interface WorkflowComment {
  id: string;
  userId: string;
  userName: string;
  userType: 'traveler' | 'partner' | 'admin';
  message: string;
  timestamp: string;
  attachments?: string[];
}

export interface ApprovalAction {
  id: string;
  action: 'submitted' | 'reviewed' | 'approved' | 'rejected' | 'requested_changes' | 'resubmitted';
  performedBy: {
    id: string;
    name: string;
    role: string;
  };
  timestamp: string;
  reason?: string;
  changes?: any;
}

interface WorkflowContextType {
  workflows: WorkflowItem[];
  isLoading: boolean;
  myWorkflows: WorkflowItem[];
  pendingApprovals: WorkflowItem[];
  createWorkflow: (data: Partial<WorkflowItem>) => Promise<{ success: boolean; message: string; workflowId?: string }>;
  updateWorkflow: (id: string, updates: Partial<WorkflowItem>) => Promise<{ success: boolean; message: string }>;
  approveWorkflow: (id: string, comment?: string) => Promise<{ success: boolean; message: string }>;
  rejectWorkflow: (id: string, reason: string, suggestedChanges?: string) => Promise<{ success: boolean; message: string }>;
  requestChanges: (id: string, changes: string) => Promise<{ success: boolean; message: string }>;
  addComment: (workflowId: string, comment: string, attachments?: string[]) => Promise<{ success: boolean; message: string }>;
  assignWorkflow: (id: string, assigneeId: string) => Promise<{ success: boolean; message: string }>;
  getWorkflowById: (id: string) => WorkflowItem | undefined;
  getWorkflowStats: () => {
    total: number;
    pending: number;
    approved: number;
    rejected: number;
    mySubmissions: number;
    myApprovals: number;
  };
}

const WorkflowContext = createContext<WorkflowContextType | undefined>(undefined);

export const useWorkflow = () => {
  const context = useContext(WorkflowContext);
  if (!context) {
    throw new Error('useWorkflow must be used within a WorkflowProvider');
  }
  return context;
};

export const WorkflowProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isAuthenticated } = useCentralizedAuth();
  const [workflows, setWorkflows] = useState<WorkflowItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock data for demonstration
  useEffect(() => {
    if (isAuthenticated) {
      loadWorkflows();
    }
  }, [isAuthenticated]);

  const loadWorkflows = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockWorkflows: WorkflowItem[] = [
        {
          id: 'wf_001',
          type: 'flight',
          title: 'New Flight Route: Delhi to Goa',
          description: 'Adding new daily flight service from Delhi to Goa starting December 2024',
          submittedBy: {
            id: 'partner_123',
            name: 'Air India Express',
            type: 'partner'
          },
          status: 'pending',
          priority: 'high',
          data: {
            airline: 'Air India Express',
            route: 'DEL-GOI',
            frequency: 'Daily',
            aircraft: 'Boeing 737-800',
            price: 4500,
            duration: '2h 15m'
          },
          comments: [],
          attachments: [],
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          tags: ['flight', 'domestic', 'new-route'],
          approvalHistory: [
            {
              id: 'action_001',
              action: 'submitted',
              performedBy: {
                id: 'partner_123',
                name: 'Air India Express',
                role: 'partner'
              },
              timestamp: new Date().toISOString()
            }
          ]
        },
        {
          id: 'wf_002',
          type: 'hotel',
          title: 'Luxury Resort Listing - Udaipur',
          description: 'New 5-star luxury resort with lake view in Udaipur',
          submittedBy: {
            id: 'partner_456',
            name: 'Oberoi Hotels',
            type: 'partner'
          },
          status: 'under_review',
          priority: 'medium',
          assignedTo: {
            id: 'admin_789',
            name: 'Content Admin',
            role: 'content_admin'
          },
          data: {
            name: 'The Oberoi Udaivilas',
            location: 'Udaipur, Rajasthan',
            rating: 5,
            amenities: ['Pool', 'Spa', 'Lake View', 'Fine Dining'],
            roomTypes: ['Deluxe', 'Suite', 'Royal Suite'],
            priceRange: '₹25,000 - ₹1,50,000'
          },
          comments: [
            {
              id: 'comment_001',
              userId: 'admin_789',
              userName: 'Content Admin',
              userType: 'admin',
              message: 'Please provide more details about the spa facilities and dining options.',
              timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
            }
          ],
          attachments: [],
          createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          updatedAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
          tags: ['hotel', 'luxury', 'rajasthan'],
          approvalHistory: [
            {
              id: 'action_002',
              action: 'submitted',
              performedBy: {
                id: 'partner_456',
                name: 'Oberoi Hotels',
                role: 'partner'
              },
              timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
            },
            {
              id: 'action_003',
              action: 'reviewed',
              performedBy: {
                id: 'admin_789',
                name: 'Content Admin',
                role: 'content_admin'
              },
              timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString()
            }
          ]
        }
      ];
      
      setWorkflows(mockWorkflows);
    } catch (error) {
      console.error('Error loading workflows:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const createWorkflow = async (data: Partial<WorkflowItem>) => {
    try {
      if (!user) throw new Error('User not authenticated');
      
      const newWorkflow: WorkflowItem = {
        id: 'wf_' + Date.now(),
        type: data.type || 'listing',
        title: data.title || '',
        description: data.description || '',
        submittedBy: {
          id: user.id,
          name: user.fullName,
          type: user.userType
        },
        status: 'pending',
        priority: data.priority || 'medium',
        data: data.data || {},
        comments: [],
        attachments: data.attachments || [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: data.tags || [],
        approvalHistory: [
          {
            id: 'action_' + Date.now(),
            action: 'submitted',
            performedBy: {
              id: user.id,
              name: user.fullName,
              role: user.role || user.userType
            },
            timestamp: new Date().toISOString()
          }
        ]
      };
      
      setWorkflows(prev => [newWorkflow, ...prev]);
      return { success: true, message: 'Workflow created successfully', workflowId: newWorkflow.id };
    } catch (error) {
      return { success: false, message: 'Failed to create workflow' };
    }
  };

  const updateWorkflow = async (id: string, updates: Partial<WorkflowItem>) => {
    try {
      setWorkflows(prev => prev.map(workflow => 
        workflow.id === id 
          ? { ...workflow, ...updates, updatedAt: new Date().toISOString() }
          : workflow
      ));
      return { success: true, message: 'Workflow updated successfully' };
    } catch (error) {
      return { success: false, message: 'Failed to update workflow' };
    }
  };

  const approveWorkflow = async (id: string, comment?: string) => {
    try {
      if (!user) throw new Error('User not authenticated');
      
      const workflow = workflows.find(w => w.id === id);
      if (!workflow) throw new Error('Workflow not found');
      
      const approvalAction: ApprovalAction = {
        id: 'action_' + Date.now(),
        action: 'approved',
        performedBy: {
          id: user.id,
          name: user.fullName,
          role: user.role || user.userType
        },
        timestamp: new Date().toISOString(),
        reason: comment
      };
      
      const newComment: WorkflowComment | undefined = comment ? {
        id: 'comment_' + Date.now(),
        userId: user.id,
        userName: user.fullName,
        userType: user.userType,
        message: comment,
        timestamp: new Date().toISOString()
      } : undefined;
      
      setWorkflows(prev => prev.map(w => 
        w.id === id 
          ? {
              ...w,
              status: 'approved' as const,
              updatedAt: new Date().toISOString(),
              approvalHistory: [...w.approvalHistory, approvalAction],
              comments: newComment ? [...w.comments, newComment] : w.comments
            }
          : w
      ));
      
      return { success: true, message: 'Workflow approved successfully' };
    } catch (error) {
      return { success: false, message: 'Failed to approve workflow' };
    }
  };

  const rejectWorkflow = async (id: string, reason: string, suggestedChanges?: string) => {
    try {
      if (!user) throw new Error('User not authenticated');
      
      const approvalAction: ApprovalAction = {
        id: 'action_' + Date.now(),
        action: 'rejected',
        performedBy: {
          id: user.id,
          name: user.fullName,
          role: user.role || user.userType
        },
        timestamp: new Date().toISOString(),
        reason,
        changes: suggestedChanges
      };
      
      const comment: WorkflowComment = {
        id: 'comment_' + Date.now(),
        userId: user.id,
        userName: user.fullName,
        userType: user.userType,
        message: `Rejected: ${reason}${suggestedChanges ? `\n\nSuggested changes: ${suggestedChanges}` : ''}`,
        timestamp: new Date().toISOString()
      };
      
      setWorkflows(prev => prev.map(w => 
        w.id === id 
          ? {
              ...w,
              status: 'rejected' as const,
              updatedAt: new Date().toISOString(),
              approvalHistory: [...w.approvalHistory, approvalAction],
              comments: [...w.comments, comment]
            }
          : w
      ));
      
      return { success: true, message: 'Workflow rejected' };
    } catch (error) {
      return { success: false, message: 'Failed to reject workflow' };
    }
  };

  const requestChanges = async (id: string, changes: string) => {
    try {
      if (!user) throw new Error('User not authenticated');
      
      const approvalAction: ApprovalAction = {
        id: 'action_' + Date.now(),
        action: 'requested_changes',
        performedBy: {
          id: user.id,
          name: user.fullName,
          role: user.role || user.userType
        },
        timestamp: new Date().toISOString(),
        changes
      };
      
      const comment: WorkflowComment = {
        id: 'comment_' + Date.now(),
        userId: user.id,
        userName: user.fullName,
        userType: user.userType,
        message: `Changes requested: ${changes}`,
        timestamp: new Date().toISOString()
      };
      
      setWorkflows(prev => prev.map(w => 
        w.id === id 
          ? {
              ...w,
              status: 'requires_changes' as const,
              updatedAt: new Date().toISOString(),
              approvalHistory: [...w.approvalHistory, approvalAction],
              comments: [...w.comments, comment]
            }
          : w
      ));
      
      return { success: true, message: 'Changes requested successfully' };
    } catch (error) {
      return { success: false, message: 'Failed to request changes' };
    }
  };

  const addComment = async (workflowId: string, comment: string, attachments?: string[]) => {
    try {
      if (!user) throw new Error('User not authenticated');
      
      const newComment: WorkflowComment = {
        id: 'comment_' + Date.now(),
        userId: user.id,
        userName: user.fullName,
        userType: user.userType,
        message: comment,
        timestamp: new Date().toISOString(),
        attachments
      };
      
      setWorkflows(prev => prev.map(w => 
        w.id === workflowId 
          ? {
              ...w,
              comments: [...w.comments, newComment],
              updatedAt: new Date().toISOString()
            }
          : w
      ));
      
      return { success: true, message: 'Comment added successfully' };
    } catch (error) {
      return { success: false, message: 'Failed to add comment' };
    }
  };

  const assignWorkflow = async (id: string, assigneeId: string) => {
    try {
      // In real implementation, fetch assignee details from API
      const assignee = {
        id: assigneeId,
        name: 'Admin User', // This would come from API
        role: 'content_admin'
      };
      
      setWorkflows(prev => prev.map(w => 
        w.id === id 
          ? {
              ...w,
              assignedTo: assignee,
              status: 'under_review' as const,
              updatedAt: new Date().toISOString()
            }
          : w
      ));
      
      return { success: true, message: 'Workflow assigned successfully' };
    } catch (error) {
      return { success: false, message: 'Failed to assign workflow' };
    }
  };

  const getWorkflowById = (id: string): WorkflowItem | undefined => {
    return workflows.find(w => w.id === id);
  };

  const getWorkflowStats = () => {
    const total = workflows.length;
    const pending = workflows.filter(w => w.status === 'pending').length;
    const approved = workflows.filter(w => w.status === 'approved').length;
    const rejected = workflows.filter(w => w.status === 'rejected').length;
    const mySubmissions = workflows.filter(w => w.submittedBy.id === user?.id).length;
    const myApprovals = workflows.filter(w => w.assignedTo?.id === user?.id).length;
    
    return { total, pending, approved, rejected, mySubmissions, myApprovals };
  };

  const myWorkflows = workflows.filter(w => w.submittedBy.id === user?.id);
  const pendingApprovals = workflows.filter(w => 
    (w.assignedTo?.id === user?.id || (user?.userType === 'admin' && !w.assignedTo)) && 
    ['pending', 'under_review', 'requires_changes'].includes(w.status)
  );

  const value: WorkflowContextType = {
    workflows,
    isLoading,
    myWorkflows,
    pendingApprovals,
    createWorkflow,
    updateWorkflow,
    approveWorkflow,
    rejectWorkflow,
    requestChanges,
    addComment,
    assignWorkflow,
    getWorkflowById,
    getWorkflowStats
  };

  return (
    <WorkflowContext.Provider value={value}>
      {children}
    </WorkflowContext.Provider>
  );
};
