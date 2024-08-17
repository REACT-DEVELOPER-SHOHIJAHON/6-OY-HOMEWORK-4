import React from 'react'
import "../components/About.css";
const About = () => {
  return (

    <div className="subscription-container">
    <div className="subscription-text">
        <p>STAY UP TO DATE ABOUT OUR LATEST OFFERS</p>
    </div>
    <div className="subscription-form">
        <input type="email" placeholder="Enter your email address" />
        <button>Subscribe to Newsletter</button>
    </div>
</div>

  )
}

export default About