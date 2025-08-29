import { cn } from '@/lib/utils';
import { TabType } from './Dashboard';
import { 
  Calculator, 
  TrendingUp, 
  BarChart3, 
  Newspaper, 
  Brain, 
  FileText, 
  MessageSquare, 
  Settings,
  Building2
} from 'lucide-react';

interface SidebarProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const navItems = [
  { id: 'tax-planning' as TabType, label: 'Tax Planning', icon: Calculator },
  { id: 'cash-flow' as TabType, label: 'Cash Flow Forecast', icon: TrendingUp },
  { id: 'profitability' as TabType, label: 'Profitability Forecast', icon: BarChart3 },
  { id: 'news' as TabType, label: 'Industry News', icon: Newspaper },
  { id: 'ai-insights' as TabType, label: 'AI Insights', icon: Brain },
  { id: 'pitch-deck' as TabType, label: 'VC Pitch Deck', icon: FileText },
  { id: 'founder-input' as TabType, label: 'Founder Input', icon: MessageSquare },
  { id: 'integrations' as TabType, label: 'Integrations', icon: Settings },
];

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  return (
    <div className="w-64 bg-card border-r border-border shadow-card">
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Building2 className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">AI CFO</h1>
            <p className="text-sm text-muted-foreground">Financial Intelligence</p>
          </div>
        </div>
      </div>
      
      <nav className="p-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-smooth",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                activeTab === item.id
                  ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-elevated"
                  : "text-sidebar-foreground"
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};