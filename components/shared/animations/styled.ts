import styled, { css } from "styled-components";
import { Direction } from "./FlyIn";

const ANIMATION_SPEED = 1;

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
      return css`translateY(-75%)`;
    case "bottom":
      return css`translateY(75%)`;
    case "left":
      return css`translateX(-75%)`;
    case "right":
      return css`translateX(75%)`;
  }
};

export const FlyInContainer = styled.div<FlyInProps>`
  .hidden {
    opacity: 0;
    transform: ${({ direction }) => getTransformFromDirection(direction)};
    transition: all 0.5s;
    @media only screen and (max-aspect-ratio: 10/9) {
      transform: none;
    }
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
