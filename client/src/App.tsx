import { useState, useRef, useEffect } from 'react'
import './App.css'

import Router from './Router'
import { AppContext } from './AppContext'

function App() {
  const [cursorPosition, setCursorPosition] = useState<{
    top: number;
    left: number;
}>({top:-1000, left:0})


// Add and subtract 35px of the suspects location
const [beardie, setBeardie ] = useState({name:"beardie", top:1149, bottom:1079, left:639, right:709, filter:"grayScale(0%)", pointerEvents:"auto"})
const [squid, setSquid]= useState({ name:"squid", top:1578, bottom:1508, left:932, right:1002, filter:"grayScale(0%)", pointerEvents:"auto"})
const [uni, setUni] = useState({name:"uni", top:1235, bottom:1165, left:351, right:421, filter:"grayScale(0%)", pointerEvents:"auto"})

const [score, setScore] = useState({beardie:false, squid:false, uni:false})
const [seconds, setSeconds] = useState<number>(0)
const [time, setTime] = useState("")
const [leaders, setLeaders] = useState([])
const baseUrl = import.meta.env.VITE_BASE_URL;
const [win, setWin] = useState(false)

// Set win on finding of all suspect
useEffect(()=>{
  if (
    score.beardie === true
    && score.squid === true
    && score.uni === true
  ){
    setWin(true)
    
  }
},[ score])



  return (
    <AppContext.Provider value={{
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
      seconds,
      setSeconds,
      leaders,
      setLeaders,
      baseUrl,
      time,
      setTime,
      win,
      setWin
      
     
    }} >
      <Router/>
    </AppContext.Provider>
  )
}

export default App
