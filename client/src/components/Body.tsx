import { FC, useEffect, useRef, useContext } from "react";

import baldies from "../assets/baldies.png"
import SelectMenu from "./SelectMenu";
import { AppContext } from "../AppContext";

const Body:FC = ()=>{
    const {cursorPosition, setCursorPosition} = useContext(AppContext)
    

  const changeSelectMenuPosition = (e)=>{
    
    setCursorPosition({top:`${e.pageY}px`, left:`${e.pageX}px`})
    console.log(cursorPosition)
  }

    return(
        <>
        <img src={baldies} alt="baldies" onClick={changeSelectMenuPosition} />
        <SelectMenu/>
        </>
    )
}

export default Body