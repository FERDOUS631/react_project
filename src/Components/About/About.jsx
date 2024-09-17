import React from 'react'
import '../About/About.css'
import about_img from '../../assets/image/my_img.jpg'
import play_icon from '../../assets/image/play.png'
const About = ({setplatstate}) => {
  return (
    <div className="about container"id='about'>
         <div className="about_left">
             <img src={about_img} alt="" className='my_img' />
             <img src={play_icon} alt="" className='play_icon' onClick={()=>{setplatstate(true)}}/>
         </div>
          <div className="about_right">
            <h3>About us</h3>
            <h2>My name is Ferdous Reza</h2>
            <p>I want to introduce myself and my skills in a way that is clear, concise, and catches the reader's attention. I am a web developer with years of experience in creating and managing website</p>
            <p>I am proficient in creating custom websites tailored to unique client requirements. I'm well-versed in multiple languages, such as HTML, CSS, JavaScript, and PHP, enabling me to code innovative features and customizations, making each project distinct.</p>

          </div>
    </div>
  )
}

export default About