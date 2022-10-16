import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { FadeInContainer, FlyInContainer, StaggerContainer } from './styled';
import { AnimationProps } from './types';

interface StaggerInProps extends AnimationProps {
  animation: "fly-in" | "fade-in";
  animationFunctionProps?: any;
  children: ReactNode[];
  containerClassName?: string;
}
export const StaggerIn = ({ animation, animationFunctionProps, threshold = 1, fallbackInView = true, children, containerClassName }: StaggerInProps) => {
  const { ref, inView } = useInView({
    threshold,
    fallbackInView
  });

  const getAnimationContainer = () => {
    switch (animation) {
      case "fade-in":
        return FadeInContainer;
      case "fly-in":
        return FlyInContainer;
    }
  }

  const AnimationContainer = getAnimationContainer();

  return (
    <AnimationContainer {...animationFunctionProps} ref={ref}>
      <StaggerContainer numElements={children.length} className={containerClassName}>
        {children.map((node) => (
          <span className={`stagger-item ${inView ? "show" : "hidden"}`}>{node}</span>
        ))}
      </StaggerContainer>
    </AnimationContainer>
  )
}