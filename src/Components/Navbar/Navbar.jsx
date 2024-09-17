import React, { useEffect, useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/image/logo.png'

const Navbar = () => {
  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) :setSticky(false);
    })
  },[])
    const [mobilemenu,setmobilemenu]=useState(false)
  const toggleMenu =()=>{
       mobilemenu ?setmobilemenu(false):setmobilemenu(true)
  }
  return (
  
    <nav className={`container ${sticky ? 'nav_dark':''}`}>
     
     <a href="#home"> <img src={logo} alt="" className='logo' /></a>
      <ul className={mobilemenu ?'hide_mobile_menu':''}>
         <li onClick={()=>setmobilemenu(false)}><a href="#home">Home</a></li>
          <li onClick={()=>setmobilemenu(false)}><a href="#service">Service</a></li>
          <li onClick={()=>setmobilemenu(false)}><a href="#about">About</a></li>
          <li onClick={()=>setmobilemenu(false)}><a href="#project">Project</a></li>
          <li onClick={()=>setmobilemenu(false)}><button className='btn'><a href="#contact">Contact </a></button></li>
      </ul>
      <span className='menu_icon' onClick={toggleMenu}><i class="fa-solid fa-bars"></i></span>
    </nav>
  )
}

export default Navbar
