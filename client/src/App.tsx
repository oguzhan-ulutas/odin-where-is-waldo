import { useState, useRef } from 'react'
import './App.css'

import Router from './Router'
import { AppContext } from './AppContext'

function App() {
  const [cursorPosition, setCursorPosition] = useState<{
    top: number;
    left: number;
}>({top:-1000, left:0})
const selectionDiv = useRef<HTMLDivElement>(null)

// Add and subtract 35px of the suspects location
const beardieLocation = useRef<{
  name:string;
  top: number;
  bottom:number;
  left: number;
  right:number;
}>({name:"beardie", top:1149, bottom:1079, left:639, right:709})
const squidLocation = useRef<{
  name:string;
  top: number;
  bottom:number;
  left: number;
  right:number;
}>({ name:"squid", top:1578, bottom:1508, left:932, right:1002})
const uniLocation = useRef<{
  name:string;
  top: number;
  bottom:number;
  left: number;
  right:number;
}>({name:"uni", top:1235, bottom:1165, left:351, right:421})

const [score, setScore] = useState({beardie:false, squid:false, uni:false})
  

  return (
    <AppContext.Provider value={{
      cursorPosition,
      setCursorPosition,
      selectionDiv,
      beardieLocation,
      squidLocation,
      uniLocation,
      score,
      setScore
    }} >
      <Router/>
    </AppContext.Provider>
  )
}

export default App
