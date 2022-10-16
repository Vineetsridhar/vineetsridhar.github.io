import React, { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { FadeInContainer, FlyInContainer, StaggerContainer } from './styled';
import { AnimationProps } from './types';

interface StaggerInProps extends AnimationProps {
  animation: "fly-in" | "fade-in";
  animationFunctionProps?: any;
  children: ReactNode[];
  containerClassName?: string;
  animationDelay?: number;
}
export const StaggerIn = ({ animation, animationFunctionProps, animationDelay = 200, threshold = 1, fallbackInView = true, children, containerClassName }: StaggerInProps) => {
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
    <AnimationContainer {...animationFunctionProps} threshold={threshold}>
      <StaggerContainer delayInMs={animationDelay} numElements={children.length} ref={ref} className={containerClassName}>
        {children.map((node) => (
          <span className={`stagger-item ${inView ? "show" : "hidden"}`}>{node}</span>
        ))}
      </StaggerContainer>
    </AnimationContainer>
  )
}