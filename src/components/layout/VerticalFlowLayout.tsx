import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Compass, Wrench, ArrowDown, Sparkles, Users, BookOpen, Target } from "lucide-react";

const VerticalFlowLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-shadow">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-gold bg-clip-text text-transparent">
              Build Your Legend
            </h1>
            <p className="text-xl md:text-2xl text-gold-light font-medium">
              The ultimate Elden Ring character planner
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're a newcomer to the Lands Between or a seasoned Tarnished, 
            our tools will help you craft the perfect build for your playstyle.
          </p>

          <div className="flex justify-center">
            <ArrowDown className="w-6 h-6 text-gold/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Path Selection */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-gold">Choose Your Approach</h2>
            <p className="text-muted-foreground text-lg">Select the method that suits your experience level</p>
          </div>

          {/* Guided Builder Card */}
          <Card className="bg-gradient-card border-gold/30 shadow-deep hover:shadow-glow-gold transition-all duration-500 overflow-hidden group max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/3 p-8 lg:p-12 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-gold/20 text-gold">
                      <Compass className="w-6 h-6" />
                    </div>
                    <span className="text-gold text-sm font-medium tracking-wide">GUIDED EXPERIENCE</span>
                  </div>
                  <h3 className="text-4xl font-bold text-gold">Smart Builder</h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Perfect for newcomers or anyone wanting curated recommendations. Our intelligent 
                  system asks about your preferences and suggests optimized builds tailored to your playstyle.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gold-light">
                      <Target className="w-4 h-4" />
                      <span className="font-medium">Targeted Questions</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Answer simple questions about your preferred combat style
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gold-light">
                      <Sparkles className="w-4 h-4" />
                      <span className="font-medium">Smart Suggestions</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Get builds optimized for your specific preferences
                    </p>
                  </div>
                </div>

                <Button variant="golden" size="xl" className="w-full lg:w-auto">
                  Start Guided Builder
                </Button>
              </div>
              
              <div className="lg:w-1/3 bg-gold/5 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-gold rounded-full flex items-center justify-center mx-auto">
                    <Compass className="w-12 h-12 text-shadow" />
                  </div>
                  <p className="text-gold-light font-medium">Beginner Friendly</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Custom Builder Card */}
          <Card className="bg-gradient-card border-ember/30 shadow-deep hover:shadow-glow-ember transition-all duration-500 overflow-hidden group max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3 bg-ember/5 p-8 lg:p-12 flex items-center justify-center order-2 lg:order-1">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-ember rounded-full flex items-center justify-center mx-auto">
                    <Wrench className="w-12 h-12 text-shadow" />
                  </div>
                  <p className="text-gold-light font-medium">Expert Control</p>
                </div>
              </div>
              
              <div className="lg:w-2/3 p-8 lg:p-12 space-y-6 order-1 lg:order-2">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-ember/20 text-ember">
                      <Wrench className="w-6 h-6" />
                    </div>
                    <span className="text-ember text-sm font-medium tracking-wide">ADVANCED WORKSHOP</span>
                  </div>
                  <h3 className="text-4xl font-bold text-ember">Custom Builder</h3>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Unleash your creativity with complete freedom. Access every weapon, spell, and equipment 
                  piece. Fine-tune every stat and discover unique build combinations.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gold-light">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-medium">Full Database</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Access to every item, spell, and equipment piece
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-gold-light">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">Community Builds</span>
                    </div>
                    <p className="text-sm text-muted-foreground ml-6">
                      Share your creations and explore others' builds
                    </p>
                  </div>
                </div>

                <Button variant="ember" size="xl" className="w-full lg:w-auto">
                  Open Workshop
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Additional Options */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gold-light">Explore More</h2>
            <p className="text-muted-foreground">Additional tools and resources to enhance your journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-card border-gold/20 p-6 hover:shadow-glow-gold transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center text-gold mx-auto">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gold-light">Community Builds</h3>
                <p className="text-sm text-muted-foreground">Discover popular builds from the community</p>
                <Button variant="runic" size="sm" className="w-full">Browse</Button>
              </div>
            </Card>

            <Card className="bg-gradient-card border-gold/20 p-6 hover:shadow-glow-gold transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center text-gold mx-auto">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gold-light">Build Guides</h3>
                <p className="text-sm text-muted-foreground">Learn about different build archetypes</p>
                <Button variant="runic" size="sm" className="w-full">Learn</Button>
              </div>
            </Card>

            <Card className="bg-gradient-card border-gold/20 p-6 hover:shadow-glow-gold transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center text-gold mx-auto">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gold-light">Random Build</h3>
                <p className="text-sm text-muted-foreground">Generate a surprise build for fun challenges</p>
                <Button variant="runic" size="sm" className="w-full">Surprise Me</Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
          <p className="text-muted-foreground italic">
            "Rise, Tarnished, and let the Elden Ring guide thee to mastery"
          </p>
        </div>
      </footer>
    </div>
  );
};

export default VerticalFlowLayout;