import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cloud, Database, TrendingUp, Brain, CheckCircle, AlertCircle } from 'lucide-react';

export const IntegrationStatusWidget = () => {
  const integrations = [
    { name: 'Google Cloud', icon: Cloud, status: 'connected', color: 'text-blue-600' },
    { name: 'Payabl', icon: Database, status: 'disconnected', color: 'text-green-600' },
    { name: 'ipushpull', icon: TrendingUp, status: 'connected', color: 'text-purple-600' },
    { name: 'SIGMA AI', icon: Brain, status: 'connected', color: 'text-indigo-600' }
  ];

  const getStatusIcon = (status: string) => {
    return status === 'connected' ? (
      <CheckCircle className="w-3 h-3 text-success" />
    ) : (
      <AlertCircle className="w-3 h-3 text-warning" />
    );
  };

  const connectedCount = integrations.filter(i => i.status === 'connected').length;

  return (
    <Card className="fixed bottom-6 left-6 w-64 shadow-elevated z-50 glass-effect">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold">Integrations</h3>
          <Badge variant="outline" className="text-xs">
            {connectedCount}/{integrations.length} Active
          </Badge>
        </div>
        <div className="space-y-2">
          {integrations.map((integration) => {
            const Icon = integration.icon;
            return (
              <div key={integration.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Icon className={`w-4 h-4 ${integration.color}`} />
                  <span className="text-xs font-medium">{integration.name}</span>
                </div>
                {getStatusIcon(integration.status)}
              </div>
            );
          })}
        </div>
        <div className="mt-3 pt-2 border-t border-border">
          <div className="text-xs text-muted-foreground text-center">
            System Status: {connectedCount === integrations.length ? 'All Systems Operational' : 'Some Services Down'}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};