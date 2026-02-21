import React from "react";
import "./Ecommerce.css";

function Ecommerce() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: "$120",
      image: "https://via.placeholder.com/250"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: "$199",
      image: "https://via.placeholder.com/250"
    },
    {
      id: 3,
      name: "Running Shoes",
      price: "$89",
      image: "https://via.placeholder.com/250"
    },
    {
      id: 4,
      name: "Gaming Keyboard",
      price: "$150",
      image: "https://via.placeholder.com/250"
    }
  ];

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">WhatIfMart</h2>
        <ul className="nav-links">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="cart-btn">Cart 🛒</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div>
          <h1>Make Your Own Style</h1>
          <p>Trendy products at the best prices</p>
          <button className="primary-btn">Shop Now</button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <button className="secondary-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 WhatIfMart. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Ecommerce;