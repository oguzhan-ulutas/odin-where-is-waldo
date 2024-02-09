import { FC } from "react";
import Timer from "./Timer";

import "./Header.css"

const Header:FC = ()=>{
    return (
        <div className="header" >
            <h1>Where's Waldo</h1>
            <div className="timer"> <Timer/> </div>
        </div>
    )
}

export default Header