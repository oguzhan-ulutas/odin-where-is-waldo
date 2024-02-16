import { FC, useState, useContext, useRef, useEffect } from "react";
import "./SelectMenu.css"

import beardieImg from "../assets/beardie.png"
import squidward from "../assets/squidward.png"
import unibrow from "../assets/unibrow.png"
import { AppContext } from "../AppContext";

const SelectMenu:FC = ()=>{
    const {
        cursorPosition,
        setCursorPosition,
        beardie,
        setBeardie,
        squid,
        setSquid,
        uni,
        setUni,
        score,
        setScore,
    
    } = useContext(AppContext)
    const [imgWidth, setImgWidth] = useState<number>(90)

    const changeImageWidth = ()=>{
        setImgWidth (85)
        setTimeout(()=>{
            setImgWidth(90)
        }, 100)
      }
    
      

      const checkLocation = (suspect)=>{
        const {name} = suspect
        console.log(name)
        if (
            cursorPosition.top <= suspect.top
            && cursorPosition.top >= suspect.bottom 
            && cursorPosition.left >= suspect.left
            && cursorPosition.left <= suspect.right
        ){
            setScore({...score, [name]:true})
            console.log(score)
            if (name==="beardie"){
                setBeardie({...beardie, filter:"grayScale(100%)", pointerEvents:"none"})
            } 

            if (name==="squid"){
                setSquid({...squid, filter:"grayScale(100%)", pointerEvents:"none"})
            } 

            if (name==="uni"){
                setUni({...uni, filter:"grayScale(100%)", pointerEvents:"none"})
            } 
        }
      }
    return (
        <div className="select-container" style={cursorPosition}>
           <div className="selection"  ></div> 
            <div className="image-unit-select"
            style={{filter:beardie.filter, pointerEvents:beardie.pointerEvents}}
            onClick={(e)=>{
                e.stopPropagation()
                checkLocation(beardie)
                }}>
                <img src={beardieImg} alt="beardie" style={{width:imgWidth}} onClick={changeImageWidth} />
                <p>Beardie</p>
                </div>
                <div
                 style={{filter:squid.filter, pointerEvents:squid.pointerEvents}}
                 className="image-unit-select" 
                 onClick={(e)=>{
                    e.stopPropagation()
                    checkLocation(squid)
                }} >
                <img src={squidward} alt="squidward" style={{width:imgWidth}} onClick={changeImageWidth} />
                <p>Squidward</p>
                </div>
                <div 
                style={{filter:uni.filter, pointerEvents:uni.pointerEvents}}
                className="image-unit-select"
                onClick={(e)=>{
                    e.stopPropagation()
                    checkLocation(uni)
                }}>
                <img src={unibrow} alt="unibrow" style={{width:imgWidth}} onClick={changeImageWidth} />
                <p>Unibrow</p>
                </div>
        </div>
       
    )
}

export default SelectMenu;