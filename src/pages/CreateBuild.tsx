import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sword, Shield, Crown, Shirt, Users, Zap, Heart, ShieldCheck } from "lucide-react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import heroImage from "@/assets/elden-ring-hero.jpg";

interface Equipment {
  id: string;
  name: string;
  type: 'weapon' | 'armor' | 'talisman';
  slot: string;
  stats: {
    [key: string]: number;
  };
}

interface Stats {
  vigor: number;
  mind: number;
  endurance: number;
  strength: number;
  dexterity: number;
  intelligence: number;
  faith: number;
  arcane: number;
}

const EQUIPMENT_DATA: Equipment[] = [
  // Main Hand Weapons
  {
    id: 'bloodhounds_fang',
    name: "Bloodhound's Fang",
    type: 'weapon',
    slot: 'main_hand',
    stats: { strength: 8, dexterity: 12 }
  },
  {
    id: 'grafted_blade',
    name: 'Grafted Blade Greatsword',
    type: 'weapon',
    slot: 'main_hand',
    stats: { strength: 15, dexterity: 5 }
  },
  {
    id: 'moonveil',
    name: 'Moonveil',
    type: 'weapon',
    slot: 'main_hand',
    stats: { dexterity: 10, intelligence: 12 }
  },
  {
    id: 'rivers_of_blood',
    name: 'Rivers of Blood',
    type: 'weapon',
    slot: 'main_hand',
    stats: { dexterity: 12, arcane: 10 }
  },
  {
    id: 'dark_moon_greatsword',
    name: 'Dark Moon Greatsword',
    type: 'weapon',
    slot: 'main_hand',
    stats: { strength: 8, intelligence: 14 }
  },
  {
    id: 'blasphemous_blade',
    name: 'Blasphemous Blade',
    type: 'weapon',
    slot: 'main_hand',
    stats: { strength: 10, dexterity: 8, faith: 12 }
  },
  {
    id: 'malenias_hand',
    name: "Malenia's Hand of Rot",
    type: 'weapon',
    slot: 'main_hand',
    stats: { strength: 6, dexterity: 14 }
  },
  {
    id: 'starscourge_greatsword',
    name: 'Starscourge Greatsword',
    type: 'weapon',
    slot: 'main_hand',
    stats: { strength: 14, dexterity: 8, intelligence: 6 }
  },
  // Off Hand
  {
    id: 'brass_shield',
    name: 'Brass Shield',
    type: 'weapon',
    slot: 'off_hand',
    stats: { strength: 5 }
  },
  {
    id: 'jellyfish_shield',
    name: 'Jellyfish Shield',
    type: 'weapon',
    slot: 'off_hand',
    stats: { strength: 4, endurance: 2 }
  },
  // Armor
  {
    id: 'knights_helm',
    name: "Knight's Helm",
    type: 'armor',
    slot: 'head',
    stats: { vigor: 2, endurance: 1 }
  },
  {
    id: 'knights_armor',
    name: "Knight's Armor",
    type: 'armor',
    slot: 'chest',
    stats: { vigor: 3, endurance: 2 }
  },
  {
    id: 'knights_gauntlets',
    name: "Knight's Gauntlets",
    type: 'armor',
    slot: 'arms',
    stats: { vigor: 1, strength: 1 }
  },
  {
    id: 'knights_greaves',
    name: "Knight's Greaves",
    type: 'armor',
    slot: 'legs',
    stats: { vigor: 2, endurance: 1 }
  },
  // Talismans
  {
    id: 'erdtree_favor',
    name: 'Erdtree\'s Favor',
    type: 'talisman',
    slot: 'talisman_1',
    stats: { vigor: 3, mind: 2, endurance: 4 }
  },
  {
    id: 'radagon_icon',
    name: "Radagon Icon",
    type: 'talisman',
    slot: 'talisman_2',
    stats: { dexterity: 4 }
  },
  {
    id: 'great_jars_arsenal',
    name: "Great-Jar's Arsenal",
    type: 'talisman',
    slot: 'talisman_3',
    stats: { endurance: 5 }
  },
  {
    id: 'dragoncrest_shield',
    name: 'Dragoncrest Shield Talisman',
    type: 'talisman',
    slot: 'talisman_4',
    stats: { vigor: 3 }
  }
];

