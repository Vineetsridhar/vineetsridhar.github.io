import Image from 'next/image';
import React from 'react';
import { StageItemContainer, StageItemImage, StageItemTitle } from './styled';

interface StageItemProps {
  logo: string;
  title: string;
  className?: string;
}

export const StageItem = ({ logo, title, className }: StageItemProps) => {
  return (
    <StageItemContainer>
      <StageItemImage src={logo} />
      <StageItemTitle>{title}</StageItemTitle>
    </StageItemContainer>
  )
}