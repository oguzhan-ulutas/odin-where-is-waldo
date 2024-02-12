import { useState } from 'react'
import './App.css'

import Router from './Router'
import { AppContext } from './AppContext'

function App() {
  const [cursorPosition, setCursorPosition] = useState<{
    top: number;
    left: number;
}>({top:-1000, left:0})
  

  return (
    <AppContext.Provider value={{
      cursorPosition,
      setCursorPosition
    }} >
      <Router/>
    </AppContext.Provider>
  )
}

export default App
