import { useState, useEffect, useRef } from 'react';

function TypingEffect({ text, speed = 50 }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasTyped = useRef(false);

  useEffect(() => {
    if (hasTyped.current) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      hasTyped.current = true;
    }
  }, [currentIndex, text, speed]);

  return (
    <span className="typing-effect">
      {displayText}
    </span>
  );
}

export default TypingEffect; 