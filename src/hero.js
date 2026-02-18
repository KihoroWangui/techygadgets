import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <h1>Techy Gadgets Kenya</h1>
      <p>Smart gadgets for smarter living</p>
      <button onClick={() => window.location.href = "/products"}>View Products</button>
    </section>
  );
};

export default Hero;
