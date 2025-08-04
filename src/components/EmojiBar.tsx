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
    <Card className="fixed bottom-4 left-1/2 transform -translate-x-1/2 p-3 romantic-gradient text-white z-50 love-pulse relative overflow-hidden">
      {/* Card Decorations */}
      <div className="absolute top-1 left-2 text-yellow-300 text-xs animate-pulse">✨</div>
      <div className="absolute top-1 right-2 text-yellow-300 text-xs animate-pulse" style={{animationDelay: "0.5s"}}>✨</div>
      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-rose-400 animate-bounce">🌹</div>
      
      <div className="flex gap-2 items-center relative">
        <span className="text-sm font-elegant mr-2 relative">
          Send love:
          <div className="absolute -top-1 -right-1 text-yellow-300 text-xs animate-ping">💫</div>
        </span>
        {emojis.map((emoji, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            className={`text-2xl p-2 h-auto hover:bg-white/20 transition-all duration-300 relative ${
              selectedEmoji === emoji.emoji 
                ? 'scale-125 bg-white/30' 
                : ''
            }`}
            onClick={() => handleEmojiClick(emoji)}
            title={emoji.label}
          >
            {emoji.emoji}
            {selectedEmoji === emoji.emoji && (
              <>
                <div className="absolute inset-0 animate-ping bg-white/20 rounded"></div>
                <div className="absolute -top-1 -right-1 text-yellow-300 text-xs animate-bounce">✨</div>
              </>
            )}
          </Button>
        ))}
      </div>
      
      {/* Floating mini hearts around the card */}
      <div className="absolute -top-2 -left-2 text-love-red animate-bounce text-sm">💕</div>
      <div className="absolute -top-2 -right-2 text-love-red animate-bounce text-sm" style={{animationDelay: "0.3s"}}>💕</div>
      <div className="absolute -bottom-2 -left-2 text-love-red animate-bounce text-sm" style={{animationDelay: "0.6s"}}>💕</div>
      <div className="absolute -bottom-2 -right-2 text-love-red animate-bounce text-sm" style={{animationDelay: "0.9s"}}>💕</div>
    </Card>
  );
};