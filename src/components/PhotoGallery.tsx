import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "@/components/HeartIcon";
import { MusicPlayer } from "@/components/MusicPlayer";
import { ChevronLeft, ChevronRight, X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

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
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    resetZoom();
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    resetZoom();
  };

  const zoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.5, 3));
    setIsZoomed(true);
  };

  const zoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.5, 1));
    if (zoomLevel <= 1.5) setIsZoomed(false);
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    if (isZoomed) {
      resetZoom();
    } else {
      setZoomLevel(2);
      setIsZoomed(true);
    }
  };

  return (
    <>
      <MusicPlayer 
        audioSrc="https://drive.google.com/uc?export=download&id=1JJhMH54KWpUABZT5QFTkrYaIaNK0eAiS"
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

          <div className="relative w-full h-full flex items-center justify-center bg-background overflow-hidden">
            {/* Zoom Controls */}
            <div className="absolute top-4 right-20 z-10 flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={zoomOut}
                disabled={zoomLevel <= 1}
                className="bg-background/80 hover:bg-background"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={resetZoom}
                disabled={zoomLevel === 1}
                className="bg-background/80 hover:bg-background"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={zoomIn}
                disabled={zoomLevel >= 3}
                className="bg-background/80 hover:bg-background"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>

            {/* Main Image with Zoom */}
            <div 
              className="relative overflow-auto max-w-full max-h-full cursor-pointer"
              onClick={toggleZoom}
            >
              <img
                src={photos[currentIndex]}
                alt={`Beautiful memory ${currentIndex + 1}`}
                className="transition-transform duration-300 ease-in-out rounded-lg"
                style={{
                  transform: `scale(${zoomLevel})`,
                  maxWidth: zoomLevel > 1 ? 'none' : '100%',
                  maxHeight: zoomLevel > 1 ? 'none' : '100%',
                }}
              />
            </div>

            {/* Navigation Arrows */}
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

            {/* Photo Navigation Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-background/60 px-3 py-2 rounded-full">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    resetZoom();
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-love-red" : "bg-background/50"
                  }`}
                />
              ))}
            </div>

            {/* Photo Counter */}
            <div className="absolute top-4 left-4 z-10 bg-background/80 px-3 py-1 rounded-lg">
              <span className="text-deep-rose font-romantic text-sm">
                {currentIndex + 1} / {photos.length}
              </span>
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