import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2 } from "lucide-react";
import { HeartIcon } from "@/components/HeartIcon";

interface MusicPlayerProps {
  audioSrc?: string;
  isVisible: boolean;
}

export const MusicPlayer = ({ audioSrc, isVisible }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [audioSrc]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-romantic-gradient backdrop-blur-sm border border-white/20 rounded-lg p-3 shadow-lg">
      <div className="flex items-center gap-3 text-white">
        <HeartIcon className="text-love-red animate-pulse" />
        
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlay}
          className="text-white hover:bg-white/20 h-8 w-8"
          disabled={!audioSrc}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>

        <div className="flex flex-col">
          <span className="text-xs font-romantic">Our Song</span>
          {audioSrc && (
            <div className="text-xs opacity-80">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          )}
          {!audioSrc && (
            <span className="text-xs opacity-60">No song uploaded</span>
          )}
        </div>

        <Volume2 className="h-4 w-4 opacity-60" />
      </div>

      {audioSrc && (
        <audio
          ref={audioRef}
          src={audioSrc}
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </div>
  );
};