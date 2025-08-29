import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { 
  Settings, 
  Cloud, 
  Database, 
  TrendingUp, 
  Brain, 
  CheckCircle, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export const IntegrationSettings = () => {
  const [googleCloudEnabled, setGoogleCloudEnabled] = useState(true);
  const [payablEnabled, setPayablEnabled] = useState(false);
  const [ipushpullEnabled, setIpushpullEnabled] = useState(true);
  const [sigmaAiEnabled, setSigmaAiEnabled] = useState(true);

  const integrations = [
    {
      id: 'google-cloud',
      name: 'Google Cloud',
      description: 'Cloud hosting and infrastructure services',
      icon: Cloud,
      status: 'connected',
      enabled: googleCloudEnabled,
      setEnabled: setGoogleCloudEnabled,
      features: ['Secure hosting', 'Auto-scaling', 'Data analytics', 'ML services'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'payabl',
      name: 'Payabl',
      description: 'Payment data and financial transaction insights',
      icon: Database,
      status: 'available',
      enabled: payablEnabled,
      setEnabled: setPayablEnabled,
      features: ['Transaction data', 'Payment analytics', 'Cash flow insights', 'Revenue tracking'],
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'ipushpull',
      name: 'ipushpull',
      description: 'Real-time data optimization and automation',
      icon: TrendingUp,
      status: 'connected',
      enabled: ipushpullEnabled,
      setEnabled: setIpushpullEnabled,
      features: ['Data optimization', 'Real-time sync', 'Automated reporting', 'API management'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      id: 'sigma-ai',
      name: 'SIGMA AI',
      description: 'Advanced AI analytics and business intelligence',
      icon: Brain,
      status: 'connected',
      enabled: sigmaAiEnabled,
      setEnabled: setSigmaAiEnabled,
      features: ['AI insights', 'Predictive analytics', 'Risk assessment', 'Optimization'],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50'
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'connected':
        return <Badge className="bg-success text-success-foreground">Connected</Badge>;
      case 'available':
        return <Badge variant="outline">Available</Badge>;
      case 'error':
        return <Badge className="bg-destructive text-destructive-foreground">Error</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="w-5 h-5 text-success" />;
      case 'available':
        return <AlertCircle className="w-5 h-5 text-warning" />;
      case 'error':
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      default:
        return <AlertCircle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Integration Settings</h1>
          <p className="text-muted-foreground mt-1">Connect and configure external platforms</p>
        </div>
        <Button className="bg-gradient-primary">
          <Settings className="w-4 h-4 mr-2" />
          Test All Connections
        </Button>
      </div>

      {/* Integration Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {integrations.map((integration) => {
          const Icon = integration.icon;
          return (
            <Card key={integration.id} className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 ${integration.bgColor} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${integration.color}`} />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{integration.name}</CardTitle>
                      <CardDescription>{integration.description}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getStatusIcon(integration.status)}
                    {getStatusBadge(integration.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor={`${integration.id}-toggle`} className="text-sm font-medium">
                    Enable Integration
                  </Label>
                  <Switch
                    id={`${integration.id}-toggle`}
                    checked={integration.enabled}
                    onCheckedChange={integration.setEnabled}
                  />
                </div>

                {integration.enabled && (
                  <>
                    <Separator />
                    <div className="space-y-3">
                      <h4 className="text-sm font-medium">Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {integration.features.map((feature, index) => (
                          <div key={index} className="text-xs text-muted-foreground flex items-center space-x-1">
                            <div className="w-1 h-1 bg-primary rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {integration.status === 'available' && (
                      <div className="space-y-3">
                        <Separator />
                        <div className="space-y-2">
                          <Label htmlFor={`${integration.id}-key`} className="text-sm">
                            API Key / Connection
                          </Label>
                          <div className="flex space-x-2">
                            <Input
                              id={`${integration.id}-key`}
                              placeholder="Enter API key or connection details"
                              type="password"
                            />
                            <Button size="sm">Connect</Button>
                          </div>
                        </div>
                      </div>
                    )}

                    {integration.status === 'connected' && (
                      <div className="space-y-2">
                        <Separator />
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Last sync</span>
                          <span className="text-sm">2 minutes ago</span>
                        </div>
                        <Button variant="outline" size="sm" className="w-full">
                          <ExternalLink className="w-3 h-3 mr-2" />
                          View Configuration
                        </Button>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Panel Presentation Info */}
      <Card className="shadow-card bg-gradient-card">
        <CardHeader>
          <CardTitle>Panel Presentation Setup</CardTitle>
          <CardDescription>Optimize integrations for your Google Cloud, Payabl, ipushpull, and SIGMA AI presentation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-medium">Recommended Configuration</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Google Cloud: Host demo environment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Payabl: Import sample transaction data</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>ipushpull: Enable real-time data sync</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>SIGMA AI: Activate advanced analytics</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-medium">Demo Benefits</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Showcase seamless platform integration</p>
                <p>• Demonstrate real-time data processing</p>
                <p>• Highlight AI-driven insights</p>
                <p>• Show scalable cloud architecture</p>
              </div>
              <Button className="w-full mt-4">
                <Settings className="w-4 h-4 mr-2" />
                Optimize for Presentation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API Status */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>System Status</CardTitle>
          <CardDescription>Real-time status of all integrations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-success">99.9%</div>
              <div className="text-xs text-muted-foreground">Uptime</div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">3/4</div>
              <div className="text-xs text-muted-foreground">Connected</div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-accent">47ms</div>
              <div className="text-xs text-muted-foreground">Avg Response</div>
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-warning">1.2M</div>
              <div className="text-xs text-muted-foreground">API Calls/day</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};