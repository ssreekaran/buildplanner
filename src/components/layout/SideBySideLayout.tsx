import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Compass, Wrench, ArrowRight, Crown, Sword } from "lucide-react";

const SideBySideLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-shadow">
      {/* Header */}
      <header className="text-center py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-3 p-3 rounded-full bg-gradient-card border border-gold/20">
            <Crown className="w-6 h-6 text-gold" />
            <span className="text-gold font-semibold">Elden Ring Build Planner</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-gold bg-clip-text text-transparent">
            Choose Your Path
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Two paths diverge before you, Tarnished. Will you seek guidance from the golden order, 
            or forge your own destiny in the crucible of creation?
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Guided Path */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-gold/40 shadow-card hover:shadow-glow-gold transition-all duration-500 overflow-hidden group">
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="inline-flex items-center space-x-2 text-gold text-sm font-medium">
                      <Compass className="w-4 h-4" />
                      <span>RECOMMENDED FOR BEGINNERS</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gold">Guided Builder</h2>
                  </div>
                  <div className="p-4 rounded-full bg-gold/10 text-gold group-hover:bg-gold/20 transition-colors">
                    <Compass className="w-8 h-8" />
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Embark on a curated journey through build creation. Our intelligent system 
                  will ask about your preferred playstyle, combat approach, and aesthetic 
                  preferences to craft builds perfectly suited to your adventure.
                </p>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gold-light">Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Smart questionnaire</li>
                      <li>• Curated recommendations</li>
                      <li>• Beginner explanations</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gold-light">Best For:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• New players</li>
                      <li>• Quick builds</li>
                      <li>• Inspiration seeking</li>
                    </ul>
                  </div>
                </div>

                <Button variant="golden" size="lg" className="w-full group">
                  Begin Guided Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            <div className="text-center text-muted-foreground">
              <p className="text-sm">Perfect for first-time Tarnished and those seeking direction</p>
            </div>
          </div>

          {/* Custom Path */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border-ember/40 shadow-card hover:shadow-glow-ember transition-all duration-500 overflow-hidden group">
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="inline-flex items-center space-x-2 text-ember text-sm font-medium">
                      <Sword className="w-4 h-4" />
                      <span>FOR EXPERIENCED WARRIORS</span>
                    </div>
                    <h2 className="text-4xl font-bold text-ember">Custom Builder</h2>
                  </div>
                  <div className="p-4 rounded-full bg-ember/10 text-ember group-hover:bg-ember/20 transition-colors">
                    <Wrench className="w-8 h-8" />
                  </div>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Unleash your creativity with complete freedom. Access every weapon, spell, 
                  and piece of equipment in the Lands Between. Fine-tune stats, experiment 
                  with synergies, and craft the ultimate personalized build.
                </p>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gold-light">Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Complete item database</li>
                      <li>• Advanced stat planning</li>
                      <li>• Export & share builds</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gold-light">Best For:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Veterans</li>
                      <li>• Min-maxing</li>
                      <li>• Experimentation</li>
                    </ul>
                  </div>
                </div>

                <Button variant="ember" size="lg" className="w-full group">
                  Enter Workshop
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>

            <div className="text-center text-muted-foreground">
              <p className="text-sm">For seasoned Tarnished who know their craft</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center py-16">
          <div className="flex items-center space-x-4">
            <div className="h-px bg-gradient-to-r from-transparent to-gold/30 w-24"></div>
            <span className="text-gold/60 text-sm font-medium">OR</span>
            <div className="h-px bg-gradient-to-l from-transparent to-gold/30 w-24"></div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="text-center space-y-8">
          <h3 className="text-2xl font-bold text-gold-light">Not sure where to start?</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="runic" size="lg">View Popular Builds</Button>
            <Button variant="shadow" size="lg">Browse by Class</Button>
            <Button variant="outline" size="lg">Watch Tutorial</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SideBySideLayout;