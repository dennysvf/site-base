'use client';

import { useState, useCallback, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, IconButton, useTheme } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

export interface CarouselProps {
  items: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
  showArrows?: boolean;
  showIndicators?: boolean;
  className?: string;
}

const CarouselRoot = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  overflow: 'hidden',
}));

const CarouselContent = styled('div')<{ transform: string }>(({ transform }) => ({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  transform,
}));

const CarouselItem = styled('div')({
  flex: '0 0 100%',
  width: '100%',
});

const CarouselArrow = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  color: theme.palette.common.white,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  '&.left': {
    left: theme.spacing(2),
  },
  '&.right': {
    right: theme.spacing(2),
  },
}));

const CarouselIndicators = styled('div')(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: theme.spacing(1),
  zIndex: 1,
}));

const CarouselIndicator = styled('button')<{ active?: boolean }>(({ theme, active }) => ({
  width: 8,
  height: 8,
  padding: 0,
  border: 'none',
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.common.white,
  opacity: active ? 1 : 0.5,
  cursor: 'pointer',
  transition: theme.transitions.create(['opacity', 'background-color']),
  '&:hover': {
    opacity: 0.8,
  },
}));

export function Carousel({
  items,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showIndicators = true,
  className,
}: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const theme = useTheme();

  const goToNext = useCallback(() => {
    setActiveIndex((current) => (current + 1) % items.length);
  }, [items.length]);

  const goToPrev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  }, [items.length]);

  const goToIndex = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    if (autoPlay && !isPaused) {
      const timer = setInterval(goToNext, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, isPaused, goToNext]);

  return (
    <CarouselRoot
      className={className}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <CarouselContent transform={`translateX(-${activeIndex * 100}%)`}>
        {items.map((item, index) => (
          <CarouselItem key={index}>{item}</CarouselItem>
        ))}
      </CarouselContent>

      {showArrows && (
        <>
          <CarouselArrow className="left" onClick={goToPrev} size="small">
            <KeyboardArrowLeft />
          </CarouselArrow>
          <CarouselArrow className="right" onClick={goToNext} size="small">
            <KeyboardArrowRight />
          </CarouselArrow>
        </>
      )}

      {showIndicators && (
        <CarouselIndicators>
          {items.map((_, index) => (
            <CarouselIndicator
              key={index}
              active={index === activeIndex}
              onClick={() => goToIndex(index)}
            />
          ))}
        </CarouselIndicators>
      )}
    </CarouselRoot>
  );
}
