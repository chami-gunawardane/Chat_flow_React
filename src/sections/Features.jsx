import React from 'react'
import '../styles/Features.css'
import Frame_1 from '../assets/Frame 1.png'
import Frame_2 from '../assets/Frame 2.png'
import Frame_3 from '../assets/Frame 3.png'
import Frame_4 from '../assets/Frame 4.png'
import Frame_5 from '../assets/Frame 5.png'
import Frame_6 from '../assets/Frame 6.png'

function Features() {
  return (
    <div>
      <section className="feature-section">
    <div className="feature-text-main">
      Powerful Features to Enhance Your Live Chat Experience
    </div>

    <div className="feature-text-body">
      Our live chat product is packed with features to help you connect with your customers and provide them with the support they need.
    </div>

    <div className="features">

      <div>
        <img src={Frame_1} />
        <div className="name-feature">
          Real-time chat
        </div>
        <div className="info-feature">
          Our live chat feature allows users to communicate with website visitors in real-time through a chat window. This enables users to provide immediate support and assistance to their customers, improving their experience on the website.
        </div>
      </div>
      <div>
        <img src={Frame_2} />
        <div className="name-feature">
          Customization options
        </div>
        <div className="info-feature">
          Our live chat product offers a range of customization options to allow users to tailor the appearance of the chat window to match their website's branding. Users can choose from a variety of color schemes and chat bubble designs to create a cohesive look and feel.        </div>
      </div>
      <div>
        <img src={Frame_3} />
        <div className="name-feature">
          Vision Tracking
        </div>
        <div className="info-feature">
          Our live chat product offers a range of customization options to allow users to tailor the appearance of the chat window to match their website's branding. Users can choose from a variety of color schemes and chat bubble designs to create a cohesive look and feel.        </div>
      </div>
      <div>
        <img src={Frame_4} />
        <div className="name-feature">
          Automated chat responses
        </div>
        <div className="info-feature">
          Our live chat product allows users to set up automated responses to common questions or queries. This can help users handle frequently asked questions more efficiently and free up time to focus on more complex or specific issues
        </div>
      </div>
      <div>
        <img src={Frame_5} />
        <div className="name-feature">
          Mobile app
        </div>
        <div className="info-feature">
          Our live chat product includes a mobile app, allowing users to access and manage their live chat service on the go. This makes it easy for users to stay connected with their customers and provide support no matter where they are.        </div>
      </div>
      <div>
        <img src={Frame_6} />
        <div className="name-feature">
          Integration with other tools
        </div>
        <div className="info-feature">
          Our live chat product can be integrated with other tools that users may be using, such as a customer relationship management (CRM) system. This allows users to manage their customer interactions and data from a single platform.        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Features