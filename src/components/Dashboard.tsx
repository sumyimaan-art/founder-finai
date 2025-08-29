import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TaxPlanning } from './TaxPlanning';
import { CashFlowForecast } from './CashFlowForecast';
import { ProfitabilityForecast } from './ProfitabilityForecast';
import { NewsFeed } from './NewsFeed';
import { AIInsights } from './AIInsights';
import { PitchDeckGenerator } from './PitchDeckGenerator';
import { FounderInput } from './FounderInput';
import { IntegrationSettings } from './IntegrationSettings';

export type TabType = 'tax-planning' | 'cash-flow' | 'profitability' | 'news' | 'ai-insights' | 'pitch-deck' | 'founder-input' | 'integrations';

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<TabType>('tax-planning');

  const renderContent = () => {
    switch (activeTab) {
      case 'tax-planning':
        return <TaxPlanning />;
      case 'cash-flow':
        return <CashFlowForecast />;
      case 'profitability':
        return <ProfitabilityForecast />;
      case 'news':
        return <NewsFeed />;
      case 'ai-insights':
        return <AIInsights />;
      case 'pitch-deck':
        return <PitchDeckGenerator />;
      case 'founder-input':
        return <FounderInput />;
      case 'integrations':
        return <IntegrationSettings />;
      default:
        return <TaxPlanning />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-hidden">
        <div className="h-full p-6 overflow-y-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};