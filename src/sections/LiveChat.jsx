import React from 'react'
import '../styles/LiveChat.css'
import image1 from '../assets/image 1.png'

function LiveChat() {
  return (
    <div>
      <section className="live-chat">
    
    <div className="live-main-text">
      Experience the Power of Our Live Chat
    </div>
    <div className="live-body-text">
      See for yourself how our live chat can help you connect with your customers and improve their experience on your website. Check out a screenshot of our live chat in action.
    </div>

    <button className="btn-book-demo">
      Book a demo
    </button>

    <div>
      <img className="image1" src={image1} />
    </div>

    <div className="text-edit">
      <div className="text-container">
        <div className="live-one-text">
          Improving Customer Support
        </div>
        <div className="live-two-text">
          A small e-commerce company implemented a live chat feature on their website and saw an improvement in customer satisfaction and an increase in sales.
        </div>
      </div>
      
      <div className="text-container">
        <div className="live-one-text">
          Boosting Sales
        </div>
        <div className="live-two-text">
          A small e-commerce company implemented a live chat feature on their website and saw an improvement in customer satisfaction and an increase in sales.        </div>
      </div>
    </div>
    
  </section>
    </div>
  )
}

export default LiveChat