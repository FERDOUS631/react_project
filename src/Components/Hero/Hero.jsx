import React from 'react'
import '../Hero/Hero.css'
import {useTypewriter,Cursor} from 'react-simple-typewriter'
import Arrow from '../../assets/image/right-arrow.png'
const Hero = () => {
    const [typeEffect]=useTypewriter({
        words:['UI/UX Designer specializing in Shopify & Webflow.','I am machine learning engineer','I also wordpress devloper and expert'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:40,
    })
  return (
    <div className='hero container' id='home'>
        <div className="hero_text">
            <h1>Hello , My Name is <span>Ferdous Reza</span></h1>
            <p>{typeEffect}</p>
            <p>I want to introduce myself and my skills in a way that is clear, concise, and catches the reader's attention.
                 I am a web developer with years of experience in creating and managing websites</p>
            <a href="#about"> <button className="btn">About more<img src={Arrow} alt=""/></button> </a>
        </div>
    </div>
  )
}

export default Hero