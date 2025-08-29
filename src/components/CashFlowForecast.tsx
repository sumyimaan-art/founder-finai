import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, AlertTriangle, DollarSign, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const CashFlowForecast = () => {
  const cashFlowData = {
    currentCash: 125000,
    monthlyBurn: 18500,
    runway: 6.8,
    nextFundingTarget: 500000,
    breakEvenMonth: 14
  };

  // Dummy chart data
  const chartData = [
    { month: 'Jan', cash: 125000, runway: 125000 },
    { month: 'Feb', cash: 106500, runway: 106500 },
    { month: 'Mar', cash: 88000, runway: 88000 },
    { month: 'Apr', cash: 69500, runway: 69500 },
    { month: 'May', cash: 51000, runway: 51000 },
    { month: 'Jun', cash: 32500, runway: 32500 },
    { month: 'Jul', cash: 14000, runway: 14000 },
    { month: 'Aug', cash: -4500, runway: 0 },
    { month: 'Sep', cash: -23000, runway: 0 },
    { month: 'Oct', cash: -41500, runway: 0 },
    { month: 'Nov', cash: -60000, runway: 0 },
    { month: 'Dec', cash: -78500, runway: 0 }
  ];

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
            <div className="h-64 bg-gradient-card rounded-lg p-4">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false}
                    tickLine={false}
                    className="text-xs"
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    className="text-xs"
                    tickFormatter={(value) => `£${(value/1000).toFixed(0)}k`}
                  />
                  <Tooltip 
                    formatter={(value, name) => [`£${value.toLocaleString()}`, name]}
                    labelStyle={{ color: 'hsl(var(--foreground))' }}
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="cash" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                    name="Cash Balance"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="runway" 
                    stroke="hsl(var(--destructive))" 
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: 'hsl(var(--destructive))', strokeWidth: 2, r: 3 }}
                    name="Runway Projection"
                  />
                </LineChart>
              </ResponsiveContainer>
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