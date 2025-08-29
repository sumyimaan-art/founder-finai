import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, AlertTriangle, DollarSign, Calendar } from 'lucide-react';

export const CashFlowForecast = () => {
  const cashFlowData = {
    currentCash: 125000,
    monthlyBurn: 18500,
    runway: 6.8,
    nextFundingTarget: 500000,
    breakEvenMonth: 14
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Cash Flow Forecast</h1>
          <p className="text-muted-foreground mt-1">Monitor runway, burn rate and funding requirements</p>
        </div>
        <div className="flex items-center space-x-3">
          <Select defaultValue="12">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="6">6 months</SelectItem>
              <SelectItem value="12">12 months</SelectItem>
              <SelectItem value="24">24 months</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-gradient-primary">
            <TrendingUp className="w-4 h-4 mr-2" />
            Update Forecast
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <DollarSign className="w-5 h-5 text-success" />
              <div>
                <div className="text-2xl font-bold text-success">£{cashFlowData.currentCash.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Current Cash</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <TrendingUp className="w-5 h-5 text-destructive" />
              <div>
                <div className="text-2xl font-bold text-destructive">£{cashFlowData.monthlyBurn.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Monthly Burn</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-warning" />
              <div>
                <div className="text-2xl font-bold text-warning">{cashFlowData.runway}</div>
                <div className="text-sm text-muted-foreground">Months Runway</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              <div>
                <div className="text-2xl font-bold text-primary">{cashFlowData.breakEvenMonth}</div>
                <div className="text-sm text-muted-foreground">Break-even Month</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cash Flow Chart */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>12-Month Cash Flow Projection</CardTitle>
            <CardDescription>Based on current burn rate and market trends</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-card rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📈</div>
                <div className="text-muted-foreground">Cash flow chart visualization</div>
                <div className="text-sm text-muted-foreground mt-1">Integration with Bloomberg data</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Funding Timeline */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Funding Requirements</CardTitle>
            <CardDescription>Strategic funding timeline and milestones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-warning" />
                <span className="font-medium text-warning">Funding Alert</span>
              </div>
              <p className="text-sm">Start fundraising in 3 months to maintain runway</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Series A Target</span>
                <Badge variant="outline">£{cashFlowData.nextFundingTarget.toLocaleString()}</Badge>
              </div>
              <Progress value={35} className="h-2" />
              <div className="text-xs text-muted-foreground">35% towards funding goal</div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-medium">Market Insights Integration</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Bloomberg: Tech valuations up 12% YoY</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <span>FT: VC funding down 8% this quarter</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>BBC: UK startup ecosystem growing</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};