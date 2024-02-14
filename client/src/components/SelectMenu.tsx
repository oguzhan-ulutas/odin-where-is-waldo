import { FC, useState, useContext, useRef, useEffect } from "react";
import "./SelectMenu.css"

import beardie from "../assets/beardie.png"
import squidward from "../assets/squidward.png"
import unibrow from "../assets/unibrow.png"
import { AppContext } from "../AppContext";

const SelectMenu:FC = ()=>{
    const {
        cursorPosition,
        setCursorPosition,
        selectionDiv,
        beardieLocation,
        squidLocation,
        uniLocation,
        score,
        setScore
    } = useContext(AppContext)
    const [imgWidth, setImgWidth] = useState<number>(90)

    const changeImageWidth = ()=>{
        setImgWidth (85)
        setTimeout(()=>{
            setImgWidth(90)
        }, 100)
      }
    
      

      const checkLocation = (suspect)=>{
        console.log(cursorPosition.top <= suspect.top)
        console.log(cursorPosition.top >= suspect.bottom )

        console.log(cursorPosition.top)
        console.log(suspect)
        const name = suspect.name
        if (
            cursorPosition.top <= suspect.top
            && cursorPosition.top >= suspect.bottom 
            && cursorPosition.left >= suspect.left
            && cursorPosition.left <= suspect.right
        ){
            setScore({...score, name:true})
            console.log(score)
        }
      }
    return (
        <div className="select-container" style={cursorPosition}>
           <div className="selection" ref={selectionDiv}  ></div> 
            <div className="image-unit-select" onClick={()=>{checkLocation(beardieLocation)}}>
                <img src={beardie} alt="beardie" style={{width:imgWidth}} onClick={changeImageWidth} />
                <p>Beardie</p>
                </div>
                <div className="image-unit-select" onClick={ checkLocation(squidLocation)} >
                <img src={squidward} alt="squidward" style={{width:imgWidth}} onClick={changeImageWidth} />
                <p>Squidward</p>
                </div>
                <div className="image-unit-select" onClick={()=>{checkLocation(uniLocation)}}>
                <img src={unibrow} alt="unibrow" style={{width:imgWidth}} onClick={changeImageWidth} />
                <p>Unibrow</p>
                </div>
        </div>
       
    )
}

export default SelectMenu;