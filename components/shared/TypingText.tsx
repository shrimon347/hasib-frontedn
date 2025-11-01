"use client";
import { useEffect, useRef, useState } from "react";

interface TypingTextProps {
  words: string[];
  color?: string; // Tailwind color class, e.g., "text-blue"
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypingText: React.FC<TypingTextProps> = ({
  words,
  color = "text-blue",
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseTime = 1000,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [typing, setTyping] = useState(true);
  const containerRef = useRef<HTMLSpanElement>(null);

  // Calculate max word length for fixed width
  const maxLength = Math.max(...words.map((w) => w.length));

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentWord = words[currentWordIndex];

    if (typing) {
      if (displayedText.length < currentWord.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setTyping(false), pauseTime);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length - 1));
        }, deletingSpeed);
      } else {
        setTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, typing, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span
      ref={containerRef}
      className={` gap-1`}
      style={{ minWidth: `${maxLength}ch` }} // <-- Prevent line jump
    >
      <span className={color}>{displayedText}</span>
      <span className="blinking-cursor" />
    </span>
  );
};

export default TypingText;
