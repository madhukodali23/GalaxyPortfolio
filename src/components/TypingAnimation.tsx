import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({ 
  text, 
  speed = 100, 
  delay = 2000 
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      // Typing forward
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        }, speed);
      } else {
        // Finished typing, wait then start backspacing
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delay);
      }
    } else {
      // Backspacing
      if (currentIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        }, speed / 2); // Backspace faster than typing
      } else {
        // Finished backspacing, wait then start typing again
        timeout = setTimeout(() => {
          setIsTyping(true);
        }, delay / 2);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, isTyping, text, speed, delay]);

  return (
    <div className="flex items-center justify-center">
      <span className="text-3xl md:text-4xl font-orbitron font-extrabold drop-shadow-glow animate-glow bg-gradient-to-r from-neonblue via-neonpink via-30% to-neongreen text-transparent bg-clip-text">
        {displayText}
        <span className="inline-block w-1 h-8 bg-neonpink ml-1 animate-pulse shadow-neonpink"></span>
      </span>
    </div>
  );
}; 