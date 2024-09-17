import React from 'react'
import '../Services/Service.css'
import ux from '../../assets/image/ux.png'
import web from '../../assets/image/software-developer.png'
import seo from '../../assets/image/seo.png'
const Service = () => {
  return (
    
    <div className='services container'id='service'>
        <div className="service">
            <img src={ux} alt="" />
            <h2>UI/UX Design</h2>
            <div>
            <li>Landing Pages</li>
            <li>User Flow</li>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Mobile App Design</li>
            </div>
        </div>
        <div className="service  service_middle">
            <img src={web} alt="" />
            <h2>Development</h2>
            <div>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Animation</li>
            <li>WordPress</li>
            <li>React</li>
            </div>
        </div>
        <div className="service">
            <img src={seo} alt="" />
            
            <h2>SEO Marketing</h2>
            <div>
            <li>White Hat SEO</li>
            <li>Black Hat SEO</li>
            <li>Grey Hat SEO</li>
            <li>Negative SEO</li>
            <li>On-Page SEO</li>
            </div>
        </div>
    </div>

  )
}

export default Service