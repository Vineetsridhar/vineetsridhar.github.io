import styled, { css } from "styled-components";
import { Direction } from "./FlyIn";

const ANIMATION_SPEED = 1.5;

export const FadeInContainer = styled.div`
  .hidden {
    opacity: 0;
    transition: all 0.5s;
  }

  .show {
    opacity: 1;
    transition: all ${ANIMATION_SPEED}s;
  }
`;
interface FlyInProps {
  direction: Direction;
}
const getTransformFromDirection = (direction: Direction) => {
  switch (direction) {
    case "top":
      return css`translateY(-100%)`;
    case "bottom":
      return css`translateY(100%)`;
    case "left":
      return css`translateX(-100%)`;
    case "right":
      return css`translateX(100%)`;
  }
};
export const FlyInContainer = styled.div<FlyInProps>`
  .hidden {
    opacity: 0;
    transform: ${({ direction }) => getTransformFromDirection(direction)};
    transition: all 0.5s;
  }

  .show {
    opacity: 1;
    transform: translate(0);
    transition: all ${ANIMATION_SPEED}s;
  }
`;

interface StaggerContainerProps {
  numElements: number;
  delayInMs?: number;
}
export const StaggerContainer = styled.div<StaggerContainerProps>`
  ${({ numElements, delayInMs = 200 }) => {
    return Array.from({ length: numElements }).map(
      (_, i) => `
        .stagger-item:nth-child(${i + 2}) {
          transition-delay: ${(i + 2) * delayInMs}ms
        }
      `
    );
  }}
`;
