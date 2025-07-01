"use client";

import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { GeneratorSection } from '@/components/dashboard/generator-section';
import { ResultsPanel } from '@/components/dashboard/results-panel';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <main className="flex-1 overflow-auto">
        <DashboardHeader />
        <div className="container py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <GeneratorSection />
            <ResultsPanel />
          </div>
        </div>
      </main>
    </div>
  );
}