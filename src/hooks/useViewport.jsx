import { useEffect, useState } from "react";

const useViewport = () => {
  
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowWidthChange = () => {
      setViewportWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowWidthChange);
    return () => window.removeEventListener('resize', handleWindowWidthChange);
  }, []);

  return { viewportWidth };
}

export default useViewport;