import { HeartIcon } from "@/components/HeartIcon";
import { FloatingHearts } from "@/components/FloatingHearts";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
interface NamedPicsDisplayProps {
  onContinue: () => void;
}
export const NamedPicsDisplay = ({
  onContinue
}: NamedPicsDisplayProps) => {
  return <div className="min-h-screen soft-gradient relative overflow-hidden">
      <FloatingHearts />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <HeartIcon className="text-6xl text-love-red heartbeat mx-auto mb-6" animated />
            <h1 className="text-4xl md:text-6xl font-romantic text-deep-rose mb-6 romantic-glow">
              इन सब की प्यारी बच्ची ❤️
            </h1>
            <p className="text-xl font-elegant text-foreground mb-8">
              You belong to all of us, my beautiful jaan
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Zishu Card */}
            <Card className="p-6 romantic-gradient text-white love-pulse transform hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
                  <img src="/lovable-uploads/45a8db85-1055-46ef-b90e-6da499b389d8.png" alt="Zishu" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-romantic mb-2">Zishu</h3>
                <div className="flex justify-center gap-2 mb-3">
                  <HeartIcon className="text-lg" animated />
                  <HeartIcon className="text-lg" animated />
                  <HeartIcon className="text-lg" animated />
                </div>
                <p className="text-sm opacity-90 font-elegant">
              </p>
              </div>
            </Card>

            {/* Shreya Card */}
            <Card className="p-6 heart-gradient text-white love-pulse transform hover:scale-105 transition-transform duration-300">
              <div className="mb-4">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white/20">
                  <img src="/lovable-uploads/579fa890-23dc-4f61-b188-da43ad7ee30a.png" alt="Shreya" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-2xl font-romantic mb-2">Shreya</h3>
                <div className="flex justify-center gap-2 mb-3">
                  <HeartIcon className="text-lg" animated />
                  <HeartIcon className="text-lg" animated />
                  <HeartIcon className="text-lg" animated />
                </div>
                <p className="text-sm opacity-90 font-elegant">
              </p>
              </div>
            </Card>
          </div>

          <Card className="p-6 soft-gradient text-foreground mb-8">
            <p className="text-lg font-elegant leading-relaxed">
              "You are everyone's little princess, but most importantly, you are mine forever, my jaan ❤️"
            </p>
          </Card>

          <Button variant="love" size="lg" className="font-elegant text-lg px-8 py-4" onClick={onContinue}>
            <HeartIcon className="mr-2" animated />
            Continue to Our Love Story
          </Button>
        </div>
      </div>
    </div>;
};