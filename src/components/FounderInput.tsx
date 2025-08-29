import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { MessageSquare, Save, Target, Lightbulb, Calendar } from 'lucide-react';

export const FounderInput = () => {
  const [businessGoals, setBusinessGoals] = useState('');
  const [companyInfo, setCompanyInfo] = useState('');
  const [keyMetrics, setKeyMetrics] = useState('');
  const [challenges, setChallenges] = useState('');

  const savedInputs = [
    {
      id: 1,
      type: 'Goal',
      title: 'Series A Fundraising',
      content: 'Raise £500k Series A by Q2 2024 to scale product team and accelerate customer acquisition.',
      date: '2 days ago',
      impact: 'High'
    },
    {
      id: 2,
      type: 'Metric',
      title: 'Revenue Target',
      content: 'Achieve £100k MRR by end of year with focus on enterprise customers and 95% retention rate.',
      date: '5 days ago',
      impact: 'High'
    },
    {
      id: 3,
      type: 'Challenge',
      title: 'Market Competition',
      content: 'Increasing competition from well-funded competitors. Need to differentiate through superior UX.',
      date: '1 week ago',
      impact: 'Medium'
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Goal':
        return Target;
      case 'Metric':
        return Calendar;
      case 'Challenge':
        return Lightbulb;
      default:
        return MessageSquare;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High':
        return 'bg-destructive text-destructive-foreground';
      case 'Medium':
        return 'bg-warning text-warning-foreground';
      case 'Low':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Founder Input</h1>
          <p className="text-muted-foreground mt-1">Share your goals, insights and business context</p>
        </div>
        <Button className="bg-gradient-primary">
          <Save className="w-4 h-4 mr-2" />
          Save All Updates
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input Forms */}
        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="w-5 h-5" />
                <span>Business Goals & Objectives</span>
              </CardTitle>
              <CardDescription>
                Share your short-term and long-term business goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="goals">Goals & Milestones</Label>
                <Textarea
                  id="goals"
                  placeholder="e.g., Raise Series A funding, reach 100k MRR, expand to European markets..."
                  value={businessGoals}
                  onChange={(e) => setBusinessGoals(e.target.value)}
                  rows={4}
                />
              </div>
              <Button className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Goals
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5" />
                <span>Company Context</span>
              </CardTitle>
              <CardDescription>
                Additional context about your business, industry, or market
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company Information</Label>
                <Textarea
                  id="company"
                  placeholder="e.g., B2B SaaS company in fintech space, targeting SMEs, founded in 2022..."
                  value={companyInfo}
                  onChange={(e) => setCompanyInfo(e.target.value)}
                  rows={4}
                />
              </div>
              <Button className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Context
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Key Metrics & KPIs</span>
              </CardTitle>
              <CardDescription>
                Important metrics not captured in financial data
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metrics">Additional Metrics</Label>
                <Textarea
                  id="metrics"
                  placeholder="e.g., Customer acquisition cost £150, LTV £2400, NPS score 67, churn rate 3%..."
                  value={keyMetrics}
                  onChange={(e) => setKeyMetrics(e.target.value)}
                  rows={3}
                />
              </div>
              <Button className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Metrics
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Saved Inputs & AI Integration */}
        <div className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Inputs</CardTitle>
              <CardDescription>Your saved goals and context</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {savedInputs.map((input) => {
                  const Icon = getTypeIcon(input.type);
                  return (
                    <div key={input.id} className="p-4 bg-muted rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <Icon className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium text-sm">{input.title}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className={getImpactColor(input.impact)}>
                            {input.impact}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{input.content}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{input.date}</span>
                        <Badge variant="outline">{input.type}</Badge>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Lightbulb className="w-5 h-5" />
                <span>AI Integration</span>
              </CardTitle>
              <CardDescription>How your input enhances AI recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                  <h4 className="font-medium text-primary mb-1">Personalized Forecasts</h4>
                  <p className="text-sm">Your goals help AI adjust cash flow and profitability models for your specific timeline.</p>
                </div>
                <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                  <h4 className="font-medium text-success mb-1">Targeted News</h4>
                  <p className="text-sm">Company context filters industry news to show only relevant market insights.</p>
                </div>
                <div className="p-3 bg-accent/10 border border-accent/20 rounded-lg">
                  <h4 className="font-medium text-accent mb-1">Custom Pitch Deck</h4>
                  <p className="text-sm">Your metrics and goals automatically populate investor presentations.</p>
                </div>
              </div>

              <Separator />

              <div className="text-center">
                <Button variant="outline" className="w-full">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Ask AI About Your Goals
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Challenges & Concerns</CardTitle>
              <CardDescription>Share any concerns for AI recommendations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="challenges">Current Challenges</Label>
                <Textarea
                  id="challenges"
                  placeholder="e.g., Struggling with customer retention, finding product-market fit, team scaling issues..."
                  value={challenges}
                  onChange={(e) => setChallenges(e.target.value)}
                  rows={3}
                />
              </div>
              <Button className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Challenges
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};