import React from 'react';
import '../components/Home.css';
import people from "../assets/people.svg";
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import there from "../assets/there.svg";
import four from "../assets/four.svg";
import futbolka from "../assets/futbolka.svg";
import futbolk from "../assets/futbolk.svg";
import shortik from "../assets/shortik.svg";
import shim from "../assets/shim.svg";
import Casual from "../assets/Casual.svg";
import Formal from "../assets/Formal.svg";
import Party from "../assets/Party.svg";
import Gym from "../assets/Gym.svg";
import Frame from "../assets/Frame.svg";

const Home = () => {
  return (
    <div>
      <div className="top-bar">
        <div>Sign up and get 20% off your first order. <a href="#">Sign Up Now</a></div>
        <div className="close-btn">&times;</div>
      </div>

      <nav className="navbar">
        <div className="logo">SHOP.CO</div>
        <ul className="nav-links">
            <li><a href="#">Shop</a></li>
            <li><a href="#">On Sale</a></li>
            <li><a href="#">New Arrivals</a></li>
            <li><a href="#">Brands</a></li>
        </ul>
        <div className="search-cart">
            <input type="text" placeholder="Search for products..." />
            <div className="icons">
                <span className="icon">🛒</span>
                <span className="icon">👤</span>
            </div>
        </div>
      </nav>

      <div class="container">
        <div class="content">
            <div class="title">
                FIND CLOTHES THAT MATCHES YOUR STYLE
            </div>
            <div class="description">
                Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </div>
            <a href="#" class="shop-button">Shop Now</a>
            <div class="stats">
                <div class="stat">
                    <div class="stat-title">200+</div>
                    <div class="stat-description">International Brands</div>
                </div>
                <div class="stat">
                    <div class="stat-title">2,000+</div>
                    <div class="stat-description">High-Quality Products</div>
                </div>
                <div class="stat">
                    <div class="stat-title">30,000+</div>
                    <div class="stat-description">Happy Customers</div>
                </div>
            </div>
        </div>
        <div class="image">
        <img src={people} alt=""/>
        </div>
    </div>


    <div class="brands">
        <span class="brand versace">VERSACE</span>
        <span class="brand zara">ZARA</span>
        <span class="brand gucci">GUCCI</span>
        <span class="brand prada">PRADA</span>
        <span class="brand calvin-klein">Calvin Klein</span>
    </div>

    <div class="container-hero">
        <h1 class="title">NEW ARRIVALS</h1>
        <div class="products">
            <div class="product">
            <img src={one} alt="T-shirt with Tape Details"/>
                <p class="product-name">T-shirt with Tape Details</p>
                <p class="rating">⭐️⭐️⭐️⭐️ <span>4.5/5</span></p>
                <p class="price">$120</p>
            </div>
            <div class="product">
            <img src={two} alt="Skinny Fit Jeans"/>
                <p class="product-name">Skinny Fit Jeans</p>
                <p class="rating">⭐️⭐️⭐️ <span>3.5/5</span></p>
                <p class="price"><span class="old-price">$260</span> $240 <span class="discount">-20%</span></p>
            </div>
            <div class="product">
            <img src={there} alt="Checkered Shirt"/>
                <p class="product-name">Checkered Shirt</p>
                <p class="rating">⭐️⭐️⭐️⭐️ <span>4.5/5</span></p>
                <p class="price">$180</p>
            </div>
            <div class="product">
            <img src={four} alt="Sleeve Striped T-shirt"/>
                <p class="product-name">Sleeve Striped T-shirt</p>
                <p class="rating">⭐️⭐️⭐️⭐️ <span>4.5/5</span></p>
                <p class="price"><span class="old-price">$160</span> $130 <span class="discount">-30%</span></p>
            </div>
        </div>
        <button class="view-all">View All</button>
    </div>


    <div class="container-hero">
        <h1 class="title">TOP SELLING</h1>
        <div class="products">
            <div class="product">
            <img src={futbolka} alt="Vertical Striped Shirt"/>
                <p class="product-name">T-shirt with Tape Details</p>
                <p class="rating">⭐️⭐️⭐️⭐️⭐️ <span>5.0/5</span></p>
                <p class="price"><span class="old-price">$232</span> $212 <span class="discount">-20%</span></p>
            </div>
            <div class="product">
            <img src={futbolk} alt="Courage Graphic T-shirt"/>
                <p class="product-name">Skinny Fit Jeans</p>
                <p class="rating">⭐️⭐️⭐️⭐️ <span>4.0/5</span></p>
                <p class="price">$145</p>
            </div>
            <div class="product">
            <img src={shortik} alt="Loose Fit Bermuda Shorts"/>
                <p class="product-name">Checkered Shirt</p>
                <p class="rating">⭐️⭐️⭐️ <span>3.0/5</span></p>
                <p class="price">$180</p>
            </div>
            <div class="product">
            <img src={shim} alt="Faded Skinny Jeans"/>
                <p class="product-name">Sleeve Striped T-shirt</p>
                <p class="rating">⭐️⭐️⭐️⭐️⭐️ <span>4.5/5</span></p>
                <p class="price">$210</p>
            </div>
        </div>
        <button class="view-all">View All</button>
    </div>


    <div class="contant">
        <h1>BROWSE BY DRESS STYLE</h1>
        <div class="grid">
            <div>
                <img src={Casual} alt=""/>
            </div>
            <div>
                <img src={Formal} alt=""/>
            </div>
            <div>
                <img src={Party} alt=""/>
            </div>
            <div>
                <img src={Gym} alt=""/>
            </div>
        </div>
    </div> 


    <div class="container-test">
    <h2 class="title">OUR HAPPY CUSTOMERS</h2>
    <div class="testimonials">
        <div class="testimonial-card">
            <div class="rating">
                ★★★★★
            </div>
            <div class="name">
                Sarah M. <span class="verified"><img src={Frame} alt=""/></span>
            </div>
            <p class="review">
                "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
            </p>
        </div>
        <div class="testimonial-card">
            <div class="rating">
                ★★★★★
            </div>
            <div class="name">
                Alex K. <span class="verified"><img src={Frame} alt=""/></span>
            </div>
            <p class="review">
                "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
            </p>
        </div>
        <div class="testimonial-card">
            <div class="rating">
                ★★★★★
            </div>
            <div class="name">
                James L. <span class="verified"><img src={Frame} alt=""/></span>
            </div>
            <p class="review">
                "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."
            </p>
        </div>
    </div>
</div>




    </div>
  );
}

export default Home;
