import Image from 'next/image';
import React from 'react';
import { StageItemContainer, StageItemImage, StageItemTitle } from './styled';

interface StageItemProps {
  logo: string;
  title: string;
  className?: string;
  variant?: 'small' | 'large';
}

export const StageItem = ({ logo, title, className, variant = "large" }: StageItemProps) => {
  return (
    <StageItemContainer className={className}>
      <StageItemImage src={logo} variant={variant} />
      <StageItemTitle>{title}</StageItemTitle>
    </StageItemContainer>
  )
}