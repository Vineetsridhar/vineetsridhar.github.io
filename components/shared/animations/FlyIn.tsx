import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { FlyInContainer } from './styled';

export type Direction = 'top' | 'left' | 'right' | 'bottom'

interface FlyInProps {
  children: ReactNode;
  threshold?: number | number[];
  fallbackInView?: boolean;
  direction: Direction;
}

export const FlyIn = ({ children, direction, threshold = 1, fallbackInView = true }: FlyInProps) => {
  const { ref, inView } = useInView({
    threshold,
    fallbackInView
  });

  return (
    <FlyInContainer direction={direction}>
      <div ref={ref} className={inView ? "show" : "hidden"}>
        {children}
      </div>
    </FlyInContainer>
  )
}