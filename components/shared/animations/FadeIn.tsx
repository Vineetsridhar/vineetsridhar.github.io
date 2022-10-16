import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { FadeInContainer } from './styled';
import { AnimationProps } from './types';

export const FadeIn = ({ children, threshold = 1, fallbackInView = true }: AnimationProps) => {
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