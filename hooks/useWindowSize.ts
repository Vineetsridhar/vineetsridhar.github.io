import { useState, useEffect } from "react";

interface Dimension {
  width?: number;
  height?: number;
}

export const useWindowSize: () => Dimension = () => {
  const [windowSize, setWindowSize] = useState<Dimension>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
};
