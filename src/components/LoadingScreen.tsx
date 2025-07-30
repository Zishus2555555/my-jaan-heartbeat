import { useEffect, useState } from "react";
import { HeartIcon } from "@/components/HeartIcon";
import { FloatingHearts } from "@/components/FloatingHearts";

interface LoadingScreenProps {
  onComplete: () => void;
  isKissTriggered?: boolean;
}

export const LoadingScreen = ({ onComplete, isKissTriggered = false }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = isKissTriggered 
    ? [
        "Your kiss unlocked my heart... 💋",
        "Opening our love sanctuary... ❤️",
        "Preparing something magical... ✨",
        "Welcome to our world, my jaan... 🌹"
      ]
    : [
        "Unlocking our love sanctuary... 🔓",
        "Preparing our special moments... ⏳",
        "Loading memories of us... 📸",
        "Almost ready, my beautiful jaan... 💖"
      ];

  useEffect(() => {
    const duration = 4000; // 4 seconds
    const interval = 50;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    // Change messages
    const messageTimer = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, [onComplete, messages.length]);

  return (
    <div className="min-h-screen soft-gradient relative overflow-hidden flex items-center justify-center">
      <FloatingHearts />
      
      <div className="relative z-10 w-full max-w-md px-6 text-center">
        {/* Main heart animation */}
        <div className="mb-8">
          <div className="relative">
            <HeartIcon 
              className="text-8xl mx-auto mb-6 heartbeat" 
              animated 
            />
            {isKissTriggered && (
              <div className="absolute -top-2 -right-2 text-4xl animate-bounce">
                💋
              </div>
            )}
          </div>
        </div>

        {/* Loading message */}
        <div className="mb-8">
          <h2 className="text-2xl font-romantic text-deep-rose mb-4 animate-fade-in">
            {messages[currentMessage]}
          </h2>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-white/20 rounded-full h-2 mb-4 overflow-hidden">
          <div 
            className="h-full romantic-gradient transition-all duration-300 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress percentage */}
        <p className="text-lg font-elegant text-deep-rose opacity-80">
          {Math.round(progress)}%
        </p>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-2 mt-6">
          {[...Array(5)].map((_, i) => (
            <HeartIcon 
              key={i} 
              className={`text-love-red transition-opacity duration-300 ${
                progress > (i * 20) ? 'opacity-100' : 'opacity-30'
              }`}
              animated={progress > (i * 20)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};