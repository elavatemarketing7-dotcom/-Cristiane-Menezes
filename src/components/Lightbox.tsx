import { useEffect } from "react";
import { X, ZoomIn, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface LightboxProps {
  isOpen: boolean;
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({
  isOpen,
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen || currentIndex < 0 || currentIndex >= images.length) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 selection:bg-gold-500">
        {/* Backdrop Tap to Close */}
        <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

        {/* Top Control Bar */}
        <div className="absolute top-4 left-0 w-full px-6 flex justify-between items-center z-10">
          <div className="text-white text-xs font-mono bg-neutral-900/80 px-3 py-1.5 rounded-full border border-neutral-800">
            {currentIndex + 1} de {images.length}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-neutral-900/80 text-neutral-300 hover:text-white flex items-center justify-center border border-neutral-800 hover:border-gold-400/40 cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 w-12 h-12 rounded-full bg-neutral-900/60 hover:bg-neutral-900 text-neutral-300 hover:text-white flex items-center justify-center border border-neutral-800 hover:border-gold-400/30 cursor-pointer transition-all z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 w-12 h-12 rounded-full bg-neutral-900/60 hover:bg-neutral-900 text-neutral-300 hover:text-white flex items-center justify-center border border-neutral-800 hover:border-gold-400/30 cursor-pointer transition-all z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image Container with Elegant Zoom-in Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.25 }}
          className="relative max-w-4xl max-h-[80vh] flex flex-col items-center justify-center z-0"
        >
          <img
            src={currentImage}
            alt="Resultado Harmonização Facial"
            className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-neutral-800"
            referrerPolicy="no-referrer"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="mt-4 flex items-center gap-1.5 text-neutral-400 text-xs text-center font-sans bg-neutral-900/50 px-4 py-2 rounded-full">
            <ZoomIn className="w-3.5 h-3.5 text-gold-400" />
            <span>Resultados individuais variam. Agende uma consulta para uma avaliação sob medida.</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
