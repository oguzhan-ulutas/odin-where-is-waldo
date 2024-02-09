
import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Body from './Body'

export const Home:React.FC = () => {
  return (
    <div className='home-container' >
        <Header/>
        <Body/>
        <Footer/>
    </div>
  )
}
