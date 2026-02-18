'use client';

import { useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

export const ScrambleText = ({
  text,
  className = '',
  delay = 0,
  speed = 0.5,
}: ScrambleTextProps) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, amount: 0.5 });

  const chars = '!<>-_\\/[]{}—=+*^?#';

  const initialText = useRef(
    text
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' ';
        return chars[(char.charCodeAt(0) + i) % chars.length];
      })
      .join(''),
  ).current;

  useEffect(() => {
    if (!isInView) return;

    const el = elementRef.current;
    if (!el) return;

    let interval: NodeJS.Timeout;
    let iteration = 0;
    const textArray = text.split('');

    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        if (el) {
          el.innerText = textArray
            .map((letter, index) => {
              if (letter === ' ') return ' ';
              if (index < iteration) return text[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('');
        }

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += speed;
      }, 30);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(interval);
      if (el) el.innerText = text;
    };
  }, [isInView, text, delay, speed]);

  return (
    <span ref={elementRef} className={className}>
      {initialText}
    </span>
  );
};
