import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Brain, Lightbulb, TrendingUp, AlertTriangle, Target, Zap } from 'lucide-react';

export const AIInsights = () => {
  const insights = [
    {
      id: 1,
      type: 'optimization',
      priority: 'high',
      title: 'Cash Flow Optimization Opportunity',
      description: 'Your current payment terms are costing £3,200/month in cash flow. Consider implementing 15-day payment terms.',
      impact: 'Save £38k annually',
      confidence: 92,
      action: 'Implement now'
    },
    {
      id: 2,
      type: 'risk',
      priority: 'medium',
      title: 'Runway Risk Alert',
      description: 'Based on current burn rate and market conditions, consider initiating fundraising 4 weeks earlier than planned.',
      impact: 'Reduce funding risk',
      confidence: 87,
      action: 'Plan adjustment'
    },
    {
      id: 3,
      type: 'growth',
      priority: 'high',
      title: 'Revenue Expansion Opportunity',
      description: 'Customer cohort analysis suggests 23% willing to pay premium for advanced features. Potential £15k MRR increase.',
      impact: '+£180k ARR',
      confidence: 89,
      action: 'Explore pricing'
    },
    {
      id: 4,
      type: 'efficiency',
      priority: 'low',
      title: 'Cost Structure Optimization',
      description: 'Marketing spend efficiency declining. Consider reallocating 30% budget from paid ads to content marketing.',
      impact: 'Improve CAC by 18%',
      confidence: 76,
      action: 'Test reallocation'
    }
  ];

  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'optimization':
        return Zap;
      case 'risk':
        return AlertTriangle;
      case 'growth':
        return TrendingUp;
      case 'efficiency':
        return Target;
      default:
        return Lightbulb;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-destructive text-destructive-foreground';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'low':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">AI Insights</h1>
          <p className="text-muted-foreground mt-1">Intelligent recommendations for your business</p>
        </div>
        <Button className="bg-gradient-primary">
          <Brain className="w-4 h-4 mr-2" />
          Generate New Insights
        </Button>
      </div>

      {/* AI Status */}
      <Card className="shadow-card bg-gradient-card">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">AI Analysis Engine</h3>
                <p className="text-sm text-muted-foreground">Powered by SIGMA AI</p>
              </div>
            </div>
            <Badge className="bg-success text-success-foreground">Active</Badge>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">247</div>
              <div className="text-xs text-muted-foreground">Data Points Analyzed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success">12</div>
              <div className="text-xs text-muted-foreground">Insights Generated</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">£47k</div>
              <div className="text-xs text-muted-foreground">Potential Savings</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Insights List */}
      <div className="space-y-4">
        {insights.map((insight) => {
          const Icon = getInsightIcon(insight.type);
          return (
            <Card key={insight.id} className="shadow-card hover:shadow-elevated transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{insight.title}</h3>
                      <Badge variant="outline" className="mt-1 text-xs">{insight.type}</Badge>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                  <Badge className={getPriorityColor(insight.priority)}>
                    {insight.priority} priority
                  </Badge>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{insight.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-success">{insight.impact}</span>
                    <span className="text-muted-foreground">Confidence: {insight.confidence}%</span>
                  </div>
                  <Progress value={insight.confidence} className="h-2" />
                </div>

                <Separator className="my-4" />

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Recommended Action</span>
                  <Button variant="outline" size="sm">
                    {insight.action}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Integration Info */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>AI Model Integration</CardTitle>
          <CardDescription>Connected intelligence platforms</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
              <div className="w-8 h-8 bg-gradient-primary rounded flex items-center justify-center">
                <Brain className="w-4 h-4 text-primary-foreground" />
              </div>
              <div>
                <div className="font-medium">SIGMA AI</div>
                <div className="text-xs text-muted-foreground">Financial intelligence</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
              <div className="w-8 h-8 bg-gradient-success rounded flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-success-foreground" />
              </div>
              <div>
                <div className="font-medium">Market Data</div>
                <div className="text-xs text-muted-foreground">Bloomberg, FT, BBC</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};