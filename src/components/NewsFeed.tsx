import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Search, ExternalLink, TrendingUp, Building2, Globe } from 'lucide-react';

export const NewsFeed = () => {
  const newsItems = [
    {
      id: 1,
      title: "UK Tech Startups See 15% Increase in Series A Funding",
      summary: "Recent data shows growing investor confidence in UK tech sector with particular strength in fintech and SaaS companies. Average deal size up to £3.2M.",
      source: "Financial Times",
      category: "Funding",
      impact: "positive",
      date: "2 hours ago",
      fullUrl: "https://ft.com/tech-funding-uk",
      relevance: 95
    },
    {
      id: 2,
      title: "Bank of England Maintains Interest Rates at 5.25%",
      summary: "BoE holds rates steady amid economic uncertainty. This impacts business borrowing costs and cash flow planning for growth-stage companies.",
      source: "BBC Business",
      category: "Economic Policy",
      impact: "neutral",
      date: "4 hours ago",
      fullUrl: "https://bbc.co.uk/business/rates",
      relevance: 88
    },
    {
      id: 3,
      title: "New Corporation Tax Relief for R&D Investment",
      summary: "Government announces enhanced tax relief for companies investing in research and development, potentially saving startups up to £15k annually.",
      source: "Bloomberg",
      category: "Tax & Regulation",
      impact: "positive",
      date: "6 hours ago",
      fullUrl: "https://bloomberg.com/uk-rd-relief",
      relevance: 92
    },
    {
      id: 4,
      title: "SaaS Market Growth Slows to 12% YoY",
      summary: "Industry analysis shows SaaS growth moderating from previous highs, with increased focus on profitability over growth-at-all-costs.",
      source: "Financial Times",
      category: "Industry Trends",
      impact: "cautionary",
      date: "8 hours ago",
      fullUrl: "https://ft.com/saas-growth",
      relevance: 85
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'positive':
        return 'bg-success text-success-foreground';
      case 'negative':
        return 'bg-destructive text-destructive-foreground';
      case 'cautionary':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getSourceIcon = (source: string) => {
    if (source.includes('Bloomberg')) return '📊';
    if (source.includes('Financial Times')) return '📰';
    if (source.includes('BBC')) return '📻';
    return '🌐';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Industry News & Insights</h1>
          <p className="text-muted-foreground mt-1">Personalized news affecting your business</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search news..." className="pl-10 w-64" />
          </div>
          <Button className="bg-gradient-primary">
            <Globe className="w-4 h-4 mr-2" />
            Refresh Feed
          </Button>
        </div>
      </div>

      {/* News Sources */}
      <div className="flex items-center space-x-4 p-4 bg-card rounded-lg border shadow-card">
        <span className="text-sm font-medium text-muted-foreground">Sources:</span>
        <div className="flex items-center space-x-3">
          <Badge variant="outline">📊 Bloomberg</Badge>
          <Badge variant="outline">📰 Financial Times</Badge>
          <Badge variant="outline">📻 BBC Business</Badge>
          <Badge variant="outline">🌐 Industry Reports</Badge>
        </div>
      </div>

      {/* News Items */}
      <div className="space-y-4">
        {newsItems.map((item) => (
          <Card key={item.id} className="shadow-card hover:shadow-elevated transition-smooth">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="text-lg">{getSourceIcon(item.source)}</div>
                  <div>
                    <Badge variant="outline" className="text-xs">{item.source}</Badge>
                    <span className="text-xs text-muted-foreground ml-2">{item.date}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                <Badge className={getImpactColor(item.impact)}>
                  {item.impact}
                </Badge>
                <Badge variant="secondary">
                  {item.relevance}% relevant
                </Badge>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{item.summary}</p>

              <div className="flex items-center justify-between">
                <Badge variant="outline">{item.category}</Badge>
                <Button variant="ghost" size="sm" className="text-xs">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Read Full Article
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Summary */}
      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span>Daily Business Intelligence Summary</span>
          </CardTitle>
          <CardDescription>AI-generated insights from today's news</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
              <h4 className="font-medium text-success mb-1">Positive Outlook</h4>
              <p className="text-sm">UK funding environment showing strong recovery with 15% increase in Series A deals. New R&D tax relief could provide significant cost savings.</p>
            </div>
            <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
              <h4 className="font-medium text-warning mb-1">Watch Points</h4>
              <p className="text-sm">SaaS growth moderating industry-wide. Consider pivoting growth strategy to focus on unit economics and profitability metrics.</p>
            </div>
            <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
              <h4 className="font-medium text-primary mb-1">Recommendations</h4>
              <p className="text-sm">Optimal time to explore Series A fundraising. Review R&D spending to maximize new tax relief benefits. Monitor interest rate impacts on cash flow.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};