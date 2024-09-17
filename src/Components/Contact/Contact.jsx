import React from 'react'
import '../Contact/Contact.css'
import messege_icon from '../../assets/image/messege.png'
import phone_icon from '../../assets/image/phone-call.png'
import mail_icon from '../../assets/image/mail.png'
import location_icon from '../../assets/image/location.png'
import arrow_icon from '../../assets/image/right-arrow.png'
const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1ee06c9f-0260-4621-9b50-edc73316c898");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact container" id='contact'>
        <div className="contact_col">
                <h3>Send me a messege <img src={messege_icon} alt="" /></h3>
                <p>I am a web developer with years of experience in creating and managing website.If you will contact and if you will
                    creating a responsive website with react and wordpress send me a messege.I also create machine learing project.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" />ferdousreza631@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+8801761-108999</li>
                    <li><img src={location_icon} alt="" />Belgachhi,Rajbari/Dhaka</li>
                </ul>
        </div>
        <div className="contact_col">
                <form onSubmit={onSubmit}>
                 <label>Your name</label>
                 <input type="text" name='name' placeholder='Enter your name' required/>
                 <label>E-mail</label>
                 <input type="email" name='email' placeholder='Enter your email' required/>
                 <label>Phone number</label>
                 <input type="tel" name='phone' placeholder='Enter your phone number' required/>
                 <label>Write your messege here</label>
                 <textarea name="message" rows='6' placeholder='Enter your messege'required></textarea>
                 <button type='submit' className='btn dark_btn'>Submit  <img src={arrow_icon} alt="" /></button>
                </form>
                <span>{result}</span>
              
        </div>
    </div>
  )
}

export default Contact