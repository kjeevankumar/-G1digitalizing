import React from 'react';

/**
 * GrainOverlay
 * Adds a subtle cinema-grade noise/grain texture to the entire application.
 * This eliminates the 'flat' digital look and adds a premium tangible feel.
 */
export default function GrainOverlay() {
  return (
    <div 
      className="fixed inset-0 z-[999998] pointer-events-none overflow-hidden opacity-[0.035] mix-blend-multiply"
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.65" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
