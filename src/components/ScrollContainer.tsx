import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import Lenis from 'lenis';

interface ScrollContainerProps {
  children: React.ReactNode;
  onScrollProgress?: (progress: number) => void;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ children, onScrollProgress }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  // Smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Notify parent of scroll progress
  useEffect(() => {
    const unsubscribe = smoothProgress.onChange((latest) => {
      onScrollProgress?.(latest);
    });
    return unsubscribe;
  }, [smoothProgress, onScrollProgress]);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={containerRef} className="scroll-container">
      {children}
    </div>
  );
};

export default ScrollContainer;