const BASE_STATS: Stats = {
  vigor: 10,
  mind: 10,
  endurance: 10,
  strength: 10,
  dexterity: 10,
  intelligence: 10,
  faith: 10,
  arcane: 10
};

export default function CreateBuild() {
  const [equippedItems, setEquippedItems] = useState<{[key: string]: Equipment | null}>({
    main_hand: null,
    off_hand: null,
    head: null,
    chest: null,
    arms: null,
    legs: null,
    talisman_1: null,
    talisman_2: null,
    talisman_3: null,
    talisman_4: null
  });
  
  const [baseStats, setBaseStats] = useState<Stats>({ ...BASE_STATS });
  const [selectedSlot, setSelectedSlot] = useState<string | null>('main_hand');

  const calculateTotalStats = (): Stats => {
    const totalStats = { ...baseStats };
    
    Object.values(equippedItems).forEach(item => {
      if (item) {
        Object.entries(item.stats).forEach(([stat, value]) => {
          if (stat in totalStats) {
            totalStats[stat as keyof Stats] += value;
          }
        });
      }
    });
    
    return totalStats;
  };

  const adjustStat = (stat: keyof Stats, amount: number) => {
    setBaseStats(prev => ({
      ...prev,
      [stat]: Math.max(1, Math.min(99, prev[stat] + amount))
    }));
  };

  const equipItem = (item: Equipment) => {
    setEquippedItems(prev => ({
      ...prev,
      [item.slot]: item
    }));
  };

  const unequipItem = (slot: string) => {
    setEquippedItems(prev => ({
      ...prev,
      [slot]: null
    }));
  };

  const totalStats = calculateTotalStats();

  const getSlotIcon = (slot: string) => {
    switch (slot) {
      case 'main_hand':
      case 'off_hand':
        return <Sword className="h-5 w-5" />;
      case 'head':
        return <Crown className="h-5 w-5" />;
      case 'chest':
      case 'arms':
      case 'legs':
        return <Shirt className="h-5 w-5" />;
      default:
        return <Zap className="h-5 w-5" />;
    }
  };

  const getStatIcon = (stat: string) => {
    switch (stat) {
      case 'vigor':
        return <Heart className="h-4 w-4 text-crimson" />;
      case 'mind':
        return <Zap className="h-4 w-4 text-blue-400" />;
      case 'endurance':
        return <ShieldCheck className="h-4 w-4 text-green-400" />;
      case 'strength':
        return <Sword className="h-4 w-4 text-red-400" />;
      case 'dexterity':
        return <Users className="h-4 w-4 text-yellow-400" />;
      case 'intelligence':
        return <Zap className="h-4 w-4 text-purple-400" />;
      case 'faith':
        return <Crown className="h-4 w-4 text-golden" />;
      case 'arcane':
        return <Shield className="h-4 w-4 text-pink-400" />;
      default:
        return <div className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-golden to-ember bg-clip-text text-transparent">
            Elden Ring Build Planner
          </h1>
          <p className="text-muted-foreground text-lg">
            Create and customize your perfect Tarnished
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Character Avatar & Stats - Left Column */}
          <div className="lg:col-span-4">
            <Card className="p-6 golden-glow">
              <h2 className="text-2xl font-semibold mb-4 text-golden">Character</h2>
              <div className="relative">
                <img 
                  src={heroImage} 
                  alt="Character Avatar" 
                  className="w-full h-auto rounded-lg shadow-deep"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              </div>
            </Card>

            {/* Stats Panel */}
            <Card className="p-6 mt-6 crimson-glow">
              <h2 className="text-2xl font-semibold mb-4 text-golden">Stats</h2>
              <div className="w-full h-[250px] mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={Object.entries(totalStats).map(([stat, value]) => ({
                    stat: stat.charAt(0).toUpperCase() + stat.slice(1),
                    value: value,
                    fullMark: 60
                  }))}>
                    <PolarGrid stroke="#D4AF37" strokeOpacity={0.3} />
                    <PolarAngleAxis 
                      dataKey="stat" 
                      tick={{ fill: '#D4AF37', fontSize: 11, fontWeight: 500 }}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 60]}
                      tick={{ fill: '#9CA3AF', fontSize: 10 }}
                    />
                    <Radar 
                      name="Stats" 
                      dataKey="value" 
                      stroke="#D4AF37" 
                      fill="#D4AF37" 
                      fillOpacity={0.4}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Stat Adjustments */}
              <div className="space-y-1.5">
                {Object.entries(baseStats).map(([stat, value]) => {
                  const equipmentBonus = totalStats[stat as keyof Stats] - value;
                  return (
                    <div key={stat} className="flex items-center justify-between p-1.5 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2">
                        {getStatIcon(stat)}
                        <span className="capitalize font-medium text-sm">{stat}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 w-7 p-0"
                          onClick={() => adjustStat(stat as keyof Stats, -1)}
                          disabled={value <= 1}
                        >
                          -
                        </Button>
                        <div className="flex items-center gap-1 min-w-[60px] justify-center">
                          <span className="font-bold text-golden">{value}</span>
                          {equipmentBonus > 0 && (
                            <span className="text-xs text-green-400">+{equipmentBonus}</span>
                          )}
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-7 w-7 p-0"
                          onClick={() => adjustStat(stat as keyof Stats, 1)}
                          disabled={value >= 99}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Equipment Selection - Middle Column */}
          <div className="lg:col-span-5">
            <Card className="p-6 min-h-[600px]">
              <h2 className="text-2xl font-semibold mb-6 text-golden">
                {selectedSlot ? `Select ${selectedSlot.replace('_', ' ')}` : 'Select a slot'}
              </h2>
              
              {selectedSlot ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {EQUIPMENT_DATA.filter(item => item.slot === selectedSlot).map(item => (
                    <Card 
                      key={item.id} 
                      className="p-4 hover:bg-muted/50 transition-all cursor-pointer equipment-slot"
                      onClick={() => equipItem(item)}
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          {getSlotIcon(item.slot)}
                          <h5 className="font-medium text-golden">{item.name}</h5>
                        </div>
                        <div className="flex gap-1 flex-wrap">
                          {Object.entries(item.stats).map(([stat, value]) => (
                            <Badge key={stat} variant="outline" className="text-xs">
                              {stat} +{value}
                            </Badge>
                          ))}
                        </div>
                        <Button 
                          variant="secondary"
                          size="sm"
                          className="golden-glow w-full"
                          disabled={equippedItems[item.slot]?.id === item.id}
                        >
                          {equippedItems[item.slot]?.id === item.id ? 'Equipped' : 'Equip'}
                        </Button>
                      </div>
                    </Card>
                  ))}
                  {EQUIPMENT_DATA.filter(item => item.slot === selectedSlot).length === 0 && (
                    <div className="col-span-2 text-center py-12 text-muted-foreground">
                      No equipment available for this slot
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  Click on an equipment slot to browse items
                </div>
              )}
            </Card>
          </div>

          {/* Equipment Slots - Right Column */}
          <div className="lg:col-span-3">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6 text-golden">Equipment</h2>
              
              <div className="space-y-3">
                {Object.entries(equippedItems).map(([slot, item]) => (
                  <div 
                    key={slot} 
                    className={`equipment-slot p-4 rounded-lg cursor-pointer transition-all ${
                      selectedSlot === slot ? 'ring-2 ring-golden' : ''
                    }`}
                    onClick={() => setSelectedSlot(slot)}
                  >
                    <div className="flex items-center gap-3">
                      {getSlotIcon(slot)}
                      <div className="flex-1">
                        <span className="text-sm font-medium capitalize block">
                          {slot.replace('_', ' ')}
                        </span>
                        {item ? (
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-xs text-golden font-medium truncate">{item.name}</p>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={(e) => {
                                e.stopPropagation();
                                unequipItem(slot);
                              }}
                              className="h-6 w-6 p-0 text-xs"
                            >
                              ×
                            </Button>
                          </div>
                        ) : (
                          <p className="text-xs text-muted-foreground">Empty</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
