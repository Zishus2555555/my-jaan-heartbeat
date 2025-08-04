import { useState } from "react";
import { HeartIcon } from "@/components/HeartIcon";
import { FloatingHearts } from "@/components/FloatingHearts";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface LoveQuestionProps {
  onOptionSelect: (option: string) => void;
}

export const LoveQuestion = ({ onOptionSelect }: LoveQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { value: "zishu-ahmad-ki", label: "zishu ahmad की" },
    { value: "mahiuddin-ki", label: "mahiuddin की" },
    { value: "apne-bndr-ki", label: "अपने bndr की" },
    { value: "apne-pumpkin-ki", label: "अपने pumpkin की" }
  ];

  const handleSubmit = () => {
    if (selectedOption) {
      onOptionSelect(selectedOption);
    }
  };

  return (
    <div className="min-h-screen soft-gradient relative overflow-hidden flex items-center justify-center">
      <FloatingHearts />
      
      {/* Love Sparkles Rain */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={`sparkle-rain-${i}`}
            className="absolute text-yellow-300 opacity-50 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`,
              animationDuration: `${1.5 + Math.random()}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>
      
      {/* Romantic Emojis */}
      <div className="fixed inset-0 pointer-events-none">
        {['💕', '💖', '🌹', '💝', '💌', '🦋'].map((emoji, i) => (
          <div
            key={`romantic-${i}`}
            className="absolute opacity-30 animate-pulse"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.8}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>
      
      <div className="relative z-10 w-full max-w-lg px-6 text-center">
        <Card className="p-8 romantic-gradient text-white love-pulse relative overflow-hidden">
          {/* Card Border Effects */}
          <div className="absolute top-2 left-2 text-yellow-300 animate-bounce">💫</div>
          <div className="absolute top-2 right-2 text-yellow-300 animate-bounce" style={{animationDelay: "0.5s"}}>💫</div>
          <div className="absolute bottom-2 left-2 text-rose-400 animate-pulse">🌹</div>
          <div className="absolute bottom-2 right-2 text-rose-400 animate-pulse" style={{animationDelay: "0.3s"}}>🌹</div>
          
          <div className="mb-8 relative">
            <HeartIcon className="text-6xl mx-auto mb-6 heartbeat" animated />
            {/* Orbiting Ring */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: "4s"}}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 text-yellow-300">
                ✨
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 text-yellow-300">
                ✨
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 text-rose-400">
                🌹
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 text-rose-400">
                🌹
              </div>
            </div>
            <h2 className="text-3xl font-romantic mb-6 romantic-glow">
              आप किसकी बच्ची हो? ❤️
            </h2>
          </div>
          
          <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-4 mb-8">
            {options.map((option, index) => (
              <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 relative group">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label 
                  htmlFor={option.value} 
                  className="text-lg font-elegant cursor-pointer flex-1 text-left"
                >
                  {option.label}
                </Label>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity text-yellow-300 animate-pulse">
                  ✨
                </div>
              </div>
            ))}
          </RadioGroup>
          
          <Button 
            variant="secondary" 
            size="lg" 
            className="font-elegant text-lg px-8 py-4 w-full relative overflow-hidden"
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            <HeartIcon className="mr-2" animated />
            Send My Answer
            {selectedOption && (
              <div className="absolute top-1 right-2 text-yellow-300 animate-bounce">
                ✨
              </div>
            )}
          </Button>
        </Card>
      </div>
    </div>
  );
};