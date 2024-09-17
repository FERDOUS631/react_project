import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Service from './Components/Services/Service'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplay from './Components/videoplayer/Videoplay'

// import Hero from '../../'

const App = () => {

  const [playstate,setplatstate]=useState(false)
  return (
    <div>
    <Navbar/>
    <Hero/>
    <div>
      <Title subTitle='My Services' title='Service Provide For My Clients.'/>
      <Service/>
      <About setplatstate={setplatstate}/>
      <Title subTitle='My Project'title='Recent I compelete this project'/>
      <Project/>
      <Title subTitle='Contact me'title='Get in touch'/>
      <Contact/>
      <Footer/>
    </div>
    <Videoplay playstate={playstate} setplatstate={setplatstate}/>
    </div>
  
   
  )
}

export default App
