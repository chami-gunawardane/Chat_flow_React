import React from 'react'
import '../styles/Header.css'
import Frame8 from '../assets/Frame 8.png'
import Rectangle_3 from '../assets/Rectangle 3.png'
import Vector from '../assets/Vector.png'
function Header() {
  return (
    <div className="header-section">
     
    <div >
      <img className="Rectangle3" src={Rectangle_3} />
      <img className="Frame8" src={Frame8}/>

      <div className="header">
        <div className="chat-flow-text">ChatFlow</div>
        <div className="header-home">Home</div>
        <div className="header-pricing">Pricing</div>
        <div className="header-support">Support</div>
        <div className="header-contact-us">Contact Us</div>
        <div class="header-login">Login</div>
        <button className="reg-btn">
          <div className="header-register">Register</div>
        </button>
      </div>

      <div className="heading-text">
        Improve your customer experience with real-time assistance
      </div>
      <div className="body-text">
        Our live chat software helps you connect with your customers instantly, boosting sales and improving customer satisfaction. Try it out today and see the difference it can make for your business.
      </div>

      <button className="btn-get-start">
        Get Started
      </button>

      <button className="action-btn">
        <img className="vector" src={Vector} />
        See in Action
      </button>

    </div>
    </div>
  )
}

export default Header