
import React, { useContext, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'
import LeaderBoard from "./LeaderBoard"

import "./Home.css"
import Info from './Info'
import { AppContext } from '../AppContext'
import WinPopUp from './WinPopUp'

export const Home:React.FC = () => {
   const {
    leaders,
    setLeaders,
    baseUrl
   } = useContext(AppContext)
   
   

   // Fetch leader board data on load
   useEffect(()=>{
    fetch(baseUrl)
    .then((res) => {
      if (res.status >= 400) {
        throw new Error("server error");
      }
      return res.json();
    })
    .then((res)=>{
      setLeaders(res.leaderBoard)
    })
    .catch((err)=>{
      console.log("Fetch error in home", err)
    })
   }, [])
  return (
    <div className='home-container' >
        <Header/>
        <Info/>
        <Body/>
        <LeaderBoard/>
        <Footer/>
        <WinPopUp/>
    </div>
  )
}
