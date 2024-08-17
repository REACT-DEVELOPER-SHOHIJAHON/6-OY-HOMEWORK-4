import React from 'react'
import "../components/STAY.css";
import twitter from "../assets/twitter.svg";
import simple from "../assets/simple.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
const STAY = () => {
  return (
    
        <div class="footer-container">
            <div class="footer-col">
                <h2>SHOP.CO</h2>
                <p>We have clothes that suit your style and which you're proud to wear. From women to men.</p>
                <div className="footer-social">
                <img src={twitter} alt=""/>
                <img src={simple} alt=""/>
                <img src={instagram} alt=""/>
                <img src={github} alt=""/>
                </div>
            </div>
            <div className="footer-col">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">Career</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h3>Help</h3>
                <ul>
                    <li><a href="#">Customer Support</a></li>
                    <li><a href="#">Delivery Details</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h3>FAQ</h3>
                <ul>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Manage Deliveries</a></li>
                    <li><a href="#">Orders</a></li>
                    <li><a href="#">Payments</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">Free eBooks</a></li>
                    <li><a href="#">Development Tutorial</a></li>
                    <li><a href="#">How-to Blog</a></li>
                    <li><a href="#">Youtube Playlist</a></li>
                </ul>
            </div>
        </div>
    
  )
}

export default STAY