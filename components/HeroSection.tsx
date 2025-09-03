import React, { useRef, useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoDuration, setVideoDuration] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      setVideoDuration(video.duration);
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    // Ensure video is paused initially
    video.pause();

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container || !video || !isFinite(video.duration) || video.duration === 0) return;

      const { top } = container.getBoundingClientRect();
      const scrollableHeight = container.scrollHeight - window.innerHeight;

      // Progress is 0 when the top of the container is at the top of the viewport
      // Progress is 1 when the bottom of the container is at the bottom of the viewport
      const progress = Math.max(0, Math.min(1, -top / scrollableHeight));
      
      if (!isNaN(progress)) {
        video.currentTime = video.duration * progress;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-[300vh] relative">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="https://storage.googleapis.com/creators-media/media-2024-06-13/a-woman-meditating-at-dusk-next-to-a-body-of-water-S24-13837.mp4"
          muted
          playsInline
          preload="auto"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Text Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            Build with your best AI models
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-300">
            A simple, performant, and reliable API to build with the best open and closed-source models.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500 transition-colors"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5" />
            </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;