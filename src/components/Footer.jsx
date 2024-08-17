import React from 'react'
import "../components/Footer.css";
import Visa from "../assets/Visa.svg";
import Badge from "../assets/Badge.svg";
import Paypal from "../assets/Paypal.svg";
import Pay from "../assets/Pay.svg";
import googlepay from "../assets/googlepay.svg";
const Footer = () => {
  return (
    <footer className="new-footer">
    <div className="new-footer-content">
        <p>Shop.co © 2000-2023. All Rights Reserved</p>
        <div className="new-payment-methods">
            <img src={Visa} alt="Visa" />
            <img src={Badge} alt="MasterCard" />
            <img src={Paypal} alt="PayPal" />
            <img src={Pay} alt="Apple Pay" />
            <img src={googlepay} alt="Google Pay" />
        </div>
    </div>
</footer>

  )
}

export default Footer