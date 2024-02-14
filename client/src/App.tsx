import { useState, useRef } from 'react'
import './App.css'

import Router from './Router'
import { AppContext } from './AppContext'

interface Suspect {
  name:string;
  top: number;
  bottom:number;
  left: number;
  right:number;
  filter:string;
  pointerEvents:string;
}

function App() {
  const [cursorPosition, setCursorPosition] = useState<{
    top: number;
    left: number;
}>({top:-1000, left:0})
const selectionDiv = useRef<HTMLDivElement>(null)

// Add and subtract 35px of the suspects location
const [beardie, setBeardie ] = useState({name:"beardie", top:1149, bottom:1079, left:639, right:709, filter:"grayScale(0%)", pointerEvents:"auto"})
const [squid, setSquid]= useState({ name:"squid", top:1578, bottom:1508, left:932, right:1002, filter:"grayScale(0%)", pointerEvents:"auto"})
const [uni, setUni] = useState({name:"uni", top:1235, bottom:1165, left:351, right:421, filter:"grayScale(0%)", pointerEvents:"auto"})

const [score, setScore] = useState({beardie:false, squid:false, uni:false})


  

  return (
    <AppContext.Provider value={{
      cursorPosition,
      setCursorPosition,
      selectionDiv,
      beardie,
      setBeardie,
      squid,
      setSquid,
      uni,
      setUni,
      score,
      setScore,
     
    }} >
      <Router/>
    </AppContext.Provider>
  )
}

export default App
