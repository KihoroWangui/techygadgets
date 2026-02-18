import React from "react";
import "./Features.css";

import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="feature-card">
        <img src={img1} alt="Browse Products" />
        <h3>Browse Gadgets</h3>
        <p>Explore our wide range of smart tech gadgets.</p>
      </div>

      <div className="feature-card">
        <img src={img2} alt="Add to Cart" />
        <h3>Add to Cart</h3>
        <p>Select your favorite gadgets and add them to your cart.</p>
      </div>

      <div className="feature-card">
        <img src={img3} alt="Fast Checkout" />
        <h3>Fast Checkout</h3>
        <p>Enjoy a smooth and secure checkout experience.</p>
      </div>
    </section>
  );
};

export default Features;
