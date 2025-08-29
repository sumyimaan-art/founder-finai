import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { BarChart3, Target, Users, Building } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const ProfitabilityForecast = () => {
  const profitabilityData = {
    currentRevenue: 85000,
    projectedRevenue: 150000,
    grossMargin: 68,
    breakEvenRevenue: 120000,
    costBreakdown: {
      payroll: 45000,
      marketing: 12000,
      operations: 8500,
      rent: 6000,
      other: 3500
    }
  };

  // Dummy chart data
  const revenueData = [
    { month: 'Jan', revenue: 45000, projected: 50000 },
    { month: 'Feb', revenue: 52000, projected: 58000 },
    { month: 'Mar', revenue: 61000, projected: 67000 },
    { month: 'Apr', revenue: 68000, projected: 76000 },
    { month: 'May', revenue: 75000, projected: 85000 },
    { month: 'Jun', revenue: 85000, projected: 95000 },
    { month: 'Jul', revenue: 0, projected: 105000 },
    { month: 'Aug', revenue: 0, projected: 115000 },
    { month: 'Sep', revenue: 0, projected: 125000 },
    { month: 'Oct', revenue: 0, projected: 135000 },
    { month: 'Nov', revenue: 0, projected: 145000 },
    { month: 'Dec', revenue: 0, projected: 150000 }
  ];

  const totalCosts = Object.values(profitabilityData.costBreakdown).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Profitability Forecast</h1>
          <p className="text-muted-foreground mt-1">Revenue projections, margins and cost analysis</p>
        </div>
        <Button className="bg-gradient-primary">
          <BarChart3 className="w-4 h-4 mr-2" />
          Update Projections
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary">£{profitabilityData.currentRevenue.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Current Monthly Revenue</div>
            <div className="text-xs text-success mt-1">+23% vs last month</div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-success">£{profitabilityData.projectedRevenue.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Projected Revenue (12m)</div>
            <div className="text-xs text-success mt-1">+76% growth target</div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-accent">{profitabilityData.grossMargin}%</div>
            <div className="text-sm text-muted-foreground">Gross Margin</div>
            <div className="text-xs text-success mt-1">Above industry avg</div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-warning">£{profitabilityData.breakEvenRevenue.toLocaleString()}</div>
            <div className="text-sm text-muted-foreground">Break-even Revenue</div>
            <div className="text-xs text-warning mt-1">3 months away</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Projection Chart */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Revenue Growth Projection</CardTitle>
            <CardDescription>12-month revenue forecast with market insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-card rounded-lg p-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={revenueData}>
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
                  <Bar 
                    dataKey="revenue" 
                    fill="hsl(var(--primary))"
                    name="Monthly Revenue"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar 
                    dataKey="projected" 
                    fill="hsl(var(--success))"
                    name="Projected Revenue"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">Progress to Break-even</span>
                <span className="text-sm font-medium">71%</span>
              </div>
              <Progress value={71} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Cost Breakdown */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Cost Structure Analysis</CardTitle>
            <CardDescription>Monthly cost breakdown and optimization opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Object.entries(profitabilityData.costBreakdown).map(([category, amount]) => {
                const percentage = ((amount / totalCosts) * 100).toFixed(1);
                const icons = {
                  payroll: Users,
                  marketing: Target,
                  operations: BarChart3,
                  rent: Building,
                  other: BarChart3
                };
                const Icon = icons[category as keyof typeof icons];
                
                return (
                  <div key={category} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium capitalize">{category}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">£{amount.toLocaleString()}</span>
                        <Badge variant="outline" className="text-xs">{percentage}%</Badge>
                      </div>
                    </div>
                    <Progress value={parseFloat(percentage)} className="h-1" />
                  </div>
                );
              })}
            </div>

            <Separator className="my-4" />

            <div className="space-y-3">
              <h4 className="font-medium">Market Intelligence</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span>Industry margins improving (+3.2% YoY)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-warning rounded-full"></div>
                  <span>Salary inflation at 4.5% (FT analysis)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Commercial rent rates stabilizing</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};