 import React, { useState, useEffect} from 'react'
 
 const useMouseTopCenter = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isTopCenter, setIsTopCenter] = useState(false);
    const width = window.innerWidth;
  
    useEffect(() => {
      const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
      window.addEventListener("mousemove", setFromEvent);
  
      return () => {
        window.removeEventListener("mousemove", setFromEvent);
      };
    }, []);
  
    useEffect(() => {
      const centerLeft = width / 3;
      const centerRight = (width / 3) * 2;
      if (
        position.x > centerLeft &&
        position.x < centerRight &&
        position.y < 20
      ) {
        setIsTopCenter(true);
      } else {
        setIsTopCenter(false);
      }
    }, [position, width]);
  
    return isTopCenter;
  };
  

  export default useMouseTopCenter