import styled from "styled-components";

export const ProjectItemsContainer = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: min(100vw, 850px);
`;

interface GlowProps {
  color: string;
}
export const ProjectItemContainer = styled.div<GlowProps>`
  width: min(400px, 100vw - 20px);
  height: 320px;
  margin: 8px 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  &:hover::before,
  &:hover::after {
    opacity: 1;
  }

  &::before,
  &::after {
    content: "";

    border-radius: inherit;
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    z-index: 2;
    opacity: 0;
    transition: opacity 500ms;
  }

  &::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    z-index: 3;
  }

  &::after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      ${({ color }) => color},
      transparent 40%
    );
    z-index: 1;
  }
`;

export const ProjectItemContent = styled.div`
  background-color: rgb(23, 23, 23);
  border-radius: inherit;
  position: absolute;
  inset: 1px;
  margin: 1px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledImage = styled.img`
  height: 40%;
  padding-top: 12px;
  flex: 1;
`;

export const BodyWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  padding: 0px 20px;
  align-items: flex-start;
  display: flex;
  gap: 10px;
  padding-top: 16px;
  width: 70%;

  .image-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  h3 {
    font-size: 2em;
    margin: 0px;
  }
  h4 {
    color: rgba(255, 255, 255, 0.75);
    font-size: 1.2em;
    margin: 4px 0 6px 0;
    font-weight: normal;
  }
  i {
    color: rgba(255, 255, 255, 0.5);
    font-size: 1em;
    margin: 0px;
    font-weight: normal;
  }
`;

export const LogoImage = styled.img`
  height: 45px;
  width: 45px;
`;
