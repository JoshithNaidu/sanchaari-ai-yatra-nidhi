
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Plus, Trash2, Edit, Download, Users } from 'lucide-react';

const BudgetTracker = () => {
  const { tripId } = useParams();
  const [isGroupTrip] = useState(true);

  const budgetSummary = {
    total: 120000,
    spent: 45000,
    forecast: 85000
  };

  const categories = [
    { name: 'Flights', budgeted: 40000, spent: 38000, color: 'bg-blue-500' },
    { name: 'Lodging', budgeted: 35000, spent: 7000, color: 'bg-green-500' },
    { name: 'Food', budgeted: 25000, spent: 0, color: 'bg-yellow-500' },
    { name: 'Transport', budgeted: 12000, spent: 0, color: 'bg-purple-500' },
    { name: 'Experiences', budgeted: 8000, spent: 0, color: 'bg-pink-500' }
  ];

  const expenses = [
    { id: '1', title: 'Flight Tickets', amount: 38000, category: 'Flights', notes: 'Round trip for 2', paidBy: 'John Doe' },
    { id: '2', title: 'Hotel Booking', amount: 7000, category: 'Lodging', notes: '1 night advance', paidBy: 'Jane Smith' }
  ];

  const members = [
    { id: '1', name: 'John Doe', owed: 22500, paid: 38000 },
    { id: '2', name: 'Jane Smith', owed: 22500, paid: 7000 }
  ];

  const getProgressPercentage = (spent: number, budgeted: number) => {
    return Math.min((spent / budgeted) * 100, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link to={`/trips/${tripId}`}>
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Itinerary
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Budget & Expenses</h1>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Expense
            </Button>
          </div>
        </div>

        {/* Budget Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Budget Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">₹{budgetSummary.total.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Total Budget</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">₹{budgetSummary.spent.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Actual Spent</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">₹{budgetSummary.forecast.toLocaleString()}</div>
                <div className="text-sm text-gray-600">Forecast</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Budget Progress</span>
                <span>{((budgetSummary.spent / budgetSummary.total) * 100).toFixed(1)}%</span>
              </div>
              <Progress value={(budgetSummary.spent / budgetSummary.total) * 100} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Categories & Expenses */}
          <div className="space-y-6">
            {/* Category Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Budget by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {categories.map((category) => (
                    <div key={category.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{category.name}</span>
                        <span className="text-sm text-gray-600">
                          ₹{category.spent.toLocaleString()} / ₹{category.budgeted.toLocaleString()}
                        </span>
                      </div>
                      <Progress 
                        value={getProgressPercentage(category.spent, category.budgeted)} 
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expense List */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Expenses</CardTitle>
                  <Button size="sm" variant="outline">
                    <Plus className="h-3 w-3 mr-1" />
                    Add
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {expenses.map((expense) => (
                    <div key={expense.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <div className="font-medium">{expense.title}</div>
                        <div className="text-sm text-gray-600">
                          <Badge variant="outline" className="mr-2">{expense.category}</Badge>
                          {expense.notes}
                        </div>
                        {isGroupTrip && (
                          <div className="text-xs text-gray-500 mt-1">Paid by: {expense.paidBy}</div>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium">₹{expense.amount.toLocaleString()}</span>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Group Split View */}
          {isGroupTrip && (
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Group Split
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {members.map((member) => (
                      <div key={member.id} className="p-4 border rounded-lg">
                        <div className="font-medium mb-2">{member.name}</div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-600">Amount Owed:</span>
                            <div className="font-medium">₹{member.owed.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-gray-600">Amount Paid:</span>
                            <div className="font-medium">₹{member.paid.toLocaleString()}</div>
                          </div>
                        </div>
                        <div className="mt-3">
                          {member.paid > member.owed ? (
                            <Badge variant="default" className="bg-green-100 text-green-800">
                              Overpaid by ₹{(member.paid - member.owed).toLocaleString()}
                            </Badge>
                          ) : member.paid < member.owed ? (
                            <Badge variant="destructive">
                              Owes ₹{(member.owed - member.paid).toLocaleString()}
                            </Badge>
                          ) : (
                            <Badge variant="outline">Settled</Badge>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    <div className="pt-4 border-t">
                      <Button className="w-full mb-2" variant="outline">
                        Auto-Balance
                      </Button>
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Request Payment
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;
