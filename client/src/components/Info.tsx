import { FC } from "react";

import beardie from "../assets/beardie.png"
import squidward from "../assets/squidward.png"
import unibrow from "../assets/unibrow.png"

import "./Info.css"

const Info:FC = ()=>{
    return(
        <div className="info">
            <p>Find the usual suspects in the picture below. <br/> Your time is ticking!!!</p>
            <div className="image-container">
                <div className="image-unit">
                <img src={beardie} alt="beardie" />
                <p>Beardie</p>
                </div>
                <div className="image-unit">
                <img src={squidward} alt="squidward" />
                <p>Squidward</p>
                </div>
                <div className="image-unit">
                <img src={unibrow} alt="unibrow" />
                <p>Unibrow</p>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Info