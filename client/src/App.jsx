import { useState } from 'react'
import './App.css'
import  Router  from './components/Router'
import AppContext from "./components/AppContext"

function App() {
  

  return (
    <AppContext.Provider>
      <Router/>    
    </AppContext.Provider>
  )
}

export default App
