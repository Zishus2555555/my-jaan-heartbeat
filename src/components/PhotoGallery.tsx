import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "@/components/HeartIcon";
import { MusicPlayer } from "@/components/MusicPlayer";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = [
  "/lovable-uploads/8b63adbe-edb2-4802-96b1-254f055341dd.png",
  "/lovable-uploads/b54dae69-551b-455d-a476-6c2d7b75e134.png",
  "/lovable-uploads/6938692a-c3d1-4f1d-9635-da2032b690e1.png",
  "/lovable-uploads/6eb99f19-7465-4c7b-83cc-1ddaa6e5b09b.png",
  "/lovable-uploads/579fa890-23dc-4f61-b188-da43ad7ee30a.png",
  "/lovable-uploads/9455103b-a539-42f9-ab1c-f56f7bfb5460.png",
  "/lovable-uploads/8898ca3e-21d3-405b-a350-e6c0fc320518.png",
  "/lovable-uploads/bf937187-0276-4197-ac65-010ca130c65a.png",
  "/lovable-uploads/a34c8a23-f9a5-40f7-a758-f5393121dfdf.png",
  "/lovable-uploads/45a8db85-1055-46ef-b90e-6da499b389d8.png"
];

interface PhotoGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoGallery = ({ isOpen, onClose }: PhotoGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <MusicPlayer 
        audioSrc="/path/to/your/song.mp3" // Replace with your audio file path
        isVisible={isOpen} 
      />
      
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl w-full h-[80vh] p-0 bg-background border-none">
          <DialogHeader className="absolute top-4 left-4 z-10">
            <DialogTitle className="text-deep-rose font-romantic text-2xl flex items-center gap-2">
              <HeartIcon className="text-love-red" animated />
              Our Beautiful Memories, Jaan
            </DialogTitle>
          </DialogHeader>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
          >
            <X className="h-4 w-4" />
          </Button>

          <div className="relative w-full h-full flex items-center justify-center bg-background">
            <img
              src={photos[currentIndex]}
              alt={`Beautiful memory ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            <Button
              variant="ghost"
              size="icon"
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-love-red" : "bg-background/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-center">
            <p className="text-deep-rose font-romantic text-lg bg-background/80 px-4 py-2 rounded-lg">
              Every moment with you is a treasure, my jaan ❤️
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};