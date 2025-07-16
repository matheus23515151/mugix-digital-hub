import { useEffect, useState, useRef } from 'react';

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    const handleScrollThrottled = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', handleScrollThrottled, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScrollThrottled);
  }, []);

  const getParallaxOffset = (speed = 0.5) => {
    if (!isVisible) return 0;
    return scrollY * speed;
  };

  const getParallaxStyle = (speed = 0.5) => ({
    '--parallax-offset': `${getParallaxOffset(speed)}px`,
    '--parallax-offset-fast': `${getParallaxOffset(speed * 1.5)}px`,
  } as React.CSSProperties);

  return {
    elementRef,
    scrollY,
    isVisible,
    getParallaxOffset,
    getParallaxStyle
  };
};