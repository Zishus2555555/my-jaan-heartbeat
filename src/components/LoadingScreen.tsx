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
      
      {/* Magic Sparkles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`magic-${i}`}
            className="absolute text-yellow-300 opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
              transform: `scale(${0.5 + Math.random() * 0.5})`,
            }}
          >
            ✨
          </div>
        ))}
      </div>
      
      {/* Love Letters Floating */}
      <div className="fixed inset-0 pointer-events-none">
        {['💌', '💕', '💖', '💝', '🌹'].map((emoji, i) => (
          <div
            key={`letter-${i}`}
            className="absolute opacity-40 animate-bounce"
            style={{
              left: `${15 + i * 20}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${2 + Math.random()}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>
      
      <div className="relative z-10 w-full max-w-md px-6 text-center">
        {/* Main heart animation */}
        <div className="mb-8 relative">
          <div className="relative">
            <HeartIcon 
              className="text-8xl mx-auto mb-6 heartbeat" 
              animated 
            />
            {/* Heart Ring Effect */}
            <div className="absolute inset-0 animate-ping">
              <HeartIcon className="text-8xl mx-auto text-love-red opacity-30" />
            </div>
            {isKissTriggered && (
              <div className="absolute -top-2 -right-2 text-4xl animate-bounce">
                💋
              </div>
            )}
            {/* Orbiting Hearts */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: "3s"}}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <HeartIcon className="text-lg text-rose-400" />
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                <HeartIcon className="text-lg text-rose-400" />
              </div>
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                <HeartIcon className="text-lg text-rose-400" />
              </div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                <HeartIcon className="text-lg text-rose-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Loading message */}
        <div className="mb-8 relative">
          <h2 className="text-2xl font-romantic text-deep-rose mb-4 animate-fade-in romantic-glow">
            {messages[currentMessage]}
          </h2>
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-yellow-300 animate-bounce">
            ✨
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-white/20 rounded-full h-3 mb-4 overflow-hidden relative">
          <div 
            className="h-full romantic-gradient transition-all duration-300 ease-out rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-0 h-full w-2 bg-yellow-300 opacity-60 animate-pulse"></div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="text-xs font-bold text-white/80 drop-shadow">
              {Math.round(progress)}%
            </div>
          </div>
        </div>

        {/* Decorative hearts */}
        <div className="flex justify-center gap-3 mt-6">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="relative">
              <HeartIcon 
                className={`text-xl text-love-red transition-all duration-500 ${
                  progress > (i * 20) ? 'opacity-100 scale-110' : 'opacity-30 scale-75'
                }`}
                animated={progress > (i * 20)}
              />
              {progress > (i * 20) && (
                <div className="absolute -top-1 -right-1 text-yellow-300 text-xs animate-ping">
                  ✨
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Love Messages */}
        <div className="mt-8 text-sm font-elegant text-deep-rose/80 animate-pulse">
          Preparing our magical love story...
        </div>
      </div>
    </div>
  );
};