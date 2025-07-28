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
      if (password === "28022008") {
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
      
      <div className="relative z-10 w-full max-w-md px-6">
        <Card className="p-8 romantic-gradient text-white text-center love-pulse">
          <div className="mb-6">
            <HeartIcon className="text-6xl mx-auto mb-4 heartbeat" animated />
            <h1 className="text-3xl font-romantic mb-2">
              For My Beautiful Jaan
            </h1>
            <p className="font-elegant opacity-90">
              Enter our special date to unlock this surprise
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-center text-lg font-elegant bg-white/20 border-white/30 text-white placeholder:text-white/70"
              disabled={isLoading}
            />
            <Button
              type="submit"
              variant="love"
              size="lg"
              className="w-full font-elegant"
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