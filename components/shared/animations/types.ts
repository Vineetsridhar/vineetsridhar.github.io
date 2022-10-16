import { ReactNode } from "react";

export interface AnimationProps {
  children: ReactNode;
  threshold?: number | number[];
  fallbackInView?: boolean;
}
