import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface EmojiBarProps {
  onKissEmoji: () => void;
}

export const EmojiBar = ({ onKissEmoji }: EmojiBarProps) => {
  const [selectedEmoji, setSelectedEmoji] = useState<string | null>(null);

  const emojis = [
    { emoji: "💋", label: "Kiss", action: onKissEmoji },
    { emoji: "❤️", label: "Love" },
    { emoji: "🌹", label: "Rose" },
    { emoji: "💖", label: "Heart" },
    { emoji: "😘", label: "Kiss Face" },
    { emoji: "🥰", label: "Love Face" },
    { emoji: "💕", label: "Hearts" },
    { emoji: "✨", label: "Sparkles" }
  ];

  const handleEmojiClick = (emoji: { emoji: string; label: string; action?: () => void }) => {
    setSelectedEmoji(emoji.emoji);
    if (emoji.action) {
      emoji.action();
    }
    
    // Reset selection after animation
    setTimeout(() => setSelectedEmoji(null), 1000);
  };

  return (
    <Card className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-3 romantic-gradient text-white z-50 love-pulse">
      <div className="flex gap-2 items-center">
        <span className="text-sm font-elegant mr-2">Send love:</span>
        {emojis.map((emoji, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`text-2xl p-2 h-auto hover:bg-white/20 transition-all duration-300 ${
              selectedEmoji === emoji.emoji 
                ? 'scale-125 bg-white/30' 
                : ''
            }`}
            onClick={() => handleEmojiClick(emoji)}
            title={emoji.label}
          >
            {emoji.emoji}
          </Button>
        ))}
      </div>
    </Card>
  );
};