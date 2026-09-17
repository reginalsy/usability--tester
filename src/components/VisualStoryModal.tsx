import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Share2, Layers } from 'lucide-react';
import { VisualStory } from '../types';

interface VisualStoryModalProps {
  story: VisualStory | null;
  onClose: () => void;
}

export const VisualStoryModal: React.FC<VisualStoryModalProps> = ({ story, onClose }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  if (!story) return null;

  const currentSlide = story.slides[currentSlideIndex] || {
    title: story.title,
    description: story.description,
    imageUrl: story.imageUrl,
    credit: 'ST Visuals'
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % story.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + story.slides.length) % story.slides.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between text-white p-4 md:p-6 overflow-y-auto">
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between border-b border-gray-800 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            {story.type}
          </span>
          <span className="text-gray-600 hidden sm:inline">|</span>
          <h3 className="font-serif text-sm sm:text-base font-bold text-gray-200 truncate max-w-md sm:max-w-xl">
            {story.title}
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-400 font-mono">
            {currentSlideIndex + 1} / {story.slides.length}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
            title="Close visual story"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Presentation */}
      <div className="my-auto py-6 max-w-5xl mx-auto w-full flex flex-col items-center">
        {/* Slide Image Box */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-black overflow-hidden rounded-xs border border-gray-800 shadow-2xl">
          <img
            src={currentSlide.imageUrl}
            alt={currentSlide.title}
            className="w-full h-full object-cover transition-opacity duration-300"
            referrerPolicy="no-referrer"
          />

          {/* Slide Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
            title="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-xs transition-colors cursor-pointer"
            title="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Credit Overlay */}
          <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/75 text-[10px] text-gray-400 font-mono rounded-xs">
            {currentSlide.credit}
          </div>
        </div>

        {/* Slide Narrative Explanation */}
        <div className="mt-4 max-w-3xl w-full text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <Layers className="w-4 h-4 text-red-500" />
            <h4 className="font-serif font-bold text-lg text-white">
              {currentSlide.title}
            </h4>
          </div>
          <p className="font-serif text-sm sm:text-base text-gray-300 leading-relaxed">
            {currentSlide.description}
          </p>
        </div>
      </div>

      {/* Bottom Thumbnail Strip / Indicator */}
      <div className="border-t border-gray-800 pt-3 flex items-center justify-between text-xs text-gray-400">
        <div className="flex gap-2">
          {story.slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === currentSlideIndex
                  ? 'w-8 bg-red-600'
                  : 'w-3 bg-gray-700 hover:bg-gray-500'
              }`}
              title={`Slide ${idx + 1}`}
            />
          ))}
        </div>
        <p className="text-[11px] text-gray-500">
          The Straits Times Multimedia Interactive
        </p>
      </div>
    </div>
  );
};
