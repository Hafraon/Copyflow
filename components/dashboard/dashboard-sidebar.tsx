"use client";

import { useTranslation } from 'react-i18next';
import { Zap, FileText, BarChart3, TrendingUp, Users, Settings } from 'lucide-react';

export function DashboardSidebar() {
  const { t } = useTranslation();

  return (
    <aside className="w-64 bg-card border-r flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gradient">CopyFlow</span>
        </div>
      </div>
      
      <nav className="space-y-2 px-4 flex-1">
        <NavItem icon={Zap} label={t('dashboard.sidebar.generator')} active />
        <NavItem icon={FileText} label={t('dashboard.sidebar.history')} />
        <NavItem icon={BarChart3} label={t('dashboard.sidebar.analytics')} />
        <NavItem icon={TrendingUp} label={t('dashboard.sidebar.trending')} />
        <NavItem icon={Users} label={t('dashboard.sidebar.competitors')} />
        <NavItem icon={Settings} label={t('dashboard.sidebar.settings')} />
      </nav>
      
      <div className="p-4 mt-auto">
        <div className="bg-muted rounded-lg p-3">
          <div className="text-sm font-medium">{t('dashboard.usage.plan')}</div>
          <div className="text-xs text-muted-foreground">247/500 {t('dashboard.usage.generations')}</div>
          <div className="w-full bg-background rounded-full h-2 mt-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full" style={{ width: '49%' }}></div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) {
  return (
    <a className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
      active ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
    }`}>
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}