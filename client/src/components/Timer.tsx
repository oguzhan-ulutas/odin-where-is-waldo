import { FC, useState, useEffect, useContext } from "react";
import { AppContext } from "../AppContext";

const Timer:FC = ()=>{
    
  const {seconds, setSeconds, setTime, win} = useContext(AppContext)

    useEffect(() => {
        // Update the timer every second
        const intervalId = setInterval(() => {
          if (!win) {
            setSeconds((prevSeconds) => prevSeconds + 1);
          }
          
        }, 1000);
    
        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);
      }, [win]); // Empty dependency array ensures that the effect runs only once (on mount)

      const formatTime = (timeInSeconds: number): string => {
        const minutes = Math.floor(timeInSeconds / 60);
        const remainingSeconds = timeInSeconds % 60;
        const time = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
        setTime(time)
        
        return time;
      };

      return (
        <div>
          <h2>Timer: {formatTime(seconds)}</h2>
        </div>
      );
}

export default Timer