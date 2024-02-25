import { FC, useEffect, useRef, useContext } from "react";

import baldies from "../assets/baldies.png"
import SelectMenu from "./SelectMenu";
import { AppContext } from "../AppContext";
import "./Body.css"

const Body:FC = ()=>{
    const {
        cursorPosition,
        setCursorPosition,
       
        
    } = useContext(AppContext)
   
  const changeSelectMenuPosition = (e)=>{  
    setCursorPosition({top:e.pageY - 50, left:e.pageX + 50})
    
  }
  

    return(
        <>
        <img className="baldies" src={baldies} alt="baldies" onClick={changeSelectMenuPosition} />
        <SelectMenu/>
        </>
    )
}

export default Body