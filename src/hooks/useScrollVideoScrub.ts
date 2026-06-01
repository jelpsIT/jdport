import { useEffect, useRef } from 'react';
import { useScroll } from 'framer-motion';

export function useScrollVideoScrub(
  videoRef: React.RefObject<HTMLVideoElement>,
  heroRef: React.RefObject<HTMLElement>,
  duration: number = 9
) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateVideoTime = () => {
      const progress = scrollYProgress.get();
      const targetTime = Math.max(0, Math.min(progress * duration, duration));

      if (Math.abs(targetTime - lastTimeRef.current) > 0.008) {
        video.currentTime = targetTime;
        lastTimeRef.current = targetTime;
      }

      rafRef.current = requestAnimationFrame(updateVideoTime);
    };

    rafRef.current = requestAnimationFrame(updateVideoTime);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [scrollYProgress, duration, videoRef]);
}