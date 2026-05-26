import { createContext, useContext, useState } from 'react';

const FocusContext = createContext(null);

export function FocusGridWrapper({ children, className = '' }) {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <FocusContext.Provider value={{ hoveredId, setHoveredId }}>
      <div className={className}>
        {children}
      </div>
    </FocusContext.Provider>
  );
}

export function FocusCard({ id, children, className = '' }) {
  const { hoveredId, setHoveredId } = useContext(FocusContext);
  
  const isHovered = hoveredId === id;
  const isSiblingHovered = hoveredId !== null && hoveredId !== id;
  
  return (
    <div
      onMouseEnter={() => setHoveredId(id)}
      onMouseLeave={() => setHoveredId(null)}
      className={`transition-all duration-500 ease-out ${
        isSiblingHovered ? 'scale-[0.98] blur-[2px] opacity-40 grayscale-[0.5]' : 'scale-100 blur-0 opacity-100 grayscale-0'
      } ${className}`}
    >
      {children}
    </div>
  );
}
