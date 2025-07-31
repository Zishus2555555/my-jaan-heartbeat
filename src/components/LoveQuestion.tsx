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
      <MusicPlayer 
        audioSrc="/music/new.jpg.mp3"
        isVisible={true}
        autoPlay={true}
      />
      <FloatingHearts />
      
      <div className="relative z-10 w-full max-w-lg px-6 text-center">
        <Card className="p-8 romantic-gradient text-white love-pulse">
          <div className="mb-8">
            <HeartIcon className="text-6xl mx-auto mb-6 heartbeat" animated />
            <h2 className="text-3xl font-romantic mb-6">
              आप किसकी बच्ची हो? ❤️
            </h2>
          </div>
          
          <RadioGroup value={selectedOption} onValueChange={setSelectedOption} className="space-y-4 mb-8">
            {options.map((option) => (
              <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label 
                  htmlFor={option.value} 
                  className="text-lg font-elegant cursor-pointer flex-1 text-left"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
          
          <Button 
            variant="secondary" 
            size="lg" 
            className="font-elegant text-lg px-8 py-4 w-full"
            onClick={handleSubmit}
            disabled={!selectedOption}
          >
            <HeartIcon className="mr-2" animated />
            Send My Answer
          </Button>
        </Card>
      </div>
    </div>
  );
};