
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import LeaderBoard from "./LeaderBoard"

import "./Home.css"
import Info from './Info'

export const Home:React.FC = () => {
    console.log("hello home")
  return (
    <div className='home-container' >
        <Header/>
        <Info/>
        <Body/>
        <LeaderBoard/>
        <Footer/>
    </div>
  )
}
