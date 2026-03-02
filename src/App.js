import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Hero from "./hero";
import Features from "./features";
import Footer from "./footer";
import Products from "./products";
import Auth from "./auth";
function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
            </>
          }
        />
        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;