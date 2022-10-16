import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { FadeInContainer } from './styled';

interface FlyInProps {
  children: ReactNode;
  threshold?: number | number[];
  fallbackInView?: boolean;
}

export const FadeIn = ({ children, threshold = 0.2, fallbackInView = true }: FlyInProps) => {
  const { ref, inView } = useInView({
    threshold,
    fallbackInView
  });

  return (
    <FadeInContainer>
      <div ref={ref} className={inView ? "show" : "hidden"}>
        {children}
      </div>
    </FadeInContainer>
  )
}