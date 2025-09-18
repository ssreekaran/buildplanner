import React, { useState } from 'react';
import HeroLayout from '@/components/layout/HeroLayout';
import SideBySideLayout from '@/components/layout/SideBySideLayout';
import VerticalFlowLayout from '@/components/layout/VerticalFlowLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Monitor, Palette, Layout } from 'lucide-react';

const Index = () => {
  const [currentLayout, setCurrentLayout] = useState<'hero' | 'sideBySide' | 'vertical'>('hero');

  const layouts = [
    { 
      id: 'hero' as const, 
      name: 'Hero Layout', 
      description: 'Cinematic hero section with overlaid options',
      icon: Monitor 
    },
    { 
      id: 'sideBySide' as const, 
      name: 'Side-by-Side Layout', 
      description: 'Detailed comparison cards with feature lists',
      icon: Layout 
    },
    { 
      id: 'vertical' as const, 
      name: 'Vertical Flow Layout', 
      description: 'Storytelling approach with progressive reveal',
      icon: Palette 
    }
  ];

  const renderCurrentLayout = () => {
    switch (currentLayout) {
      case 'hero':
        return <HeroLayout />;
      case 'sideBySide':
        return <SideBySideLayout />;
      case 'vertical':
        return <VerticalFlowLayout />;
      default:
        return <HeroLayout />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Layout Switcher - Fixed at top */}
      <div className="fixed top-4 right-4 z-50">
        <Card className="bg-shadow-light/95 backdrop-blur-sm border-gold/30 p-4">
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-gold text-center">Layout Concepts</h3>
            <div className="space-y-2">
              {layouts.map((layout) => {
                const Icon = layout.icon;
                return (
                  <Button
                    key={layout.id}
                    variant={currentLayout === layout.id ? "golden" : "shadow"}
                    size="sm"
                    onClick={() => setCurrentLayout(layout.id)}
                    className="w-full justify-start text-xs"
                  >
                    <Icon className="w-3 h-3 mr-2" />
                    {layout.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </Card>
      </div>

      {/* Current Layout */}
      {renderCurrentLayout()}
    </div>
  );
};

export default Index;
