import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Compass, Wrench, Sparkles, Map } from "lucide-react";
import heroImage from "@/assets/elden-ring-hero.jpg";

const HeroLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-shadow relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-shadow/80" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-gold bg-clip-text text-transparent drop-shadow-lg">
            ELDEN RING
          </h1>
          <h2 className="text-2xl md:text-4xl text-gold-light font-semibold tracking-wide">
            Build Planner
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Forge your legend with the ultimate build planning tool. Whether you seek guidance or total freedom, 
            craft the perfect character for your journey through the Lands Between.
          </p>
        </div>

        {/* Main Options */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Guided Builder */}
          <Card className="relative overflow-hidden bg-gradient-card border-gold/30 shadow-deep hover:shadow-glow-gold transition-all duration-500 hover:scale-105 group">
            <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-gold/20 text-gold">
                  <Compass className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-gold">Guided Builder</h3>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Let our intelligent system guide you through creating the perfect build. 
                Answer questions about your playstyle and preferences to discover builds 
                tailored to your adventure.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gold-light">
                  <Sparkles className="w-5 h-5" />
                  <span>Smart recommendations</span>
                </div>
                <div className="flex items-center space-x-3 text-gold-light">
                  <Map className="w-5 h-5" />
                  <span>Step-by-step guidance</span>
                </div>
                <div className="flex items-center space-x-3 text-gold-light">
                  <Compass className="w-5 h-5" />
                  <span>Beginner-friendly</span>
                </div>
              </div>
              
              <Button variant="golden" size="xl" className="w-full">
                Start Guided Build
              </Button>
            </div>
          </Card>

          {/* Custom Builder */}
          <Card className="relative overflow-hidden bg-gradient-card border-ember/30 shadow-deep hover:shadow-glow-ember transition-all duration-500 hover:scale-105 group">
            <div className="absolute inset-0 bg-gradient-ember opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div className="relative p-8 space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-ember/20 text-ember">
                  <Wrench className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold text-ember">Custom Builder</h3>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Take full control and craft your build from scratch. Access all weapons, 
                spells, and equipment with complete freedom to experiment and optimize 
                every detail.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gold-light">
                  <Wrench className="w-5 h-5" />
                  <span>Complete customization</span>
                </div>
                <div className="flex items-center space-x-3 text-gold-light">
                  <Sparkles className="w-5 h-5" />
                  <span>Advanced options</span>
                </div>
                <div className="flex items-center space-x-3 text-gold-light">
                  <Map className="w-5 h-5" />
                  <span>Expert-level control</span>
                </div>
              </div>
              
              <Button variant="ember" size="xl" className="w-full">
                Create Custom Build
              </Button>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            May you find your worth in the waking world
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroLayout;