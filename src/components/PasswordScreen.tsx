import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { HeartIcon } from "@/components/HeartIcon";
import { FloatingHearts } from "@/components/FloatingHearts";
import { useToast } from "@/hooks/use-toast";

interface PasswordScreenProps {
  onPasswordCorrect: () => void;
}

export const PasswordScreen = ({ onPasswordCorrect }: PasswordScreenProps) => {
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (password === "22082022") {
        toast({
          title: "Welcome my beautiful jaan! ❤️",
          description: "Your love has unlocked our special world",
        });
        onPasswordCorrect();
      } else {
        toast({
          title: "Wrong password, jaan",
          description: "Try again with our special date",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen soft-gradient relative overflow-hidden flex items-center justify-center">
      <FloatingHearts />
      
      {/* Romantic Rose Petals */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={`petal-${i}`}
            className="absolute text-rose-400 opacity-30 animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            🌹
          </div>
        ))}
      </div>
      
      {/* Sparkle Ring Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute text-yellow-300 opacity-50 animate-ping"
            style={{
              left: `${25 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.4}s`,
            }}
          >
            ✨
          </div>
        ))}
      </div>
      
      <div className="relative z-10 w-full max-w-md px-6">
        <Card className="p-8 romantic-gradient text-white text-center love-pulse relative overflow-hidden">
          {/* Card Decoration */}
          <div className="absolute top-2 left-2 text-yellow-300 animate-pulse">💫</div>
          <div className="absolute top-2 right-2 text-yellow-300 animate-pulse" style={{animationDelay: "0.5s"}}>💫</div>
          <div className="absolute bottom-2 left-2 text-rose-400 animate-bounce">🌹</div>
          <div className="absolute bottom-2 right-2 text-rose-400 animate-bounce" style={{animationDelay: "0.3s"}}>🌹</div>
          
          <div className="mb-6 relative">
            <HeartIcon className="text-6xl mx-auto mb-4 heartbeat" animated />
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-2xl animate-bounce">
              💖
            </div>
            <h1 className="text-3xl font-romantic mb-2 romantic-glow">
              For My Beautiful Jaan
            </h1>
            <p className="font-elegant opacity-90">
              Enter our special date to unlock this surprise
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <Input
                type="password"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-center text-lg font-elegant bg-white/20 border-white/30 text-white placeholder:text-white/70"
                disabled={isLoading}
              />
              <div className="absolute -top-1 -right-1 text-yellow-300 animate-ping">💫</div>
            </div>
            <Button
              type="submit"
              variant="love"
              size="lg"
              className="w-full font-elegant relative overflow-hidden"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Loading our love...
                </div>
              ) : (
                <>
                  <HeartIcon className="mr-2" animated />
                  Unlock My Heart
                  <div className="absolute top-0 right-2 text-yellow-300 animate-pulse">✨</div>
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-sm opacity-80">
            <p className="font-romantic">
              Hint: The day we became one ❤️
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};