import styled, { css } from "styled-components";

const HOVER_ANIMATION_SPEED = 0.25;

export const StageItemTitle = styled.p`
  opacity: 0;
  transition: all ${HOVER_ANIMATION_SPEED}s;
`;

interface VariantProps {
  variant: "small" | "large";
}
export const StageItemImage = styled.img<VariantProps>`
  width: ${({ variant }) =>
    variant === "large" ? css`min(20vw, 150px)` : css`min(17vw, 120px)`};
  height: ${({ variant }) =>
    variant === "large" ? css`min(20vw, 150px)` : css`min(17vw, 120px)`};
  transition: all ${HOVER_ANIMATION_SPEED}s;
`;

export const StageItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 32px;

  &:hover {
    ${StageItemTitle} {
      opacity: 1;
    }
    ${StageItemImage} {
      transform: scale(1.2);
    }
  }
`;
