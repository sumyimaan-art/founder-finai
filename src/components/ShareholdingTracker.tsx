import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { PieChart, Users, TrendingDown, Calculator, AlertTriangle, Plus } from 'lucide-react';

interface Shareholder {
  id: string;
  name: string;
  type: 'founder' | 'employee' | 'investor' | 'advisor';
  shares: number;
  percentage: number;
  vestingSchedule?: string;
}

interface FundingRound {
  name: string;
  amount: number;
  valuation: number;
  newShares: number;
  dilution: number;
}

export const ShareholdingTracker = () => {
  const [fundingAmount, setFundingAmount] = useState('500000');
  const [preMoneyValuation, setPreMoneyValuation] = useState('4500000');
  const [optionPool, setOptionPool] = useState('15');

  // Current cap table
  const currentShareholders: Shareholder[] = [
    { id: '1', name: 'Founder 1 (CEO)', type: 'founder', shares: 4000000, percentage: 40 },
    { id: '2', name: 'Founder 2 (CTO)', type: 'founder', shares: 3000000, percentage: 30 },
    { id: '3', name: 'Employee Pool', type: 'employee', shares: 1500000, percentage: 15 },
    { id: '4', name: 'Angel Investors', type: 'investor', shares: 1000000, percentage: 10 },
    { id: '5', name: 'Advisors', type: 'advisor', shares: 500000, percentage: 5 }
  ];

  const totalShares = 10000000;
  const fundingAmountNum = parseFloat(fundingAmount) || 0;
  const preMoneyNum = parseFloat(preMoneyValuation) || 0;
  const postMoneyValuation = preMoneyNum + fundingAmountNum;
  const newInvestorPercentage = (fundingAmountNum / postMoneyValuation) * 100;
  const dilutionFactor = (100 - newInvestorPercentage) / 100;

  // Calculate post-funding shareholdings
  const postFundingShareholders = currentShareholders.map(shareholder => ({
    ...shareholder,
    postFundingPercentage: shareholder.percentage * dilutionFactor,
    dilution: shareholder.percentage - (shareholder.percentage * dilutionFactor)
  }));

  const fundingRounds: FundingRound[] = [
    { name: 'Seed Round', amount: 150000, valuation: 1500000, newShares: 1000000, dilution: 10 },
    { name: 'Series A (Planned)', amount: fundingAmountNum, valuation: preMoneyNum, newShares: 0, dilution: newInvestorPercentage }
  ];

  const getShareholderTypeColor = (type: string) => {
    switch (type) {
      case 'founder':
        return 'bg-primary text-primary-foreground';
      case 'employee':
        return 'bg-success text-success-foreground';
      case 'investor':
        return 'bg-accent text-accent-foreground';
      case 'advisor':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getShareholderTypeIcon = (type: string) => {
    switch (type) {
      case 'founder':
        return '👨‍💼';
      case 'employee':
        return '👥';
      case 'investor':
        return '💰';
      case 'advisor':
        return '🎯';
      default:
        return '📊';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Shareholding & Dilution Tracker</h1>
          <p className="text-muted-foreground mt-1">Track ownership structure and fundraising impact</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add Shareholder
          </Button>
          <Button className="bg-gradient-primary">
            <Calculator className="w-4 h-4 mr-2" />
            Export Cap Table
          </Button>
        </div>
      </div>

      {/* Current Cap Table */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieChart className="w-5 h-5" />
              <span>Current Cap Table</span>
            </CardTitle>
            <CardDescription>Current ownership structure ({totalShares.toLocaleString()} total shares)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentShareholders.map((shareholder) => (
                <div key={shareholder.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{getShareholderTypeIcon(shareholder.type)}</span>
                      <div>
                        <div className="font-medium text-sm">{shareholder.name}</div>
                        <Badge className={getShareholderTypeColor(shareholder.type)} variant="secondary">
                          {shareholder.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">{shareholder.percentage}%</div>
                      <div className="text-xs text-muted-foreground">{shareholder.shares.toLocaleString()} shares</div>
                    </div>
                  </div>
                  <Progress value={shareholder.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Dilution Calculator */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Fundraising Dilution Calculator</CardTitle>
            <CardDescription>Calculate ownership impact of new funding rounds</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="funding-amount">Funding Amount (£)</Label>
                <Input
                  id="funding-amount"
                  value={fundingAmount}
                  onChange={(e) => setFundingAmount(e.target.value)}
                  type="number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pre-money">Pre-Money Valuation (£)</Label>
                <Input
                  id="pre-money"
                  value={preMoneyValuation}
                  onChange={(e) => setPreMoneyValuation(e.target.value)}
                  type="number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="option-pool">New Option Pool (%)</Label>
                <Input
                  id="option-pool"
                  value={optionPool}
                  onChange={(e) => setOptionPool(e.target.value)}
                  type="number"
                />
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h4 className="font-medium">Calculated Results</h4>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="p-2 bg-gradient-card rounded">
                  <div className="text-lg font-bold text-primary">£{postMoneyValuation.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Post-Money Valuation</div>
                </div>
                <div className="p-2 bg-gradient-card rounded">
                  <div className="text-lg font-bold text-accent">{newInvestorPercentage.toFixed(1)}%</div>
                  <div className="text-xs text-muted-foreground">New Investor Share</div>
                </div>
              </div>
            </div>

            {newInvestorPercentage > 25 && (
              <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-warning" />
                  <span className="text-sm font-medium text-warning">High Dilution Warning</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Consider negotiating a higher valuation to reduce dilution
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Post-Funding Shareholdings */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingDown className="w-5 h-5" />
            <span>Post-Funding Ownership Structure</span>
          </CardTitle>
          <CardDescription>
            Projected ownership after £{fundingAmountNum.toLocaleString()} Series A round
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Shareholder</th>
                  <th className="text-right py-2">Current %</th>
                  <th className="text-right py-2">Post-Funding %</th>
                  <th className="text-right py-2">Dilution</th>
                  <th className="text-right py-2">Impact</th>
                </tr>
              </thead>
              <tbody>
                {postFundingShareholders.map((shareholder) => (
                  <tr key={shareholder.id} className="border-b">
                    <td className="py-3">
                      <div className="flex items-center space-x-2">
                        <span>{getShareholderTypeIcon(shareholder.type)}</span>
                        <span className="font-medium">{shareholder.name}</span>
                      </div>
                    </td>
                    <td className="text-right py-3 font-medium">{shareholder.percentage}%</td>
                    <td className="text-right py-3 font-medium">{(shareholder.postFundingPercentage || 0).toFixed(1)}%</td>
                    <td className="text-right py-3">
                      <span className="text-destructive">-{(shareholder.dilution || 0).toFixed(1)}%</span>
                    </td>
                    <td className="text-right py-3">
                      {(shareholder.dilution || 0) > 5 ? (
                        <Badge className="bg-destructive text-destructive-foreground">High</Badge>
                      ) : (shareholder.dilution || 0) > 2 ? (
                        <Badge className="bg-warning text-warning-foreground">Medium</Badge>
                      ) : (
                        <Badge className="bg-success text-success-foreground">Low</Badge>
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="border-b bg-muted/50">
                  <td className="py-3 font-medium">New Investor</td>
                  <td className="text-right py-3">0%</td>
                  <td className="text-right py-3 font-bold text-primary">{newInvestorPercentage.toFixed(1)}%</td>
                  <td className="text-right py-3">
                    <span className="text-success">+{newInvestorPercentage.toFixed(1)}%</span>
                  </td>
                  <td className="text-right py-3">
                    <Badge className="bg-primary text-primary-foreground">New</Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Funding History & Scenarios */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Funding History</CardTitle>
            <CardDescription>Previous and planned funding rounds</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {fundingRounds.map((round, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <div className="font-medium">{round.name}</div>
                    <div className="text-sm text-muted-foreground">
                      £{round.amount.toLocaleString()} at £{round.valuation.toLocaleString()} valuation
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-destructive">{round.dilution.toFixed(1)}%</div>
                    <div className="text-xs text-muted-foreground">dilution</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card bg-gradient-card">
          <CardHeader>
            <CardTitle>Strategic Recommendations</CardTitle>
            <CardDescription>AI-powered fundraising insights</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-success/10 border border-success/20 rounded-lg">
                <h4 className="font-medium text-success mb-1">Valuation Opportunity</h4>
                <p className="text-sm">Current £{preMoneyNum.toLocaleString()} valuation is 15% below market average for similar companies</p>
              </div>
              <div className="p-3 bg-primary/10 border border-primary/20 rounded-lg">
                <h4 className="font-medium text-primary mb-1">Option Pool Strategy</h4>
                <p className="text-sm">Consider 15-20% option pool to attract key hires post-funding</p>
              </div>
              <div className="p-3 bg-warning/10 border border-warning/20 rounded-lg">
                <h4 className="font-medium text-warning mb-1">Dilution Management</h4>
                <p className="text-sm">Founder dilution of {((currentShareholders[0].percentage + currentShareholders[1].percentage) * (1 - dilutionFactor)).toFixed(1)}% is within acceptable range for Series A</p>
              </div>
            </div>

            <Separator />

            <div className="text-center">
              <Button variant="outline" className="w-full">
                <Users className="w-4 h-4 mr-2" />
                Schedule Investor Meeting
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};