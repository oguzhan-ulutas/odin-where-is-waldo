import { useState, useEffect, useRef } from 'react'
import './App.css'

import Router from './Router'
import { AppContext } from './AppContext'

function App() {
  const [cursorPosition, setCursorPosition] = useState<{
    top: number;
    left: number;
}>({top:-1000, left:0})

const imgRef = useRef(null)


// Add and subtract 35px of the suspects location to create a virtual square
const [beardie, setBeardie ] = useState({name:"beardie", top:1300, bottom:1195, left:597, right:709, filter:"grayScale(0%)", pointerEvents:"auto"})
const [squid, setSquid]= useState({ name:"squid", top:1730, bottom:1590, left:830, right:975, filter:"grayScale(0%)", pointerEvents:"auto"})
const [uni, setUni] = useState({name:"uni", top:1375, bottom:1260, left:300, right:400, filter:"grayScale(0%)", pointerEvents:"auto"})

const [score, setScore] = useState({beardie:false, squid:false, uni:false})
const [seconds, setSeconds] = useState<number>(0)
const time = useRef("")
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
      win,
      setWin,
      imgRef
      
     
    }} >
      <Router/>
    </AppContext.Provider>
  )
}

export default App
