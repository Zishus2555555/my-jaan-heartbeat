import { useState } from "react";
import { HeartIcon } from "@/components/HeartIcon";
import { FloatingHearts } from "@/components/FloatingHearts";
import { LoveQuotes } from "@/components/LoveQuotes";
import { PhotoGallery } from "@/components/PhotoGallery";
import { PasswordScreen } from "@/components/PasswordScreen";
import { LoadingScreen } from "@/components/LoadingScreen";
import { EmojiBar } from "@/components/EmojiBar";
import { MusicPlayer } from "@/components/MusicPlayer";
import { LoveQuestion } from "@/components/LoveQuestion";
import { NamedPicsDisplay } from "@/components/NamedPicsDisplay";
import { MarriageProposal } from "@/components/MarriageProposal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
const Index = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showEmojiPanel, setShowEmojiPanel] = useState(false);
  const [isKissTriggered, setIsKissTriggered] = useState(false);
  const [showLoveQuestion, setShowLoveQuestion] = useState(false);
  const [showNamedPics, setShowNamedPics] = useState(false);
  const [showMarriageProposal, setShowMarriageProposal] = useState(false);
  
  console.log("Index component state:", {
    isUnlocked,
    isLoading,
    showEmojiPanel,
    showLoveQuestion,
    showNamedPics,
    showMarriageProposal,
    isGalleryOpen
  });
  if (!isUnlocked) {
    return <PasswordScreen onPasswordCorrect={() => {
      setIsUnlocked(true);
      setIsLoading(true);
    }} />;
  }
  if (isLoading) {
    return <LoadingScreen onComplete={() => {
      setIsLoading(false);
      setShowEmojiPanel(true);
    }} isKissTriggered={isKissTriggered} />;
  }
  if (showEmojiPanel) {
    return <div className="min-h-screen soft-gradient relative overflow-hidden flex items-center justify-center">
        <FloatingHearts />
        
        <div className="relative z-10 w-full max-w-md px-6 text-center">
          <div className="mb-8">
            <HeartIcon className="text-8xl mx-auto mb-6 heartbeat" animated />
            <h2 className="text-3xl font-romantic text-deep-rose mb-4">
              Send me your love, jaan ❤️
            </h2>
            <p className="text-lg font-elegant text-muted-foreground mb-8">
              Choose an emoji to express your feelings
            </p>
          </div>
          
          <EmojiBar onKissEmoji={() => {
          setIsKissTriggered(true);
          setShowEmojiPanel(false);
        }} />
        </div>
      </div>;
  }
  if (showLoveQuestion) {
    return <LoveQuestion onOptionSelect={option => {
      if (option === "apne-pumpkin-ki") {
        setShowNamedPics(true);
      } else {
        setIsGalleryOpen(true);
      }
      setShowLoveQuestion(false);
    }} />;
  }
  if (showNamedPics) {
    console.log("Showing NamedPicsDisplay");
    return <NamedPicsDisplay onContinue={() => {
      console.log("NamedPics onContinue clicked - setting marriage proposal");
      setShowNamedPics(false);
      setShowMarriageProposal(true);
    }} />;
  }
  
  if (showMarriageProposal) {
    console.log("Showing MarriageProposal");
    return <MarriageProposal onAccept={() => {
      console.log("Marriage proposal accepted");
      setShowMarriageProposal(false);
      setIsGalleryOpen(true);
    }} />;
  }
  return <div className="min-h-screen soft-gradient relative overflow-hidden">
      <FloatingHearts />
      
      {/* Magical Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={`magic-bg-${i}`}
            className="absolute opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          >
            {i % 4 === 0 ? '✨' : i % 4 === 1 ? '💫' : i % 4 === 2 ? '🌟' : '💖'}
          </div>
        ))}
      </div>
      
      {/* Rose Petals Effect */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={`petal-${i}`}
            className="absolute text-rose-400 opacity-40 animate-bounce"
            style={{
              left: `${15 + i * 12}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            🌹
          </div>
        ))}
      </div>
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8 relative">
            <HeartIcon className="text-6xl text-love-red heartbeat mx-auto mb-6" animated />
            {/* Hero Heart Ring */}
            <div className="absolute inset-0 animate-ping">
              <HeartIcon className="text-6xl text-love-red opacity-30 mx-auto" />
            </div>
            <h1 className="text-5xl md:text-7xl font-romantic text-deep-rose mb-4 romantic-glow relative">
              My Beautiful Jaan
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-yellow-300 animate-bounce">
                ✨
              </div>
            </h1>
            <p className="text-xl md:text-2xl font-elegant text-foreground mb-6 leading-relaxed">
              Every heartbeat whispers your name, every breath carries my love for you
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <HeartIcon className="text-2xl text-love-red" animated />
              <span className="font-romantic text-lg text-deep-rose relative">
                My Qalbi
                <div className="absolute -top-1 -right-1 text-yellow-300 text-xs animate-pulse">💫</div>
              </span>
              <HeartIcon className="text-2xl text-love-red" animated />
              <span className="font-romantic text-lg text-deep-rose relative">
                Meri Duniya
                <div className="absolute -top-1 -right-1 text-yellow-300 text-xs animate-pulse">💫</div>
              </span>
              <HeartIcon className="text-2xl text-love-red" animated />
              <span className="font-romantic text-lg text-deep-rose relative">
                Meri Rooh
                <div className="absolute -top-1 -right-1 text-yellow-300 text-xs animate-pulse">💫</div>
              </span>
              <HeartIcon className="text-2xl text-love-red" animated />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <HeartIcon className="text-2xl text-love-red" animated />
              <span className="font-romantic text-lg text-deep-rose">Meri Bachhi</span>
              <HeartIcon className="text-2xl text-love-red" animated />
              <span className="font-romantic text-lg text-deep-rose">Meri Jaan</span>
              <HeartIcon className="text-2xl text-love-red" animated />
              <span className="font-romantic text-lg text-deep-rose">Meri Sukoon</span>
              <HeartIcon className="text-2xl text-love-red" animated />
              <span className="font-romantic text-lg text-deep-rose">Meri Paglet</span>
              <HeartIcon className="text-2xl text-love-red" animated />
            </div>
          </div>

          <Card className="p-8 romantic-gradient text-white mb-8 love-pulse relative overflow-hidden">
            <div className="absolute top-2 left-2 text-yellow-300 animate-bounce">💫</div>
            <div className="absolute top-2 right-2 text-yellow-300 animate-bounce" style={{animationDelay: "0.5s"}}>💫</div>
            <div className="absolute bottom-2 left-2 text-rose-400 animate-pulse">🌹</div>
            <div className="absolute bottom-2 right-2 text-rose-400 animate-pulse" style={{animationDelay: "0.3s"}}>🌹</div>
            <p className="text-lg md:text-xl font-elegant leading-relaxed">"To my dearest wife, my qalbi, meri duniya, meri rooh - meri bachhi, meri jaan, meri sukoon, my beautiful pagl. This website is a small token of the infinite love I carry for you in my heart. You make every moment magical, every day brighter, and every dream worth pursuing."</p>
          </Card>

          <Button variant="love" size="lg" className="font-elegant text-lg px-8 py-4 relative overflow-hidden" onClick={() => setShowLoveQuestion(true)}>
            <HeartIcon className="mr-2" animated />
            I Love You, Jaan
            <div className="absolute top-1 right-2 text-yellow-300 animate-bounce">
              ✨
            </div>
          </Button>
        </div>
      </section>

      {/* Love Quotes Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-elegant text-deep-rose mb-8">
            Messages from My Heart
          </h2>
          <p className="text-lg text-muted-foreground mb-12 font-romantic">
            Every word written with love, every sentence crafted with care
          </p>
          <LoveQuotes />
        </div>
      </section>

      {/* Forever Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 heart-gradient text-white">
            <h3 className="text-3xl font-romantic mb-6">Forever & Always</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <HeartIcon className="text-4xl mx-auto heartbeat" animated />
                <h4 className="font-elegant text-lg">My Heart</h4>
                <p className="text-sm opacity-90">Beats only for you</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl mx-auto mb-2">💍</div>
                <h4 className="font-elegant text-lg">My Promise</h4>
                <p className="text-sm opacity-90">To love you forever</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl mx-auto mb-2">∞</div>
                <h4 className="font-elegant text-lg">My Love</h4>
                <p className="text-sm opacity-90">"You are my today and all of my tomorrows, meri jaan"</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-2xl font-romantic text-deep-rose mb-4">
            "You are my today and all of my tomorrows, my jaan"
          </p>
          <p className="text-lg font-elegant text-muted-foreground">
            With all my love and endless devotion,<br />
            Your Husband ❤️
          </p>
        </div>
      </section>

      <PhotoGallery isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
    </div>;
};
export default Index;