import { useState, useRef } from 'react'
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
const [leaders, setLeaders] = useState([{
  name: 'Supermen',
  seconds: 300,
  time: '5:00',
  _id: '65ccf7ca140d7f5bbda8d859'
},
{
  name: 'Spidermen',
  seconds: 4000,
  time: '66:40',
  _id: '65ccf7ca140d7f5bbda8d85a'
},
{
  name: 'Captain America',
  seconds: 2000,
  time: '33:20',
  _id: '65ccf7ca140d7f5bbda8d85b'
}])



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
      setLeaders
     
    }} >
      <Router/>
    </AppContext.Provider>
  )
}

export default App
