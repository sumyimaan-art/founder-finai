import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Calculator, TrendingDown, Percent, PiggyBank } from 'lucide-react';

export const TaxPlanning = () => {
  const [salary, setSalary] = useState('50000');
  const [dividends, setDividends] = useState('20000');
  const [pensionContrib, setPensionContrib] = useState('4000');

  const calculations = {
    currentTaxLiability: 12570,
    optimizedTaxLiability: 8490,
    savings: 12570 - 8490,
    savingsPercentage: ((12570 - 8490) / 12570 * 100).toFixed(1)
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Tax Planning Optimizer</h1>
          <p className="text-muted-foreground mt-1">Maximize your tax efficiency using UK tax law</p>
        </div>
        <Button className="bg-gradient-primary">
          <Calculator className="w-4 h-4 mr-2" />
          Optimize Now
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Input Form */}
        <Card className="lg:col-span-1 shadow-card">
          <CardHeader>
            <CardTitle>Financial Information</CardTitle>
            <CardDescription>Enter your current financial details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="salary">Annual Salary (£)</Label>
              <Input
                id="salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                type="number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dividends">Annual Dividends (£)</Label>
              <Input
                id="dividends"
                value={dividends}
                onChange={(e) => setDividends(e.target.value)}
                type="number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pension">Pension Contributions (£)</Label>
              <Input
                id="pension"
                value={pensionContrib}
                onChange={(e) => setPensionContrib(e.target.value)}
                type="number"
              />
            </div>
            <Button className="w-full">Calculate Optimization</Button>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="lg:col-span-2 shadow-card">
          <CardHeader>
            <CardTitle>Tax Optimization Results</CardTitle>
            <CardDescription>Your potential tax savings breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="text-center p-4 bg-gradient-card rounded-lg">
                <div className="text-2xl font-bold text-destructive">£{calculations.currentTaxLiability.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Current Tax Liability</div>
              </div>
              <div className="text-center p-4 bg-gradient-card rounded-lg">
                <div className="text-2xl font-bold text-success">£{calculations.optimizedTaxLiability.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground">Optimized Tax Liability</div>
              </div>
            </div>

            <div className="text-center p-6 bg-gradient-success rounded-lg text-success-foreground mb-6">
              <div className="text-3xl font-bold">£{calculations.savings.toLocaleString()}</div>
              <div className="text-lg">Potential Annual Savings ({calculations.savingsPercentage}%)</div>
            </div>

            <Separator className="my-6" />

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Optimization Strategies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                  <PiggyBank className="w-5 h-5 mt-0.5 text-success" />
                  <div>
                    <div className="font-medium">Pension Contributions</div>
                    <div className="text-sm text-muted-foreground">Increase to £40k annual allowance</div>
                    <Badge variant="secondary" className="mt-1">Save £2,400</Badge>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-muted rounded-lg">
                  <Percent className="w-5 h-5 mt-0.5 text-success" />
                  <div>
                    <div className="font-medium">Salary vs Dividends</div>
                    <div className="text-sm text-muted-foreground">Optimal 60/40 split recommended</div>
                    <Badge variant="secondary" className="mt-1">Save £1,680</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};