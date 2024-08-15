import React from 'react'
import '../styles/Business.css'
import Frame from '../assets/Frame.png'

function Business() {
  return (
    <div className="business">
    <div className="business-main-text">
      Affordable Plans for Any Business
    </div>

    <div className="business-sub-text">
      Our pricing plans are designed to be affordable for businesses of all sizes. From our "Starter" plan to our "Enterprise" option, we have a plan that will fit your budget and meet your live chat needs.
    </div>

    <div className="final-card">
          {/* Card 1  */}
          <div class="card">
              <div className="starter">STARTER</div>
              <div className="starter-price">
                  <p>$9.99/month</p>
              </div>
              <div className="horizontal-line"></div>
              <div className="starter-body">
                  <div className="tool">
                      <img className="kit" src={Frame}/>
                      <p className="toolkit">Real-time chat</p>
                  </div>
                  <div className="tool">
                      <img className="kit" src={Frame}/>
                      <p className="toolkit">Customization options</p>
                  </div>
                  <div className="tool">
                      <img className="kit" src={Frame}/>
                      <p className="toolkit">File sharing</p>
                  </div>
                  <div className="tool">
                      <img className="kit" src={Frame}/>
                      <p className="toolkit">Visitor tracking</p>
                  </div>
                  <button className="starter-choose">Choose</button>
              </div>
          </div>
      
          {/* Card 2 */}
          <div className="card">
              <div className="professional">PROFESSIONAL</div>
              <div className="professional-price">
                  <p>$29.99/month</p>
              </div>
              <div className="horizontal-line"></div>
              <div className="starter-body">
                  <div className="tool">
                      <img className="kit" src={Frame}/>
                      <p className="toolkit">All features in the "Starter" plan</p>
                  </div>
                  <div className="tool">
                      <img className="kit" src={Frame}/>
                      <p className="toolkit">Mobile App</p>
                  </div>
                  <div className="tool">
                      <img className="kit"src={Frame}/>
                      <p className="toolkit">Integration with other tolls</p>
                  </div>
                  <div className="tool">
                      <img className="kit" src={Frame}/>
                      <p className="toolkit">Multilingual support</p>
                  </div>
                  <button className="professional-choose">Choose</button>
              </div>
          </div>
      
          {/* Card 3 */}
          <div className="card">
              <div className="enterprise">ENTERPRISE</div>
              <div className="enterprise-price">
                  <p>$99.99/month</p>
              </div>
              <div className="horizontal-line"></div>
              <div className="starter-body">
                  <div className="tool">
                      <img className="kit" src={Frame} />
                      <p className="toolkit">All features in "Professional" plan</p>
                  </div>
                  <div className="tool">
                      <img className="kit" src={Frame} />
                      <p className="toolkit">Dedicated account manager</p>
                  </div>
                  <div className="tool">
                      <img className="kit" src={Frame} />
                      <p className="toolkit">Premium support</p>
                  </div>
                  <div className="tool">
                      <img className="kit" src={Frame} />
                      <p className="toolkit">Custom integration options</p>
                  </div>
                  <button className="enterprise-choose">Choose</button>
              </div>
          </div>
  </div>
  </div>
    
  )
}

export default Business