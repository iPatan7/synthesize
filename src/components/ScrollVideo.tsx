import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollVideoProps {
  src: string;
  children: React.ReactNode;
  className?: string;
}

const ScrollVideo: React.FC<ScrollVideoProps> = ({ src, children, className = '' }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Transform scroll progress to video playback
  const videoProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);
  const videoBrightness = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 0.3, 0.3, 0.5]);

  // Update video playback based on scroll
  useEffect(() => {
    const unsubscribe = videoProgress.on('change', (latest) => {
      if (videoRef.current) {
        const video = videoRef.current;
        const duration = video.duration;
        if (duration && !isNaN(duration)) {
          video.currentTime = latest * duration;
        }
      }
    });

    return unsubscribe;
  }, [videoProgress]);

  return (
    <div ref={containerRef} className={`scroll-video-container ${className}`}>
      <motion.video
        ref={videoRef}
        className="scroll-video"
        src={src}
        muted
        playsInline
        loop
        style={{
          scale: videoScale,
          filter: `brightness(${videoBrightness})`,
        }}
      />
      <motion.div
        className="scroll-video-overlay"
        style={{
          opacity: overlayOpacity,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ScrollVideo;
