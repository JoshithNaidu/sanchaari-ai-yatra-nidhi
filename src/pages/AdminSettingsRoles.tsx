
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserCog, Plus, Edit, Users } from 'lucide-react';

const AdminSettingsRoles = () => {
  const roles = [
    {
      id: 'role-1',
      name: 'Super Admin',
      description: 'Full system access and control',
      assignedUsers: 2,
      permissions: ['all'],
      createdBy: 'System',
      lastEdited: '2024-05-01'
    },
    {
      id: 'role-2',
      name: 'Content Manager',
      description: 'Manage content and destinations',
      assignedUsers: 5,
      permissions: ['content.read', 'content.write', 'destinations.manage'],
      createdBy: 'admin@sanchaari.com',
      lastEdited: '2024-05-15'
    },
    {
      id: 'role-3',
      name: 'Support Agent',
      description: 'Handle customer support queries',
      assignedUsers: 12,
      permissions: ['users.read', 'bookings.read', 'support.manage'],
      createdBy: 'admin@sanchaari.com',
      lastEdited: '2024-05-10'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">User Roles & Permissions</h1>
              <p className="text-sm text-gray-600">Manage access control for internal users</p>
            </div>
            <div className="flex items-center gap-4">
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Create Role
              </Button>
              <Link to="/admin">
                <Button variant="outline" size="sm">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Roles List */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <UserCog className="h-5 w-5" />
              System Roles
            </CardTitle>
            <CardDescription>Manage user roles and their permissions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {roles.map((role) => (
                <div key={role.id} className="border rounded-lg p-4 hover:bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-medium text-lg">{role.name}</h3>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          {role.assignedUsers}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{role.description}</p>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {role.permissions.slice(0, 3).map((permission, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                        {role.permissions.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{role.permissions.length - 3} more
                          </Badge>
                        )}
                      </div>
                      <div className="text-xs text-gray-500">
                        Created by {role.createdBy} • Last edited {role.lastEdited}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Users className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Permission Matrix */}
        <Card>
          <CardHeader>
            <CardTitle>Permission Templates</CardTitle>
            <CardDescription>Pre-defined role templates for quick setup</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <h4 className="font-medium mb-2">Admin Template</h4>
                <p className="text-sm text-gray-600 mb-3">Full system access</p>
                <Button size="sm" variant="outline" className="w-full">
                  Use Template
                </Button>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <h4 className="font-medium mb-2">Manager Template</h4>
                <p className="text-sm text-gray-600 mb-3">Department-level access</p>
                <Button size="sm" variant="outline" className="w-full">
                  Use Template
                </Button>
              </div>
              <div className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <h4 className="font-medium mb-2">Agent Template</h4>
                <p className="text-sm text-gray-600 mb-3">Limited operational access</p>
                <Button size="sm" variant="outline" className="w-full">
                  Use Template
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSettingsRoles;
