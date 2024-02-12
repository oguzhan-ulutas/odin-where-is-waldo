import { FC, useState, useContext } from "react";
import "./SelectMenu.css"

import beardie from "../assets/beardie.png"
import squidward from "../assets/squidward.png"
import unibrow from "../assets/unibrow.png"
import { AppContext } from "../AppContext";

const SelectMenu:FC = ()=>{
    const {cursorPosition, setCursorPosition} = useContext(AppContext)
    const [imgWidth, setImgWidth] = useState<number>(90)

    const changeImageWidth = ()=>{
        setImgWidth (85)
        setTimeout(()=>{
            setImgWidth(90)
        }, 100)
      }


 
    

    return (
        <div className="select-container" style={cursorPosition}>
            <div className="selection"  ></div>
            <div className="image-unit-select">
                <img src={beardie} alt="beardie" style={{width:imgWidth}} onClick={changeImageWidth} />
                <p>Beardie</p>
                </div>
                <div className="image-unit-select">
                <img src={squidward} alt="squidward" style={{width:imgWidth}} onClick={changeImageWidth} />
                <p>Squidward</p>
                </div>
                <div className="image-unit-select">
                <img src={unibrow} alt="unibrow" style={{width:imgWidth}} onClick={changeImageWidth} />
                <p>Unibrow</p>
                </div>
        </div>
       
    )
}

export default SelectMenu;