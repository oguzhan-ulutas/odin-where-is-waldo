import { FC, useEffect, useRef, useContext } from "react";

import baldies from "../assets/baldies.png"
import SelectMenu from "./SelectMenu";
import { AppContext } from "../AppContext";
import "./Body.css"
import Timer from "./Timer";

const Body:FC = ()=>{
    const {
        cursorPosition,
        setCursorPosition,
       
        
    } = useContext(AppContext)
   
  const changeSelectMenuPosition = (e)=>{  
    setCursorPosition({top:e.pageY , left:e.pageX })
    
  }

    return(
        <>
        <div className="body-container">
          <img className="baldies" src={baldies} alt="baldies" onClick={changeSelectMenuPosition} />
          <div className="timer"> <Timer/> </div>
        </div>
        
        <SelectMenu/>
        </>
    )
}

export default Body