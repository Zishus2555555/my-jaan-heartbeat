import { useState, useEffect } from "react";
import { HeartIcon } from "./HeartIcon";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface MarriageProposalProps {
  onAccept: () => void;
}

export const MarriageProposal = ({ onAccept }: MarriageProposalProps) => {
  const [showRing, setShowRing] = useState(false);
  const [showProposal, setShowProposal] = useState(false);

  const loveQuotes = [
    "Will you marry me and be my forever?",
    "You are my today and all of my tomorrows",
    "In you, I've found the love of my life and my closest, truest friend",
    "I want to spend the rest of my life making you happy"
  ];

  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowRing(true), 500);
    const timer2 = setTimeout(() => setShowProposal(true), 1500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % loveQuotes.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      {/* Falling Hearts */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-10%",
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              animationIterationCount: "infinite",
            }}
          >
            <HeartIcon className="text-love-red text-2xl opacity-70" animated />
          </div>
        ))}
      </div>

      <Card className="relative p-8 max-w-md mx-4 text-center romantic-gradient text-white">
        {/* Ring Effect */}
        <div className="relative mb-8 flex justify-center">
          <div 
            className={`relative transition-all duration-1000 ${
              showRing ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <div className="text-6xl animate-pulse">💍</div>
            {/* Ring sparkle effects */}
            <div className="absolute inset-0 animate-ping">
              <div className="w-16 h-16 mx-auto rounded-full bg-yellow-300/30"></div>
            </div>
            <div className="absolute -top-2 -right-2 text-yellow-300 animate-bounce">✨</div>
            <div className="absolute -bottom-2 -left-2 text-yellow-300 animate-bounce" style={{animationDelay: "0.5s"}}>✨</div>
          </div>
        </div>

        {/* Proposal Content */}
        <div 
          className={`transition-all duration-1000 ${
            showProposal ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h2 className="text-3xl font-romantic mb-6">
            My Dearest Jaan
          </h2>
          
          <div className="mb-6 min-h-[60px] flex items-center justify-center">
            <p className="text-lg font-elegant italic transition-all duration-500">
              "{loveQuotes[currentQuote]}"
            </p>
          </div>

          <div className="flex justify-center items-center mb-6">
            <HeartIcon className="text-2xl text-love-red heartbeat mr-2" animated />
            <span className="font-romantic text-xl">Forever & Always</span>
            <HeartIcon className="text-2xl text-love-red heartbeat ml-2" animated />
          </div>

          <Button 
            variant="love" 
            size="lg" 
            className="font-elegant text-lg px-8 py-4 animate-pulse"
            onClick={onAccept}
          >
            <HeartIcon className="mr-2" animated />
            Yes, Forever! 💕
          </Button>
        </div>

        {/* Floating hearts around the card */}
        <div className="absolute -top-4 -left-4 text-love-red animate-bounce">
          <HeartIcon className="text-xl" animated />
        </div>
        <div className="absolute -top-4 -right-4 text-love-red animate-bounce" style={{animationDelay: "0.5s"}}>
          <HeartIcon className="text-xl" animated />
        </div>
        <div className="absolute -bottom-4 -left-4 text-love-red animate-bounce" style={{animationDelay: "1s"}}>
          <HeartIcon className="text-xl" animated />
        </div>
        <div className="absolute -bottom-4 -right-4 text-love-red animate-bounce" style={{animationDelay: "1.5s"}}>
          <HeartIcon className="text-xl" animated />
        </div>
      </Card>
    </div>
  );
};