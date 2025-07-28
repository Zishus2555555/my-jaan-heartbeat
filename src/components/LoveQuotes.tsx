import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const quotes = [
  {
    text: "Every moment with you feels like a beautiful dream that I never want to wake up from, my jaan.",
    author: "Your Loving Husband"
  },
  {
    text: "You are not just my wife, you are my jaan, my heartbeat, my everything.",
    author: "With All My Love"
  },
  {
    text: "In your eyes, I found my home. In your heart, I found my love. You are my jaan forever.",
    author: "Forever Yours"
  },
  {
    text: "My heart beats only for you, my beautiful jaan. You make every day magical.",
    author: "Your Devoted Husband"
  },
  {
    text: "You are the love of my life, my jaan, my soulmate, my everything beautiful in this world.",
    author: "With Endless Love"
  }
];

export const LoveQuotes = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      <Card className="p-8 soft-gradient love-pulse border-love-red/20">
        <div className="text-center">
          <blockquote className="text-xl md:text-2xl font-romantic text-deep-rose leading-relaxed mb-4">
            "{quotes[currentQuote].text}"
          </blockquote>
          <p className="text-muted-foreground font-elegant">
            — {quotes[currentQuote].author}
          </p>
        </div>
      </Card>
      
      <div className="flex justify-center mt-4 space-x-2">
        {quotes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentQuote(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentQuote 
                ? 'bg-love-red scale-125' 
                : 'bg-soft-pink hover:bg-love-red/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};