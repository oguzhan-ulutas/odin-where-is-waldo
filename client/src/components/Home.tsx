
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

import "./Home.css"
import Info from './Info'

export const Home:React.FC = () => {
  return (
    <div className='home-container' >
        <Header/>
        <Info/>
        <Body/>
        <Footer/>
    </div>
  )
}
