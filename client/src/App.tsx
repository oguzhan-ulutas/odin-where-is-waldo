import { useState } from 'react'
import './App.css'

import Router from './Router'
import { AppContext } from './AppContext'

function App() {
  

  return (
    <AppContext.Provider value={{}} >
      <Router/>
    </AppContext.Provider>
  )
}

export default App
