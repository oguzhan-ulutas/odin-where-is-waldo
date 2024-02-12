import { useState } from 'react'
import './App.css'

import Router from './Router'
import { AppContext } from './AppContext'

function App() {
  const [cursorPosition, setCursorPosition] = useState<{
    top: string;
    left: string;
}>({top:"0px", left:"0px"})
  

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
