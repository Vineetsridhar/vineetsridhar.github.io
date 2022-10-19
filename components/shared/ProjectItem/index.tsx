import React from 'react';
import { ProjectItemContent, ProjectItemContainer, StyledImage, BodyWrapper, LogoImage } from './styled';

export interface ProjectItemProps {
  imageSrc: string;
  title: string;
  description: string;
  subImageSrc: [string, string?, string?];
  dateRange: string;

  url?: string;
  borderColor?: string;
}

export const ProjectItem = ({
  imageSrc,
  title,
  subImageSrc,
  description,
  dateRange,
  url,
  borderColor = "rgba(255, 255, 255, 0.5)"
}: ProjectItemProps) => {

  const handleMouseMoveEvent = (e: any) => {
    const targetPosition = e.target.getBoundingClientRect(0);
    const x = e.clientX - targetPosition.left;
    const y = e.clientY - targetPosition.top;

    e.target.style.setProperty("--mouse-x", `${x}px`);
    e.target.style.setProperty("--mouse-y", `${y}px`);
  }

  const handleOnCardClick = () => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <ProjectItemContainer onMouseMove={handleMouseMoveEvent} color={borderColor} onClick={handleOnCardClick}>
      <ProjectItemContent>
        <StyledImage src={imageSrc} />
        <BodyWrapper>
          <div className="image-container">
            {subImageSrc.map((src) => (
              <LogoImage src={src} />
            ))}
          </div>
          <div className='text-container'>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <i>{dateRange}</i>
          </div>
        </BodyWrapper>
      </ProjectItemContent>
    </ProjectItemContainer>
  )
}