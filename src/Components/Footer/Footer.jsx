import React from 'react'
import '../Footer/Footer.css'
const Footer = () => {
  return (
    <>
    <div className="footer container">
    
      
      <div className="footer_wapper ">
            <h3>Web devloper</h3>
            <p>
                I am a web developer with years of experience in creating and managing website.If you will contact and if you will creating a responsive website with react and wordpress send me a messege.I also create machine learing project.
            </p>
            <ul>
                <li><a href="https://www.facebook.com/ferdous.reza.568"><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href="https://www.linkedin.com/in/ferdous-reza-b1913b20a"><i class="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://github.com/FERDOUS631"><i class="fa-brands fa-github"></i></a></li>
            </ul>
        </div>
    </div>
   
    <div className="footer_last">
          <p>@ 2024 Ferdous.All rights reserved</p>
          <ul>
            <li>Terms of services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
    </>
  )
}

export default Footer