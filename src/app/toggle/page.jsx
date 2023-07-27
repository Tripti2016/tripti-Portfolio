"use client";

import { useState, useEffect } from "react";
import {FaAdjust} from "react-icons/fa";

const Toggle = () => {
    const [lightMode, setLightMode] = useState(false);

    const handleThemeToggle = () => {
      setLightMode((prevLightMode) => !prevLightMode);
    };
  
    useEffect(() => {
      if (lightMode) {
        document.body.classList.add('light-mode');
      } else {
        document.body.classList.remove('light-mode');
      }
    }, [lightMode]);
  
  
    return (
      
        
        <div  className={`theme-btn ${lightMode ? 'light-mode' : ''}`} onClick={handleThemeToggle}>
         <FaAdjust />
        </div>
        
      
    );
  };
  
  export default Toggle;