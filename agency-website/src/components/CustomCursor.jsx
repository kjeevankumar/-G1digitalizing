import { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia("(pointer: fine)").matches;
    }
    return false;
  });
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isPlay = target.closest('[data-cursor="play"]') !== null;
      if (isPlay) {
        setIsHovered('play');
        return;
      }

      // Check if hovering over standard clickable items
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    // Inject styles to cleanly hide the default system pointer
    const styleEl = document.createElement('style');
    styleEl.id = 'custom-cursor-hide-native';
    styleEl.innerHTML = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleEl);

    window.addEventListener('mousemove', moveCursor, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      const existingStyle = document.getElementById('custom-cursor-hide-native');
      if (existingStyle) {
        existingStyle.remove();
      }
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-center ${
        isHovered === 'play'
        ? 'w-14 h-14 bg-white shadow-[0_8px_25px_rgba(0,0,0,0.06)]'
        : isHovered
          ? 'w-10 h-10 bg-blue-600/15 shadow-[0_0_0_1px_rgba(37,99,235,0.25)]'
          : 'w-2.5 h-2.5 bg-slate-900 shadow-[0_0_0_2px_rgba(255,255,255,0.95)]'
      }`}
      style={{
        transform: 'translate3d(-100px, -100px, 0)',
        willChange: 'transform'
      }}
    >
      {isHovered === 'play' && (
        <span className="text-[10px] font-black tracking-widest text-slate-900">PLAY</span>
      )}
    </div>
  );
}
