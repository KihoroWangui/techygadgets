import React from "react";
import "./Products.css";

const products = [
  { id: 1, name: "Baby Clothes", price: 1200, image: "images/1.png" },
  { id: 2, name: "Baby Shoes", price: 1500, image: "images/2.png" },
  { id: 3, name: "Baby Blanket", price: 1800, image: "images/3.png" },
  { id: 4, name: "Feeding Bottle", price: 1100, image: "images/4.png" },
  { id: 5, name: "Baby Toys", price: 1300, image: "images/5.png" },
  { id: 6, name: "Baby Diapers", price: 1600, image: "images/6.png" },
  { id: 7, name: "Baby Lotion", price: 1100, image: "images/7.png" },
  { id: 8, name: "Baby Carrier", price: 2000, image: "images/8.png" },
  { id: 9, name: "Baby Hat", price: 1100, image: "images/9.png" },
  { id: 10, name: "Baby Socks", price: 1000, image: "images/10.png" },
  { id: 11, name: "Baby Bibs", price: 1200, image: "images/11.png" },
  { id: 12, name: "Baby Bath Set", price: 1500, image: "images/12.png" },
];

function Products() {
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(p => p.id === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  return (
    <main>
      <h1>Our Products</h1>
      <div className="products-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">KSh {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;