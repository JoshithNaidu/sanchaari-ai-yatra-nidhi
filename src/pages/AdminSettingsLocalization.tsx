
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Languages, Globe, Search, Edit } from 'lucide-react';

const AdminSettingsLocalization = () => {
  const languages = [
    {
      code: 'en',
      name: 'English',
      nativeName: 'English',
      status: 'enabled',
      completion: 100,
      translatedPhrases: 2500,
      totalPhrases: 2500
    },
    {
      code: 'hi',
      name: 'Hindi',
      nativeName: 'हिन्दी',
      status: 'enabled',
      completion: 87,
      translatedPhrases: 2175,
      totalPhrases: 2500
    },
    {
      code: 'ta',
      name: 'Tamil',
      nativeName: 'தமிழ்',
      status: 'enabled',
      completion: 72,
      translatedPhrases: 1800,
      totalPhrases: 2500
    },
    {
      code: 'bn',
      name: 'Bengali',
      nativeName: 'বাংলা',
      status: 'disabled',
      completion: 45,
      translatedPhrases: 1125,
      totalPhrases: 2500
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'enabled' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
  };

  const getCompletionColor = (completion: number) => {
    if (completion >= 90) return 'bg-green-500';
    if (completion >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Language & Localization</h1>
              <p className="text-sm text-gray-600">Manage multilingual capabilities</p>
            </div>
            <div className="flex items-center gap-4">
              <Button size="sm">Add Language</Button>
              <Link to="/admin">
                <Button variant="outline" size="sm">Back to Dashboard</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Supported Languages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Languages className="h-5 w-5" />
              Supported Languages
            </CardTitle>
            <CardDescription>Manage enabled languages and translation progress</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {languages.map((language) => (
                <div key={language.code} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-medium">{language.name}</div>
                        <div className="text-sm text-gray-600">{language.nativeName}</div>
                      </div>
                      <Badge className={getStatusColor(language.status)}>
                        {language.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4">
                      <Switch 
                        checked={language.status === 'enabled'}
                        disabled={language.code === 'en'} // English is always enabled
                      />
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Translation Progress</span>
                      <span>{language.completion}% ({language.translatedPhrases}/{language.totalPhrases})</span>
                    </div>
                    <Progress 
                      value={language.completion} 
                      className="h-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Phrase Editor */}
        <Card>
          <CardHeader>
            <CardTitle>Translation Editor</CardTitle>
            <CardDescription>Search and edit translation phrases</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search phrases or keys..."
                  className="pl-10"
                />
              </div>
              
              <div className="border rounded-lg">
                <div className="p-4 border-b bg-gray-50">
                  <div className="font-medium">Key: welcome.title</div>
                </div>
                <div className="p-4 space-y-3">
                  <div>
                    <label className="text-sm font-medium">English (Source)</label>
                    <Input value="Welcome to Sanchaari" disabled className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Hindi</label>
                    <Input value="सांचारी में आपका स्वागत है" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Tamil</label>
                    <Input value="சான்சாரிக்கு வரவேற்கிறோம்" className="mt-1" />
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">Save Changes</Button>
                    <Button size="sm" variant="outline">Auto-translate</Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Auto-translation Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Auto-translation Settings
            </CardTitle>
            <CardDescription>Configure automatic translation behavior</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Enable auto-translation</div>
                <div className="text-sm text-gray-600">Automatically translate new phrases using AI</div>
              </div>
              <Switch defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Require manual review</div>
                <div className="text-sm text-gray-600">Auto-translated content needs review before publishing</div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Translation Statistics */}
        <Card>
          <CardHeader>
            <CardTitle>Translation Statistics</CardTitle>
            <CardDescription>Overview of translation progress and activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">2,500</div>
                <div className="text-sm text-gray-600">Total Phrases</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4</div>
                <div className="text-sm text-gray-600">Active Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">78%</div>
                <div className="text-sm text-gray-600">Avg Completion</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminSettingsLocalization;
