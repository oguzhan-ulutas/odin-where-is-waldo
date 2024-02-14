import { FC, useContext } from "react";

import beardieImg from "../assets/beardie.png"
import squidward from "../assets/squidward.png"
import unibrow from "../assets/unibrow.png"

import "./Info.css"
import { AppContext } from "../AppContext";

const Info:FC = ()=>{
    const {
        beardie,
        squid,
        uni
    } = useContext(AppContext)
    return(
        <div className="info">
            <p>Find the usual suspects in the picture below. <br/> Your time is ticking!!!</p>
            <div className="image-container">
                <div
                style={{filter:beardie.filter, pointerEvents:beardie.pointerEvents}}
                className="image-unit">
                <img src={beardieImg} alt="beardie" />
                <p>Beardie</p>
                </div>
                <div
                style={{filter:squid.filter, pointerEvents:squid.pointerEvents}}
                className="image-unit">
                <img src={squidward} alt="squidward" />
                <p>Squidward</p>
                </div>
                <div
                style={{filter:uni.filter, pointerEvents:uni.pointerEvents}}
                className="image-unit">
                <img src={unibrow} alt="unibrow" />
                <p>Unibrow</p>
                </div>
                
                
                
            </div>
        </div>
    )
}

export default Info